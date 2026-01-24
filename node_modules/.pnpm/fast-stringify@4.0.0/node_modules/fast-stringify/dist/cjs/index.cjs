'use strict';

/**
 * Consistent reference for no options passed, to avoid garbage.
 */
var DEFAULT_OPTIONS = {};
/**
 * Stringifier that handles circular values.
 */
function stringify(value, _a) {
    var _b = _a === void 0 ? DEFAULT_OPTIONS : _a, indent = _b.indent, replacer = _b.replacer, circularReplacer = _b.circularReplacer, stable = _b.stable, stabilizer = _b.stabilizer;
    var cache = [];
    var keys = [];
    var getStableSorter = stable && stabilizer
        ? function (object) {
            var options = {
                get: function (key) { return object[key]; },
            };
            return function (a, b) {
                return stabilizer({ key: a, value: object[a] }, { key: b, value: object[b] }, options);
            };
        }
        : undefined;
    return JSON.stringify(value, function replace(key, rawValue) {
        var value = rawValue;
        if (typeof value === 'object' && value !== null) {
            if (cache.length) {
                var thisCutoff = cache.indexOf(this) + 1;
                if (thisCutoff === 0) {
                    cache[cache.length] = this;
                }
                else {
                    cache.splice(thisCutoff);
                    keys.splice(thisCutoff);
                }
                keys[keys.length] = key;
                var valueCutoff = cache.indexOf(value) + 1;
                if (valueCutoff > 0) {
                    var referenceKey = keys.slice(0, valueCutoff).join('.') || '.';
                    return circularReplacer
                        ? circularReplacer.call(this, key, value, referenceKey)
                        : '[ref=' + referenceKey + ']';
                }
            }
            else {
                cache[0] = value;
                keys[0] = key;
            }
            if (stable && !Array.isArray(value)) {
                value = Object.keys(value)
                    .sort(getStableSorter === null || getStableSorter === void 0 ? void 0 : getStableSorter(value))
                    .reduce(function (sorted, key) {
                    sorted[key] = value[key];
                    return sorted;
                }, {});
            }
        }
        return replacer ? replacer.call(this, key, value) : value;
    }, indent);
}

exports.stringify = stringify;
//# sourceMappingURL=index.cjs.map
