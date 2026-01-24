import { DenoBridge } from './bridge.js';
import { ImportMap } from './import_map.js';
import { Logger } from './logger.js';
import { RateLimit } from './rate_limit.js';
export declare const enum Cache {
    Off = "off",
    Manual = "manual"
}
export type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS';
export type Path = `/${string}`;
export type OnError = 'fail' | 'bypass' | Path;
export declare const isValidOnError: (value: unknown) => value is OnError;
export type HeadersConfig = Record<string, boolean | string>;
interface BaseFunctionConfig {
    cache?: Cache;
    header?: HeadersConfig;
    onError?: OnError;
    name?: string;
    generator?: string;
    method?: HTTPMethod | HTTPMethod[];
    rateLimit?: RateLimit;
}
interface FunctionConfigWithPath extends BaseFunctionConfig {
    path?: Path | Path[];
    excludedPath?: Path | Path[];
}
interface FunctionConfigWithPattern extends BaseFunctionConfig {
    pattern: string | string[];
    excludedPattern?: string | string[];
}
export type FunctionConfig = FunctionConfigWithPath | FunctionConfigWithPattern;
export type FunctionConfigWithAllPossibleFields = BaseFunctionConfig & Partial<FunctionConfigWithPath & FunctionConfigWithPattern>;
export declare const getFunctionConfig: ({ deno, functionPath, importMap, log, }: {
    deno: DenoBridge;
    functionPath: string;
    importMap: ImportMap;
    log: Logger;
}) => Promise<FunctionConfig>;
export {};
