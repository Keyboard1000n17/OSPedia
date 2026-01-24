import type { OptionValues } from 'commander';
import type BaseCommand from '../base-command.js';
import type { AgentRunner } from './types.js';
interface AgentListOptions extends OptionValues {
    status?: string;
    json?: boolean;
}
export declare const agentsList: (options: AgentListOptions, command: BaseCommand) => Promise<AgentRunner[] | null | undefined>;
export {};
//# sourceMappingURL=agents-list.d.ts.map