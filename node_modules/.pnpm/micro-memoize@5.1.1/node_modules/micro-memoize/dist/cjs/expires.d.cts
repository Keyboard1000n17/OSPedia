import type { Cache } from './Cache.d.cts';
import type { GetExpires, Key, Options, ShouldPersist, ShouldRemoveOnExpire } from './internalTypes.d.cts';
export declare class ExpirationManager<Fn extends (...args: any[]) => any> {
  /**
   * The [c]ache being monitored.
   */
  c: Cache<Fn>;
  /**
   * Map of [e]xpiration timeouts.
   */
  e: Map<Key, NodeJS.Timeout>;
  /**
   * Whether the entry in cache should [p]ersist, and therefore not
   * have any expiration.
   */
  p: ShouldPersist<Fn> | undefined;
  /**
   * Whether the entry in cache should be [r]emoved on expiration.
   */
  r: ShouldRemoveOnExpire<Fn> | undefined;
  /**
   * The [t]ime to wait before expiring, or a method that determines that time.
   */
  t: number | GetExpires<Fn>;
  /**
   * Whether the expiration should [u]pdate when the cache entry is hit.
   */
  u: boolean;
  constructor(cache: Cache<Fn>, expires: Required<Options<Fn>>['expires']);
  get size(): number;
  /**
   * Whether the cache expiration should be set [a]gain, generally after some cache change.
   */
  a(key: Key, value: ReturnType<Fn>): boolean;
  /**
   * Method to [d]elete the expiration.
   */
  d(key: Key): void;
  /**
   * Method to [s]et the new expiration. If one is present for the given `key`, it will delete
   * the existing expiration before creating the new one.
   */
  s(key: Key, value: ReturnType<Fn>): void;
}
