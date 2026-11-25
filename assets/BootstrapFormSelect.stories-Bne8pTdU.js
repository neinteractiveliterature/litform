import{j as o}from"./jsx-runtime-u17CrQMm.js";import{r as a}from"./index-o2NkaGta.js";import"./index-BfMjcxIm.js";import"./index-BPS6o5gV.js";const c={title:"Forms/BootstrapFormSelect",component:a,argTypes:{label:{control:"text"},hideLabel:{control:"boolean"},helpText:{control:"text"},invalidFeedback:{control:"text"}},parameters:{docs:{description:{component:"A `<select>` tag and a matching `<label>`, styled for Bootstrap.  All normal\n          properties of `<select>` except `onChange` are supported, so you can pass `value={...}`,\n          `className={...}`, etc.  To listen for changes, use `onValueChange`."}}}},r=s=>o.jsxs(a,{...s,children:[o.jsx("option",{value:"1",children:"One"}),o.jsx("option",{value:"2",children:"Two"}),o.jsx("option",{value:"3",children:"Three"}),o.jsx("option",{value:"4",children:"Four"})]}),e=r.bind({});e.args={label:"Bubblegum, bubblegum, in a dish.  How many pieces do you wish?"};const t=r.bind({});t.args={label:"Please do NOT pick a number.",className:"form-control is-invalid",invalidFeedback:"I said don't pick a number!  What is so hard about this."};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => <BootstrapFormSelect {...args}>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
    <option value="4">Four</option>
  </BootstrapFormSelect>`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => <BootstrapFormSelect {...args}>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
    <option value="4">Four</option>
  </BootstrapFormSelect>`,...t.parameters?.docs?.source}}};const m=["Basic","Invalid"];export{e as Basic,t as Invalid,m as __namedExportsOrder,c as default};
