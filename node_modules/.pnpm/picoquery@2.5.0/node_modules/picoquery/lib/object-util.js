import { defaultOptions } from './shared.js';
import { encodeString } from './string-util.js';
function isPrototypeKey(value) {
    return (value === '__proto__' || value === 'constructor' || value === 'prototype');
}
export function getDeepObject(obj, key, nextKey, forceObject, forceArray) {
    if (isPrototypeKey(key))
        return obj;
    const currObj = obj[key];
    if (typeof currObj === 'object' && currObj !== null) {
        return currObj;
    }
    // Check if the key is not a number, if it is a number, an array must be used
    if (!forceObject &&
        (forceArray ||
            typeof nextKey === 'number' ||
            (typeof nextKey === 'string' &&
                nextKey * 0 === 0 &&
                nextKey.indexOf('.') === -1))) {
        return (obj[key] = []);
    }
    return (obj[key] = {});
}
const MAX_DEPTH = 20;
const strBracketPair = '[]';
const strBracketLeft = '[';
const strBracketRight = ']';
const strDot = '.';
export function stringifyObject(obj, options, depth = 0, parentKey, isProbableArray) {
    const { nestingSyntax = defaultOptions.nestingSyntax, arrayRepeat = defaultOptions.arrayRepeat, arrayRepeatSyntax = defaultOptions.arrayRepeatSyntax, nesting = defaultOptions.nesting, delimiter = defaultOptions.delimiter, valueSerializer = defaultOptions.valueSerializer, shouldSerializeObject = defaultOptions.shouldSerializeObject } = options;
    const strDelimiter = typeof delimiter === 'number' ? String.fromCharCode(delimiter) : delimiter;
    const useArrayRepeatKey = isProbableArray === true && arrayRepeat;
    const shouldUseDot = nestingSyntax === 'dot' || (nestingSyntax === 'js' && !isProbableArray);
    if (depth > MAX_DEPTH) {
        return '';
    }
    let result = '';
    let firstKey = true;
    let valueIsProbableArray = false;
    for (const key in obj) {
        const value = obj[key];
        if (value === undefined) {
            continue;
        }
        let path;
        if (parentKey) {
            path = parentKey;
            if (useArrayRepeatKey) {
                if (arrayRepeatSyntax === 'bracket') {
                    path += strBracketPair;
                }
            }
            else if (shouldUseDot) {
                path += strDot;
                path += key;
            }
            else {
                path += strBracketLeft;
                path += key;
                path += strBracketRight;
            }
        }
        else {
            path = key;
        }
        if (!firstKey) {
            result += strDelimiter;
        }
        if (typeof value === 'object' &&
            value !== null &&
            !shouldSerializeObject(value)) {
            valueIsProbableArray = value.pop !== undefined;
            if (nesting || (arrayRepeat && valueIsProbableArray)) {
                result += stringifyObject(value, options, depth + 1, path, valueIsProbableArray);
            }
        }
        else {
            result += encodeString(path);
            result += '=';
            result += valueSerializer(value, key);
        }
        if (firstKey) {
            firstKey = false;
        }
    }
    return result;
}
