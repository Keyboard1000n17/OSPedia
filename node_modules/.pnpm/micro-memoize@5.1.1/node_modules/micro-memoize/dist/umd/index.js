(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('fast-equals'), require('fast-stringify')) :
    typeof define === 'function' && define.amd ? define(['exports', 'fast-equals', 'fast-stringify'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["micro-memoize"] = {}, global.fastEquals, global.fastStringify));
})(this, (function (exports, fastEquals, fastStringify) { 'use strict';

    class CacheEventEmitter {
        constructor(cache) {
            /**
             * The list of [l]isteners for the given [t]ype.
             */
            this.l = {};
            this.c = cache;
        }
        /**
         * Method to [a]dd a listener for the given cache change event.
         */
        a(type, listener) {
            const listeners = this.l[type];
            if (!listeners) {
                this.l[type] = new Set([listener]);
            }
            else if (!listeners.has(listener)) {
                listeners.add(listener);
            }
        }
        /**
         * Method to [n]otify all listeners for the given cache change event.
         */
        n(type, node, reason) {
            const listeners = this.l[type];
            if (!listeners) {
                return;
            }
            listeners.forEach((listener) => {
                listener({
                    cache: this.c,
                    key: node.k,
                    reason,
                    value: node.v,
                    type,
                });
            });
        }
        /**
         * Method to [r]emove a listener for the given cache change event.
         */
        r(type, listener) {
            const listeners = this.l[type];
            if (!listeners) {
                return;
            }
            listeners.delete(listener);
            if (!listeners.size) {
                this.l[type] = undefined;
            }
        }
    }

    /**
     * Create a method that takes the first N number of items from the array (faster than slice).
     */
    function getMaxArgsTransformKey(maxArgs) {
        if (maxArgs === 1) {
            return (args) => (maxArgs >= args.length ? args : [args[0]]);
        }
        if (maxArgs === 2) {
            return (args) => (maxArgs >= args.length ? args : [args[0], args[1]]);
        }
        return (args) => {
            if (maxArgs >= args.length) {
                return args;
            }
            const clone = new Array(maxArgs);
            for (let index = 0; index < maxArgs; ++index) {
                clone[index] = args[index];
            }
            return clone;
        };
    }

    /**
     * Default replacer used when stringifying to ensure values that would normally be
     * ignored are respected.
     */
    function replacer(_key, value) {
        const type = typeof value;
        return type === 'function' || type === 'symbol' ? value.toString() : value;
    }
    /**
     * Default serializer used when `serialize` option set to `true`.
     */
    function transformKeySerialized(args) {
        return [fastStringify.stringify(args, { replacer })];
    }
    /**
     * Determines whether the serialized keys are equal to one another.
     */
    function isSerializedKeyEqual(prevKey, nextKey) {
        return prevKey[0] === nextKey[0];
    }

    /**
     * Whether the value passed is a memoized function via `micro-memoize`.
     */
    function isMemoized(fn) {
        return typeof fn === 'function' && fn.isMemoized;
    }
    /**
     * Determine whether the value passed is a numeric value for usage in common contexts.
     * This is a positive, finite integer.
     */
    function isNumericValueValid(value) {
        return typeof value === 'number' && value >= 0 && Number.isFinite(value);
    }

    class Cache {
        constructor(options) {
            /**
             * The current [c]ount of entries in the cache.
             */
            this.c = 0;
            const { async, maxSize } = options;
            this.e = getIsKeyEqual(options);
            this.k = getTransformKey(options);
            this.p = typeof async === 'boolean' && async;
            this.s = isNumericValueValid(maxSize) ? maxSize : 1;
        }
        /**
         * The size of the populated cache.
         */
        get size() {
            return this.c;
        }
        /**
         * The [key, value] pairs for the existing entries in cache.
         */
        get snapshot() {
            const entries = [];
            const keys = [];
            const values = [];
            let node = this.h;
            let size = 0;
            while (node != null) {
                keys.push(node.k);
                values.push(node.v);
                entries.push([node.k, node.v]);
                ++size;
                node = node.n;
            }
            return { entries, keys, size, values };
        }
        /**
         * Clear the cache.
         */
        clear(reason = 'explicit clear') {
            if (!this.h) {
                return;
            }
            const emitter = this.o;
            let nodes;
            if (emitter) {
                nodes = [];
                let node = this.h;
                while (node != null) {
                    nodes.push(node);
                    node = node.n;
                }
            }
            this.h = this.t = undefined;
            this.c = 0;
            if (emitter && nodes) {
                for (let index = 0; index < nodes.length; ++index) {
                    emitter.n('delete', nodes[index], reason);
                }
            }
        }
        /**
         * Delete the entry for the key based on the given `args` in cache.
         */
        delete(args, reason = 'explicit delete') {
            const node = this.g(this.k ? this.k(args) : args);
            if (node) {
                this.d(node, reason);
                return true;
            }
            return false;
        }
        /**
         * Get the value in cache based on the given `args`.
         */
        get(args, reason = 'explicit get') {
            const node = this.g(this.k ? this.k(args) : args);
            if (node) {
                if (node !== this.h) {
                    this.u(node, reason, true);
                }
                else if (this.o) {
                    this.o.n('hit', node, reason);
                }
                return node.v;
            }
        }
        /**
         * Determine whether the given `args` have a related entry in the cache.
         */
        has(args) {
            return !!this.g(this.k ? this.k(args) : args);
        }
        /**
         * Remove the given `listener` for the given `type` of cache event.
         */
        off(type, listener) {
            this.o && this.o.r(type, listener);
        }
        /**
         * Add the given `listener` for the given `type` of cache event.
         */
        on(type, listener) {
            if (!this.o) {
                this.o = new CacheEventEmitter(this);
            }
            this.o.a(type, listener);
        }
        /**
         * Add or update the cache entry for the given `key`.
         */
        set(key, value, reason = 'explicit set') {
            const normalizedKey = this.k ? this.k(key) : key;
            let node = this.g(normalizedKey);
            if (node) {
                const prevValue = node.v;
                node.v = value;
                if (this.p && value !== prevValue) {
                    node.v = this.w(node);
                }
                node !== this.h && this.u(node, reason, false);
            }
            else {
                node = this.n(normalizedKey, value);
            }
        }
        /**
         * Method to [d]elete the given `node` from the cache.
         */
        d(node, reason) {
            const next = node.n;
            const prev = node.p;
            if (next) {
                next.p = prev;
            }
            else {
                this.t = prev;
            }
            if (prev) {
                prev.n = next;
            }
            else {
                this.h = next;
            }
            --this.c;
            node.r = true;
            this.o && this.o.n('delete', node, reason);
        }
        /**
         * Method to [g]et an existing node from cache based on the given `key`.
         */
        g(key) {
            let node = this.h;
            if (!node || node.r) {
                return;
            }
            if (this.e(node.k, key)) {
                return node;
            }
            if (this.h === this.t) {
                return;
            }
            node = node.n;
            while (node) {
                if (node.r) {
                    return;
                }
                if (this.e(node.k, key)) {
                    return node;
                }
                node = node.n;
            }
        }
        /**
         * Method to create a new [n]ode and set it at the head of the linked list.
         */
        n(key, value, reason) {
            const prevHead = this.h;
            const prevTail = this.t;
            const node = { k: key, n: prevHead, p: undefined, v: value };
            if (this.p) {
                node.v = this.w(node);
            }
            this.h = node;
            if (prevHead) {
                prevHead.p = node;
            }
            else {
                this.t = node;
            }
            if (++this.c > this.s && prevTail) {
                this.d(prevTail, 'evicted');
            }
            this.o && this.o.n('add', node, reason);
            return node;
        }
        /**
         * Method to [u]date the location of the given `node` in cache.
         */
        u(node, reason, hit) {
            const next = node.n;
            const prev = node.p;
            if (next) {
                next.p = prev;
            }
            if (prev) {
                prev.n = next;
            }
            if (this.h) {
                this.h.p = node;
            }
            node.n = this.h;
            node.p = undefined;
            this.h = node;
            if (node === this.t) {
                this.t = prev;
            }
            if (this.o) {
                hit && this.o.n('hit', node, reason);
                this.o.n('update', node, reason);
            }
        }
        /**
         * Method to [w]rap the promise in a handler to automatically delete the
         * entry if it rejects.
         */
        w(node) {
            const { v: value } = node;
            // If the method does not return a promise for some reason, just keep the
            // original value.
            if (value == null || typeof value.then !== 'function') {
                return value;
            }
            return value.then((value) => {
                !node.r && this.o && this.o.n('update', node, 'resolved');
                return value;
            }, (error) => {
                !node.r && this.d(node, 'rejected');
                throw error;
            });
        }
    }
    function getIsKeyEqual({ isKeyEqual, isKeyItemEqual, serialize, }) {
        if (typeof isKeyEqual === 'function') {
            return isKeyEqual;
        }
        if (serialize) {
            return isSerializedKeyEqual;
        }
        const isItemEqual = typeof isKeyItemEqual === 'function'
            ? isKeyItemEqual
            : isKeyItemEqual === 'deep'
                ? fastEquals.deepEqual
                : isKeyItemEqual === 'shallow'
                    ? fastEquals.shallowEqual
                    : Object.is;
        return function isKeyEqual(prevKey, nextKey) {
            const length = nextKey.length;
            if (prevKey.length !== length) {
                return false;
            }
            if (length === 1) {
                return isItemEqual(prevKey[0], nextKey[0], 0);
            }
            for (let index = 0; index < length; ++index) {
                if (!isItemEqual(prevKey[index], nextKey[index], index)) {
                    return false;
                }
            }
            return true;
        };
    }
    /**
     * Get the `transformKey` option based on the options provided.
     */
    function getTransformKey(options) {
        const { maxArgs, serialize, transformKey } = options;
        const transformers = [
            serialize ? (typeof serialize === 'function' ? serialize : transformKeySerialized) : undefined,
            isNumericValueValid(maxArgs) ? getMaxArgsTransformKey(maxArgs) : undefined,
            typeof transformKey === 'function' ? transformKey : undefined,
        ].filter(Boolean);
        return transformers.length
            ? transformers.reduce((f, g) => (...args) => 
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            f(g(...args)))
            : undefined;
    }

    class ExpirationManager {
        constructor(cache, expires) {
            /**
             * Map of [e]xpiration timeouts.
             */
            this.e = new Map();
            this.c = cache;
            if (typeof expires === 'object') {
                this.t = expires.after;
                this.p = expires.shouldPersist;
                this.r = expires.shouldRemove;
                this.u = !!expires.update;
            }
            else {
                this.t = expires;
                this.u = false;
            }
            this.c.on('add', ({ key, value }) => {
                this.a(key, value) && this.s(key, value);
            });
            if (this.u) {
                // Set up a `hit` listener if we care about updating the expiration.
                this.c.on('hit', ({ key, value }) => {
                    this.a(key, value) && this.s(key, value);
                });
                if (this.c.p) {
                    const onResolved = ({ key, reason, value }) => {
                        if (reason === 'resolved' && this.a(key, value)) {
                            this.s(key, value);
                            // Automatically remove the listener to avoid unnecessary work on updates after
                            // the item is resolved, as that can only ever happen once.
                            this.c.off('update', onResolved);
                        }
                    };
                    // If the method is also async, then when the value resolved update the expiration cache.
                    this.c.on('update', onResolved);
                }
            }
            this.c.on('delete', ({ key }) => {
                this.e.has(key) && this.d(key);
            });
        }
        get size() {
            return this.e.size;
        }
        /**
         * Whether the cache expiration should be set [a]gain, generally after some cache change.
         */
        a(key, value) {
            var _a;
            return !!(this.c.g(key) && !((_a = this.p) === null || _a === void 0 ? void 0 : _a.call(this, key, value, this.c)));
        }
        /**
         * Method to [d]elete the expiration.
         */
        d(key) {
            const expiration = this.e.get(key);
            if (expiration) {
                clearTimeout(expiration);
                this.e.delete(key);
            }
        }
        /**
         * Method to [s]et the new expiration. If one is present for the given `key`, it will delete
         * the existing expiration before creating the new one.
         */
        s(key, value) {
            if (this.e.has(key)) {
                this.d(key);
            }
            const cache = this.c;
            const time = typeof this.t === 'function' ? this.t(key, value, cache) : this.t;
            if (!isNumericValueValid(time)) {
                throw new TypeError(`The expiration time must be a finite, non-negative number; received ${time}`);
            }
            const timeout = setTimeout(() => {
                this.d(key);
                const node = cache.g(key);
                if (!node) {
                    return;
                }
                if (typeof this.r === 'function' && !this.r(key, node.v, time, cache)) {
                    if (node !== cache.h) {
                        cache.u(node, 'expiration reset', false);
                    }
                    else if (cache.o) {
                        // Always notify, even if at the top of the cache.
                        cache.o.n('update', node, 'expiration reset');
                    }
                    this.s(key, node.v);
                }
                else {
                    cache.d(node, 'expired');
                }
            }, time);
            if (typeof timeout.unref === 'function') {
                // If done in NodeJS, the timeout should have its reference removed to avoid
                // hanging timers if collected while running.
                timeout.unref();
            }
            this.e.set(key, timeout);
        }
    }

    const nameToProfile = new Map();
    let active = false;
    class StatsManager {
        constructor(cache, statsName) {
            /**
             * The counts for the stats [p]rofile.
             */
            this.p = { c: 0, h: 0 };
            this.c = cache;
            this.n = statsName;
            nameToProfile.set(statsName, this);
            if (active) {
                this.s();
            }
        }
        /**
         * Method to compute the [m]etrics for the profile stats.
         */
        m() {
            const { c: calls, h: hits } = this.p;
            const usage = calls ? `${((hits / calls) * 100).toFixed(4)}%` : '0.0000%';
            return { calls, hits, name: this.n, usage };
        }
        /**
         * Method to [r]eset the counts.
         */
        r() {
            this.p = { c: 0, h: 0 };
        }
        /**
         * Method to [s]tart the collection of stats for the given profile.
         */
        s() {
            const onAdd = () => {
                ++this.p.c;
            };
            const onHit = () => {
                ++this.p.c;
                ++this.p.h;
            };
            this.d = () => {
                this.c.off('add', onAdd);
                this.c.off('hit', onHit);
                this.d = undefined;
                this.p.c = this.p.h = 0;
            };
            this.c.on('add', onAdd);
            this.c.on('hit', onHit);
        }
    }
    /**
     * Clear all existing stats stored, either of the specific profile whose name is passed,
     * or globally if no name is passed.
     */
    function clearStats(statsName) {
        if (!active) {
            return;
        }
        if (statsName) {
            const statsManager = nameToProfile.get(statsName);
            if (statsManager) {
                statsManager.r();
            }
        }
        else {
            nameToProfile.clear();
        }
    }
    /**
     * Get the stats of a given profile, or global stats if no `statsName` is given.
     */
    function getStats(statsName) {
        if (!active) {
            console.warn('Stats are not being collected; please run "startCollectingStats()" to collect them.');
            return;
        }
        if (statsName != null) {
            const statsManager = nameToProfile.get(statsName);
            const profileStats = (statsManager === null || statsManager === void 0 ? void 0 : statsManager.p.c)
                ? statsManager.m()
                : {
                    calls: 0,
                    hits: 0,
                    name: statsName,
                    usage: getUsagePercentage(0, 0),
                };
            // @ts-expect-error - Conditional returns can be tricky.
            return profileStats;
        }
        let calls = 0;
        let hits = 0;
        const profiles = {};
        nameToProfile.forEach((profile, statsName) => {
            profiles[statsName] = profile.m();
            calls += profile.p.c;
            hits += profile.p.h;
        });
        const globalStats = {
            calls,
            hits,
            profiles,
            usage: getUsagePercentage(calls, hits),
        };
        // @ts-expect-error - Conditional returns can be tricky.
        return globalStats;
    }
    /**
     * Get the usage percentage based on the number of hits and total calls.
     */
    function getUsagePercentage(calls, hits) {
        return calls ? `${((hits / calls) * 100).toFixed(4)}%` : '0.0000%';
    }
    /**
     * Whether stats are currently being collected.
     */
    function isCollectingStats() {
        return active;
    }
    /**
     * Start collecting stats.
     */
    function startCollectingStats() {
        if (!active) {
            active = true;
            nameToProfile.forEach((profile) => {
                profile.s();
            });
        }
    }
    /**
     * Stop collecting stats.
     */
    function stopCollectingStats() {
        if (active) {
            nameToProfile.forEach((profile) => {
                var _a;
                (_a = profile.d) === null || _a === void 0 ? void 0 : _a.call(profile);
            });
            active = false;
        }
    }

    const memoize = function memoize(fn, options = {}) {
        if (isMemoized(fn)) {
            return memoize(fn.fn, Object.assign({}, fn.options, options));
        }
        if (typeof fn !== 'function') {
            throw new TypeError(`Expected first parameter to be function; received ${typeof fn}`);
        }
        const cache = new Cache(options);
        const memoized = createMemoizedMethod(fn, cache, options.forceUpdate);
        const { expires, statsName } = options;
        memoized.cache = cache;
        memoized.expirationManager = expires != null ? new ExpirationManager(cache, expires) : null;
        memoized.fn = fn;
        memoized.isMemoized = true;
        memoized.options = options;
        memoized.statsManager = statsName != null ? new StatsManager(cache, statsName) : null;
        return memoized;
    };
    function createMemoizedMethod(fn, cache, forceUpdate) {
        const memoized = function memoized(...args) {
            const key = cache.k ? cache.k(args) : args;
            let node = cache.g(key);
            if (!node) {
                node = cache.n(key, fn.apply(this, args));
            }
            else if (node !== cache.h) {
                cache.u(node, undefined, true);
            }
            else if (cache.o) {
                cache.o.n('hit', node);
            }
            return node.v;
        };
        if (!forceUpdate) {
            return memoized;
        }
        return function wrappedMemoized(...args) {
            if (!forceUpdate(args) || !cache.has(args)) {
                return memoized.apply(this, args);
            }
            const value = fn.apply(this, args);
            cache.set(args, value, 'forced');
            return value;
        };
    }

    exports.clearStats = clearStats;
    exports.getStats = getStats;
    exports.isCollectingStats = isCollectingStats;
    exports.memoize = memoize;
    exports.startCollectingStats = startCollectingStats;
    exports.stopCollectingStats = stopCollectingStats;

}));
//# sourceMappingURL=index.js.map
