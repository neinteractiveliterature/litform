# Litform — Agent Reference

This file is for AI coding assistants. It covers every public component and hook with the detail needed to use them correctly without reading source.

## Quick pick: which component for which job

| Need                                            | Use                                                                    |
| ----------------------------------------------- | ---------------------------------------------------------------------- |
| Text input                                      | `BootstrapFormInput`                                                   |
| Textarea                                        | `BootstrapFormTextarea`                                                |
| `<select>` dropdown                             | `BootstrapFormSelect`                                                  |
| Single checkbox or radio button                 | `BootstrapFormCheckbox` (requires `type="checkbox"` or `type="radio"`) |
| Yes/No or True/False toggle                     | `BooleanInput`                                                         |
| Group of radio buttons or checkboxes            | `ChoiceSet` or `MultipleChoiceInput`                                   |
| Wrapping any custom control in label + helpText | `FormGroupWithLabel` / `FormGroupWithLabelWrapper` HOC                 |
| Search box with debounce                        | `SearchInput`                                                          |
| Copy-to-clipboard button                        | `CopyToClipboardButton`                                                |
| Small help text block                           | `HelpText`                                                             |
| Confirmation dialog                             | `useConfirm` / `useGraphQLConfirm`                                     |
| Simple alert dialog                             | `useAlert`                                                             |
| Generic open/close modal state                  | `useModal`                                                             |
| Spinner                                         | `LoadingIndicator`                                                     |
| Full-page spinner                               | `PageLoadingIndicator`                                                 |
| Expand/collapse arrow icon                      | `DisclosureTriangle`                                                   |
| Error message                                   | `ErrorDisplay`                                                         |
| React error boundary                            | `ErrorBoundary`                                                        |
| Tabs                                            | `Tabs` / `TabList` + `TabBody` / `useTabs`                             |
| Toast notification                              | `useToast`                                                             |
| CodeMirror editor                               | `CodeInput` / `useStandardCodeMirror`                                  |
| Question-mark help popover                      | `HelpPopover`                                                          |
| Button with tooltip                             | `ButtonWithTooltip`                                                    |

Import everything from `@neinteractiveliterature/litform`.

---

## Form controls

All form controls that use `FormGroupWithLabel` (`BootstrapFormInput`, `BootstrapFormTextarea`, `BootstrapFormSelect`, `MultipleChoiceInput`) share these wrapper props:

| Prop                  | Type        | Notes                                                                          |
| --------------------- | ----------- | ------------------------------------------------------------------------------ |
| `label`               | `ReactNode` | **Required.** Accepts JSX.                                                     |
| `helpText`            | `ReactNode` | Renders below the control in muted text.                                       |
| `wrapperDivClassName` | `string`    | Defaults to `'mb-3'`.                                                          |
| `labelClassName`      | `string`    | Defaults to `'form-label'`.                                                    |
| `invalidFeedback`     | `ReactNode` | Bootstrap invalid-feedback text (control needs `is-invalid` class to show it). |

**`BootstrapFormCheckbox` does NOT use `FormGroupWithLabel`** — it has no `helpText` prop. Put help text in a sibling `<div className="form-text">` if needed.

### BootstrapFormInput

```tsx
<BootstrapFormInput
  label="Name"
  value={name}
  onTextChange={(name) => setName(name)} // simpler than onChange
  helpText="Optional help text"
  type="text" // default; omit unless changing
/>
```

Key props beyond the wrapper props:

- `onTextChange: (text: string) => void` — convenience alternative to `onChange`
- All `InputHTMLAttributes` except `onChange`

### BootstrapFormTextarea

```tsx
<BootstrapFormTextarea
  label="Description"
  value={description}
  onTextChange={setDescription}
  helpText="Markdown supported"
  rows={4}
/>
```

Same props as `BootstrapFormInput` but for `<textarea>`.

### BootstrapFormSelect

