import { AVAILABLE_AGENTS, STATUS_COLORS } from './constants.js';
import { chalk } from '../../utils/command-helpers.js';
export const truncateText = (text, maxLength) => {
    if (text.length <= maxLength)
        return text;
    return text.substring(0, maxLength - 3) + '...';
};
export const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString();
};
export const formatDuration = (startTime, endTime) => {
    const start = new Date(startTime);
    const end = endTime ? new Date(endTime) : new Date();
    const duration = end.getTime() - start.getTime();
    const hours = Math.floor(duration / 3600000);
    const minutes = Math.floor((duration % 3600000) / 60000);
    const seconds = Math.floor((duration % 60000) / 1000);
    if (hours > 0) {
        return `${hours.toString()}h ${minutes.toString()}m ${seconds.toString()}s`;
    }
    if (minutes > 0) {
        return `${minutes.toString()}m ${seconds.toString()}s`;
    }
    return `${seconds.toString()}s`;
};
export const formatStatus = (status) => {
    const colorFn = status in STATUS_COLORS ? STATUS_COLORS[status] : chalk.white;
    return colorFn(status.toUpperCase());
};
export const validatePrompt = (input) => {
    if (!input || input.trim().length === 0) {
        return 'Please provide a prompt for the agent';
    }
    if (input.trim().length < 5) {
        return 'Please provide a more detailed prompt (at least 5 characters)';
    }
    return true;
};
export const validateAgent = (agent) => {
    const validAgents = AVAILABLE_AGENTS.map((a) => a.value);
    if (!validAgents.includes(agent)) {
        return `Invalid agent. Available agents: ${validAgents.join(', ')}`;
    }
    return true;
};
export const getAgentName = (agent) => {
    const entry = AVAILABLE_AGENTS.find((a) => a.value === agent);
    return entry ? entry.name : agent;
};
//# sourceMappingURL=utils.js.map