import { Language, LanguageSupport, LRLanguage } from '@codemirror/language';
export declare const liquidLanguage: LRLanguage;
export type LiquidLanguageConfig = {
    baseLanguage?: Language | null;
};
export declare function liquid(config?: LiquidLanguageConfig): LanguageSupport;
