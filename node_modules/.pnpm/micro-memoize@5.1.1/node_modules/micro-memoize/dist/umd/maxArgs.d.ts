import type { TransformKey } from './internalTypes.js';
/**
 * Create a method that takes the first N number of items from the array (faster than slice).
 */
export declare function getMaxArgsTransformKey<Fn extends (...args: any[]) => any>(maxArgs: number): TransformKey<Fn> | undefined;
