import type { OptionValues } from 'commander';
import type BaseCommand from '../base-command.js';
import type { AgentRunner } from './types.js';
interface AgentStopOptions extends OptionValues {
    json?: boolean;
}
export declare const agentsStop: (id: string, options: AgentStopOptions, command: BaseCommand) => Promise<AgentRunner | {
    success: boolean;
}>;
export {};
//# sourceMappingURL=agents-stop.d.ts.map