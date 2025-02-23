import escapeRegExp from 'lodash/escapeRegExp.js';
import { sortByLocaleString } from './ValueUtils';

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
