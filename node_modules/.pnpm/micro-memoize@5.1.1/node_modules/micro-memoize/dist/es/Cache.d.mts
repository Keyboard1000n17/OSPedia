import type { CacheEventEmitter } from './CacheEventEmitter.d.mts';
import type {
  CacheEventType,
  CacheEventListener,
  CacheNode,
  CacheSnapshot,
  Key,
  Options,
  IsKeyEqual,
} from './internalTypes.d.mts';
export declare class Cache<Fn extends (...args: any[]) => any> {
  /**
   * The current [c]ount of entries in the cache.
   */
  c: number;
  /**
   * Whether the entire key is [e]qual to an existing key in cache.
   */
  e: IsKeyEqual;
  /**
   * The [h]ead of the cache linked list.
   */
  h: CacheNode<Fn> | undefined;
  /**
   * The transformer for the [k]ey stored in cache.
   */
  k: Options<Fn>['transformKey'] | undefined;
  /**
   * Event emitter for `[o]`n events.
   */
  o: CacheEventEmitter<Fn> | undefined;
  /**
   * Whether to await the [p]romise returned by the function.
   */
  p: Options<Fn>['async'];
  /**
   * The maximum [s]ize of the cache.
   */
  s: number;
  /**
   * The [t]ail of the cache linked list.
   */
  t: CacheNode<Fn> | undefined;
  constructor(options: Options<Fn>);
  /**
   * The size of the populated cache.
   */
  get size(): number;
  /**
   * The [key, value] pairs for the existing entries in cache.
   */
  get snapshot(): CacheSnapshot<Fn>;
  /**
   * Clear the cache.
   */
  clear(reason?: string): void;
  /**
   * Delete the entry for the key based on the given `args` in cache.
   */
  delete(args: Parameters<Fn>, reason?: string): boolean;
  /**
   * Get the value in cache based on the given `args`.
   */
  get(args: Parameters<Fn>, reason?: string): ReturnType<Fn> | undefined;
  /**
   * Determine whether the given `args` have a related entry in the cache.
   */
  has(args: Parameters<Fn>): boolean;
  /**
   * Remove the given `listener` for the given `type` of cache event.
   */
  off<Type extends CacheEventType>(type: Type, listener: CacheEventListener<Type, Fn>): void;
  /**
   * Add the given `listener` for the given `type` of cache event.
   */
  on<Type extends CacheEventType>(type: Type, listener: CacheEventListener<Type, Fn>): void;
  /**
   * Add or update the cache entry for the given `key`.
   */
  set(key: Parameters<Fn>, value: ReturnType<Fn>, reason?: string): void;
  /**
   * Method to [d]elete the given `node` from the cache.
   */
  d(node: CacheNode<Fn>, reason: string): void;
  /**
   * Method to [g]et an existing node from cache based on the given `key`.
   */
  g(key: Key): CacheNode<Fn> | undefined;
  /**
   * Method to create a new [n]ode and set it at the head of the linked list.
   */
  n(key: Key, value: ReturnType<Fn>, reason?: string): CacheNode<Fn>;
  /**
   * Method to [u]date the location of the given `node` in cache.
   */
  u(node: CacheNode<Fn>, reason: string | undefined, hit: boolean): void;
  /**
   * Method to [w]rap the promise in a handler to automatically delete the
   * entry if it rejects.
   */
  w(node: CacheNode<Fn>): ReturnType<Fn>;
}
