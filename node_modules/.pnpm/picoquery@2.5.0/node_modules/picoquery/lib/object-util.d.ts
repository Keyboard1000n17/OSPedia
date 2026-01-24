import { type Options } from './shared.js';
type KeyableObject = Record<PropertyKey, unknown>;
export declare function getDeepObject(obj: KeyableObject, key: PropertyKey, nextKey: PropertyKey, forceObject?: boolean, forceArray?: boolean): KeyableObject;
export declare function stringifyObject(obj: Record<PropertyKey, unknown>, options: Partial<Options>, depth?: number, parentKey?: string, isProbableArray?: boolean): string;
export {};
