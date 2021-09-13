import { ExternalTokenizer } from '@lezer/lr';
import { eof } from './liquidGrammar.generated.terms';

export const eofToken = new ExternalTokenizer((input) => {
  if (input.next < 0) input.acceptToken(eof);
});