```tsx
<BootstrapFormSelect
  label="Status"
  value={status}
  onValueChange={setStatus} // convenience: receives the string value directly
>
  <option value="active">Active</option>
  <option value="inactive">Inactive</option>
</BootstrapFormSelect>
```

- `onValueChange: (value: string) => void` — convenience alternative to `onChange`
- Children are `<option>` elements

### BootstrapFormCheckbox

```tsx
<BootstrapFormCheckbox
  type="checkbox" // REQUIRED — 'checkbox' or 'radio'
  label="Enable feature" // ReactNode
  checked={enabled}
  onCheckedChange={setEnabled} // (value: boolean) => void
/>
```

- `type` is **required** — TypeScript will error without it
- `label` accepts `ReactNode`, so JSX labels like `<><code>scope</code> — description</>` work
- **No `helpText` prop.** Add a sibling `<div className="form-text text-secondary">` if needed.
- All `InputHTMLAttributes<HTMLInputElement>` are forwarded to the `<input>`

### BooleanInput

```tsx
<BooleanInput
  caption="Confidential?" // label/legend text — ReactNode
  value={isConfidential}
  onChange={setIsConfidential}
  trueLabel="Yes" // default: 'Yes'
  falseLabel="No" // default: 'No'
  falseBeforeTrue // swap order
/>
```

Renders as two radio buttons. Use instead of `BootstrapFormCheckbox` when a true/false choice should be explicit to the user (rather than a toggle checkbox).

### ChoiceSet

```tsx
// Single-choice (radio buttons):
<ChoiceSet
  choices={[
    { label: 'Option A', value: 'a' },
    { label: <strong>Option B</strong>, value: 'b' },
    { label: 'Disabled', value: 'c', disabled: true },
  ]}
  value={selected}
  onChange={setSelected}
/>

// Multiple-choice (checkboxes):
<ChoiceSet
  choices={choices}
  value={selectedArray}
  onChange={setSelectedArray}
  multiple                    // REQUIRED for multi-select; changes value type to string[]
/>
```

- `choices` is **required**: `Array<{ label: ReactNode, value: string, disabled?: boolean }>`
- Without `multiple`, `value` is `string | null` and `onChange` receives `string | null`
- With `multiple`, `value` is `string[] | null` and `onChange` receives `string[] | null`

### MultipleChoiceInput

`ChoiceSet` wrapped in a `<fieldset>` with a legend:

```tsx
<MultipleChoiceInput
  caption="Select roles" // fieldset legend — ReactNode, REQUIRED
  choices={roleChoices}
  value={selectedRoles}
  onChange={setSelectedRoles}
  multiple
  helpText="Choose all that apply"
/>
```

---

## Hooks

### usePropertySetters

Creates individual setter functions for properties of an object state, for use with `useState`.

```tsx
const [form, setForm] = useState({ name: '', email: '', active: true });

const [setName, setEmail, setActive] = usePropertySetters(
  setForm, // must be Dispatch<SetStateAction<T>> — from useState
  'name',
  'email',
  'active',
);

// Each setter works like setState for its field:
setName('Alice'); // equivalent to setForm(prev => ({ ...prev, name: 'Alice' }))
setEmail('a@b.com');
setActive(false);
```

**Important:** requires the React `Dispatch<SetStateAction<T>>` signature (from `useState`). If your `onChange` prop has a different signature (e.g. `(value: T) => void`), use inline updaters instead.

### useConfirm / useGraphQLConfirm

```tsx
const confirm = useConfirm();

confirm({
  prompt: 'Are you sure you want to delete this?', // ReactNode
  action: async () => {
    await deleteSomething();
  },
  renderError: (err) => <ErrorDisplay graphQLError={err} />,
});
```

- `useGraphQLConfirm` is identical but auto-formats GraphQL errors in the dialog.
- `action` can be async; the dialog stays open until it resolves/rejects.
- `confirm.visible` is a boolean property on the returned function indicating whether the dialog is open.

### useModal

