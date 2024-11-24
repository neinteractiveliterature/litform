import { Dispatch, SetStateAction, useMemo } from 'react';

export type FunctionalStateUpdater<T> = Dispatch<(prevState: T) => T>;

export function useFunctionalStateUpdater<T>(
  state: T,
  setState: Dispatch<T> | undefined,
): FunctionalStateUpdater<T> {
  const factory: FunctionalStateUpdater<T> = useMemo(
    () => (setState ? (updater: (prevState: T) => T) => setState(updater(state)) : () => {}),
    [state, setState],
  );

  return factory;
}

export type PropertySetter<T, F extends keyof T> = Dispatch<SetStateAction<T[F]>>;

function buildPropertySetter<T, F extends keyof T>(
  setState: FunctionalStateUpdater<T>,
  property: F,
): Dispatch<SetStateAction<T[F]>> {
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

function noop() {}

export function usePropertySetters<T, Properties extends readonly (keyof T)[]>(
  onChange: FunctionalStateUpdater<T> | undefined | null,
  ...properties: Properties
): PropertySetterTuple<T, Properties> {
  const setters = useMemo(
    () => properties.map((property) => buildPropertySetter(onChange ?? noop, property)),
    // We don't want the identity of the setter functions to change on every call to this,
    // but the identiy of the properties array does change because it's a spread.
    // So instead we use the JSON-encoded properties array as a dependency.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(properties), onChange],
  );

  // TODO: when typescript issue 27995 is fixed, we might no longer need the PropertySetterTuple
  // hack above, so we might not need this hack either
  return setters as unknown as PropertySetterTuple<T, Properties>;
}
