import fs from 'fs/promises';
import { pathExists } from 'path-exists';
import { splitResults } from './results.js';
// Parse `_headers` file to an array of objects following the same syntax as
// the `headers` property in `netlify.toml`
export const parseFileHeaders = async function (headersFile) {
    const results = await parseHeaders(headersFile);
    const { headers, errors: parseErrors } = splitResults(results);
    const { headers: reducedHeaders, errors: reducedErrors } = headers.reduce(reduceLine, { headers: [], errors: [] });
    const errors = [...parseErrors, ...reducedErrors];
    return { headers: reducedHeaders, errors };
};
const parseHeaders = async function (headersFile) {
    if (!(await pathExists(headersFile))) {
        return [];
    }
    const text = await readHeadersFile(headersFile);
    if (typeof text !== 'string') {
        return [text];
    }
    return text
        .split('\n')
        .map(normalizeLine)
        .filter(hasHeader)
        .map(parseLine)
        .filter((line) => line != null);
};
const readHeadersFile = async function (headersFile) {
    try {
        return await fs.readFile(headersFile, 'utf-8');
    }
    catch {
        return new Error(`Could not read headers file: ${headersFile}`);
    }
};
const normalizeLine = function (line, index) {
    return { line: line.trim(), index };
};
const hasHeader = function ({ line }) {
    return line !== '' && !line.startsWith('#');
};
const parseLine = function ({ line, index }) {
    try {
        return parseHeaderLine(line);
    }
    catch (error) {
        return new Error(`Could not parse header line ${index + 1}:
  ${line}
${error instanceof Error ? error.message : error?.toString()}`);
    }
};
// Parse a single header line
const parseHeaderLine = function (line) {
    if (isPathLine(line)) {
        return { path: line };
    }
    if (!line.includes(HEADER_SEPARATOR)) {
        return;
    }
    const [rawName, ...rawValue] = line.split(HEADER_SEPARATOR);
    const name = rawName?.trim() ?? '';
    if (name === '') {
        throw new Error(`Missing header name`);
    }
    const value = rawValue.join(HEADER_SEPARATOR).trim();
    if (value === '') {
        throw new Error(`Missing header value`);
    }
    return { name, value };
};
const isPathLine = function (line) {
    return line.startsWith('/');
};
const HEADER_SEPARATOR = ':';
const reduceLine = function ({ headers, errors }, parsedHeader) {
    if ('path' in parsedHeader) {
        const { path } = parsedHeader;
        return { headers: [...headers, { for: path, values: {} }], errors };
    }
    const { name, value } = parsedHeader;
    const previousHeaders = headers.slice(0, -1);
    const currentHeader = headers[headers.length - 1];
    if (headers.length === 0 || currentHeader == null) {
        const error = new Error(`Path should come before header "${name}"`);
        return { headers, errors: [...errors, error] };
    }
    const { values } = currentHeader;
    const newValue = values[name] === undefined ? value : `${values[name]}, ${value}`;
    const newHeaders = [...previousHeaders, { ...currentHeader, values: { ...values, [name]: newValue } }];
    return { headers: newHeaders, errors };
};
