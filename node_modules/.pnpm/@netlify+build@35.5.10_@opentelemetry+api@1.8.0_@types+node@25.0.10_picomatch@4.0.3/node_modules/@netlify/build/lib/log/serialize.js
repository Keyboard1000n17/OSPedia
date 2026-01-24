import { stringify } from 'yaml';
export const serializeObject = function (object) {
    return stringify(object, { sortMapEntries: true }).trimEnd();
};
export const serializeArray = function (array) {
    return array.map(addDash).join('\n');
};
const addDash = function (string) {
    return ` - ${string}`;
};
