export declare function normalizeTitle(title: string): string;
export declare function titleSort<T>(list: T[], transform?: (item: T) => string): T[];
export declare function findCommonArrayPrefix<T>(a: T[], b: T[]): T[];
export declare function findCommonStringPrefix(a: string, b: string, delimiter?: string): string;
export declare function findCommonStringSuffix(a: string, b: string, delimiter?: string): string;
export declare function removeCommonStringMiddle(a: string, b: string, delimiter?: string): [string, string];
