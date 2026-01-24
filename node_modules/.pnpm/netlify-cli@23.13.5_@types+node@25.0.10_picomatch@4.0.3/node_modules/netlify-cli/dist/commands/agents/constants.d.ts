/**
 * Available agent types for task creation
 */
export declare const AVAILABLE_AGENTS: readonly [{
    readonly name: "Claude";
    readonly value: "claude";
}, {
    readonly name: "Codex";
    readonly value: "codex";
}, {
    readonly name: "Gemini";
    readonly value: "gemini";
}];
/**
 * Valid agent task states
 */
export declare const AGENT_STATES: readonly ["new", "running", "done", "error", "cancelled", "archived"];
/**
 * Valid agent session states
 */
export declare const SESSION_STATES: readonly ["new", "running", "done", "error", "cancelled"];
/**
 * Color mapping for agent task status display
 */
export declare const STATUS_COLORS: {
    readonly new: import("chalk").ChalkInstance;
    readonly running: import("chalk").ChalkInstance;
    readonly done: import("chalk").ChalkInstance;
    readonly error: import("chalk").ChalkInstance;
    readonly cancelled: import("chalk").ChalkInstance;
    readonly archived: import("chalk").ChalkInstance;
};
/**
 * Type definitions extracted from constants
 */
export type AgentState = (typeof AGENT_STATES)[number];
export type SessionState = (typeof SESSION_STATES)[number];
export type AvailableAgent = (typeof AVAILABLE_AGENTS)[number]['value'];
//# sourceMappingURL=constants.d.ts.map