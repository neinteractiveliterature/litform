import { default as React } from '../.yarn/cache/react-npm-18.3.1-af38f3c1ae-261137d3f3.zip/node_modules/react';
export default function useDebouncedState<T>(initialState: T | (() => T), onChange: (value: T) => void, wait?: number): [T, React.Dispatch<React.SetStateAction<T>>];
