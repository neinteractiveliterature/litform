import escapeRegExp from 'lodash/escapeRegExp.js';

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

export function normalizeTitle(title: string): string {
  return title
    .normalize('NFD') // not exactly unaccent but will make the diacritics separate chars
    .replace(/[^0-9a-z ]/gi, '')
    .trim()
    .replace(/^(the|a|an) /i, '')
    .replace(/ /g, '');
}

export function titleSort<T>(list: T[], transform?: (item: T) => string): T[] {
  const effectiveTransform = transform ?? ((e) => String(e));
  return sortByLocaleString(list, (element) => normalizeTitle(effectiveTransform(element)));
}

export function findCommonArrayPrefix<T>(a: T[], b: T[]): T[] {
  let i = 0;
  const prefix: T[] = [];

  while (i < a.length && i < b.length) {
    if (a[i] !== b[i]) {
      break;
    }

    prefix.push(a[i]);
    i += 1;
  }

  return prefix;
}

export function findCommonStringPrefix(a: string, b: string, delimiter = ''): string {
  const aArray = a.split(delimiter);
  const bArray = b.split(delimiter);

  return findCommonArrayPrefix(aArray, bArray).join(delimiter);
}

export function findCommonStringSuffix(a: string, b: string, delimiter = ''): string {
  const aArray = a.split(delimiter).reverse();
  const bArray = b.split(delimiter).reverse();

  return findCommonArrayPrefix(aArray, bArray).reverse().join(delimiter);
}

export function removeCommonStringMiddle(a: string, b: string, delimiter = ''): [string, string] {
  const prefix = findCommonStringPrefix(a, b, delimiter);
  const suffix = findCommonStringSuffix(a, b, delimiter);
  const prefixRegExp = new RegExp(`^${escapeRegExp(prefix)}`);
  const suffixRegExp = new RegExp(`${escapeRegExp(suffix)}$`);

  return [a.replace(suffixRegExp, '').trim(), b.replace(prefixRegExp, '').trim()];
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
