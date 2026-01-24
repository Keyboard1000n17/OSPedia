import type { Key } from './internalTypes.js';
/**
 * Default serializer used when `serialize` option set to `true`.
 */
export declare function transformKeySerialized<Fn extends (...args: any[]) => any>(args: Parameters<Fn>): [string];
/**
 * Determines whether the serialized keys are equal to one another.
 */
export declare function isSerializedKeyEqual(prevKey: Key, nextKey: Key): boolean;
