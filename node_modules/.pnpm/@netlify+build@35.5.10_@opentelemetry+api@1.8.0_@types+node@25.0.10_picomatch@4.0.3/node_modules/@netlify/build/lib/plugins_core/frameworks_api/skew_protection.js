import { promises as fs } from 'node:fs';
import { z } from 'zod';
const deployIDSourceTypeSchema = z.enum(['cookie', 'header', 'query']);
const deployIDSourceSchema = z.object({
    type: deployIDSourceTypeSchema,
    name: z.string(),
});
const skewProtectionConfigSchema = z.object({
    patterns: z.array(z.string()),
    sources: z.array(deployIDSourceSchema),
});
const validateSkewProtectionConfig = (input) => {
    const { data, error, success } = skewProtectionConfigSchema.safeParse(input);
    if (success) {
        return data;
    }
    throw new Error(`Invalid skew protection configuration:\n\n${formatSchemaError(error)}`);
};
export const loadSkewProtectionConfig = async (configPath) => {
    let parsedData;
    try {
        const data = await fs.readFile(configPath, 'utf8');
        parsedData = JSON.parse(data);
    }
    catch (error) {
        // If the file doesn't exist, this is a non-error.
        if (error.code === 'ENOENT') {
            return;
        }
        throw new Error('Invalid skew protection configuration', { cause: error });
    }
    return validateSkewProtectionConfig(parsedData);
};
const formatSchemaError = (error) => {
    const lines = error.issues.map((issue) => `- ${issue.path.join('.')}: ${issue.message}`);
    return lines.join('\n');
};
