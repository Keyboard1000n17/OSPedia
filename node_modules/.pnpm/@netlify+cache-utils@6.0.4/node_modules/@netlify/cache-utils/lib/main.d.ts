export { getCacheDir } from './dir.js';
export { list } from './list.js';
export declare const save: (paths: any, ...args: any[]) => Promise<any>;
export declare const restore: (paths: any, ...args: any[]) => Promise<any>;
export declare const remove: (paths: any, ...args: any[]) => Promise<any>;
export declare const has: (paths: any, ...args: any[]) => Promise<any>;
export declare const bindOpts: (opts: any) => {
    save: (paths: any, optsA: any) => Promise<any>;
    restore: (paths: any, optsA: any) => Promise<any>;
    remove: (paths: any, optsA: any) => Promise<any>;
    has: (paths: any, optsA: any) => Promise<any>;
    list: (optsA: any) => Promise<string[]>;
    getCacheDir: (optsA: any) => string;
};
