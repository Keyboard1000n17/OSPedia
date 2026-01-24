import type { ResolvedFlags } from '../../core/normalize_flags.js';
import { Logs } from '../../log/logger.js';
export declare const startErrorMonitor: (config: {
    flags: ResolvedFlags;
    logs?: Logs;
    bugsnagKey?: string;
}) => any;
