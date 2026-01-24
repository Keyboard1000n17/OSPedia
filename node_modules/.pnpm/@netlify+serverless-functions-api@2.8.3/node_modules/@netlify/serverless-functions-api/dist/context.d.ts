import type { CookieStore, Cookies } from './cookie_store.js';
import { type Flags } from './flags.js';
import { type Geo } from './geo.js';
import { NetlifyRequest } from './request.js';
import { type Server } from './server.js';
import { type Site } from './site.js';
export type Context = {
    account: {
        id: string;
    };
    cookies: Cookies;
    deploy: {
        context: string;
        id: string;
        published: boolean;
        skewProtectionToken?: string;
    };
    flags: Flags;
    geo: Geo;
    ip: string;
    json: (input: unknown) => Response;
    log: {
        (...data: any[]): void;
        (message?: any, ...optionalParams: any[]): void;
    };
    next: () => never;
    params: Record<string, string>;
    path: string | void;
    requestId: string;
    rewrite: (input: string | URL) => Promise<Response>;
    server: Server;
    site: Site;
    url: URL;
    waitUntil: (promise: Promise<unknown>) => void;
};
export interface State {
    enqueuedPromises: Set<Promise<unknown>>;
}
interface GetContextOptions {
    cookies: CookieStore;
    req: NetlifyRequest;
    skewProtectionToken?: string;
}
export declare const getContext: ({ cookies, req, skewProtectionToken }: GetContextOptions) => {
    context: Context;
    state: State;
};
export {};
