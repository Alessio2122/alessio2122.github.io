import { marked } from 'marked';

function slugify(text: string): string {
  return text
    .replace(/<[^>]*>/g, '')
    .trim()
    .toLowerCase()
    .replace(/[^\wáéíóúñü]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');
}

let applied = false;

export function applyHeadingAnchorPlugin() {
  if (applied) return;
  marked.use({
    renderer: {
      heading(this: marked.Renderer, token: marked.Tokens.Heading) {
        const htmlText = this.parser.parseInline(token.tokens);
        const slug = slugify(htmlText);
        return `<h${token.depth} id="${slug}"><a class="heading-anchor" href="#${slug}" aria-hidden="true">¶</a> ${htmlText}</h${token.depth}>\n`;
      },
    },
  });
  applied = true;
}

applyHeadingAnchorPlugin();
