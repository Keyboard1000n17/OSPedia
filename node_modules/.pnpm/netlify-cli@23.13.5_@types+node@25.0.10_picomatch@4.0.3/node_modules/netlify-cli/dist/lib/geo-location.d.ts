import { type Geolocation } from '@netlify/dev-utils';
export { Geolocation };
interface State {
    get(key: string): unknown;
    set(key: string, value: unknown): void;
}
/**
 * Returns geolocation data from a remote API, the local cache, or a mock location, depending on the
 * specified mode.
 */
export declare const getGeoLocation: ({ geoCountry, mode, offline, state, }: {
    mode: "cache" | "update" | "mock";
    geoCountry?: string | undefined;
    offline?: boolean | undefined;
    state: State;
}) => Promise<Geolocation>;
//# sourceMappingURL=geo-location.d.ts.map