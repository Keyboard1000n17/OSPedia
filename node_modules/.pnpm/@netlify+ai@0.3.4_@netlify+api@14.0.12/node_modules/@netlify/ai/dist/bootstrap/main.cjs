"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/bootstrap/main.ts
var main_exports = {};
__export(main_exports, {
  fetchAIGatewayToken: () => fetchAIGatewayToken,
  fetchAIProviders: () => fetchAIProviders,
  parseAIGatewayContext: () => parseAIGatewayContext,
  setupAIGateway: () => setupAIGateway
});
module.exports = __toCommonJS(main_exports);
var fetchAIProviders = async ({ api }) => {
  try {
    if (!api.accessToken) {
      return [];
    }
    const data = await api.getAIGatewayProviders();
    if (!data.providers) {
      return [];
    }
    const envVars = [];
    for (const provider of Object.values(data.providers)) {
      if (provider.token_env_var && provider.url_env_var) {
        envVars.push({
          key: provider.token_env_var,
          url: provider.url_env_var
        });
      }
    }
    return envVars;
  } catch (error) {
    console.warn(`Failed to fetch AI providers: ${error instanceof Error ? error.message : String(error)}`);
    return [];
  }
};
var fetchAIGatewayToken = async ({
  api,
  siteId
}) => {
  try {
    if (!api.accessToken) {
      return null;
    }
    const data = await api.getAIGatewayToken({ site_id: siteId });
    if (!data.token || !data.url) {
      return null;
    }
    return {
      token: data.token,
      url: data.url
    };
  } catch (error) {
    console.warn(
      `Failed to fetch AI Gateway token for site ${siteId}: ${error instanceof Error ? error.message : String(error)}`
    );
    return null;
  }
};
var setupAIGateway = async (config) => {
  const { api, env, siteID, siteURL } = config;
  if (siteID && siteID !== "unlinked" && siteURL) {
    const [aiGatewayToken, envVars] = await Promise.all([
      fetchAIGatewayToken({ api, siteId: siteID }),
      fetchAIProviders({ api })
    ]);
    if (aiGatewayToken) {
      const aiGatewayContext = JSON.stringify({
        token: aiGatewayToken.token,
        url: `${siteURL}/.netlify/ai`,
        envVars
      });
      const base64Context = Buffer.from(aiGatewayContext).toString("base64");
      env.AI_GATEWAY = { sources: ["internal"], value: base64Context };
    }
  }
};
var parseAIGatewayContext = (aiGatewayValue) => {
  try {
    if (aiGatewayValue) {
      const decodedContext = Buffer.from(aiGatewayValue, "base64").toString("utf8");
      const aiGatewayContext = JSON.parse(decodedContext);
      return aiGatewayContext;
    }
  } catch {
  }
  return void 0;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  fetchAIGatewayToken,
  fetchAIProviders,
  parseAIGatewayContext,
  setupAIGateway
});
//# sourceMappingURL=main.cjs.map