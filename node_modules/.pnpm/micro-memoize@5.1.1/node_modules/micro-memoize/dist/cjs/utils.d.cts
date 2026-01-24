import type { Memoized, Options } from './internalTypes.d.cts';
/**
 * Whether the value passed is a memoized function via `micro-memoize`.
 */
export declare function isMemoized<Fn extends (...args: any) => any, Opts extends Options<Fn>>(
  fn: any,
): fn is Memoized<Fn, Opts>;
/**
 * Determine whether the value passed is a numeric value for usage in common contexts.
 * This is a positive, finite integer.
 */
export declare function isNumericValueValid(value: any): value is number;
