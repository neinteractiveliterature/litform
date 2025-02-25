import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./index-CjRLIWKJ.js";import"./index-Ban83id2.js";import"./index-D11W-lyx.js";const v={title:"Forms/BootstrapFormSelect",component:p,argTypes:{label:{control:"text"},hideLabel:{control:"boolean"},helpText:{control:"text"},invalidFeedback:{control:"text"}},parameters:{docs:{description:{component:"A `<select>` tag and a matching `<label>`, styled for Bootstrap.  All normal\n          properties of `<select>` except `onChange` are supported, so you can pass `value={...}`,\n          `className={...}`, etc.  To listen for changes, use `onValueChange`."}}}},c=m=>o.jsxs(p,{...m,children:[o.jsx("option",{value:"1",children:"One"}),o.jsx("option",{value:"2",children:"Two"}),o.jsx("option",{value:"3",children:"Three"}),o.jsx("option",{value:"4",children:"Four"})]}),e=c.bind({});e.args={label:"Bubblegum, bubblegum, in a dish.  How many pieces do you wish?"};const t=c.bind({});t.args={label:"Please do NOT pick a number.",className:"form-control is-invalid",invalidFeedback:"I said don't pick a number!  What is so hard about this."};var a,r,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`args => <BootstrapFormSelect {...args}>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
    <option value="4">Four</option>
  </BootstrapFormSelect>`,...(s=(r=e.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};var n,i,l;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`args => <BootstrapFormSelect {...args}>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
    <option value="4">Four</option>
  </BootstrapFormSelect>`,...(l=(i=t.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const g=["Basic","Invalid"];export{e as Basic,t as Invalid,g as __namedExportsOrder,v as default};
