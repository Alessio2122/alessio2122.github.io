import { marked } from 'marked';
import { getCalloutIcon } from './callout-icons';

interface CalloutToken {
  type: 'callout';
  raw: string;
  tokens: marked.Token[];
  calloutType: string;
  calloutTitle: string;
  titleTokens: marked.Tokens.Generic[];
  foldable: 'open' | 'closed' | null;
}

const calloutExtension: marked.TokenizerExtension & marked.RendererExtension = {
  name: 'callout',
  level: 'block',
  start(src: string) {
    return src.match(/^> [-+]?\[!/)?.index ?? -1;
  },
  tokenizer(this: marked.Tokenizer, src: string): CalloutToken | undefined {
    const rule = /^(>(?: |>)?([-+])?\[!([\w-]+)\]([+-])?([^\n]*)(?:\n(?:>(?!\s*[-+]?\[!).*)?)*)/;
    const match = rule.exec(src);
    if (match) {
      const raw = match[1];
      const calloutType = match[3].toLowerCase();
      const foldableBefore = match[2];
      const foldableAfter = match[4];
      const calloutTitle = match[5].trim();
      const titleTokens = this.lexer.inlineTokens(calloutTitle);
      const foldableSign = foldableBefore || foldableAfter;
      const foldable: CalloutToken['foldable'] = foldableSign === '+' ? 'open' : foldableSign === '-' ? 'closed' : null;
      const body = raw.replace(/^> ?[-+]?\[!\w+\][+-]?[^\n]*\n?/m, '');
      const content = body.replace(/^> ?/gm, '').trim();
      const tokens = this.lexer.blockTokens(content);
      return {
        type: 'callout',
        raw,
        tokens,
        calloutType,
        calloutTitle,
        titleTokens,
        foldable,
      };
    }
  },
  renderer(this: marked.Renderer, token: CalloutToken): string {
    const { svg, color } = getCalloutIcon(token.calloutType);
    const [r, g, b] = color;
    const content = this.parser.parse(token.tokens);
    const titleHtml = token.calloutTitle
      ? `<span class="callout-title">${this.parser.parseInline(token.titleTokens)}</span>`
      : '';
    const headerHtml = `<div class="callout-header">`
      + `<span class="callout-icon">${svg}</span>`
      + titleHtml
      + `</div>`;
    const isToc = token.calloutType === 'article-content';
    const bodyHtml = (isToc || content) ? `<div class="callout-content">${isToc ? '' : content}</div>` : '';
    const dataToc = isToc ? ' data-toc' : '';
    if (token.foldable) {
      const open = token.foldable === 'open' ? ' open' : '';
      return `<details class="callout callout-${token.calloutType}"${open}${dataToc} style="--callout-color: ${r}, ${g}, ${b};">`
        + `<summary class="callout-header">`
        + `<span class="callout-icon">${svg}</span>`
        + titleHtml
        + `</summary>`
        + bodyHtml
        + `</details>\n`;
    }
    return `<div class="callout callout-${token.calloutType}"${dataToc} style="--callout-color: ${r}, ${g}, ${b};">`
      + headerHtml
      + bodyHtml
      + `</div>\n`;
  },
};

let applied = false;

export function applyCalloutPlugin() {
  if (applied) return;
  marked.use({ extensions: [calloutExtension] });
  applied = true;
}

applyCalloutPlugin();

applyCalloutPlugin();