```tsx
type MyModalState = { id: string; name: string };
const modal = useModal<MyModalState>();

// Open with state:
modal.open({ id: '123', name: 'Alice' });

// In the modal component:
if (!modal.visible) return null;
const { id, name } = modal.state!;

modal.close();
```

### useAlert

```tsx
// Wrap app (once):
<AlertProvider okText="OK">
  <App />
</AlertProvider>;

// In any component:
const alert = useAlert();
alert('Something went wrong.'); // ReactNode
```

### useToast

```tsx
// Wrap app (once):
<ToastProvider formatTimeAgo={(d) => `${d.seconds}s ago`}>
  <App />
</ToastProvider>;

// In any component:
const addToast = useToast();
addToast({ title: 'Saved', body: 'Changes saved successfully.' });
```

---

## Utility components

### CopyToClipboardButton

```tsx
<CopyToClipboardButton
  text={secret}
  defaultText="Copy" // default: 'Copy to clipboard'
  copiedText="Copied!" // shown for ~2s after click
  copiedProps={{ className: 'btn btn-success' }} // props while copied
  iconSet="bootstrap-icons"
  className="btn btn-outline-secondary"
/>
```

### SearchInput

```tsx
<SearchInput
  label="Search" // visually hidden; required for a11y
  value={query}
  onChange={setQuery}
  wait={200} // debounce ms; default: 100
  iconSet="bootstrap-icons"
/>
```

### HelpText

```tsx
<HelpText>Renders as small muted text, or nothing if no children.</HelpText>
```

### HelpPopover

```tsx
<HelpPopover>Help text shown in a popover when the ? icon is clicked.</HelpPopover>
```

### ErrorDisplay

```tsx
<ErrorDisplay graphQLError={error} />         // for Error objects
<ErrorDisplay stringError="Something broke" /> // for strings
```

### LoadingIndicator / PageLoadingIndicator

```tsx
<LoadingIndicator size={3} />           // size 1–9, default 5
<PageLoadingIndicator visible={loading} />
```

### DisclosureTriangle

```tsx
<DisclosureTriangle expanded={isOpen} /> // renders ▼ or ▶
```

---

## FormGroupWithLabel / FormGroupWithLabelWrapper

Use these when you need the standard label + helpText layout around a custom control.

```tsx
// Direct usage:
<FormGroupWithLabel label="Custom field" helpText="Some help">
  {(id) => <MyCustomInput id={id} value={value} onChange={onChange} />}
</FormGroupWithLabel>;

// HOC usage — wraps a component so it accepts label/helpText as props:
const MyWrappedInput = FormGroupWithLabelWrapper(MyCustomInput);
<MyWrappedInput label="Custom field" helpText="Some help" value={value} onChange={onChange} />;
```

---

## CodeMirror

```tsx
// High-level (recommended):
<CodeInput
  editorRef={editorRef}
  value={code}
  lines={8}
  getPreviewContent={async (v) => <pre>{v}</pre>} // omit if no preview tab
/>;

// Lower-level:
const [refCallback, editorView] = useStandardCodeMirror({
  value: code,
  onChange: setCode,
  extensions: [javascript()], // any CodeMirror extensions
  lines: 10,
  theme: bootstrapLightTheme, // default theme; override if needed
});

<div ref={refCallback} />;
```

---

## Key gotchas summary

- **`BootstrapFormCheckbox` requires `type`** — `type="checkbox"` or `type="radio"` must be explicit.
- **`BootstrapFormCheckbox` has no `helpText`** — add help text manually as a sibling element.
- **`label` is `ReactNode` everywhere** — JSX is fine in any `label` or `caption` prop.
- **`usePropertySetters` needs `Dispatch<SetStateAction<T>>`** — won't work with a plain `(value: T) => void` handler.
- **`@neinteractiveliterature/litform-apollo` is deprecated** — don't use `LoadQueryWrapper` or the Apollo link helpers in new code.
- **`ChoiceSet` with `multiple` has a different `value`/`onChange` type** — `string[]` vs `string | null`. TypeScript enforces this via discriminated union.
