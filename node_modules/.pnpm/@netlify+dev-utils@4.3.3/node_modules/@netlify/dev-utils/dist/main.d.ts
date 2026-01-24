import { Context } from '@netlify/types';
import * as ansis from 'ansis';
import { ExecaChildProcess } from 'execa';
import { ServerResponse, IncomingMessage } from 'node:http';
import * as chokidar from 'chokidar';
import { EventEmitter } from 'node:events';
import tmp from 'tmp-promise';
import * as image_size_dist_types_interface from 'image-size/dist/types/interface';

declare const getAPIToken: () => Promise<string | undefined>;

declare const shouldBase64Encode: (contentType: string) => boolean;

declare const renderFunctionErrorPage: (errString: string, functionType: string) => Promise<string>;

interface DevEvent {
    name: string;
}
type DevEventHandler = (event: DevEvent) => void;

declare class LocalState {
    private path;
    constructor(cwd: string);
    get all(): any;
    set all(val: any);
    get size(): number;
    get(key: any): string | undefined;
    set(...args: any[]): void;
    has(key: any): boolean;
    delete(key: any): void;
    clear(): void;
}

type Geolocation = Context['geo'];
declare const mockLocation: Geolocation;
/**
 * Returns geolocation data from a remote API, the local cache, or a mock location, depending on the
 * specified options.
 */
declare const getGeoLocation: ({ enabled, cache, state, }: {
    enabled?: boolean;
    cache?: boolean;
    state: LocalState;
}) => Promise<Geolocation>;

type logFunction = (message?: string) => void;
type Logger = {
    error: logFunction;
    log: logFunction;
    warn: logFunction;
};
declare const netlifyCommand: ansis.Ansis;
declare const netlifyCyan: ansis.Ansis;
declare const netlifyBanner: string;
declare const warning: (message: string) => string;

declare const ensureNetlifyIgnore: (dir: string, logger?: Logger) => Promise<false | undefined>;

declare const headers: {
    BlobsInfo: string;
};
declare const toMultiValueHeaders: (headers: Headers) => Record<string, string[]>;

type ConfigStoreOptions<T extends Record<string, any>> = {
    defaults?: T | undefined;
};
declare class GlobalConfigStore<T extends Record<string, any> = Record<string, any>> {
    #private;
    constructor(options?: ConfigStoreOptions<T>);
    get all(): T;
    set(key: string, value: unknown): void;
    get(key: string): T[typeof key];
    private getConfig;
    private writeConfig;
}
declare const getGlobalConfigStore: () => Promise<GlobalConfigStore>;
declare const resetConfigCache: () => void;

type Handler = (request: Request) => Promise<Response>;

interface CacheEntry<T> {
    enqueued?: boolean;
    task: Promise<T>;
    timestamp: number;
}
type MemoizeCache<T> = Record<string, CacheEntry<T> | undefined>;
interface MemoizeOptions<T> {
    cache: MemoizeCache<T>;
    cacheKey: string;
    command: () => Promise<T>;
}
declare const memoize: <T>({ cache, cacheKey, command }: MemoizeOptions<T>) => Promise<T>;

interface ProcessRef {
    ps?: ExecaChildProcess;
}
declare const killProcess: (ps?: ExecaChildProcess) => Promise<void> | undefined;

/**
 * A Node.js HTTP server with support for middleware.
 */
declare class HTTPServer {
    private url?;
    private handler;
    private nodeServer?;
    constructor(handler: Handler);
    start(port?: number): Promise<string>;
    stop(): Promise<void>;
}

declare const toWebRequest: (nodeReq: IncomingMessage, urlPath?: string) => Request;
declare const fromWebResponse: (webRes: Response, res: ServerResponse) => Promise<void>;

interface WatchDebouncedOptions {
    depth?: number;
    ignored?: (string | RegExp)[];
    onAdd?: (paths: string[]) => void;
    onChange?: (paths: string[]) => void;
    onUnlink?: (paths: string[]) => void;
}
/**
 * Adds a file watcher to a path or set of paths and debounces the events.
 */
