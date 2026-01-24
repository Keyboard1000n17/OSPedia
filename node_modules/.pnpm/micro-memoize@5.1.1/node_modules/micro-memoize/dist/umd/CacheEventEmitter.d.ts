import type { Cache } from './Cache.js';
import type { CacheEventListener, CacheEventType, CacheNode } from './internalTypes.js';
type ListenerMap<Fn extends (...args: any[]) => any> = Partial<Record<string, Set<CacheEventListener<CacheEventType, Fn>>>>;
export declare class CacheEventEmitter<Fn extends (...args: any[]) => any> {
    /**
     * The list of [l]isteners for the given [t]ype.
     */
    l: ListenerMap<Fn>;
    /**
     * The [c]ache the emitter is associated with.
     */
    private c;
    constructor(cache: Cache<Fn>);
    /**
     * Method to [a]dd a listener for the given cache change event.
     */
    a<Type extends CacheEventType>(type: Type, listener: CacheEventListener<Type, Fn>): void;
    /**
     * Method to [n]otify all listeners for the given cache change event.
     */
    n(type: CacheEventType, node: CacheNode<Fn>, reason?: string): void;
    /**
     * Method to [r]emove a listener for the given cache change event.
     */
    r<Type extends CacheEventType>(type: Type, listener: CacheEventListener<Type, Fn>): void;
}
export {};
