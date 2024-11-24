export declare function onlyOneIsNull(a: unknown, b: unknown): boolean;
export declare function chooseAmong<T>(values: T[], sortFunction: (a: T, b: T) => number, allowNull?: boolean): T;
export declare function preferNull<T>(sortFunction: (a: T, b: T) => number): (a: T, b: T) => number;
export declare function sortByLocaleString<T>(list: T[], transform: (item: T) => string, options?: Intl.CollatorOptions): T[];
export declare function notEmpty<TValue>(value: TValue | null | undefined): value is TValue;
export declare function notFalse<TValue>(value: TValue | false): value is TValue;
export type UnwrapPromise<T> = T extends PromiseLike<infer ValueType> ? ValueType : T;
export type OmitStrict<T, K extends keyof T> = T extends any ? Pick<T, Exclude<keyof T, K>> : never;
export type KeysOfType<T, U> = {
    [P in keyof T]: T[P] extends U ? P : never;
}[keyof T];
export declare function parseIntOrNull(stringValue: string): number | null;
export declare function parseFloatOrNull(stringValue: string): number | null;
