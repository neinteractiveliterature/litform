import { ReactNode, HTMLAttributes } from 'react';
import useUniqueId from './useUniqueId';
import useDebouncedState from './useDebouncedState';
import { getIconClassName, LitformIconSetIdentifier } from './IconSets';

export type SearchInputProps = {
  value?: string;
  onChange: (value: string) => void;
  label: ReactNode;
  wait?: number;
  name?: string;
  inputProps?: HTMLAttributes<HTMLInputElement>;
  inputGroupProps?: HTMLAttributes<HTMLDivElement>;
  iconSet?: LitformIconSetIdentifier;
};

function SearchInput({
  value,
  onChange,
  wait,
  name,
  label,
  inputProps,
  inputGroupProps,
  iconSet,
}: SearchInputProps): JSX.Element {
  const [transientValue, setTransientValue] = useDebouncedState(value ?? '', onChange, wait ?? 100);
  const inputId = useUniqueId(`${name || 'search'}-`);

  return (
    <div>
      <label htmlFor={inputId} className="form-label visually-hidden">
        {label}
      </label>
      <div className="input-group" {...(inputGroupProps || {})}>
        <input
          id={inputId}
          type="search"
          className="form-control search-input-control"
          style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
          value={transientValue ?? ''}
          name={name}
          onChange={(event) => setTransientValue(event.target.value)}
          {...(inputProps || {})}
        />
        <span className="input-group-text search-input-addon">
          <i className={getIconClassName('search', iconSet)} />
        </span>
      </div>
    </div>
  );
}

export default SearchInput;
