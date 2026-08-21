import { defineCollection, z } from 'astro:content';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const articlesDir = path.join(__dirname, 'content', 'articles');

const articlesLoader = {
  name: 'articles-loader',
  load: async function({ store }) {
    const files = fs.readdirSync(articlesDir).filter(f => f.endsWith('.md'));

    for (const file of files) {
      const filePath = path.join(articlesDir, file);
      const raw = fs.readFileSync(filePath, 'utf-8');
      const { data, content: body } = matter(raw);

      const id = file.replace('.md', '');
      store.set({ id, data, body });
    }
  }
};

const articles = defineCollection({
  loader: articlesLoader,
  schema: z.object({
    title: z.string(),
    description: z.string(),
    subtitle: z.string().optional(),
    author: z.string().optional(),
    datetime: z.string(),
    date: z.string().optional(),
    img: z.string().optional(),
    category: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

export const collections = { articles };
