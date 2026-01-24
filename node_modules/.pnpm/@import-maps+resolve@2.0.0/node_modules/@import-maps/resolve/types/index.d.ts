export type ImportMap = import("./src/types").ImportMap;
export type ScopesMap = {
    [x: string]: Record<string, string>;
};
export type SpecifierMap = {
    [x: string]: string;
};
export type ParsedImportMap = import("./src/types").ParsedImportMap;
export type ParsedScopesMap = {
    [x: string]: Record<string, URL>;
};
export type ParsedSpecifierMap = {
    [x: string]: URL;
};
import { parseFromString } from "./src/parser";
import { parse } from "./src/parser";
import { resolve } from "./src/resolver";
export { parseFromString, parse, resolve };
//# sourceMappingURL=index.d.ts.map