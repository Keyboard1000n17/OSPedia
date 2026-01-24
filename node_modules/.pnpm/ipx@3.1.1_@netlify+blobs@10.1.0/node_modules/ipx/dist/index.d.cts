import { Color, KernelEnum, Sharp, SharpOptions } from 'sharp';
import { ImageMeta } from 'image-meta';
import { Config } from 'svgo';
import * as h3 from 'h3';
import { Storage, Driver } from 'unstorage';

interface HandlerContext {
    /**
     * Optional quality setting for the output image, affects compression in certain formats.
     * @optional
     */
    quality?: number;
    /**
     * Specifies the method to fit the image to the dimensions provided, e.g., 'contain', 'cover'.
     * @optional
     */
    fit?: "contain" | "cover" | "fill" | "inside" | "outside";
    /**
     * The position used for cropping or positioning, specified as a number or string.
     * @optional
     */
    position?: number | string;
    /**
     * Background colour to be used if necessary, provided as a colour object. See {@link Color}.
     * @optional
     */
    background?: Color;
    /**
     * Specifies whether to enlarge the image if it is smaller than the desired size.
     * @optional
     */
    enlarge?: boolean;
    /**
     * The type of kernel to use for image operations such as resizing. See {@link KernelEnum}.
     * @optional
     */
    kernel?: keyof KernelEnum;
    /**
     * Metadata about the image being processed.
     */
    meta: ImageMeta;
}
interface Handler {
    /**
     * An array of functions that convert the given string arguments into usable forms.
     */
    args: ((argument: string) => any)[];
    /**
     * Defines the order in which this handler should be applied relative to other handlers.
     * @optional
     */
    order?: number;
    /**
     * Function to apply the effects of this handler to the image pipeline.
     * @param {HandlerContext} context - The current image processing context. See {@link HandlerContext}.
     * @param {Sharp} pipe - The Sharp instance to use for image processing. See {@link Sharp}.
     * @param {...any} arguments_ - Transformed arguments to use in the handler.
     */
    apply: (context: HandlerContext, pipe: Sharp, ...arguments_: any[]) => any;
}
type IPXStorageMeta = {
    /**
     * The modification time of the stored item.
     * @optional
     */
    mtime?: Date | number | string;
    /**
     * The maximum age (in seconds) at which the stored item should be considered fresh.
     * @optional
     */
    maxAge?: number | string;
};
/**
 * Options specific to image saving operations.
 */
type IPXStorageOptions = Record<string, unknown>;
type MaybePromise<T> = T | Promise<T>;
interface IPXStorage {
    /**
     * A descriptive name for the storage type.
     */
    name: string;
    /**
     * Retrieves metadata for an image identified by 'id'.
     * @param {string} id - The identifier for the image.
     * @param {IPXStorageOptions} [opts] - Optional metadata retrieval options. See {@link IPXStorageOptions}.
     * @returns {MaybePromise<IPXStorageMeta | undefined>} A promise or direct return of the metadata, or undefined if not found. See {@link IPXStorageMeta}.
     */
    getMeta: (id: string, opts?: IPXStorageOptions) => MaybePromise<IPXStorageMeta | undefined>;
    /**
     * Get the actual data for an image identified by 'id'.
     * @param {string} id - The identifier for the image.
     * @param {IPXStorageOptions} [opts] - Optional options for the data retrieval. See {@link IPXStorageOptions}.
     * @returns {MaybePromise<ArrayBuffer | undefined>} A promise or direct return of the image data as an ArrayBuffer, or undefined if not found. See {@link ArrayBuffer}.
     */
    getData: (id: string, opts?: IPXStorageOptions) => MaybePromise<ArrayBuffer | undefined>;
}

