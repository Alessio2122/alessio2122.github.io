import { marked } from 'marked';

interface ImageCaptionToken {
  type: 'image-caption';
  raw: string;
  imgSrc: string;
  imgAlt: string;
  tokens: marked.Token[];
}

const imageCaptionExtension: marked.TokenizerExtension & marked.RendererExtension = {
  name: 'image-caption',
  level: 'block',
  start(src: string) {
    return src.match(/!\[.*?\]\(.*?\)\n>/)?.index ?? -1;
  },
  tokenizer(this: marked.Tokenizer, src: string): ImageCaptionToken | undefined {
    const rule = /^!\[([^\]]*)\]\(([^)]+)\)\n((?:>[^\n]+\n?)*)/;
    const match = rule.exec(src);
    if (match) {
      const imgAlt = match[1];
      const imgSrc = match[2];
      const caption = match[3]
        .split('\n')
        .map(line => line.replace(/^>\s?/, ''))
        .join('\n')
        .trim();
      const tokens = this.lexer.blockTokens(caption);
      return {
        type: 'image-caption',
        raw: match[0],
        imgSrc,
        imgAlt,
        tokens,
      };
    }
  },
  renderer(this: marked.Renderer, token: ImageCaptionToken): string {
    const caption = this.parser.parse(token.tokens);
    return `<div class="image-caption-wrapper">`
      + `<img src="${token.imgSrc}" alt="${token.imgAlt}">`
      + `<div class="image-caption">${caption}</div>`
      + `</div>\n`;
  },
};

let applied = false;

export function applyImageCaptionPlugin() {
  if (applied) return;
  marked.use({ extensions: [imageCaptionExtension] });
  applied = true;
}

applyImageCaptionPlugin();
