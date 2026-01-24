import { type ExecaChildProcess } from 'execa';
import { NetlifyConfig } from '../index.js';
import { BufferedLogs } from '../log/logger.js';
import { PluginsOptions } from './node_version.js';
export type ChildProcess = ExecaChildProcess<string>;
export declare const startPlugins: ({ timers, ...opts }: {
    [x: string]: any;
    timers: any;
}, ...args: any[]) => Promise<any>;
export declare const stopPlugins: ({ childProcesses, logs, verbose, pluginOptions, netlifyConfig, }: {
    logs: BufferedLogs;
    verbose: boolean;
    childProcesses: {
        childProcess: ExecaChildProcess;
    }[];
    pluginOptions: PluginsOptions[];
    netlifyConfig: NetlifyConfig;
}) => Promise<void>;
