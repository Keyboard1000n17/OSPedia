import isPlainObj from 'is-plain-obj';
import mapObj from 'map-obj';
import { getForRegExp } from './for_regexp.js';
import { splitResults } from './results.js';
export function normalizeHeaders(headers, minimal) {
    if (!Array.isArray(headers)) {
        const error = new TypeError(`Headers must be an array not: ${headers}`);
        // This looks odd but it is correct: it takes an array of `T | Error` and returns `{values: T[]: errors: Error[]}`,
        // thus when given a literal array of type `Error[]` it can't infer `T`, so we explicitly pass in `never` as `T`.
        return splitResults([error]);
    }
    // TODO(serhalp) Workaround for poor TS type narrowing. Remove once on typescript@5.8.
    const results = headers
        .map((header, index) => (minimal ? parseHeader(header, index, true) : parseHeader(header, index, false)))
        .filter((header) => header != null);
    return splitResults(results);
}
function parseHeader(header, index, minimal) {
    if (!isPlainObj(header)) {
        return new TypeError(`Header must be an object not: ${header}`);
    }
    try {
        // TODO(serhalp) Workaround for poor TS type narrowing. Remove once on typescript@5.8.
        return minimal ? parseHeaderObject(header, true) : parseHeaderObject(header, false);
    }
    catch (error) {
        return new Error(`Could not parse header number ${index + 1}:
  ${JSON.stringify(header)}
${error instanceof Error ? error.message : error?.toString()}`);
    }
}
function parseHeaderObject({ for: rawPath, values: rawValues }, minimal) {
    const forPath = normalizePath(rawPath);
    if (rawValues === undefined) {
        return;
    }
    const values = normalizeValues(rawValues);
    if (Object.keys(values).length === 0) {
        return;
    }
    const header = {
        for: forPath,
        values,
    };
    if (minimal) {
        return header;
    }
    return {
        ...header,
        forRegExp: getForRegExp(forPath),
    };
}
// Normalize and validate the `for` field
const normalizePath = function (rawPath) {
    if (rawPath === undefined) {
        throw new TypeError('Missing "for" field');
    }
    if (typeof rawPath !== 'string') {
        throw new TypeError(`"for" must be a string not: ${rawPath}`);
    }
    return rawPath.trim();
};
// Normalize and validate the `values` field
const normalizeValues = function (rawValues) {
    if (!isPlainObj(rawValues)) {
        throw new TypeError(`"values" must be an object not: ${rawValues}`);
    }
    return mapObj(rawValues, normalizeValue);
};
// Normalize and validate each header `values`
const normalizeValue = function (rawKey, rawValue) {
    const key = rawKey.trim();
    if (key === '' || key === 'undefined') {
        throw new Error('Empty header name');
    }
    const value = normalizeRawValue(key, rawValue);
    return [key, value];
};
const normalizeRawValue = function (key, rawValue) {
    if (typeof rawValue === 'string') {
        return normalizeMultipleValues(normalizeStringValue(rawValue));
    }
    if (Array.isArray(rawValue)) {
        return rawValue.map((singleValue, index) => normalizeArrayItemValue(`${key}[${index}]`, singleValue)).join(', ');
    }
    throw new TypeError(`Header "${key}" value must be a string not: ${rawValue}`);
};
// Multiple values can be specified by using whitespaces and commas.
// For example:
//   [[headers]]
//   for = "/*"
//     [headers.values]
// 	   cache-control = '''
// 	   max-age=0,
// 	   no-cache,
// 	   no-store,
// 	   must-revalidate'''
// Is normalized to:
//   [[headers]]
//   for = "/*"
//     [headers.values]
// 	   cache-control = "max-age=0, no-cache, no-store, must-revalidate"
const normalizeMultipleValues = function (value) {
    return value.split(MULTIPLE_VALUES_REGEXP).join(', ');
};
const MULTIPLE_VALUES_REGEXP = /\s*,\s*/g;
const normalizeArrayItemValue = function (key, singleValue) {
    if (typeof singleValue !== 'string') {
        throw new TypeError(`Header "${key}" value must be a string not: ${singleValue}`);
    }
    return normalizeStringValue(singleValue);
};
const normalizeStringValue = function (stringValue) {
    return stringValue.trim();
};
