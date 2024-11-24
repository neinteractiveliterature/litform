import { Dispatch, SetStateAction } from '../.yarn/cache/react-npm-18.3.1-af38f3c1ae-261137d3f3.zip/node_modules/react';
export type FunctionalStateUpdater<T> = Dispatch<(prevState: T) => T>;
export declare function useFunctionalStateUpdater<T>(state: T, setState: Dispatch<T> | undefined): FunctionalStateUpdater<T>;
export type PropertySetter<T, F extends keyof T> = Dispatch<SetStateAction<T[F]>>;
type PropertySetterTuple<T, Properties extends readonly (keyof T)[]> = {
    [I in keyof Properties]: Properties[I] extends Properties[number] ? PropertySetter<T, Properties[I]> : never;
};
export declare function usePropertySetters<T, Properties extends readonly (keyof T)[]>(onChange: FunctionalStateUpdater<T> | undefined | null, ...properties: Properties): PropertySetterTuple<T, Properties>;
export {};
