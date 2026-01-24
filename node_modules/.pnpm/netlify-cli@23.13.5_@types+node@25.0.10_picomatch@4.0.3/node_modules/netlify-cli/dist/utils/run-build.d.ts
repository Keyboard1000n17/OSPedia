import { type GeneratedFunction } from '@netlify/build';
import BaseCommand from '../commands/base-command.js';
import { $TSFixMe } from '../commands/types.js';
import { ServerSettings } from './types.js';
type RunNetlifyBuildOptions = {
    command: BaseCommand;
    options: $TSFixMe;
    settings: ServerSettings;
    env: NodeJS.ProcessEnv;
    timeline: 'dev' | 'build';
};
export declare function runNetlifyBuild(opts: RunNetlifyBuildOptions & {
    timeline: 'dev';
}): Promise<{
    configMutations: unknown;
    generatedFunctions: GeneratedFunction[];
}>;
export declare function runNetlifyBuild(opts: RunNetlifyBuildOptions & {
    timeline: 'build';
}): Promise<{
    configPath: string;
    generatedFunctions: GeneratedFunction[];
}>;
type RunTimelineOptions = Omit<Parameters<typeof runNetlifyBuild>[0], 'timeline'>;
export declare const runDevTimeline: (options: RunTimelineOptions) => Promise<{
    configMutations: unknown;
    generatedFunctions: GeneratedFunction[];
}>;
export declare const runBuildTimeline: (options: RunTimelineOptions) => Promise<{
    configPath: string;
    generatedFunctions: GeneratedFunction[];
}>;
export {};
//# sourceMappingURL=run-build.d.ts.map