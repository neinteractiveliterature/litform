import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as i}from"./index-Bzos7ZBg.js";import"./chunk-NUUEMKO5-BWd-YdNm.js";import{ae as s}from"./index-Dbr61uy8.js";import"./index-yBjzXJbu.js";import"./index-DbAYB8d_.js";import"./iframe-C-qxjEz2.js";import"../sb-preview/runtime.js";import"./client-eTzKLywS.js";import"./index-IE9ObSwG.js";import"./index-Cu5unxJa.js";import"./index-Cu4lwwaE.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function n(t){const o={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Forms/Introduction"}),`
`,e.jsx(o.h1,{id:"forms-in-litform",children:"Forms in Litform"}),`
`,e.jsx(o.p,{children:`Litform provides a set of components for building forms using Bootstrap's standard styling. All
of Litform's form components are built for accessibility and sticking with Bootstrap's defaults as
much as possible.`}),`
`,e.jsxs(o.p,{children:["All Litform form components are ",e.jsx(o.em,{children:"controlled"}),`, meaning they expect a value and a change handler to be
passed in (and don't manage their own state for the value of the form element).`]}),`
`,e.jsx(o.h2,{id:"form-groups-with-labels",children:"Form groups (with labels)"}),`
`,e.jsxs(o.p,{children:[`The fundamental building block of form elements in Litform is a form group. This corresponds to the
(now-removed) `,e.jsx(o.code,{children:"form-group"})," class in Bootstrap. A form group includes a wrapper ",e.jsx(o.code,{children:"<div>"}),", a ",e.jsx(o.code,{children:"<label>"}),`,
a form element, and optionally help text and invalid input feedback.`]}),`
`,e.jsxs(o.p,{children:["Litform provides a low-level component called ",e.jsx(o.code,{children:"<FormGroupWithLabel>"}),` that implements this pattern.
As its `,e.jsx(o.code,{children:"children"})," prop, ",e.jsx(o.code,{children:"<FormGroupWithLabel>"}),` expects a render function that accepts a parameter
called `,e.jsx(o.code,{children:"id"}),", which will be a string containing the ",e.jsx(o.code,{children:"id"}),` to use for the form element. This is how
Litform connects the `,e.jsx(o.code,{children:"<label>"})," tag to the form element. The ",e.jsx(o.code,{children:"id"}),` is generated automatically and is
guaranteed to be unique for the page.`]}),`
`,e.jsxs(o.p,{children:["You probably don't need to use ",e.jsx(o.code,{children:"<FormGroupWithLabel>"}),` directly. Instead, use the basic form element
components (described below) that are built on it.`]}),`
`,e.jsx(o.h2,{id:"basic-form-elements",children:"Basic form elements"}),`
`,e.jsx(o.p,{children:"Litform's basic form element components are:"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:"BootstrapFormCheckbox (check boxes and radio buttons)"}),`
`,e.jsx(o.li,{children:"BootstrapFormInput (text, number, email, etc. inputs)"}),`
`,e.jsx(o.li,{children:"BootstrapFormSelect (dropdown selectors)"}),`
`,e.jsx(o.li,{children:"BootstrapFormTextarea (multi-line text areas)"}),`
`]}),`
`,e.jsxs(o.p,{children:[`These correspond roughly to the basic HTML form input tags (with the exception of the fact that
there are separate components for checkbox/radio and text `,e.jsx(o.code,{children:"<input>"}),`s). You can pass in almost any
props that you could use with the underlying HTML tag. The only exception to this is `,e.jsx(o.code,{children:"onChange"}),`.
In order to make these components easier to work with, Litform abstracts away the React change event
and replaces it with a similarly-named prop that takes a more primitive argument:`]}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:["BootstrapFormCheckbox: ",e.jsx(o.code,{children:"onCheckedChange={(checked: boolean) => { ... }}"})]}),`
`,e.jsxs(o.li,{children:["BootstrapFormInput: ",e.jsx(o.code,{children:"onTextChange={(text: string) => { ... }}"})]}),`
`,e.jsxs(o.li,{children:["BootstrapFormSelect: ",e.jsx(o.code,{children:"onValueChange={(value: string) => { ... }}"})]}),`
`,e.jsxs(o.li,{children:["BootstrapFormTextarea: ",e.jsx(o.code,{children:"onTextChange={(text: string) => { ... }}"})]}),`
`]}),`
`,e.jsxs(o.p,{children:["All of these components are built on ",e.jsx(o.code,{children:"<FormGroupWithLabel>"}),", so they expect to receive a ",e.jsx(o.code,{children:"label"}),`
prop and can take `,e.jsx(o.code,{children:"helpText"})," and ",e.jsx(o.code,{children:"invalidFeedback"})," as appropriate."]}),`
`,e.jsx(o.h2,{id:"choicesets-and-multiplechoiceinputs",children:"ChoiceSets and MultipleChoiceInputs"}),`
`,e.jsxs(o.p,{children:[`It's often useful to combine several check boxes or radio buttons into a logical grouping that
represents a single value (or set of values) that can be selected. Litform provides two components
for this: `,e.jsx(o.code,{children:"<ChoiceSet>"})," and ",e.jsx(o.code,{children:"<MultipleChoiceInput>"}),"."]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"<ChoiceSet>"}),` is a lower-level component that simply renders the set of radio buttons or check
boxes. It takes a `,e.jsx(o.code,{children:"choices"})," prop, which is an array of objects with ",e.jsx(o.code,{children:"label"})," and ",e.jsx(o.code,{children:"value"}),` keys.
It takes a `,e.jsx(o.code,{children:"multiple"}),` prop, which defaults to false (which will cause it to render radio
buttons; if `,e.jsx(o.code,{children:"multiple"})," is true then it will render check boxes). It also takes ",e.jsx(o.code,{children:"value"}),` and
`,e.jsx(o.code,{children:"onChange"}),` props that let you treat the choice set as having a single value (a string in the case
of radio buttons, or an array of strings in the case of check boxes).`]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"<MultipleChoiceInput>"})," wraps ",e.jsx(o.code,{children:"<ChoiceSet>"})," in a ",e.jsx(o.code,{children:"<fieldset>"}),` tag with a legend. This is very
nearly equivalent to what `,e.jsx(o.code,{children:"<FormGroupWithLabel>"}),` does, but slightly different because the markup
for doing this accessibly differs.`]}),`
`,e.jsx(o.h2,{id:"codeinput",children:"CodeInput"}),`
`,e.jsxs(o.p,{children:["Litform also ships with a wrapper for CodeMirror 6 called ",e.jsx(o.code,{children:"<CodeInput>"}),`. This is a fairly lightweight
wrapper component that injects CodeMirror into the page. It has a set of companion hooks; the
easiest one to use for most cases is `,e.jsx(o.code,{children:"useStandardCodeMirror"}),`. This hook will automatically
generate a series of CodeMirror extensions that are generally useful for Litform-based apps,
including a syntax highlighting theme that picks up whatever colors are being used by your site's
Bootstrap theme.`]}),`
`,e.jsx(o.p,{children:`CodeMirror 6 is still in pre-release, and this set of components and hooks is very much in flux due
to that.`})]})}function w(t={}){const{wrapper:o}={...i(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(n,{...t})}):n(t)}export{w as default};
