import { z } from 'zod';
declare const deployIDSourceTypeSchema: z.ZodEnum<["cookie", "header", "query"]>;
declare const deployIDSourceSchema: z.ZodObject<{
    type: z.ZodEnum<["cookie", "header", "query"]>;
    name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    type: "cookie" | "header" | "query";
}, {
    name: string;
    type: "cookie" | "header" | "query";
}>;
declare const skewProtectionConfigSchema: z.ZodObject<{
    patterns: z.ZodArray<z.ZodString, "many">;
    sources: z.ZodArray<z.ZodObject<{
        type: z.ZodEnum<["cookie", "header", "query"]>;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        type: "cookie" | "header" | "query";
    }, {
        name: string;
        type: "cookie" | "header" | "query";
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    patterns: string[];
    sources: {
        name: string;
        type: "cookie" | "header" | "query";
    }[];
}, {
    patterns: string[];
    sources: {
        name: string;
        type: "cookie" | "header" | "query";
    }[];
}>;
export type SkewProtectionConfig = z.infer<typeof skewProtectionConfigSchema>;
export type DeployIDSource = z.infer<typeof deployIDSourceSchema>;
export type DeployIDSourceType = z.infer<typeof deployIDSourceTypeSchema>;
export declare const loadSkewProtectionConfig: (configPath: string) => Promise<{
    patterns: string[];
    sources: {
        name: string;
        type: "cookie" | "header" | "query";
    }[];
} | undefined>;
export {};