declare const quality: Handler;
declare const fit: Handler;
declare const position: Handler;
declare const background: Handler;
declare const enlarge: Handler;
declare const kernel: Handler;
declare const width: Handler;
declare const height: Handler;
declare const resize: Handler;
declare const trim: Handler;
declare const extend: Handler;
declare const extract: Handler;
declare const rotate: Handler;
declare const flip: Handler;
declare const flop: Handler;
declare const sharpen: Handler;
declare const median: Handler;
declare const blur: Handler;
declare const flatten: Handler;
declare const gamma: Handler;
declare const negate: Handler;
declare const normalize: Handler;
declare const threshold: Handler;
declare const modulate: Handler;
declare const tint: Handler;
declare const grayscale: Handler;
declare const crop: Handler;
declare const q: Handler;
declare const b: Handler;
declare const w: Handler;
declare const h: Handler;
declare const s: Handler;
declare const pos: Handler;

declare const Handlers_b: typeof b;
declare const Handlers_background: typeof background;
declare const Handlers_blur: typeof blur;
declare const Handlers_crop: typeof crop;
declare const Handlers_enlarge: typeof enlarge;
declare const Handlers_extend: typeof extend;
declare const Handlers_extract: typeof extract;
declare const Handlers_fit: typeof fit;
declare const Handlers_flatten: typeof flatten;
declare const Handlers_flip: typeof flip;
declare const Handlers_flop: typeof flop;
declare const Handlers_gamma: typeof gamma;
declare const Handlers_grayscale: typeof grayscale;
declare const Handlers_h: typeof h;
declare const Handlers_height: typeof height;
declare const Handlers_kernel: typeof kernel;
declare const Handlers_median: typeof median;
declare const Handlers_modulate: typeof modulate;
declare const Handlers_negate: typeof negate;
declare const Handlers_normalize: typeof normalize;
declare const Handlers_pos: typeof pos;
declare const Handlers_position: typeof position;
declare const Handlers_q: typeof q;
declare const Handlers_quality: typeof quality;
declare const Handlers_resize: typeof resize;
declare const Handlers_rotate: typeof rotate;
declare const Handlers_s: typeof s;
declare const Handlers_sharpen: typeof sharpen;
declare const Handlers_threshold: typeof threshold;
declare const Handlers_tint: typeof tint;
declare const Handlers_trim: typeof trim;
declare const Handlers_w: typeof w;
declare const Handlers_width: typeof width;
declare namespace Handlers {
  export {
    Handlers_b as b,
    Handlers_background as background,
    Handlers_blur as blur,
    Handlers_crop as crop,
    Handlers_enlarge as enlarge,
    Handlers_extend as extend,
    Handlers_extract as extract,
    Handlers_fit as fit,
    Handlers_flatten as flatten,
    Handlers_flip as flip,
    Handlers_flop as flop,
    Handlers_gamma as gamma,
    Handlers_grayscale as grayscale,
    Handlers_h as h,
    Handlers_height as height,
    Handlers_kernel as kernel,
    Handlers_median as median,
    Handlers_modulate as modulate,
    Handlers_negate as negate,
    Handlers_normalize as normalize,
    Handlers_pos as pos,
    Handlers_position as position,
    Handlers_q as q,
    Handlers_quality as quality,
    Handlers_resize as resize,
    Handlers_rotate as rotate,
    Handlers_s as s,
    Handlers_sharpen as sharpen,
    Handlers_threshold as threshold,
    Handlers_tint as tint,
    Handlers_trim as trim,
    Handlers_w as w,
    Handlers_width as width,
  };
}

type HandlerName = keyof typeof Handlers;

type IPXSourceMeta = {
    /**
     * The modification time of the source. Used for cache validation.
     * @optional
     */
    mtime?: Date;
    /**
     * The maximum age (in seconds) that the source should be considered fresh.
     * @optional
     */
    maxAge?: number;
};
/**
 * A function type that defines an IPX image processing instance.
 *
 * This function takes an image identifier and optional modifiers and request options, then provides methods to retrieve
 * image metadata and process the image according to the specified modifiers.
 *
 * @param {string} id - The identifier for the image. This can be a URL or a path, depending on the storage implementation.
 * @param {partial<Record<HandlerName | "f" | "format" | "a" | "animated", string>>} [modifiers] - Modifiers to be applied to the image,
 * such as resizing, cropping or format conversion. This record contains predefined keys such as 'f' or 'format' to specify the output to
 * specify the output image format, and 'a' or 'animated' to specify whether the image should be processed as an animation. See
 * {@link HandlerName}.
 * @param {any} [requestOptions] - Additional options that may be needed for request handling, specific to the storage backend.
 * Returns an object with methods:
 * - `getSourceMeta`: A method that returns a promise resolving to the source image metadata (`IPXSourceMeta`).
 * - `process`: A method that returns a promise resolving to an object containing the processed image data, metadata,
 * and format. The image data can be in the form of a `buffer` or a string, depending on the format and processing.
 */
