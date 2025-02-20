import{j as F}from"./jsx-runtime-Cf8x2fCZ.js";import{r as $,g as Ee}from"./index-DbAYB8d_.js";import{r as Ae}from"./index-Cu5unxJa.js";import{c as Pe}from"./index-BhvGlQv8.js";import"./index-yBjzXJbu.js";import"./index-IE9ObSwG.js";var _t=function(e){return e.reduce(function(r,n){var a=n[0],o=n[1];return r[a]=o,r},{})},Xt=typeof window<"u"&&window.document&&window.document.createElement?$.useLayoutEffect:$.useEffect,S="top",L="bottom",W="right",D="left",Ct="auto",ct=[S,L,W,D],Z="start",ft="end",je="clippingParents",ue="viewport",at="popper",Be="reference",Gt=ct.reduce(function(t,e){return t.concat([e+"-"+Z,e+"-"+ft])},[]),fe=[].concat(ct,[Ct]).reduce(function(t,e){return t.concat([e,e+"-"+Z,e+"-"+ft])},[]),Re="beforeRead",Se="read",De="afterRead",Ce="beforeMain",Te="main",$e="afterMain",Me="beforeWrite",Le="write",We="afterWrite",ke=[Re,Se,De,Ce,Te,$e,Me,Le,We];function q(t){return t?(t.nodeName||"").toLowerCase():null}function T(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function K(t){var e=T(t).Element;return t instanceof e||t instanceof Element}function M(t){var e=T(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function Tt(t){if(typeof ShadowRoot>"u")return!1;var e=T(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function Ve(t){var e=t.state;Object.keys(e.elements).forEach(function(r){var n=e.styles[r]||{},a=e.attributes[r]||{},o=e.elements[r];!M(o)||!q(o)||(Object.assign(o.style,n),Object.keys(a).forEach(function(u){var s=a[u];s===!1?o.removeAttribute(u):o.setAttribute(u,s===!0?"":s)}))})}function Fe(t){var e=t.state,r={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,r.popper),e.styles=r,e.elements.arrow&&Object.assign(e.elements.arrow.style,r.arrow),function(){Object.keys(e.elements).forEach(function(n){var a=e.elements[n],o=e.attributes[n]||{},u=Object.keys(e.styles.hasOwnProperty(n)?e.styles[n]:r[n]),s=u.reduce(function(i,p){return i[p]="",i},{});!M(a)||!q(a)||(Object.assign(a.style,s),Object.keys(o).forEach(function(i){a.removeAttribute(i)}))})}}const Ne={name:"applyStyles",enabled:!0,phase:"write",fn:Ve,effect:Fe,requires:["computeStyles"]};function N(t){return t.split("-")[0]}var J=Math.max,bt=Math.min,tt=Math.round;function Rt(){var t=navigator.userAgentData;return t!=null&&t.brands&&Array.isArray(t.brands)?t.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function pe(){return!/^((?!chrome|android).)*safari/i.test(Rt())}function et(t,e,r){e===void 0&&(e=!1),r===void 0&&(r=!1);var n=t.getBoundingClientRect(),a=1,o=1;e&&M(t)&&(a=t.offsetWidth>0&&tt(n.width)/t.offsetWidth||1,o=t.offsetHeight>0&&tt(n.height)/t.offsetHeight||1);var u=K(t)?T(t):window,s=u.visualViewport,i=!pe()&&r,p=(n.left+(i&&s?s.offsetLeft:0))/a,f=(n.top+(i&&s?s.offsetTop:0))/o,l=n.width/a,m=n.height/o;return{width:l,height:m,top:f,right:p+l,bottom:f+m,left:p,x:p,y:f}}function $t(t){var e=et(t),r=t.offsetWidth,n=t.offsetHeight;return Math.abs(e.width-r)<=1&&(r=e.width),Math.abs(e.height-n)<=1&&(n=e.height),{x:t.offsetLeft,y:t.offsetTop,width:r,height:n}}function ce(t,e){var r=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(r&&Tt(r)){var n=e;do{if(n&&t.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function H(t){return T(t).getComputedStyle(t)}function qe(t){return["table","td","th"].indexOf(q(t))>=0}function U(t){return((K(t)?t.ownerDocument:t.document)||window.document).documentElement}function Ot(t){return q(t)==="html"?t:t.assignedSlot||t.parentNode||(Tt(t)?t.host:null)||U(t)}function Jt(t){return!M(t)||H(t).position==="fixed"?null:t.offsetParent}function He(t){var e=/firefox/i.test(Rt()),r=/Trident/i.test(Rt());if(r&&M(t)){var n=H(t);if(n.position==="fixed")return null}var a=Ot(t);for(Tt(a)&&(a=a.host);M(a)&&["html","body"].indexOf(q(a))<0;){var o=H(a);if(o.transform!=="none"||o.perspective!=="none"||o.contain==="paint"||["transform","perspective"].indexOf(o.willChange)!==-1||e&&o.willChange==="filter"||e&&o.filter&&o.filter!=="none")return a;a=a.parentNode}return null}function lt(t){for(var e=T(t),r=Jt(t);r&&qe(r)&&H(r).position==="static";)r=Jt(r);return r&&(q(r)==="html"||q(r)==="body"&&H(r).position==="static")?e:r||He(t)||e}function Mt(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function st(t,e,r){return J(t,bt(e,r))}function Ie(t,e,r){var n=st(t,e,r);return n>r?r:n}function le(){return{top:0,right:0,bottom:0,left:0}}function de(t){return Object.assign({},le(),t)}function ve(t,e){return e.reduce(function(r,n){return r[n]=t,r},{})}var Ue=function(e,r){return e=typeof e=="function"?e(Object.assign({},r.rects,{placement:r.placement})):e,de(typeof e!="number"?e:ve(e,ct))};function Ye(t){var e,r=t.state,n=t.name,a=t.options,o=r.elements.arrow,u=r.modifiersData.popperOffsets,s=N(r.placement),i=Mt(s),p=[D,W].indexOf(s)>=0,f=p?"height":"width";if(!(!o||!u)){var l=Ue(a.padding,r),m=$t(o),c=i==="y"?S:D,y=i==="y"?L:W,v=r.rects.reference[f]+r.rects.reference[i]-u[i]-r.rects.popper[f],d=u[i]-r.rects.reference[i],b=lt(o),O=b?i==="y"?b.clientHeight||0:b.clientWidth||0:0,E=v/2-d/2,h=l[c],g=O-m[f]-l[y],w=O/2-m[f]/2+E,x=st(h,w,g),j=i;r.modifiersData[n]=(e={},e[j]=x,e.centerOffset=x-w,e)}}function ze(t){var e=t.state,r=t.options,n=r.element,a=n===void 0?"[data-popper-arrow]":n;a!=null&&(typeof a=="string"&&(a=e.elements.popper.querySelector(a),!a)||ce(e.elements.popper,a)&&(e.elements.arrow=a))}const _e={name:"arrow",enabled:!0,phase:"main",fn:Ye,effect:ze,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function rt(t){return t.split("-")[1]}var Xe={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Ge(t,e){var r=t.x,n=t.y,a=e.devicePixelRatio||1;return{x:tt(r*a)/a||0,y:tt(n*a)/a||0}}function Kt(t){var e,r=t.popper,n=t.popperRect,a=t.placement,o=t.variation,u=t.offsets,s=t.position,i=t.gpuAcceleration,p=t.adaptive,f=t.roundOffsets,l=t.isFixed,m=u.x,c=m===void 0?0:m,y=u.y,v=y===void 0?0:y,d=typeof f=="function"?f({x:c,y:v}):{x:c,y:v};c=d.x,v=d.y;var b=u.hasOwnProperty("x"),O=u.hasOwnProperty("y"),E=D,h=S,g=window;if(p){var w=lt(r),x="clientHeight",j="clientWidth";if(w===T(r)&&(w=U(r),H(w).position!=="static"&&s==="absolute"&&(x="scrollHeight",j="scrollWidth")),w=w,a===S||(a===D||a===W)&&o===ft){h=L;var P=l&&w===g&&g.visualViewport?g.visualViewport.height:w[x];v-=P-n.height,v*=i?1:-1}if(a===D||(a===S||a===L)&&o===ft){E=W;var A=l&&w===g&&g.visualViewport?g.visualViewport.width:w[j];c-=A-n.width,c*=i?1:-1}}var B=Object.assign({position:s},p&&Xe),k=f===!0?Ge({x:c,y:v},T(r)):{x:c,y:v};if(c=k.x,v=k.y,i){var R;return Object.assign({},B,(R={},R[h]=O?"0":"",R[E]=b?"0":"",R.transform=(g.devicePixelRatio||1)<=1?"translate("+c+"px, "+v+"px)":"translate3d("+c+"px, "+v+"px, 0)",R))}return Object.assign({},B,(e={},e[h]=O?v+"px":"",e[E]=b?c+"px":"",e.transform="",e))}function Je(t){var e=t.state,r=t.options,n=r.gpuAcceleration,a=n===void 0?!0:n,o=r.adaptive,u=o===void 0?!0:o,s=r.roundOffsets,i=s===void 0?!0:s,p={placement:N(e.placement),variation:rt(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:a,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,Kt(Object.assign({},p,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:u,roundOffsets:i})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,Kt(Object.assign({},p,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:i})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const Ke={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Je,data:{}};var gt={passive:!0};function Qe(t){var e=t.state,r=t.instance,n=t.options,a=n.scroll,o=a===void 0?!0:a,u=n.resize,s=u===void 0?!0:u,i=T(e.elements.popper),p=[].concat(e.scrollParents.reference,e.scrollParents.popper);return o&&p.forEach(function(f){f.addEventListener("scroll",r.update,gt)}),s&&i.addEventListener("resize",r.update,gt),function(){o&&p.forEach(function(f){f.removeEventListener("scroll",r.update,gt)}),s&&i.removeEventListener("resize",r.update,gt)}}const Ze={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Qe,data:{}};var tr={left:"right",right:"left",bottom:"top",top:"bottom"};function wt(t){return t.replace(/left|right|bottom|top/g,function(e){return tr[e]})}var er={start:"end",end:"start"};function Qt(t){return t.replace(/start|end/g,function(e){return er[e]})}function Lt(t){var e=T(t),r=e.pageXOffset,n=e.pageYOffset;return{scrollLeft:r,scrollTop:n}}function Wt(t){return et(U(t)).left+Lt(t).scrollLeft}function rr(t,e){var r=T(t),n=U(t),a=r.visualViewport,o=n.clientWidth,u=n.clientHeight,s=0,i=0;if(a){o=a.width,u=a.height;var p=pe();(p||!p&&e==="fixed")&&(s=a.offsetLeft,i=a.offsetTop)}return{width:o,height:u,x:s+Wt(t),y:i}}function nr(t){var e,r=U(t),n=Lt(t),a=(e=t.ownerDocument)==null?void 0:e.body,o=J(r.scrollWidth,r.clientWidth,a?a.scrollWidth:0,a?a.clientWidth:0),u=J(r.scrollHeight,r.clientHeight,a?a.scrollHeight:0,a?a.clientHeight:0),s=-n.scrollLeft+Wt(t),i=-n.scrollTop;return H(a||r).direction==="rtl"&&(s+=J(r.clientWidth,a?a.clientWidth:0)-o),{width:o,height:u,x:s,y:i}}function kt(t){var e=H(t),r=e.overflow,n=e.overflowX,a=e.overflowY;return/auto|scroll|overlay|hidden/.test(r+a+n)}function me(t){return["html","body","#document"].indexOf(q(t))>=0?t.ownerDocument.body:M(t)&&kt(t)?t:me(Ot(t))}function ut(t,e){var r;e===void 0&&(e=[]);var n=me(t),a=n===((r=t.ownerDocument)==null?void 0:r.body),o=T(n),u=a?[o].concat(o.visualViewport||[],kt(n)?n:[]):n,s=e.concat(u);return a?s:s.concat(ut(Ot(u)))}function St(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function or(t,e){var r=et(t,!1,e==="fixed");return r.top=r.top+t.clientTop,r.left=r.left+t.clientLeft,r.bottom=r.top+t.clientHeight,r.right=r.left+t.clientWidth,r.width=t.clientWidth,r.height=t.clientHeight,r.x=r.left,r.y=r.top,r}function Zt(t,e,r){return e===ue?St(rr(t,r)):K(e)?or(e,r):St(nr(U(t)))}function ar(t){var e=ut(Ot(t)),r=["absolute","fixed"].indexOf(H(t).position)>=0,n=r&&M(t)?lt(t):t;return K(n)?e.filter(function(a){return K(a)&&ce(a,n)&&q(a)!=="body"}):[]}function ir(t,e,r,n){var a=e==="clippingParents"?ar(t):[].concat(e),o=[].concat(a,[r]),u=o[0],s=o.reduce(function(i,p){var f=Zt(t,p,n);return i.top=J(f.top,i.top),i.right=bt(f.right,i.right),i.bottom=bt(f.bottom,i.bottom),i.left=J(f.left,i.left),i},Zt(t,u,n));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function he(t){var e=t.reference,r=t.element,n=t.placement,a=n?N(n):null,o=n?rt(n):null,u=e.x+e.width/2-r.width/2,s=e.y+e.height/2-r.height/2,i;switch(a){case S:i={x:u,y:e.y-r.height};break;case L:i={x:u,y:e.y+e.height};break;case W:i={x:e.x+e.width,y:s};break;case D:i={x:e.x-r.width,y:s};break;default:i={x:e.x,y:e.y}}var p=a?Mt(a):null;if(p!=null){var f=p==="y"?"height":"width";switch(o){case Z:i[p]=i[p]-(e[f]/2-r[f]/2);break;case ft:i[p]=i[p]+(e[f]/2-r[f]/2);break}}return i}function pt(t,e){e===void 0&&(e={});var r=e,n=r.placement,a=n===void 0?t.placement:n,o=r.strategy,u=o===void 0?t.strategy:o,s=r.boundary,i=s===void 0?je:s,p=r.rootBoundary,f=p===void 0?ue:p,l=r.elementContext,m=l===void 0?at:l,c=r.altBoundary,y=c===void 0?!1:c,v=r.padding,d=v===void 0?0:v,b=de(typeof d!="number"?d:ve(d,ct)),O=m===at?Be:at,E=t.rects.popper,h=t.elements[y?O:m],g=ir(K(h)?h:h.contextElement||U(t.elements.popper),i,f,u),w=et(t.elements.reference),x=he({reference:w,element:E,placement:a}),j=St(Object.assign({},E,x)),P=m===at?j:w,A={top:g.top-P.top+b.top,bottom:P.bottom-g.bottom+b.bottom,left:g.left-P.left+b.left,right:P.right-g.right+b.right},B=t.modifiersData.offset;if(m===at&&B){var k=B[a];Object.keys(A).forEach(function(R){var Y=[W,L].indexOf(R)>=0?1:-1,z=[S,L].indexOf(R)>=0?"y":"x";A[R]+=k[z]*Y})}return A}function sr(t,e){e===void 0&&(e={});var r=e,n=r.placement,a=r.boundary,o=r.rootBoundary,u=r.padding,s=r.flipVariations,i=r.allowedAutoPlacements,p=i===void 0?fe:i,f=rt(n),l=f?s?Gt:Gt.filter(function(y){return rt(y)===f}):ct,m=l.filter(function(y){return p.indexOf(y)>=0});m.length===0&&(m=l);var c=m.reduce(function(y,v){return y[v]=pt(t,{placement:v,boundary:a,rootBoundary:o,padding:u})[N(v)],y},{});return Object.keys(c).sort(function(y,v){return c[y]-c[v]})}function ur(t){if(N(t)===Ct)return[];var e=wt(t);return[Qt(t),e,Qt(e)]}function fr(t){var e=t.state,r=t.options,n=t.name;if(!e.modifiersData[n]._skip){for(var a=r.mainAxis,o=a===void 0?!0:a,u=r.altAxis,s=u===void 0?!0:u,i=r.fallbackPlacements,p=r.padding,f=r.boundary,l=r.rootBoundary,m=r.altBoundary,c=r.flipVariations,y=c===void 0?!0:c,v=r.allowedAutoPlacements,d=e.options.placement,b=N(d),O=b===d,E=i||(O||!y?[wt(d)]:ur(d)),h=[d].concat(E).reduce(function(Q,I){return Q.concat(N(I)===Ct?sr(e,{placement:I,boundary:f,rootBoundary:l,padding:p,flipVariations:y,allowedAutoPlacements:v}):I)},[]),g=e.rects.reference,w=e.rects.popper,x=new Map,j=!0,P=h[0],A=0;A<h.length;A++){var B=h[A],k=N(B),R=rt(B)===Z,Y=[S,L].indexOf(k)>=0,z=Y?"width":"height",C=pt(e,{placement:B,boundary:f,rootBoundary:l,altBoundary:m,padding:p}),V=Y?R?W:D:R?L:S;g[z]>w[z]&&(V=wt(V));var dt=wt(V),_=[];if(o&&_.push(C[k]<=0),s&&_.push(C[V]<=0,C[dt]<=0),_.every(function(Q){return Q})){P=B,j=!1;break}x.set(B,_)}if(j)for(var vt=y?3:1,Et=function(I){var ot=h.find(function(ht){var X=x.get(ht);if(X)return X.slice(0,I).every(function(At){return At})});if(ot)return P=ot,"break"},nt=vt;nt>0;nt--){var mt=Et(nt);if(mt==="break")break}e.placement!==P&&(e.modifiersData[n]._skip=!0,e.placement=P,e.reset=!0)}}const pr={name:"flip",enabled:!0,phase:"main",fn:fr,requiresIfExists:["offset"],data:{_skip:!1}};function te(t,e,r){return r===void 0&&(r={x:0,y:0}),{top:t.top-e.height-r.y,right:t.right-e.width+r.x,bottom:t.bottom-e.height+r.y,left:t.left-e.width-r.x}}function ee(t){return[S,W,L,D].some(function(e){return t[e]>=0})}function cr(t){var e=t.state,r=t.name,n=e.rects.reference,a=e.rects.popper,o=e.modifiersData.preventOverflow,u=pt(e,{elementContext:"reference"}),s=pt(e,{altBoundary:!0}),i=te(u,n),p=te(s,a,o),f=ee(i),l=ee(p);e.modifiersData[r]={referenceClippingOffsets:i,popperEscapeOffsets:p,isReferenceHidden:f,hasPopperEscaped:l},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":f,"data-popper-escaped":l})}const lr={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:cr};function dr(t,e,r){var n=N(t),a=[D,S].indexOf(n)>=0?-1:1,o=typeof r=="function"?r(Object.assign({},e,{placement:t})):r,u=o[0],s=o[1];return u=u||0,s=(s||0)*a,[D,W].indexOf(n)>=0?{x:s,y:u}:{x:u,y:s}}function vr(t){var e=t.state,r=t.options,n=t.name,a=r.offset,o=a===void 0?[0,0]:a,u=fe.reduce(function(f,l){return f[l]=dr(l,e.rects,o),f},{}),s=u[e.placement],i=s.x,p=s.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=i,e.modifiersData.popperOffsets.y+=p),e.modifiersData[n]=u}const mr={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:vr};function hr(t){var e=t.state,r=t.name;e.modifiersData[r]=he({reference:e.rects.reference,element:e.rects.popper,placement:e.placement})}const yr={name:"popperOffsets",enabled:!0,phase:"read",fn:hr,data:{}};function gr(t){return t==="x"?"y":"x"}function wr(t){var e=t.state,r=t.options,n=t.name,a=r.mainAxis,o=a===void 0?!0:a,u=r.altAxis,s=u===void 0?!1:u,i=r.boundary,p=r.rootBoundary,f=r.altBoundary,l=r.padding,m=r.tether,c=m===void 0?!0:m,y=r.tetherOffset,v=y===void 0?0:y,d=pt(e,{boundary:i,rootBoundary:p,padding:l,altBoundary:f}),b=N(e.placement),O=rt(e.placement),E=!O,h=Mt(b),g=gr(h),w=e.modifiersData.popperOffsets,x=e.rects.reference,j=e.rects.popper,P=typeof v=="function"?v(Object.assign({},e.rects,{placement:e.placement})):v,A=typeof P=="number"?{mainAxis:P,altAxis:P}:Object.assign({mainAxis:0,altAxis:0},P),B=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,k={x:0,y:0};if(w){if(o){var R,Y=h==="y"?S:D,z=h==="y"?L:W,C=h==="y"?"height":"width",V=w[h],dt=V+d[Y],_=V-d[z],vt=c?-j[C]/2:0,Et=O===Z?x[C]:j[C],nt=O===Z?-j[C]:-x[C],mt=e.elements.arrow,Q=c&&mt?$t(mt):{width:0,height:0},I=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:le(),ot=I[Y],ht=I[z],X=st(0,x[C],Q[C]),At=E?x[C]/2-vt-X-ot-A.mainAxis:Et-X-ot-A.mainAxis,ye=E?-x[C]/2+vt+X+ht+A.mainAxis:nt+X+ht+A.mainAxis,Pt=e.elements.arrow&&lt(e.elements.arrow),ge=Pt?h==="y"?Pt.clientTop||0:Pt.clientLeft||0:0,Vt=(R=B==null?void 0:B[h])!=null?R:0,we=V+At-Vt-ge,be=V+ye-Vt,Ft=st(c?bt(dt,we):dt,V,c?J(_,be):_);w[h]=Ft,k[h]=Ft-V}if(s){var Nt,xe=h==="x"?S:D,Oe=h==="x"?L:W,G=w[g],yt=g==="y"?"height":"width",qt=G+d[xe],Ht=G-d[Oe],jt=[S,D].indexOf(b)!==-1,It=(Nt=B==null?void 0:B[g])!=null?Nt:0,Ut=jt?qt:G-x[yt]-j[yt]-It+A.altAxis,Yt=jt?G+x[yt]+j[yt]-It-A.altAxis:Ht,zt=c&&jt?Ie(Ut,G,Yt):st(c?Ut:qt,G,c?Yt:Ht);w[g]=zt,k[g]=zt-G}e.modifiersData[n]=k}}const br={name:"preventOverflow",enabled:!0,phase:"main",fn:wr,requiresIfExists:["offset"]};function xr(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function Or(t){return t===T(t)||!M(t)?Lt(t):xr(t)}function Er(t){var e=t.getBoundingClientRect(),r=tt(e.width)/t.offsetWidth||1,n=tt(e.height)/t.offsetHeight||1;return r!==1||n!==1}function Ar(t,e,r){r===void 0&&(r=!1);var n=M(e),a=M(e)&&Er(e),o=U(e),u=et(t,a,r),s={scrollLeft:0,scrollTop:0},i={x:0,y:0};return(n||!n&&!r)&&((q(e)!=="body"||kt(o))&&(s=Or(e)),M(e)?(i=et(e,!0),i.x+=e.clientLeft,i.y+=e.clientTop):o&&(i.x=Wt(o))),{x:u.left+s.scrollLeft-i.x,y:u.top+s.scrollTop-i.y,width:u.width,height:u.height}}function Pr(t){var e=new Map,r=new Set,n=[];t.forEach(function(o){e.set(o.name,o)});function a(o){r.add(o.name);var u=[].concat(o.requires||[],o.requiresIfExists||[]);u.forEach(function(s){if(!r.has(s)){var i=e.get(s);i&&a(i)}}),n.push(o)}return t.forEach(function(o){r.has(o.name)||a(o)}),n}function jr(t){var e=Pr(t);return ke.reduce(function(r,n){return r.concat(e.filter(function(a){return a.phase===n}))},[])}function Br(t){var e;return function(){return e||(e=new Promise(function(r){Promise.resolve().then(function(){e=void 0,r(t())})})),e}}function Rr(t){var e=t.reduce(function(r,n){var a=r[n.name];return r[n.name]=a?Object.assign({},a,n,{options:Object.assign({},a.options,n.options),data:Object.assign({},a.data,n.data)}):n,r},{});return Object.keys(e).map(function(r){return e[r]})}var re={placement:"bottom",modifiers:[],strategy:"absolute"};function ne(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return!e.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function Sr(t){t===void 0&&(t={});var e=t,r=e.defaultModifiers,n=r===void 0?[]:r,a=e.defaultOptions,o=a===void 0?re:a;return function(s,i,p){p===void 0&&(p=o);var f={placement:"bottom",orderedModifiers:[],options:Object.assign({},re,o),modifiersData:{},elements:{reference:s,popper:i},attributes:{},styles:{}},l=[],m=!1,c={state:f,setOptions:function(b){var O=typeof b=="function"?b(f.options):b;v(),f.options=Object.assign({},o,f.options,O),f.scrollParents={reference:K(s)?ut(s):s.contextElement?ut(s.contextElement):[],popper:ut(i)};var E=jr(Rr([].concat(n,f.options.modifiers)));return f.orderedModifiers=E.filter(function(h){return h.enabled}),y(),c.update()},forceUpdate:function(){if(!m){var b=f.elements,O=b.reference,E=b.popper;if(ne(O,E)){f.rects={reference:Ar(O,lt(E),f.options.strategy==="fixed"),popper:$t(E)},f.reset=!1,f.placement=f.options.placement,f.orderedModifiers.forEach(function(A){return f.modifiersData[A.name]=Object.assign({},A.data)});for(var h=0;h<f.orderedModifiers.length;h++){if(f.reset===!0){f.reset=!1,h=-1;continue}var g=f.orderedModifiers[h],w=g.fn,x=g.options,j=x===void 0?{}:x,P=g.name;typeof w=="function"&&(f=w({state:f,options:j,name:P,instance:c})||f)}}}},update:Br(function(){return new Promise(function(d){c.forceUpdate(),d(f)})}),destroy:function(){v(),m=!0}};if(!ne(s,i))return c;c.setOptions(p).then(function(d){!m&&p.onFirstUpdate&&p.onFirstUpdate(d)});function y(){f.orderedModifiers.forEach(function(d){var b=d.name,O=d.options,E=O===void 0?{}:O,h=d.effect;if(typeof h=="function"){var g=h({state:f,name:b,instance:c,options:E}),w=function(){};l.push(g||w)}})}function v(){l.forEach(function(d){return d()}),l=[]}return c}}var Dr=[Ze,yr,Ke,Ne,mr,pr,br,_e,lr],Cr=Sr({defaultModifiers:Dr}),Bt,oe;function Tr(){if(oe)return Bt;oe=1;var t=typeof Element<"u",e=typeof Map=="function",r=typeof Set=="function",n=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function a(o,u){if(o===u)return!0;if(o&&u&&typeof o=="object"&&typeof u=="object"){if(o.constructor!==u.constructor)return!1;var s,i,p;if(Array.isArray(o)){if(s=o.length,s!=u.length)return!1;for(i=s;i--!==0;)if(!a(o[i],u[i]))return!1;return!0}var f;if(e&&o instanceof Map&&u instanceof Map){if(o.size!==u.size)return!1;for(f=o.entries();!(i=f.next()).done;)if(!u.has(i.value[0]))return!1;for(f=o.entries();!(i=f.next()).done;)if(!a(i.value[1],u.get(i.value[0])))return!1;return!0}if(r&&o instanceof Set&&u instanceof Set){if(o.size!==u.size)return!1;for(f=o.entries();!(i=f.next()).done;)if(!u.has(i.value[0]))return!1;return!0}if(n&&ArrayBuffer.isView(o)&&ArrayBuffer.isView(u)){if(s=o.length,s!=u.length)return!1;for(i=s;i--!==0;)if(o[i]!==u[i])return!1;return!0}if(o.constructor===RegExp)return o.source===u.source&&o.flags===u.flags;if(o.valueOf!==Object.prototype.valueOf)return o.valueOf()===u.valueOf();if(o.toString!==Object.prototype.toString)return o.toString()===u.toString();if(p=Object.keys(o),s=p.length,s!==Object.keys(u).length)return!1;for(i=s;i--!==0;)if(!Object.prototype.hasOwnProperty.call(u,p[i]))return!1;if(t&&o instanceof Element)return!1;for(i=s;i--!==0;)if(!((p[i]==="_owner"||p[i]==="__v"||p[i]==="__o")&&o.$$typeof)&&!a(o[p[i]],u[p[i]]))return!1;return!0}return o!==o&&u!==u}return Bt=function(u,s){try{return a(u,s)}catch(i){if((i.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw i}},Bt}var $r=Tr();const Mr=Ee($r);var Lr=[],Wr=function(e,r,n){n===void 0&&(n={});var a=$.useRef(null),o={onFirstUpdate:n.onFirstUpdate,placement:n.placement||"bottom",strategy:n.strategy||"absolute",modifiers:n.modifiers||Lr},u=$.useState({styles:{popper:{position:o.strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),s=u[0],i=u[1],p=$.useMemo(function(){return{name:"updateState",enabled:!0,phase:"write",fn:function(c){var y=c.state,v=Object.keys(y.elements);Ae.flushSync(function(){i({styles:_t(v.map(function(d){return[d,y.styles[d]||{}]})),attributes:_t(v.map(function(d){return[d,y.attributes[d]]}))})})},requires:["computeStyles"]}},[]),f=$.useMemo(function(){var m={onFirstUpdate:o.onFirstUpdate,placement:o.placement,strategy:o.strategy,modifiers:[].concat(o.modifiers,[p,{name:"applyStyles",enabled:!1}])};return Mr(a.current,m)?a.current||m:(a.current=m,m)},[o.onFirstUpdate,o.placement,o.strategy,o.modifiers,p]),l=$.useRef();return Xt(function(){l.current&&l.current.setOptions(f)},[f]),Xt(function(){if(!(e==null||r==null)){var m=n.createPopper||Cr,c=m(e,r,f);return l.current=c,function(){c.destroy(),l.current=null}}},[e,r,n.createPopper]),{state:l.current?l.current.state:null,styles:s.styles,attributes:s.attributes,update:l.current?l.current.update:null,forceUpdate:l.current?l.current.forceUpdate:null}};function kr(t,e,r,n){return Wr(e,t,{placement:"bottom",strategy:"fixed",modifiers:r?[{name:"arrow",options:{element:r}}]:n==null?void 0:n.modifiers,...n})}function Dt({popperRef:t,arrowRef:e,styles:r,visible:n,attributes:a,state:o,children:u}){const s=((o==null?void 0:o.placement)??"").split("-")[0];return F.jsxs("div",{ref:t,style:{...r.popper,...n?{}:{zIndex:-9999}},className:Pe(`tooltip bs-tooltip-${s}`,{show:n,"d-none":!n}),role:"tooltip",...a.popper,children:[F.jsx("div",{className:"tooltip-arrow",ref:e,style:r.arrow}),F.jsx("div",{className:"tooltip-inner",children:u})]})}try{Dt.displayName="Tooltip",Dt.__docgenInfo={description:"",displayName:"Tooltip",props:{styles:{defaultValue:null,description:"",name:"styles",required:!0,type:{name:"{ [key: string]: CSSProperties; }"}},attributes:{defaultValue:null,description:"",name:"attributes",required:!0,type:{name:"{ [key: string]: { [key: string]: string; } | undefined; }"}},state:{defaultValue:null,description:"",name:"state",required:!0,type:{name:"State | null"}},popperRef:{defaultValue:null,description:"",name:"popperRef",required:!0,type:{name:"Ref<HTMLDivElement>"}},arrowRef:{defaultValue:null,description:"",name:"arrowRef",required:!0,type:{name:"Ref<HTMLDivElement>"}},visible:{defaultValue:null,description:"",name:"visible",required:!1,type:{name:"boolean | undefined"}}}}}catch{}function xt({children:t,buttonProps:e,tooltipContent:r}){const[n,a]=$.useState(null),[o,u]=$.useState(null),[s,i]=$.useState(null),[p,f]=$.useState(!1),{styles:l,attributes:m,state:c,update:y}=kr(o,n,s),v=$.useCallback(()=>{f(!0),y&&y()},[y]);return F.jsxs(F.Fragment,{children:[F.jsx("button",{ref:a,type:"button",onFocus:v,onBlur:()=>f(!1),onMouseOver:v,onMouseOut:()=>f(!1),...e,children:t}),F.jsx(Dt,{popperRef:u,arrowRef:i,state:c,attributes:m,styles:l,visible:p,children:r})]})}try{xt.displayName="ButtonWithTooltip",xt.__docgenInfo={description:"",displayName:"ButtonWithTooltip",props:{buttonProps:{defaultValue:null,description:"",name:"buttonProps",required:!0,type:{name:"ButtonHTMLAttributes<HTMLButtonElement>"}},tooltipContent:{defaultValue:null,description:"",name:"tooltipContent",required:!0,type:{name:"ReactNode | ReactNode[]"}}}}}catch{}const Yr={title:"Buttons/ButtonWithTooltip",component:xt,argTypes:{},parameters:{docs:{description:{component:"A `<button>` tag which, when hovered over or focused, will display a tooltip.  You can\n        pass props to the button itself using the `buttonProps` prop, and the content for the tooltip itself\n        using the `tooltipContent` prop."}}}},Vr=t=>F.jsx(xt,{buttonProps:{},tooltipContent:F.jsxs(F.Fragment,{children:["You can put ",F.jsx("strong",{children:"any content you want"})," in the tooltip."]}),...t,children:"Button text"}),it=Vr.bind({});it.args={buttonProps:{className:"btn btn-primary"}};var ae,ie,se;it.parameters={...it.parameters,docs:{...(ae=it.parameters)==null?void 0:ae.docs,source:{originalSource:`args => <ButtonWithTooltip buttonProps={{}} tooltipContent={<>
        You can put <strong>any content you want</strong> in the tooltip.
      </>} {...args}>
    Button text
  </ButtonWithTooltip>`,...(se=(ie=it.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};const zr=["Basic"];export{it as Basic,zr as __namedExportsOrder,Yr as default};