declare const watchDebounced: (target: string | string[], { depth, ignored, onAdd, onChange, onUnlink }: WatchDebouncedOptions) => Promise<chokidar.FSWatcher>;

interface EventInspectorOptions {
    debug?: boolean;
}
declare class EventInspector extends EventEmitter {
    debug: boolean;
    events: DevEvent[];
    constructor({ debug }?: EventInspectorOptions);
    handleEvent(event: DevEvent): void;
    waitFor(filter: (event: DevEvent) => boolean, timeoutMs?: number): Promise<unknown>;
}

type BodyFunction = (bufferedBody: string | null) => Promise<void> | void;
type HeadersFunction = (headers: Record<string, string>) => Promise<void> | void;
type ResponseFunction = () => Promise<Response> | Response;
interface ExpectedRequest {
    body?: string | BodyFunction;
    fulfilled: boolean;
    headers: Record<string, string> | HeadersFunction;
    method: string;
    response: Response | ResponseFunction | Error;
    url: string;
}
interface ExpectedRequestOptions {
    body?: string | BodyFunction;
    headers?: Record<string, string> | HeadersFunction;
    response: Response | ResponseFunction | Error;
    url: string;
}
declare class MockFetch {
    originalFetch: typeof globalThis.fetch;
    requests: ExpectedRequest[];
    constructor();
    private addExpectedRequest;
    delete(options: ExpectedRequestOptions): this;
    get(options: ExpectedRequestOptions): this;
    head(options: ExpectedRequestOptions): this;
    post(options: ExpectedRequestOptions): this;
    put(options: ExpectedRequestOptions): this;
    get fetch(): (...args: Parameters<typeof globalThis.fetch>) => Promise<Response>;
    get fulfilled(): boolean;
    inject(): this;
    restore(): void;
}

declare class Fixture {
    directory?: tmp.DirectoryResult;
    sourceDirectory?: string;
    files: Record<string, string | Buffer>;
    npmDependencies: Record<string, string>;
    constructor();
    private ensureDirectory;
    private installNpmDependencies;
    create(): Promise<string>;
    deleteFile(path: string): Promise<void>;
    destroy(): Promise<void>;
    fromDirectory(path: string): this;
    withFile(path: string, contents: string | Buffer): this;
    withHeadersFile({ headers, pathPrefix, }: {
        headers?: {
            headers: string[];
            path: string;
        }[];
        pathPrefix?: string;
    }): this;
    withStateFile(state: object): this;
    writeFile(path: string, contents: string): Promise<void>;
    withPackages(packages: Record<string, string>): this;
}

/**
 * Returns Buffer of a generated random noise jpeg image with the specified width and height.
 */
declare function generateImage(width: number, height: number): Promise<Buffer>;
/**
 * Helper to create a server handler that responds with a random noise image.
 */
declare function createImageServerHandler(imageConfigFromURL: (url: URL) => {
    width: number;
    height: number;
} | null): (request: Request) => Promise<Response>;
declare function getImageResponseSize(response: Response): Promise<image_size_dist_types_interface.ISizeCalculationResult>;

declare const createMockLogger: () => Logger;

export { type DevEvent, type DevEventHandler, EventInspector, Fixture, type Geolocation, GlobalConfigStore, HTTPServer, type Handler, LocalState, type Logger, type MemoizeCache, MockFetch, type ProcessRef, createImageServerHandler, createMockLogger, ensureNetlifyIgnore, fromWebResponse, generateImage, getAPIToken, getGeoLocation, getGlobalConfigStore, getImageResponseSize, headers, killProcess, memoize, mockLocation, netlifyBanner, netlifyCommand, netlifyCyan, renderFunctionErrorPage, resetConfigCache, shouldBase64Encode, toMultiValueHeaders, toWebRequest, warning, watchDebounced };