type IPX = (id: string, modifiers?: Partial<Record<HandlerName | "f" | "format" | "a" | "animated", string>>, requestOptions?: any) => {
    getSourceMeta: () => Promise<IPXSourceMeta>;
    process: () => Promise<{
        data: Buffer | string;
        meta?: ImageMeta;
        format?: string;
    }>;
};
type IPXOptions = {
    /**
     * Default cache duration in seconds. If not specified, a default of 1 minute is used.
     * @optional
     */
    maxAge?: number;
    /**
     * A mapping of URL aliases to their corresponding URLs, used to simplify resource identifiers.
     * @optional
     */
    alias?: Record<string, string>;
    /**
     * Configuration options for the Sharp image processing library.
     * @optional
     */
    sharpOptions?: SharpOptions;
    /**
     * Primary storage backend for handling image assets.
     */
    storage: IPXStorage;
    /**
     * An optional secondary storage backend used when images are fetched via HTTP.
     * @optional
     */
    httpStorage?: IPXStorage;
    /**
     * Configuration for the SVGO library used when processing SVG images.
     * @optional
     */
    svgo?: false | Config;
};
/**
 * Creates an IPX image processing instance with the specified options.
 * @param {IPXOptions} userOptions - Configuration options for the IPX instance. See {@link IPXOptions}.
 * @returns {IPX} An IPX processing function configured with the given options. See {@link IPX}.
 * @throws {Error} If critical options such as storage are missing or incorrectly configured.
 */
declare function createIPX(userOptions: IPXOptions): IPX;

/**
 * Creates an H3 handler to handle images using IPX.
 * @param {IPX} ipx - An IPX instance to handle image requests.
 * @returns {H3Event} An H3 event handler that processes image requests, applies modifiers, handles caching,
 * and returns the processed image data. See {@link H3Event}.
 * @throws {H3Error} If there are problems with the request parameters or processing the image. See {@link H3Error}.
 */
declare function createIPXH3Handler(ipx: IPX): h3.EventHandler<h3.EventHandlerRequest, Promise<string | void | Buffer<ArrayBufferLike> | {
    error: {
        message: string;
    };
}>>;
/**
 * Creates an H3 application configured to handle image processing using a supplied IPX instance.
 * @param {IPX} ipx - An IPX instance to handle image handling requests.
 * @returns {any} An H3 application configured to use the IPX image handler.
 */
declare function createIPXH3App(ipx: IPX): h3.App;
/**
 * Creates a web server that can handle IPX image processing requests using an H3 application.
 * @param {IPX} ipx - An IPX instance configured for the server. See {@link IPX}.
 * @returns {any} A web handler suitable for use with web server environments that support the H3 library.
 */
declare function createIPXWebServer(ipx: IPX): h3.WebHandler;
/**
 * Creates a web server that can handle IPX image processing requests using an H3 application.
 * @param {IPX} ipx - An IPX instance configured for the server. See {@link IPX}.
 * @returns {any} A web handler suitable for use with web server environments that support the H3 library.
 */
declare function createIPXNodeServer(ipx: IPX): h3.NodeListener;
/**
 * Creates a simple server that can handle IPX image processing requests using an H3 application.
 * @param {IPX} ipx - An IPX instance configured for the server.
 * @returns {any} A handler suitable for plain HTTP server environments that support the H3 library.
 */
declare function createIPXPlainServer(ipx: IPX): h3.PlainHandler;

