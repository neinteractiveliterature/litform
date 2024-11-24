import { ReactNode, HTMLAttributes } from '../.yarn/cache/react-npm-18.3.1-af38f3c1ae-261137d3f3.zip/node_modules/react';
import { LitformIconSetIdentifier } from './IconSets';
export type SearchInputProps = {
    value?: string;
    onChange: (value: string) => void;
    label: ReactNode | ReactNode[];
    wait?: number;
    name?: string;
    inputProps?: HTMLAttributes<HTMLInputElement>;
    inputGroupProps?: HTMLAttributes<HTMLDivElement>;
    iconSet?: LitformIconSetIdentifier;
};
declare function SearchInput({ value, onChange, wait, name, label, inputProps, inputGroupProps, iconSet, }: SearchInputProps): JSX.Element;
export default SearchInput;
