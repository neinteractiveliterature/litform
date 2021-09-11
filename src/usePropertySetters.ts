import { Dispatch, SetStateAction, useMemo } from 'react';

export type FunctionalStateUpdater<T> = Dispatch<(prevState: T) => T>;

export function useFunctionalStateUpdater<T>(
  state: T,
  setState: Dispatch<T> | undefined,
): FunctionalStateUpdater<T> {
  const factory: FunctionalStateUpdater<T> = useMemo(
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    () => (setState ? (updater: (prevState: T) => T) => setState(updater(state)) : () => {}),
    [state, setState],
  );

  return factory;
}

export type PropertySetter<T, F extends keyof T> = Dispatch<SetStateAction<T[F]>>;

function buildPropertySetter<T, F extends keyof T>(
  setState: FunctionalStateUpdater<T>,
  property: F,
) {
  const calculateNewState = (prevState: T, valueOrUpdater: SetStateAction<T[F]>): T => {
    if (typeof valueOrUpdater === 'function') {
      return {
        ...prevState,
        [property]: (valueOrUpdater as (prevState: T[F]) => T[F])(prevState[property]),
      };
    }

    return { ...prevState, [property]: valueOrUpdater };
  };

  const setProperty = (valueOrUpdater: SetStateAction<T[F]>) => {
    setState((prevState) => calculateNewState(prevState, valueOrUpdater));
  };

  return setProperty;
}

// https://github.com/microsoft/TypeScript/issues/27995#issuecomment-703001862
type PropertySetterTuple<T, Properties extends readonly (keyof T)[]> = {
  [I in keyof Properties]: Properties[I] extends Properties[number]
    ? PropertySetter<T, Properties[I]>
    : never;
};

export function usePropertySetters<T, Properties extends readonly (keyof T)[]>(
  onChange: FunctionalStateUpdater<T> | undefined | null,
  ...properties: Properties
): PropertySetterTuple<T, Properties> {
  const setters = useMemo(
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    () => properties.map((property) => buildPropertySetter(onChange ?? (() => {}), property)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(properties), onChange],
  );

  // TODO: figure out if there is an actual way to do this and make it type check properly
  return setters as unknown as PropertySetterTuple<T, Properties>;
}
