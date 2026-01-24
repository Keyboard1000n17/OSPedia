import type { OptionValues } from 'commander';
import type BaseCommand from '../base-command.js';
import type { AgentRunner } from './types.js';
interface AgentCreateOptions extends OptionValues {
    prompt?: string;
    agent?: string;
    branch?: string;
    model?: string;
}
export declare const agentsCreate: (promptArg: string, options: AgentCreateOptions, command: BaseCommand) => Promise<AgentRunner>;
export {};
//# sourceMappingURL=agents-create.d.ts.map