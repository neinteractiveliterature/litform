import { LRParser } from '@lezer/lr';

declare module './liquid.js' {
  declare const parser: LRParser;
}
