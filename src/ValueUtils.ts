export function onlyOneIsNull(a: unknown, b: unknown): boolean {
  return (a == null && b != null) || (a != null && b == null);
}

export function chooseAmong<T>(
  values: T[],
  sortFunction: (a: T, b: T) => number,
  allowNull?: boolean,
): T {
  let eligibleValues = values;

  if (!allowNull) {
    eligibleValues = values.filter((value) => value != null);
  }

  return eligibleValues.sort(sortFunction)[0];
}

export function preferNull<T>(sortFunction: (a: T, b: T) => number) {
  return (a: T, b: T): number => {
    if (a == null) {
      return -1;
    }

    if (b == null) {
      return 1;
    }

    return sortFunction(a, b);
  };
}

export function sortByLocaleString<T>(
  list: T[],
  transform: (item: T) => string,
  options: Intl.CollatorOptions = { sensitivity: 'base' },
): T[] {
  return [...list].sort((a, b) => transform(a).localeCompare(transform(b), undefined, options));
}

export function notEmpty<TValue>(value: TValue | null | undefined): value is TValue {
  return value !== null && value !== undefined;
}

export function notFalse<TValue>(value: TValue | false): value is TValue {
  return value !== false;
}

export type UnwrapPromise<T> = T extends PromiseLike<infer ValueType> ? ValueType : T;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type OmitStrict<T, K extends keyof T> = T extends any ? Pick<T, Exclude<keyof T, K>> : never;

// https://stackoverflow.com/questions/46583883/typescript-pick-properties-with-a-defined-type
export type KeysOfType<T, U> = {
  [P in keyof T]: T[P] extends U ? P : never;
}[keyof T];

export function parseIntOrNull(stringValue: string): number | null {
  const intValue = parseInt(stringValue, 10);
  if (Number.isNaN(intValue)) {
    return null;
  }
  return intValue;
}

export function parseFloatOrNull(stringValue: string): number | null {
  const floatValue = parseFloat(stringValue);
  if (Number.isNaN(floatValue)) {
    return null;
  }
  return floatValue;
}
