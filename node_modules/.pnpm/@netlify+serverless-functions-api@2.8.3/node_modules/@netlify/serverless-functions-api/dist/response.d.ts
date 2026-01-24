import { CookieStore } from './cookie_store.js';
import { Flags } from './flags.js';
import { RequestContext } from './request.js';
interface GetResponseFromResultOptions {
    cookies: CookieStore;
    featureFlags: Flags;
    requestContext: RequestContext;
    result: unknown;
    startTimestamp: number;
}
export declare const getResponseFromResult: ({ cookies, featureFlags, requestContext, result, startTimestamp, }: GetResponseFromResultOptions) => {
    invocationMetadataHeader: string;
    response: Response;
} | {
    invocationMetadataHeader: string;
    response?: undefined;
};
export {};
