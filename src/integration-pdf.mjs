import puppeteer from 'puppeteer';
import { readFileSync, existsSync, mkdirSync, readdirSync, createReadStream, statSync, cpSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'node:http';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function getArticleSlugs(projectRoot) {
    const articlesDir = join(projectRoot, 'src', 'content', 'articles');
    if (!existsSync(articlesDir)) return [];

    return readdirSync(articlesDir)
        .filter(f => f.endsWith('.md'))
        .map(f => f.replace('.md', ''));
}

function getLightCss() {
    const cssPath = join(__dirname, 'styles', 'pdf-light.css');
    return readFileSync(cssPath, 'utf-8');
}

const MIME_TYPES = {
    html: 'text/html',
    css: 'text/css',
    js: 'application/javascript',
    png: 'image/png',
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    woff2: 'font/woff2',
    woff: 'font/woff',
    ttf: 'font/ttf',
    svg: 'image/svg+xml',
    json: 'application/json',
};

function createStaticServer(rootDir) {
    return createServer((req, res) => {
        const url = new URL(req.url, 'http://localhost');
        let pathname = decodeURIComponent(url.pathname);
        let filePath = join(rootDir, pathname === '/' ? '/index.html' : pathname);

        if (existsSync(filePath)) {
            const stat = statSync(filePath);
            if (stat.isDirectory()) {
                filePath = join(filePath, 'index.html');
            }
        }

        if (existsSync(filePath)) {
            const ext = filePath.split('.').pop().toLowerCase();
            res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || 'application/octet-stream' });
            createReadStream(filePath).pipe(res);
        } else {
            res.writeHead(404);
            res.end();
        }
    });
}

async function generatePdfForArticle(browser, baseUrl, slug, outputDir, lightCss) {
    const page = await browser.newPage();

    try {
        const url = `${baseUrl}/articles/${slug}/`;
        await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });

        await page.addStyleTag({ content: lightCss });

        await page.evaluate(() => {
            const hide = (sel) => {
                const el = document.querySelector(sel);
                if (el) el.style.display = 'none';
            };
            hide('.header-content');
            hide('.footer-content');
            hide('.article-navigation');
            hide('.pdf-download-btn');
            document.querySelectorAll('.heading-anchor').forEach(a => a.style.display = 'none');
        });

        const pdfPath = join(outputDir, `${slug}.pdf`);
        await page.pdf({
            path: pdfPath,
            format: 'A4',
            printBackground: true,
            margin: { top: '20mm', bottom: '20mm', left: '15mm', right: '15mm' },
        });

        console.log(`  ✓ ${slug}.pdf`);
    } catch (err) {
        console.error(`  ✗ Error generando ${slug}: ${err.message}`);
    } finally {
        await page.close();
    }
}

async function generateAllPdfs(baseUrl, outputDir, slugs) {
    if (slugs.length === 0) {
        console.log('No se encontraron artículos para generar PDFs.');
        return;
    }

    console.log(`\n📄 Generando ${slugs.length} PDF(s)...`);

    if (!existsSync(outputDir)) {
        mkdirSync(outputDir, { recursive: true });
    }

    const lightCss = getLightCss();
    const browser = await puppeteer.launch({ headless: true });

    for (const slug of slugs) {
        await generatePdfForArticle(browser, baseUrl, slug, outputDir, lightCss);
    }

    await browser.close();
    console.log('✅ PDFs generados correctamente.\n');
}

export default function integrationPdf() {
    const projectRoot = join(__dirname, '..');

    return {
        name: 'astro-pdf-generator',
        hooks: {
            'astro:build:done': async ({ dir, logger }) => {
                logger.info('Generando PDFs de artículos...');

                const distDir = fileURLToPath(dir);
                const outputDir = join(distDir, 'pdfs');
                const slugs = getArticleSlugs(projectRoot);

                const server = createStaticServer(distDir);
                await new Promise(resolve => server.listen(0, resolve));
                const port = server.address().port;

                await generateAllPdfs(`http://localhost:${port}`, outputDir, slugs);

                server.close();

                const publicPdfDir = join(projectRoot, 'public', 'pdfs');
                cpSync(outputDir, publicPdfDir, { recursive: true });
                logger.info('PDFs copiados a public/pdfs/');
            },
        },
    };
}
