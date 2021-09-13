// This file was generated by lezer-generator. You probably shouldn't edit it.
import { LRParser } from '@lezer/lr';
import { eofToken } from './liquidTokens';
export const parser = LRParser.deserialize({
  version: 13,
  states:
    "'UOVOXOOOOQO'#C`'#C`OeQQO'#C_OOQO'#Cn'#CnOjQQO'#CmOOOW'#Cp'#CpOOOW'#C^'#C^OOOW'#Cq'#CqOVOXOOQOOOOOOOQO'#Ca'#CaOuQQO,58yOOQO'#Cc'#CcOOQO'#Cg'#CgO!WQQO'#C{OOQO'#C{'#C{O!rQQO,59XOOOW-E6o-E6oOOQO'#Cr'#CrO!zQQO'#CbO#]QQO1G.eO#eQQO'#CdO#jQQO'#CeOOQO'#Cs'#CsO#oQQO,59gOOQO'#Ci'#CiO#eQQO'#ChOOQO'#Ct'#CtO!rQQO1G.sOOOW'#Co'#CoOOOW1G.s1G.sOOQO-E6p-E6pO#]QQO7+$POOOW'#Cl'#ClOOOW7+$P7+$POOQO,59O,59OO$ZQSO,59POOQO-E6q-E6qOOQO'#Cj'#CjO$`QSO,59SOOQO-E6r-E6rOOOW7+$_7+$_OOOW<<Gk<<GkOOQO1G.k1G.kOjQQO1G.nOOQO'#Ck'#CkOOQO7+$Y7+$Y",
  stateData:
    '$t~OlOS~OjXOmPOwROyTO~OnYO~OY_On[Os]O~OY_On[Os]OtUPvUP~OpeOqfOtoXxoXYoXnoXsoXvoX~OtiOxmO~OY_On[Os]OtUXvUX~OtiOvqO~On[O~OYtO~OpeOqfOtoaxoaYoanoasoavoa~Or{O~Ou|Ot[ax[av[a~OlnYsY~',
  goto: '$VpPPquy}!Q!T!a!aP!e!k!q!w!z!}u#T#Xu#_#e#k#qPPPPPP#{TVOWTUOWTQOWRZQRdZW^SZc|QseRvjTg^hX_SZc|Xk`dlpXj`dlpRwjR!O|QrdRzpTSOWQn`RylQWORaWQcZRocQh^RuhQl`QpdTxlpQ`SSbZcR}|',
  nodeNames:
    '⚠ Template Content LiquidTag LiquidTagOpen TagName TagArgs Identifier PropertyAccessor IndexAccessor Number Bareword LiquidFilter LiquidFilterSeparator FilterName FilterArg LiquidTagClose LiquidObject LiquidObjectOpen LiquidObjectClose Text',
  maxTerm: 41,
  skippedNodes: [0],
  repeatNodeCount: 4,
  tokenData:
    '.|VRyOX#rX^$n^p#rpq$nqu#ruv(Ov!O#r!O!P(t!P!Q#r!Q![)U![!]*U!]!c#r!c!}*h!}#O,d#O#P#r#P#Q,t#Q#R#r#R#S*h#S#T#r#T#o*h#o#p-W#p#q-v#q#r.W#r#y#r#y#z$n#z$f#r$f$g$n$g&j*h&j#BY#r#BY#BZ$n#BZ$IS#r$IS$I_$n$I_$I|#r$I|$JO$n$JO$JT#r$JT$JU$n$JU$KV#r$KV$KW$n$KW&FU#r&FU&FV$n&FV~#rR#yRyPsQO#o$S#o#p$b#p~$SP$XRyPO#o$S#o#p$b#p~$SP$eROu$Sv#o$S#p~$SV$wgyPlUsQOX$SX^&`^p$Spq&`q#o$S#o#p$b#p#y$S#y#z&`#z$f$S$f$g&`$g#BY$S#BY#BZ&`#BZ$IS$S$IS$I_&`$I_$I|$S$I|$JO&`$JO$JT$S$JT$JU&`$JU$KV$S$KV$KW&`$KW&FU$S&FU&FV&`&FV~$SV&ggyPlUOX$SX^&`^p$Spq&`q#o$S#o#p$b#p#y$S#y#z&`#z$f$S$f$g&`$g#BY$S#BY#BZ&`#BZ$IS$S$IS$I_&`$I_$I|$S$I|$JO&`$JO$JT$S$JT$JU&`$JU$KV$S$KV$KW&`$KW&FU$S&FU&FV&`&FV~$SV(TTyPO#o$S#o#p$b#p#q$S#q#r(d#r~$SV(kRvUyPO#o$S#o#p$b#p~$SR({RpQyPO#o$S#o#p$b#p~$SR)_TyPYQsQO!Q$S!Q![)n![#o$S#o#p$b#p~$SR)uTyPYQO!Q$S!Q![)n![#o$S#o#p$b#p~$SV*_RuSyPsQO#o$S#o#p$b#p~$SR*q[yPnQsQO!Q$S!Q![+g![!c$S!c!}+g!}#R$S#R#S+g#S#T$S#T#o+g#o#p$b#p$g$S$g&j+g&j~$SR+n[yPnQO!Q$S!Q![+g![!c$S!c!}+g!}#R$S#R#S+g#S#T$S#T#o+g#o#p$b#p$g$S$g&j+g&j~$SR,kRqQyPO#o$S#o#p$b#p~$SV,}RrSyPsQO#o$S#o#p$b#p~$SR-]TsQOu$Suv-lv#o$S#o#p-q#p~$SP-qOmPP-vOwPV-}RtUyPO#o$S#o#p$b#p~$SV.]TyPO#o$S#o#p$b#p#q$S#q#r.l#r~$SV.sRxUyPO#o$S#o#p$b#p~$S',
  tokenizers: [0, 1, 2, eofToken],
  topRules: { Template: [0, 1] },
  tokenPrec: 168,
});
