import { encodeString } from './string-util.js';
export const defaultValueSerializer = (value) => {
    switch (typeof value) {
        case 'string':
            // Length check is handled inside encodeString function
            return encodeString(value);
        case 'bigint':
        case 'boolean':
            return '' + value;
        case 'number':
            if (Number.isFinite(value)) {
                return value < 1e21 ? '' + value : encodeString('' + value);
            }
            break;
    }
    if (value instanceof Date) {
        return encodeString(value.toISOString());
    }
    return '';
};
export const defaultShouldSerializeObject = (val) => {
    return val instanceof Date;
};
const identityFunc = (v) => v;
export const defaultOptions = {
    nesting: true,
    nestingSyntax: 'dot',
    arrayRepeat: false,
    arrayRepeatSyntax: 'repeat',
    delimiter: 38,
    valueDeserializer: identityFunc,
    valueSerializer: defaultValueSerializer,
    keyDeserializer: identityFunc,
    shouldSerializeObject: defaultShouldSerializeObject
};
