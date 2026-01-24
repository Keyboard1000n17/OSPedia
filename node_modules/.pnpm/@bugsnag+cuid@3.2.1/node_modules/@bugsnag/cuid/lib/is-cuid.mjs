/**
 * Check the provided value is a valid device id
 * @param {unknown} value
 * @returns
 */
export default function isCuid (value) {
    return typeof value === 'string' && (/^c[a-z0-9]{20,32}$/).test(value);
}