type HTTPStorageOptions = {
    /**
     * Custom options for fetch operations, such as headers or method overrides.
     * @optional
     */
    fetchOptions?: RequestInit;
    /**
     * Default maximum age (in seconds) for cache control. If not specified, defaults to the environment setting or 300 seconds.
     * @optional
     */
    maxAge?: number;
    /**
     * Whitelist of domains from which resource fetching is allowed. Can be a single string or an array of strings.
     * @optional
     */
    domains?: string | string[];
    /**
     * If set to true, allows retrieval from any domain. Overrides the domain whitelist.
     * @optional
     */
    allowAllDomains?: boolean;
    /**
     * If set to true, ignore the cache control header in responses and use the default or specified maxAge.
     * @optional
     */
    ignoreCacheControl?: boolean;
};
/**
 * Creates an HTTP storage handler for IPX that fetches image data from external URLs.
 * This handler allows configuration to specify allowed domains, caching behaviour and custom fetch options.
 *
 * @param {HTTPStorageOptions} [_options={}] - Configuration options for HTTP storage, with defaults possibly taken from environment variables. See {@link HTTPStorageOptions}.
 * @returns {IPXStorage} An IPXStorage interface implementation for retrieving images over HTTP. See {@link IPXStorage}.
 * @throws {H3Error} If validation of the requested URL fails due to a missing hostname or denied host access. See {@link H3Error}.
 */
declare function ipxHttpStorage(_options?: HTTPStorageOptions): IPXStorage;

type NodeFSSOptions = {
    /**
     * The directory or list of directories from which to serve files. If not specified, the current directory is used by default.
     * @optional
     */
    dir?: string | string[];
    /**
     * The directory or list of directories from which to serve files. If not specified, the current directory is used by default.
     * @optional
     */
    maxAge?: number;
};
/**
 * Creates a file system storage handler for IPX that allows images to be served from local directories specified in the options.
 * This handler resolves directories and handles file access, ensuring that files are served safely.
 *
 * @param {NodeFSSOptions} [_options={}] - File system storage configuration options, with optional directory paths and caching configuration. See {@link NodeFSSOptions}.
 * @returns {IPXStorage} An implementation of the IPXStorage interface for accessing images stored on the local file system. See {@link IPXStorage}.
 * @throws {H3Error} If there is a problem accessing the file system module or resolving/reading files. See {@link H3Error}.
 */
declare function ipxFSStorage(_options?: NodeFSSOptions): IPXStorage;

type UnstorageIPXStorageOptions = {
    /**
     * Optional prefix to be placed in front of each storage key, which can help to name or categorise stored items.
     * @optional
     */
    prefix?: string;
};
/**
 * Adapts an Unstorage driver or storage system to comply with the IPXStorage interface required by IPX.
 * This allows various Unstorage-compatible storage systems to be used to manage image data with IPX.
 *
 * @param {Storage | Driver} storage - The Unstorage driver or storage instance to adapt. See {@link Storage} and {@link Driver}.
 * @param {UnstorageIPXStorageOptions | string} [_options={}] - Configuration options for the adapter, which can be a simple string prefix or an options object. See {@link UnstorageIPXStorageOptions}.
 * @returns {IPXStorage}. An IPXStorage compliant object that implements the necessary methods to interact with the provided unstorage driver or storage system. See {@link IPXStorage}.
 * @throws {H3Error} If there is a problem retrieving or converting the storage data, detailed error information is thrown. See {@link H3Error}.
 */
declare function unstorageToIPXStorage(storage: Storage | Driver, _options?: UnstorageIPXStorageOptions | string): IPXStorage;

export { createIPX, createIPXH3App, createIPXH3Handler, createIPXNodeServer, createIPXPlainServer, createIPXWebServer, ipxFSStorage, ipxHttpStorage, unstorageToIPXStorage };
export type { HTTPStorageOptions, Handler, HandlerContext, IPX, IPXOptions, IPXStorage, IPXStorageMeta, IPXStorageOptions, NodeFSSOptions, UnstorageIPXStorageOptions };
