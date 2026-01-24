/**
 * Ensure a function `wrapper` so it does not change the `name` (or other
 * properties) or functions passed to it as argument.
 * A copy of that `wrapper` is returned.
 *
 * @example
 * ```js
 * // Any function wrapper works
 * import memoize from 'lodash/memoize.js'
 *
 * const betterMemoize = keepFuncProps(memoize)
 *
 * const anyFunction = () => true
 *
 * // Function `name` and other properties are kept
 * console.log(anyFunction) // `[Function: anyFunction]`
 * console.log(memoize(anyFunction)) // `[Function: memoized]`
 * console.log(betterMemoize(anyFunction)) // `[Function: anyFunction]`
 *
 * // Function body is kept when stringified
 * console.log(String(anyFunction))
 * // () => true
 * console.log(String(memoize(anyFunction)))
 * // function() {
 * //   var args = arguments,
 * //   key = resolver ? resolver.apply(this, args) : args[0],
 * //   cache = memoized.cache;
 * //   ...
 * // }
 * console.log(String(betterMemoize(anyFunction)))
 * // /* Wrapped with memoized() *\/
 * // () => true
 * ```
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export default function keepFuncProps<T extends Function>(wrapper: T): T
