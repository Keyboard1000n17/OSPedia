import { stringifyObject } from './object-util.js';
/**
 * @param {unknown} input Object to stringify
 * @param {StringifyOptions=} options Stringify options
 * @returns {string}
 */
export function stringify(input, options) {
    if (input === null || typeof input !== 'object') {
        return '';
    }
    const optionsObj = options ?? {};
    return stringifyObject(input, optionsObj);
}
