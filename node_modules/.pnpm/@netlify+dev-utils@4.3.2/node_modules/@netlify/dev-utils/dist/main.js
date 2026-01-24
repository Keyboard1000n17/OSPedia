// src/lib/global-config.ts
import fs from "fs/promises";
import fss from "fs";
import path2 from "path";
import * as dot from "dot-prop";
import { v4 as uuidv4 } from "uuid";
import { sync as writeFileAtomicSync } from "write-file-atomic";

// src/lib/paths.ts
import os from "os";
import path from "path";
import envPaths from "env-paths";
var OSBasedPaths = envPaths("netlify", { suffix: "" });
var NETLIFY_HOME = ".netlify";
var getLegacyPathInHome = (paths) => path.join(os.homedir(), NETLIFY_HOME, ...paths);
var getPathInHome = (paths) => path.join(OSBasedPaths.config, ...paths);
var getPathInProject = (paths) => path.join(NETLIFY_HOME, ...paths);

// src/lib/global-config.ts
var GlobalConfigStore = class {
  #storagePath;
  constructor(options = {}) {
    this.#storagePath = getPathInHome(["config.json"]);
    if (options.defaults) {
      const config = this.getConfig();
      this.writeConfig({ ...options.defaults, ...config });
    }
  }
  get all() {
    return this.getConfig();
  }
  set(key, value) {
    const config = this.getConfig();
    const updatedConfig = dot.setProperty(config, key, value);
    this.writeConfig(updatedConfig);
  }
  get(key) {
    return dot.getProperty(this.getConfig(), key);
  }
  getConfig() {
    let raw;
    try {
      raw = fss.readFileSync(this.#storagePath, "utf8");
    } catch (err) {
      if (err instanceof Error && "code" in err) {
        if (err.code === "ENOENT") {
          return {};
        }
      }
      throw err;
    }
    try {
      return JSON.parse(raw);
    } catch {
      writeFileAtomicSync(this.#storagePath, "", { mode: 384 });
      return {};
    }
  }
  writeConfig(value) {
    fss.mkdirSync(path2.dirname(this.#storagePath), { mode: 448, recursive: true });
    writeFileAtomicSync(this.#storagePath, JSON.stringify(value, void 0, "	"), { mode: 384 });
  }
};
var globalConfigDefaults = {
  /* disable stats from being sent to Netlify */
  telemetryDisabled: false,
  /* cliId */
  cliId: uuidv4()
};
var configStore;
var getGlobalConfigStore = async () => {
  if (!configStore) {
    const legacyPath = getLegacyPathInHome(["config.json"]);
    let legacyConfig;
    try {
      legacyConfig = JSON.parse(await fs.readFile(legacyPath, "utf8"));
    } catch {
    }
    const defaults = { ...globalConfigDefaults, ...legacyConfig };
    configStore = new GlobalConfigStore({ defaults });
  }
  return configStore;
};
var resetConfigCache = () => {
  configStore = void 0;
};

// src/lib/api-token.ts
var getAPIToken = async () => {
  const globalConfig = await getGlobalConfigStore();
  const userId = globalConfig.get("userId");
  const token = globalConfig.get(`users.${userId}.auth.token`);
  return token;
};

// src/lib/base64.ts
var exceptionsList = /* @__PURE__ */ new Set([
  "application/csp-report",
  "application/graphql",
  "application/json",
  "application/javascript",
  "application/x-www-form-urlencoded",
  "application/x-ndjson",
  "application/xml"
]);
var shouldBase64Encode = (contentType) => {
  if (!contentType) {
    return true;
  }
  const [contentTypeSegment] = contentType.split(";");
  contentType = contentTypeSegment;
  contentType = contentType.toLowerCase();
  if (contentType.startsWith("text/")) {
    return false;
  }
  if (contentType.endsWith("+json") || contentType.endsWith("+xml")) {
    return false;
  }
  if (exceptionsList.has(contentType)) {
    return false;
  }
  return true;
};

// src/lib/errors.ts
import { readFile } from "fs/promises";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
var templatesPath = dirname(fileURLToPath(import.meta.url));
var functionErrorTemplatePath = resolve(templatesPath, "../src/templates/function-error.html");
var errorTemplateFile;
var renderFunctionErrorPage = async (errString, functionType) => {
  const errorDetailsRegex = /<!--@ERROR-DETAILS-->/g;
  const functionTypeRegex = /<!--@FUNCTION-TYPE-->/g;
  try {
    errorTemplateFile = errorTemplateFile || await readFile(functionErrorTemplatePath, "utf-8");
    return errorTemplateFile.replace(errorDetailsRegex, errString).replace(functionTypeRegex, functionType);
  } catch {
    return errString;
  }
};

// src/lib/geo-location.ts
var mockLocation = {
  city: "San Francisco",
  country: { code: "US", name: "United States" },
  subdivision: { code: "CA", name: "California" },
  longitude: 0,
  latitude: 0,
  timezone: "UTC"
};
var API_URL = "https://netlifind.netlify.app";
var STATE_GEO_PROPERTY = "geolocation";
var CACHE_TTL = 864e5;
var REQUEST_TIMEOUT = 1e4;
var getGeoLocation = async ({
  enabled = true,
  cache = true,
  state
}) => {
  if (!enabled) {
    return mockLocation;
  }
  const cacheObject = state.get(STATE_GEO_PROPERTY);
  if (cacheObject !== void 0 && cache) {
    const age = Date.now() - cacheObject.timestamp;
    if (age < CACHE_TTL) {
      return cacheObject.data;
    }
  }
  try {
    const data = await getGeoLocationFromAPI();
    const newCacheObject = {
      data,
      timestamp: Date.now()
    };
    state.set(STATE_GEO_PROPERTY, newCacheObject);
    return data;
  } catch {
    return mockLocation;
  }
};
var getGeoLocationFromAPI = async () => {
  const res = await fetch(API_URL, {
    method: "GET",
    signal: AbortSignal.timeout(REQUEST_TIMEOUT)
  });
  const { geo } = await res.json();
  return geo;
};

// src/lib/gitignore.ts
import { readFile as readFile2, stat, writeFile } from "fs/promises";
import path3 from "path";
import parseIgnore from "parse-gitignore";
var hasGitIgnore = async function(dir) {
  const gitIgnorePath = path3.join(dir, ".gitignore");
  try {
    const ignoreStats = await stat(gitIgnorePath);
    return ignoreStats.isFile();
  } catch {
    return false;
  }
};
var ensureNetlifyIgnore = async (dir, logger) => {
  const gitIgnorePath = path3.join(dir, ".gitignore");
  const ignoreContent = "# Local Netlify folder\n.netlify\n";
  if (!await hasGitIgnore(dir)) {
    await writeFile(gitIgnorePath, ignoreContent, "utf8");
    return false;
  }
  let gitIgnoreContents;
  let ignorePatterns;
  try {
    gitIgnoreContents = await readFile2(gitIgnorePath, "utf8");
    ignorePatterns = parseIgnore.parse(gitIgnoreContents);
  } catch {
  }
  if (!ignorePatterns?.patterns.some((pattern) => /(^|\/|\\)\.netlify($|\/|\\)/.test(pattern))) {
    logger?.log();
    logger?.log("Adding local .netlify folder to .gitignore file...");
    const newContents = `${gitIgnoreContents}
${ignoreContent}`;
    await writeFile(gitIgnorePath, newContents, "utf8");
  }
};

// src/lib/headers.ts
var headers = {
  BlobsInfo: "x-nf-blobs-info"
};
var toMultiValueHeaders = (headers2) => {
  const headersObj = {};
  for (const [name, value] of headers2.entries()) {
    if (name in headersObj) {
      headersObj[name].push(value);
    } else {
      headersObj[name] = [value];
    }
  }
  return headersObj;
};

// src/lib/local-state.ts
import fs2 from "fs";
import path4 from "path";
import process2 from "process";
import { deleteProperty, getProperty as getProperty2, hasProperty, setProperty as setProperty2 } from "dot-prop";
import { file as findUpSync } from "empathic/find";
import writeFileAtomic from "write-file-atomic";
var STATE_PATH = getPathInProject(["state.json"]);
var permissionError = "You don't have access to this file.";
var findStatePath = (cwd) => {
  const statePath = findUpSync(STATE_PATH, { cwd });
  if (!statePath) {
    return path4.join(cwd, STATE_PATH);
  }
  return statePath;
};
var LocalState = class {
  path;
  constructor(cwd) {
    this.path = findStatePath(cwd);
  }
  get all() {
    try {
      return JSON.parse(fs2.readFileSync(this.path));
    } catch (error) {
      if (error.code === "ENOENT" || error.code === "ENOTDIR") {
        return {};
      }
      if (error.code === "EACCES") {
        error.message = `${error.message}
${permissionError}
`;
      }
      if (error.name === "SyntaxError") {
        writeFileAtomic.sync(this.path, "");
        return {};
      }
      throw error;
    }
  }
  set all(val) {
    try {
      fs2.mkdirSync(path4.dirname(this.path), { recursive: true });
      writeFileAtomic.sync(this.path, JSON.stringify(val, null, "	"));
    } catch (error) {
      if (error.code === "EACCES") {
        error.message = `${error.message}
${permissionError}
`;
      }
      throw error;
    }
  }
  get size() {
    return Object.keys(this.all || {}).length;
  }
  // @ts-expect-error TS(7006) FIXME: Parameter 'key' implicitly has an 'any' type.
  get(key) {
    if (key === "siteId" && process2.env.NETLIFY_SITE_ID) {
      return process2.env.NETLIFY_SITE_ID;
    }
    return getProperty2(this.all, key);
  }
  // @ts-expect-error TS(7019) FIXME: Rest parameter 'args' implicitly has an 'any[]' ty... Remove this comment to see the full error message
  set(...args) {
    const [key, val] = args;
    const config = this.all;
    if (args.length === 1) {
      Object.entries(key).forEach(([keyPart, value]) => {
        setProperty2(config, keyPart, value);
      });
    } else {
      setProperty2(config, key, val);
    }
    this.all = config;
  }
  // @ts-expect-error TS(7006) FIXME: Parameter 'key' implicitly has an 'any' type.
  has(key) {
    return hasProperty(this.all, key);
  }
  // @ts-expect-error TS(7006) FIXME: Parameter 'key' implicitly has an 'any' type.
  delete(key) {
    const config = this.all;
    deleteProperty(config, key);
    this.all = config;
  }
  clear() {
    this.all = {};
  }
};

// src/lib/logger.ts
import ansis from "ansis";
var netlifyCommand = ansis.cyanBright;
var netlifyCyan = ansis.rgb(40, 180, 170);
var netlifyBanner = netlifyCyan("\u2B25 Netlify");
var warning = (message) => ansis.yellow(`\u26A0 Warning: ${message}`);

// src/lib/memoize.ts
var DEBOUNCE_INTERVAL = 300;
var memoize = ({ cache, cacheKey, command }) => {
  if (cache[cacheKey] === void 0) {
    cache[cacheKey] = {
      task: command().finally(() => {
        const entry = cache[cacheKey];
        cache[cacheKey] = void 0;
        if (entry?.enqueued !== void 0) {
          memoize({ cache, cacheKey, command });
        }
      }),
      timestamp: Date.now()
    };
  } else if (Date.now() > cache[cacheKey].timestamp + DEBOUNCE_INTERVAL) {
    cache[cacheKey].enqueued = true;
  }
  return cache[cacheKey].task;
};

// src/lib/process.ts
import { platform } from "os";
import { satisfies } from "semver";
var SERVER_KILL_TIMEOUT = 1e3;
var killProcess = (ps) => {
  if (!ps || ps.exitCode !== null) {
    return;
  }
  return new Promise((resolve2, reject) => {
    void ps.on("close", () => {
      resolve2();
    });
    void ps.on("error", reject);
    try {
      ps.kill("SIGTERM", {
        forceKillAfterTimeout: platform() === "win32" && satisfies(process.version, ">=21") ? false : SERVER_KILL_TIMEOUT
      });
    } catch {
    }
  });
};

// src/server/http_server.ts
import http from "http";
import { createServerAdapter } from "@whatwg-node/server";
var HTTPServer = class {
  url;
  handler;
  nodeServer;
  constructor(handler) {
    this.handler = handler;
  }
  async start(port = 0) {
    if (this.url) {
      return this.url;
    }
    const adapter = createServerAdapter((request) => this.handler(request));
    const server = http.createServer(adapter);
    this.nodeServer = server;
    return new Promise((resolve2, reject) => {
      server.listen(port, () => {
        const address = server.address();
        if (!address || typeof address === "string") {
          return reject(new Error("Server cannot be started on a pipe or Unix socket"));
        }
        const url = `http://localhost:${address.port}`;
        this.url = url;
        resolve2(url);
      });
    });
  }
  async stop() {
    const server = this.nodeServer;
    if (!server) {
      return;
    }
    await new Promise((resolve2, reject) => {
      server.close((error) => {
        if (error) {
          return reject(error);
        }
        resolve2(null);
      });
    });
  }
};

// src/lib/reqres.ts
import { Readable } from "stream";
var normalizeHeaders = (headers2) => {
  const result = [];
  for (const [key, value] of Object.entries(headers2)) {
    if (Array.isArray(value)) {
      result.push([key, value.join(",")]);
    } else if (typeof value === "string") {
      result.push([key, value]);
    }
  }
  return result;
};
var toWebRequest = (nodeReq, urlPath) => {
  const { method, headers: headers2, url = "" } = nodeReq;
  const ac = new AbortController();
  const origin = `http://${headers2.host ?? "localhost"}`;
  const fullUrl = new URL(urlPath ?? url, origin);
  const webStream = Readable.toWeb(nodeReq);
  nodeReq.once("aborted", () => {
    ac.abort();
  });
  return new Request(fullUrl.href, {
    method,
    headers: normalizeHeaders(headers2),
    body: method === "GET" || method === "HEAD" ? null : webStream,
    // @ts-expect-error -- Not typed
    duplex: "half"
  });
};
var fromWebResponse = async (webRes, res) => {
  res.statusCode = webRes.status;
  webRes.headers.forEach((value, name) => {
    res.setHeader(name, value);
  });
  if (webRes.body) {
    const reader = webRes.body.getReader();
    const writer = res;
    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        break;
      }
      writer.write(value);
    }
  }
  res.end();
};

// src/lib/watch-debounced.ts
import { once } from "events";
import chokidar from "chokidar";
import decache from "decache";
import { debounce } from "dettle";
var DEBOUNCE_WAIT = 100;
var noOp = () => {
};
var watchDebounced = async (target, { depth, ignored = [], onAdd = noOp, onChange = noOp, onUnlink = noOp }) => {
  const baseIgnores = [/\/(node_modules|.git)\//];
  const watcher = chokidar.watch(target, {
    depth,
    ignored: [...baseIgnores, ...ignored],
    ignoreInitial: true
  });
  await once(watcher, "ready");
  let onChangeQueue = [];
  let onAddQueue = [];
  let onUnlinkQueue = [];
  const debouncedOnChange = debounce(
    () => {
      onChange(onChangeQueue);
      onChangeQueue = [];
    },
    DEBOUNCE_WAIT,
    { leading: true }
  );
  const debouncedOnAdd = debounce(
    () => {
      onAdd(onAddQueue);
      onAddQueue = [];
    },
    DEBOUNCE_WAIT,
    { leading: true }
  );
  const debouncedOnUnlink = debounce(
    () => {
      onUnlink(onUnlinkQueue);
      onUnlinkQueue = [];
    },
    DEBOUNCE_WAIT,
    { leading: true }
  );
  watcher.on("change", (path5) => {
    decache(path5);
    onChangeQueue.push(path5);
    debouncedOnChange();
  }).on("unlink", (path5) => {
    decache(path5);
    onUnlinkQueue.push(path5);
    debouncedOnUnlink();
  }).on("add", (path5) => {
    decache(path5);
    onAddQueue.push(path5);
    debouncedOnAdd();
  });
  return watcher;
};

// src/test/event_inspector.ts
import { EventEmitter } from "events";
var DEFAULT_TIMEOUT = 5e3;
var EventInspector = class extends EventEmitter {
  debug;
  events;
  constructor({ debug } = {}) {
    super();
    this.debug = debug === true;
    this.events = [];
  }
  handleEvent(event) {
    this.events.push(event);
    this.emit("eventReceived", event);
  }
  waitFor(filter, timeoutMs = DEFAULT_TIMEOUT) {
    return new Promise((resolve2, reject) => {
      setTimeout(() => {
        reject(new Error(`\`waitFor\` timed out after ${timeoutMs} ms`));
      }, timeoutMs);
      this.on("eventReceived", (event) => {
        if (this.debug) {
          console.log("[EventInspector] Event received:", event);
        }
        if (filter(event)) {
          resolve2(event);
        }
      });
    });
  }
};

// src/test/fetch.ts
import assert from "assert";
import { Readable as Readable2 } from "stream";
var MockFetch = class {
  originalFetch;
  requests;
  constructor() {
    this.originalFetch = globalThis.fetch;
    this.requests = [];
  }
  addExpectedRequest({
    body,
    headers: headers2 = {},
    method,
    response,
    url
  }) {
    this.requests.push({ body, fulfilled: false, headers: headers2, method, response, url });
    return this;
  }
  delete(options) {
    return this.addExpectedRequest({ ...options, method: "delete" });
  }
  get(options) {
    return this.addExpectedRequest({ ...options, method: "get" });
  }
  head(options) {
    return this.addExpectedRequest({ ...options, method: "head" });
  }
  post(options) {
    return this.addExpectedRequest({ ...options, method: "post" });
  }
  put(options) {
    return this.addExpectedRequest({ ...options, method: "put" });
  }
  get fetch() {
    return async (...args) => {
      const [reqOrURL, options] = args;
      const url = (reqOrURL instanceof Request ? reqOrURL.url : reqOrURL).toString();
      const method = options?.method ?? "get";
      const headers2 = options?.headers;
      const match = this.requests.find(
        (request) => request.method.toLowerCase() === method.toLowerCase() && request.url === url && !request.fulfilled
      );
      if (!match) {
        throw new Error(`Unexpected fetch call: ${method} ${url}`);
      }
      if (typeof match.headers === "function") {
        assert.doesNotThrow(() => match.headers(headers2));
      } else {
        for (const key in match.headers) {
          assert.equal(headers2[key], match.headers[key]);
        }
      }
      if (match.body !== void 0) {
        let requestBody = null;
        if (options?.body) {
          if (typeof options.body === "string") {
            requestBody = options.body;
          } else {
            requestBody = await readAsString(Readable2.fromWeb(options.body));
          }
        }
        if (typeof match.body === "string") {
          assert.equal(requestBody, match.body);
        } else if (typeof match.body === "function") {
          const bodyFn = match.body;
          assert.doesNotThrow(() => bodyFn(requestBody));
        } else if (match.body === null) {
          assert.equal(options?.body, void 0);
        }
      }
      match.fulfilled = true;
      if (match.response instanceof Error) {
        throw match.response;
      }
      if (typeof match.response === "function") {
        return match.response();
      }
      return match.response;
    };
  }
  get fulfilled() {
    return this.requests.every((request) => request.fulfilled);
  }
  inject() {
    globalThis.fetch = this.fetch;
    return this;
  }
  restore() {
    globalThis.fetch = this.originalFetch;
  }
};
var readAsString = (input) => new Promise((resolve2, reject) => {
  let buffer = "";
  input.on("data", (chunk) => {
    buffer += chunk;
  });
  input.on("error", (error) => {
    reject(error);
  });
  input.on("end", () => {
    resolve2(buffer);
  });
});

// src/test/fixture.ts
import { exec } from "child_process";
import { promises as fs3 } from "fs";
import { EOL } from "os";
import { dirname as dirname2, join } from "path";
import { promisify } from "util";
import tmp from "tmp-promise";
var run = promisify(exec);
var Fixture = class {
  directory;
  sourceDirectory;
  files;
  npmDependencies;
  constructor() {
    this.files = {};
    this.npmDependencies = {};
  }
  ensureDirectory() {
    if (!this.directory) {
      throw new Error("Fixture hasn't been initialized. Did you call `create()`?");
    }
    return this.directory.path;
  }
  async installNpmDependencies() {
    if (Object.keys(this.npmDependencies).length === 0) {
      return;
    }
    const directory = this.ensureDirectory();
    const packageJSON = {
      name: "fixture",
      version: "0.0.0",
      type: "module",
      dependencies: this.npmDependencies
    };
    const packageJSONPath = join(directory, "package.json");
    await fs3.writeFile(packageJSONPath, JSON.stringify(packageJSON, null, 2));
    console.debug("Installing npm dependencies in fixture...");
    await run("npm install", { cwd: directory });
    console.debug("Installed npm dependencies in fixture");
  }
  async create() {
    if (!this.directory) {
      this.directory = await tmp.dir({ unsafeCleanup: true });
      if (this.directory.path.startsWith("/var/")) {
        this.directory.path = this.directory.path.replace("/var/", "/private/var/");
      }
    }
    if (this.sourceDirectory) {
      console.debug(`Copying fixture from ${this.sourceDirectory} to ${this.directory.path}`);
      await fs3.cp(this.sourceDirectory, this.directory.path, { recursive: true });
      console.debug("Copied fixture");
    }
    for (const relativePath in this.files) {
      const filePath = join(this.directory.path, relativePath);
      await fs3.mkdir(dirname2(filePath), { recursive: true });
      await fs3.writeFile(filePath, this.files[relativePath]);
    }
    await this.installNpmDependencies();
    return this.directory.path;
  }
  async deleteFile(path5) {
    const filePath = join(this.ensureDirectory(), path5);
    try {
      await fs3.rm(filePath, { force: true });
    } catch (error) {
      if (error.code !== "ENOENT") {
        throw error;
      }
    }
  }
  async destroy() {
    if (process.env.CI) return;
    await fs3.rm(this.directory.path, { force: true, recursive: true });
  }
  fromDirectory(path5) {
    this.sourceDirectory = path5;
    return this;
  }
  withFile(path5, contents) {
    this.files[path5] = contents;
    return this;
  }
  withHeadersFile({
    headers: headers2 = [],
    pathPrefix = ""
  }) {
    const dest = join(pathPrefix, "_headers");
    const contents = headers2.map(
      ({ headers: headersValues, path: headerPath }) => `${headerPath}${EOL}${headersValues.map((header) => `  ${header}`).join(EOL)}`
    ).join(EOL);
    return this.withFile(dest, contents);
  }
  withStateFile(state) {
    this.files[".netlify/state.json"] = JSON.stringify(state);
    return this;
  }
  async writeFile(path5, contents) {
    const filePath = join(this.ensureDirectory(), path5);
    await fs3.writeFile(filePath, contents);
  }
  withPackages(packages) {
    this.npmDependencies = { ...this.npmDependencies, ...packages };
    return this;
  }
};

// src/test/image.ts
import { imageSize } from "image-size";
import { generateImage as generateImageCallback } from "js-image-generator";
async function generateImage(width, height) {
  return new Promise((resolve2, reject) => {
    generateImageCallback(width, height, 80, (error, image) => {
      if (error) {
        reject(error);
      } else {
        const imageBuffer = image.data;
        resolve2(imageBuffer);
      }
    });
  });
}
function createImageServerHandler(imageConfigFromURL) {
  return async (request) => {
    const url = new URL(request.url);
    const imageConfig = imageConfigFromURL(url);
    if (!imageConfig) {
      return new Response("Not Found", { status: 404, headers: { "Content-Type": "text/plain" } });
    }
    try {
      const imageBuffer = await generateImage(imageConfig.width, imageConfig.height);
      return new Response(imageBuffer, {
        headers: {
          "Content-Type": "image/jpeg",
          "Content-Length": imageBuffer.length.toString()
        }
      });
    } catch (error) {
      console.log("Error generating image", error);
      return new Response("Error generating image", { status: 500 });
    }
  };
}
async function getImageResponseSize(response) {
  if (!response.headers.get("content-type")?.startsWith("image/")) {
    throw new Error("Response is not an image");
  }
  return imageSize(new Uint8Array(await response.arrayBuffer()));
}

// src/test/logger.ts
var createMockLogger = () => ({
  log: () => {
  },
  warn: () => {
  },
  error: () => {
  }
});
export {
  EventInspector,
  Fixture,
  GlobalConfigStore,
  HTTPServer,
  LocalState,
  MockFetch,
  createImageServerHandler,
  createMockLogger,
  ensureNetlifyIgnore,
  fromWebResponse,
  generateImage,
  getAPIToken,
  getGeoLocation,
  getGlobalConfigStore,
  getImageResponseSize,
  headers,
  killProcess,
  memoize,
  mockLocation,
  netlifyBanner,
  netlifyCommand,
  netlifyCyan,
  renderFunctionErrorPage,
  resetConfigCache,
  shouldBase64Encode,
  toMultiValueHeaders,
  toWebRequest,
  warning,
  watchDebounced
};
