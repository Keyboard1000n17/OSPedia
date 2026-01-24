export class HTTPError extends Error {
    constructor(response: any);
    stack: string | undefined;
    status: any;
}
export class TextHTTPError extends HTTPError {
    constructor(response: any, data: any);
    data: any;
}
export class JSONHTTPError extends HTTPError {
    constructor(response: any, json: any);
    json: any;
}
export function parseResponse(response: any): Promise<any>;
export function getFetchError(error: any, url: any, opts: any): any;
