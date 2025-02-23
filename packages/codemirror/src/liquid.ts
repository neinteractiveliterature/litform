import { Language, LanguageSupport, LRLanguage } from '@codemirror/language';
import { parseMixed, ParseWrapper } from '@lezer/common';
import { html } from '@codemirror/lang-html';
import { parser } from './liquidGrammar.generated';
import { styleTags, tags } from '@lezer/highlight';

export const liquidLanguage = LRLanguage.define({
  parser: parser.configure({
    props: [
      styleTags({
        'LiquidTagOpen LiquidTagClose LiquidObjectOpen LiquidObjectClose': tags.bracket,
        LiquidFilterSeparator: tags.operator,
        TagName: tags.function(tags.variableName),
        Identifier: tags.variableName,
      }),
    ],
  }),
});

export type LiquidLanguageConfig = {
  baseLanguage?: Language | null;
};

function getBaseLanguage(config: LiquidLanguageConfig): Language | null {
  if (config.baseLanguage === null) {
    return null;
  } else if (config.baseLanguage) {
    return config.baseLanguage;
  } else {
    const htmlSupport = html({ matchClosingTags: false });
    return htmlSupport.language;
  }
}

export function liquid(config: LiquidLanguageConfig = {}): LanguageSupport {
  const base = getBaseLanguage(config);

  let wrap: ParseWrapper | undefined;
  if (base) {
    wrap = parseMixed((node) => {
      if (!node.type.isTop) return null;
      return {
        parser: base.parser,
        overlay: (node) => node.name == 'Text',
      };
    });
  }

  return new LanguageSupport(
    liquidLanguage.configure({
      wrap,
    }),
  );
}
