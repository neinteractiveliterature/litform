import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{r as g}from"./index-Ban83id2.js";import{X as S}from"./index-D11W-lyx.js";function D(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var C={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var y;function E(){return y||(y=1,function(e){(function(){var a={}.hasOwnProperty;function r(){for(var t="",n=0;n<arguments.length;n++){var c=arguments[n];c&&(t=s(t,o(c)))}return t}function o(t){if(typeof t=="string"||typeof t=="number")return t;if(typeof t!="object")return"";if(Array.isArray(t))return r.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var n="";for(var c in t)a.call(t,c)&&t[c]&&(n=s(n,c));return n}function s(t,n){return n?t?t+" "+n:t+n:t}e.exports?(r.default=r,e.exports=r):window.classNames=r})()}(C)),C.exports}var R=E();const N=D(R);function F(e){const{className:a,inputClassName:r,label:o,onChange:s,onCheckedChange:t,type:n,...c}=e,d=g.useId(),m=s||(t?p=>{t(p.target.checked)}:()=>{});return l.jsx("div",{className:N("form-check",a),children:l.jsxs("label",{className:"form-check-label",htmlFor:d,children:[l.jsx("input",{className:N("form-check-input",r),id:d,onChange:m,type:n??"checkbox",...c})," ",o]})})}function U(e){const a=e.multiple?"checkbox":"radio",r=s=>{e.onChange&&(e.multiple?s.target.checked?e.onChange([...e.value||[],s.target.value]):e.onChange((e.value||[]).filter(t=>t!==s.target.value)):e.onChange(s.target.value))},o=e.choices.map(({label:s,value:t,disabled:n=!1},c)=>l.jsx(F,{name:e.name||"",type:a,className:e.choiceClassName,inputClassName:e.inputClassName,label:s,value:t,checked:e.multiple?(e.value||[]).includes(t):e.value===t,onChange:r,disabled:e.disabled||n},c));return l.jsx("div",{className:e.containerClassName,children:o})}function T({children:e}){return e?l.jsx("small",{className:"form-text text-muted",children:e}):l.jsx(l.Fragment,{})}function K({caption:e,helpText:a,invalidFeedback:r,...o}){return l.jsxs("fieldset",{className:"mb-3",children:[l.jsx("legend",{className:"col-form-label",children:e}),l.jsx(U,{...o}),l.jsx(T,{children:a}),r&&l.jsx("div",{className:"invalid-feedback",children:r})]})}function I(e){const{label:a,helpText:r,wrapperDivClassName:o,labelClassName:s,invalidFeedback:t,...n}=e;return[{label:a,helpText:r,wrapperDivClassName:o,labelClassName:s,invalidFeedback:t},n]}function O({children:e,label:a,helpText:r,wrapperDivClassName:o,labelClassName:s,invalidFeedback:t}){const n=g.useId();return l.jsxs("div",{className:o??"mb-3",children:[l.jsx("label",{htmlFor:n,className:s??"form-label",children:a}),e(n),l.jsx(T,{children:r}),t&&l.jsx("div",{className:"invalid-feedback",children:t})]})}function v(e){const a=r=>{const[o,s]=I(r);return l.jsx(O,{...o,children:t=>l.jsx(e,{...s,id:t})})};return a.displayName=`FormGroupWithLabelWrapper<${e.displayName??"UnknownInputComponent"}>`,a}function P(e){const{onTextChange:a,...r}=e;return{onTextChange:a,inputAttributes:r}}function V(e){const{onTextChange:a,inputAttributes:r}=P(e);return l.jsx("input",{onChange:o=>{a&&a(o.target.value)},...r,className:e.className??"form-control",type:e.type??"text"})}const Q=v(V);function X(e){const{onValueChange:a,...r}=e;return{onValueChange:a,selectAttributes:r}}function L(e){const{onValueChange:a,selectAttributes:r}=X(e),o=s=>{a&&a(s.target.value)};return l.jsx("select",{...r,className:e.className??"form-select",onChange:o})}const Y=v(L);function M(e){const{onTextChange:a,...r}=e;return{onTextChange:a,textareaAttributes:r}}function _(e){const{name:a}=e,r=g.useId(),{onTextChange:o,textareaAttributes:s}=M(e);return l.jsx("textarea",{className:"form-control",id:r,name:a,onChange:t=>{o&&o(t.target.value)},...s})}const B=v(_);var w,j;function z(){return j||(j=1,w=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var a=document.activeElement,r=[],o=0;o<e.rangeCount;o++)r.push(e.getRangeAt(o));switch(a.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":a.blur();break;default:a=null;break}return e.removeAllRanges(),function(){e.type==="Caret"&&e.removeAllRanges(),e.rangeCount||r.forEach(function(s){e.addRange(s)}),a&&a.focus()}}),w}var b,k;function G(){if(k)return b;k=1;var e=z(),a={"text/plain":"Text","text/html":"Url",default:"Text"},r="Copy to clipboard: #{key}, Enter";function o(t){var n=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return t.replace(/#{\s*key\s*}/g,n)}function s(t,n){var c,d,m,p,f,i,h=!1;n||(n={}),c=n.debug||!1;try{m=e(),p=document.createRange(),f=document.getSelection(),i=document.createElement("span"),i.textContent=t,i.ariaHidden="true",i.style.all="unset",i.style.position="fixed",i.style.top=0,i.style.clip="rect(0, 0, 0, 0)",i.style.whiteSpace="pre",i.style.webkitUserSelect="text",i.style.MozUserSelect="text",i.style.msUserSelect="text",i.style.userSelect="text",i.addEventListener("copy",function(u){if(u.stopPropagation(),n.format)if(u.preventDefault(),typeof u.clipboardData>"u"){c&&console.warn("unable to use e.clipboardData"),c&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var x=a[n.format]||a.default;window.clipboardData.setData(x,t)}else u.clipboardData.clearData(),u.clipboardData.setData(n.format,t);n.onCopy&&(u.preventDefault(),n.onCopy(u.clipboardData))}),document.body.appendChild(i),p.selectNodeContents(i),f.addRange(p);var A=document.execCommand("copy");if(!A)throw new Error("copy command was unsuccessful");h=!0}catch(u){c&&console.error("unable to copy using execCommand: ",u),c&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(n.format||"text",t),n.onCopy&&n.onCopy(window.clipboardData),h=!0}catch(x){c&&console.error("unable to copy using clipboardData: ",x),c&&console.error("falling back to prompt"),d=o("message"in n?n.message:r),window.prompt(d,t)}}finally{f&&(typeof f.removeRange=="function"?f.removeRange(p):f.removeAllRanges()),i&&document.body.removeChild(i),m()}return h}return b=s,b}var H=G();const W=D(H);function Z({text:e,format:a,copiedProps:r,defaultText:o,copiedText:s,iconSet:t,...n}){const[c,d]=g.useState(!1),m=()=>{c||(d(!0),window.setTimeout(()=>{d(!1)},2e3))};return l.jsxs("button",{...n,...c?r||{}:{},onClick:()=>{W(e,{format:a})&&m()},children:[l.jsx("i",{className:S("copy",t)})," ",c?s||"Copied!":o||"Copy to clipboard"]})}export{U as G,K as M,Z as c,Q as n,B as o,F as q,Y as r};
