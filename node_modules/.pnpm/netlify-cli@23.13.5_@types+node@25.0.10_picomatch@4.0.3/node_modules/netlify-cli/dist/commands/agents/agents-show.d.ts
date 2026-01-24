import type { OptionValues } from 'commander';
import type BaseCommand from '../base-command.js';
import type { AgentRunner } from './types.js';
interface AgentShowOptions extends OptionValues {
    json?: boolean;
}
export declare const agentsShow: (id: string, options: AgentShowOptions, command: BaseCommand) => Promise<AgentRunner>;
export {};
//# sourceMappingURL=agents-show.d.ts.map