import { join } from 'path';
import { getPathInProject } from '../settings.js';
import { INTERNAL_EDGE_FUNCTIONS_FOLDER } from './consts.js';
import { fileExistsAsync } from '../fs.js';
export const getUserEdgeFunctionsDirectory = (command) => {
    return command.netlify.config.build.edge_functions;
};
export const getInternalEdgeFunctionsDirectory = (command) => {
    return join(command.workingDir, getPathInProject([INTERNAL_EDGE_FUNCTIONS_FOLDER]));
};
export const getFrameworkEdgeFunctionsDirectory = (command) => {
    return command.netlify.frameworksAPIPaths.edgeFunctions.path;
};
const getAllEdgeFunctionsDirectories = (command) => {
    return [
        getUserEdgeFunctionsDirectory(command),
        getInternalEdgeFunctionsDirectory(command),
        getFrameworkEdgeFunctionsDirectory(command),
    ].filter(Boolean);
};
export const anyEdgeFunctionsDirectoryExists = async (command) => {
    const directoriesToCheck = getAllEdgeFunctionsDirectories(command);
    return (await Promise.all(directoriesToCheck.map(fileExistsAsync))).some(Boolean);
};
//# sourceMappingURL=get-directories.js.map