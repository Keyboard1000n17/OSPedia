interface Cookie {
    /** Name of the cookie. */
    name: string;
    /** Value of the cookie. */
    value: string;
    expires?: Date | number;
    /** The cookie's `Max-Age` attribute, in seconds. Must be a non-negative integer. A cookie with a `maxAge` of `0` expires immediately. */
    maxAge?: number;
    /** The cookie's `Domain` attribute. Specifies those hosts to which the cookie will be sent. */
    domain?: string;
    /** The cookie's `Path` attribute. A cookie with a path will only be included in the `Cookie` request header if the requested URL matches that path. */
    path?: string;
    /** The cookie's `Secure` attribute. If `true`, the cookie will only be included in the `Cookie` request header if the connection uses SSL and HTTPS. */
    secure?: boolean;
    /** The cookie's `HTTPOnly` attribute. If `true`, the cookie cannot be accessed via JavaScript. */
    httpOnly?: boolean;
    /**
     * Allows servers to assert that a cookie ought not to
     * be sent along with cross-site requests.
     */
    sameSite?: 'Strict' | 'Lax' | 'None';
    /** Additional key value pairs with the form "key=value" */
    unparsed?: string[];
}
interface DeleteCookieOptions {
    domain?: string;
    name: string;
    path?: string;
}
interface Cookies {
    delete: (input: string | DeleteCookieOptions) => void;
    get: (key: string) => string;
    set: {
        (cookie: Cookie): void;
        (name: string, value: string): void;
    };
}

interface Geo {
    city?: string;
    country?: {
        code?: string;
        name?: string;
    };
    postalCode?: string;
    subdivision?: {
        code?: string;
        name?: string;
    };
    latitude?: number;
    longitude?: number;
    timezone?: string;
}

interface Server {
    region?: string;
}

interface Site {
    id?: string;
    name?: string;
    url?: string;
}

interface NextOptions {
    sendConditionalRequest?: boolean;
}
interface Context {
    account: {
        id: string;
    };
    cookies: Cookies;
    deploy: {
        context: string;
        id: string;
        published: boolean;
    };
    geo: Geo;
    ip: string;
    json: (input: unknown) => Response;
    log: {
        (...data: any[]): void;
        (message?: any, ...optionalParams: any[]): void;
    };
    next(options?: NextOptions): Promise<Response>;
    /**
     * @param request `Request` to be passed down the request chain. Defaults to the original `request` object passed into the Edge Function.
     */
    next(request: Request, options?: NextOptions): Promise<Response>;
    params: Record<string, string>;
    /**
     * @deprecated Use a `URL` object instead: https://ntl.fyi/edge-rewrite
     */
    rewrite(url: string | URL): Promise<Response>;
    requestId: string;
    server: Server;
    site: Site;
    url: URL;
    waitUntil: (promise: Promise<unknown>) => void;
}

interface EnvironmentVariables {
    delete: (key: string) => void;
    get: (key: string) => string | undefined;
    has: (key: string) => boolean;
    set: (key: string, value: string) => void;
    toObject: () => Record<string, string>;
}

type NetlifyGlobal = {
    context: Context | null;
    env: EnvironmentVariables;
};

export type { Context, Cookie, EnvironmentVariables, NetlifyGlobal, Site };
