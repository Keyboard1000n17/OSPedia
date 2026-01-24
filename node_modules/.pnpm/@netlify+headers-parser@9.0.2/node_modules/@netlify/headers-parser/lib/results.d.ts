import type { MinimalHeader } from './types.js';
export declare function splitResults<T>(results: (Error | T)[]): {
    headers: T[];
    errors: Error[];
};
export declare const concatResults: (resultsArrays: {
    headers: MinimalHeader[];
    errors: Error[];
}[]) => {
    headers: MinimalHeader[];
    errors: Error[];
};
