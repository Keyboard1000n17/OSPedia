import { stringify } from 'yaml';
export const serializeObject = function (object) {
    return stringify(object, { sortMapEntries: true }).trimEnd();
};
