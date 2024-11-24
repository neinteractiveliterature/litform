import{j as e}from"./jsx-runtime-OAISXtky.js";import{C as h}from"./ChoiceSet-o8n3usne.js";import{H as y}from"./HelpText-DdXOOL8t.js";import"./index-qVDZzPEr.js";import"./BootstrapFormCheckbox-844sjaYI.js";import"./index-CMirXMpG.js";function t({caption:n,helpText:m,invalidFeedback:i,...f}){return e.jsxs("fieldset",{className:"mb-3",children:[e.jsx("legend",{className:"col-form-label",children:n}),e.jsx(h,{...f}),e.jsx(y,{children:m}),i&&e.jsx("div",{className:"invalid-feedback",children:i})]})}try{t.displayName="MultipleChoiceInput",t.__docgenInfo={description:"",displayName:"MultipleChoiceInput",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | string[] | null | undefined"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"((value: string | null) => unknown) | ((value: string[] | null) => unknown)"}},multiple:{defaultValue:null,description:"",name:"multiple",required:!1,type:{name:"boolean | undefined"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string | undefined"}},choices:{defaultValue:null,description:"",name:"choices",required:!0,type:{name:"readonly ChoiceSetChoice[]"}},containerClassName:{defaultValue:null,description:"",name:"containerClassName",required:!1,type:{name:"string | undefined"}},choiceClassName:{defaultValue:null,description:"",name:"choiceClassName",required:!1,type:{name:"string | undefined"}},inputClassName:{defaultValue:null,description:"",name:"inputClassName",required:!1,type:{name:"string | undefined"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean | undefined"}},caption:{defaultValue:null,description:"",name:"caption",required:!0,type:{name:"ReactNode | ReactNode[]"}},helpText:{defaultValue:null,description:"",name:"helpText",required:!1,type:{name:"ReactNode | ReactNode[]"}},invalidFeedback:{defaultValue:null,description:`if present, the invalid field feedback that will render with the element.  Typically
for Bootstrap form controls, the form element must have 'is-invalid' in its class name
for this to appear.`,name:"invalidFeedback",required:!1,type:{name:"ReactNode | ReactNode[]"}}}}}catch{}const q={title:"Forms/MultipleChoiceInput",component:t,argTypes:{},parameters:{docs:{description:{component:"A `<ChoiceSet>` wrapped in a `<fieldset>` tag with a legend."}}}},p=n=>e.jsx(t,{...n}),a=p.bind({});a.args={caption:"Pick an ice cream flavor",choices:[{value:"chocolate",label:"Chocolate"},{value:"vanilla",label:"Vanilla"},{value:"strawberry",label:"Strawberry"}],value:"strawberry"};const l=p.bind({});l.args={caption:"Pick as many ice cream flavors as you like",multiple:!0,choices:[{value:"chocolate",label:"Chocolate"},{value:"vanilla",label:"Vanilla"},{value:"strawberry",label:"Strawberry"}],value:["chocolate","strawberry"]};var r,o,s;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:"args => <MultipleChoiceInput {...args} />",...(s=(o=a.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var u,c,d;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:"args => <MultipleChoiceInput {...args} />",...(d=(c=l.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const x=["SingleChoice","MultipleChoice"];export{l as MultipleChoice,a as SingleChoice,x as __namedExportsOrder,q as default};
