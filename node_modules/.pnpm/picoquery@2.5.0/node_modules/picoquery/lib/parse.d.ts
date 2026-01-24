import { type Options, type DeserializeKeyFunction, type DeserializeValueFunction } from './shared.js';
export type ParsedQuery = Record<PropertyKey, unknown>;
export type ParseOptions = Partial<Options>;
export declare const numberKeyDeserializer: DeserializeKeyFunction;
export declare const numberValueDeserializer: DeserializeValueFunction;
/**
 * Parses a query string into an object
 * @param {string} input
 * @param {ParseOptions=} options
 */
export declare function parse(input: string, options?: ParseOptions): ParsedQuery;
