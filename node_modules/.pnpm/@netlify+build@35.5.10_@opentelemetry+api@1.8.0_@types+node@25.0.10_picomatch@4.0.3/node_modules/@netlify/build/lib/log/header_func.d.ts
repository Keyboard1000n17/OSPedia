/** Retrieve successful or error header depending on whether `error` exists */
export declare const getLogHeaderFunc: (error?: Error) => (logs: import("./logger.js").Logs | undefined, string: string, opts?: {}) => void;
