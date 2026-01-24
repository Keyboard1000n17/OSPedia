export declare const TOP_PARENT_TAG = "run_netlify_build";
export declare const initTimers: () => never[];
type MeasureDurationOptions = {
    metricName?: string;
    parentTag?: string;
    category?: string;
    tags?: string[];
};
export declare const measureDuration: (func: any, stageTag: any, options?: MeasureDurationOptions) => ({ timers, ...opts }: {
    [x: string]: any;
    timers: any;
}, ...args: any[]) => Promise<any>;
export declare const createTimer: (stageTag: any, durationNs: any, { metricName, parentTag, category, tags, }?: MeasureDurationOptions) => {
    metricName: string;
    stageTag: any;
    parentTag: string;
    durationNs: any;
    category: string | undefined;
    tags: string[] | undefined;
};
export {};
