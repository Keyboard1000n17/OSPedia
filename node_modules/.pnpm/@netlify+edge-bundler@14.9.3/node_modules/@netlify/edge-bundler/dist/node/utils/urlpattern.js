import { URLPattern } from 'urlpattern-polyfill';
export const getRegexpFromURLPatternPath = (path) => {
    const pattern = new URLPattern({ pathname: path });
    return pattern.regexp.pathname.source;
};
