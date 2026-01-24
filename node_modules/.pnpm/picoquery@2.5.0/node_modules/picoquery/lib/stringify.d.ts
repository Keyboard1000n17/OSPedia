import { type Options } from './shared.js';
export type StringifyOptions = Partial<Options>;
/**
 * @param {unknown} input Object to stringify
 * @param {StringifyOptions=} options Stringify options
 * @returns {string}
 */
export declare function stringify(input: unknown, options?: StringifyOptions): string;
