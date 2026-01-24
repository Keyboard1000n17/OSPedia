import {
  METADATA_HEADER_INTERNAL,
  SIGNED_URL_ACCEPT_HEADER,
  decodeMetadata,
  decodeName,
  encodeMetadata,
  encodeName,
  isNodeError
} from "./chunk-3OMJJ4EG.js";

// src/server.ts
import { createHmac } from "crypto";
import { createReadStream, promises as fs } from "fs";
import { dirname, join, relative, resolve, sep } from "path";
import { HTTPServer } from "@netlify/dev-utils";
var API_URL_PATH = /\/api\/v1\/blobs\/(?<site_id>[^/]+)\/(?<store_name>[^/]+)\/?(?<key>[^?]*)/;
var LEGACY_API_URL_PATH = /\/api\/v1\/sites\/(?<site_id>[^/]+)\/blobs\/?(?<key>[^?]*)/;
var LEGACY_DEFAULT_STORE = "production";
var REGION_PREFIX = "region:";
var Operation = /* @__PURE__ */ ((Operation2) => {
  Operation2["DELETE"] = "delete";
  Operation2["GET"] = "get";
  Operation2["GET_METADATA"] = "getMetadata";
  Operation2["LIST"] = "list";
  Operation2["SET"] = "set";
  return Operation2;
})(Operation || {});
var BlobsServer = class _BlobsServer {
  constructor({ debug, directory, logger, onRequest, port, token }) {
    this.address = "";
    this.port = port;
    this.debug = debug === true;
    this.directory = directory;
    this.logger = logger ?? console.log;
    this.onRequest = onRequest;
    this.token = token;
    this.tokenHash = createHmac("sha256", Math.random.toString()).update(token ?? Math.random.toString()).digest("hex");
  }
  dispatchOnRequestEvent(type, input) {
    if (!this.onRequest) {
      return;
    }
    const url = new URL(input);
    this.onRequest({ type, url: url.pathname + url.search });
  }
  async delete(req) {
    const apiMatch = this.parseAPIRequest(req);
    if (apiMatch?.useSignedURL) {
      return Response.json({ url: apiMatch.url.toString() });
    }
    const url = new URL(apiMatch?.url ?? req.url ?? "", this.address);
    const { dataPath, key, metadataPath, rootPath } = this.getLocalPaths(url);
    if (!dataPath || !rootPath) {
      return new Response(null, { status: 400 });
    }
    if (!key) {
      return this.deleteAll(rootPath);
    }
    try {
      await fs.rm(metadataPath, { force: true, recursive: true });
    } catch {
    }
    try {
      await fs.rm(dataPath, { force: true, recursive: true });
    } catch (error) {
      if (!isNodeError(error) || error.code !== "ENOENT") {
        return new Response(null, { status: 500 });
      }
    }
    return new Response(null, { status: 204 });
  }
  async deleteAll(rootPath) {
    let blobsDeleted = 0;
    try {
      try {
        const countResult = {
          blobs: [],
          directories: []
        };
        await _BlobsServer.walk({
          directories: false,
          path: rootPath,
          prefix: "",
          rootPath,
          result: countResult
        });
        blobsDeleted = countResult.blobs?.length ?? 0;
      } catch (error) {
        if (!isNodeError(error) || error.code !== "ENOENT") {
          throw error;
        }
      }
      await fs.rm(rootPath, { force: true, recursive: true });
      const pathParts = rootPath.split(sep);
      const storeName = pathParts[pathParts.length - 1];
      const siteID = pathParts[pathParts.length - 2];
      const metadataStorePath = resolve(this.directory, "metadata", siteID, storeName);
      await fs.rm(metadataStorePath, { force: true, recursive: true });
    } catch (error) {
      if (!isNodeError(error) || error.code !== "ENOENT") {
        this.logDebug("Error when deleting store:", error);
        return new Response(null, { status: 500 });
      }
    }
    return Response.json({ blobs_deleted: blobsDeleted, has_more: false });
  }
  async get(req) {
    const apiMatch = this.parseAPIRequest(req);
    const url = apiMatch?.url ?? new URL(req.url ?? "", this.address);
    if (apiMatch?.key && apiMatch?.useSignedURL) {
      return Response.json({ url: apiMatch.url.toString() });
    }
    const { dataPath, key, metadataPath, rootPath } = this.getLocalPaths(apiMatch?.url ?? url);
    if (!rootPath) {
      return new Response(null, { status: 400 });
    }
    if (!dataPath || !metadataPath) {
      return this.listStores(rootPath, url.searchParams.get("prefix") ?? "");
    }
    if (!key) {
      return this.listBlobs({ dataPath, metadataPath, rootPath, req, url });
    }
    this.dispatchOnRequestEvent("get" /* GET */, url);
    const headers = {};
    try {
      const rawData = await fs.readFile(metadataPath, "utf8");
      const metadata = JSON.parse(rawData);
      const encodedMetadata = encodeMetadata(metadata);
      if (encodedMetadata) {
        headers[METADATA_HEADER_INTERNAL] = encodedMetadata;
      }
    } catch (error) {
      if (!isNodeError(error) || error.code !== "ENOENT") {
        this.logDebug("Could not read metadata file:", error);
      }
    }
    try {
      const fileStream = createReadStream(dataPath);
      const chunks = [];
      for await (const chunk of fileStream) {
        chunks.push(Buffer.from(chunk));
      }
      const buffer = Buffer.concat(chunks);
      return new Response(buffer, { headers });
    } catch (error) {
      if (isNodeError(error) && (error.code === "EISDIR" || error.code === "ENOENT")) {
        return new Response(null, { status: 404 });
      }
      this.logDebug("Error when reading data:", error);
      return new Response(null, { status: 500 });
    }
  }
  async head(req) {
    const url = this.parseAPIRequest(req)?.url ?? new URL(req.url ?? "", this.address);
    const { dataPath, key, metadataPath } = this.getLocalPaths(url);
    if (!dataPath || !metadataPath || !key) {
      return new Response(null, { status: 400 });
    }
    try {
      const rawData = await fs.readFile(metadataPath, "utf8");
      const metadata = JSON.parse(rawData);
      const encodedMetadata = encodeMetadata(metadata);
      return new Response(null, {
        headers: {
          [METADATA_HEADER_INTERNAL]: encodedMetadata ?? ""
        }
      });
    } catch (error) {
      if (isNodeError(error) && (error.code === "ENOENT" || error.code === "ISDIR")) {
        return new Response(null, { status: 404 });
      }
      this.logDebug("Could not read metadata file:", error);
      return new Response(null, { status: 500 });
    }
  }
  async listBlobs(options) {
    const { dataPath, rootPath, url } = options;
    const directories = url.searchParams.get("directories") === "true";
    const prefix = url.searchParams.get("prefix") ?? "";
    const result = {
      blobs: [],
      directories: []
    };
    this.dispatchOnRequestEvent("list" /* LIST */, url);
    try {
      await _BlobsServer.walk({ directories, path: dataPath, prefix, rootPath, result });
    } catch (error) {
      if (!isNodeError(error) || error.code !== "ENOENT") {
        this.logDebug("Could not perform list:", error);
        return new Response(null, { status: 500 });
      }
    }
    return Response.json(result);
  }
  async listStores(rootPath, prefix) {
    try {
      const allStores = await fs.readdir(rootPath);
      const filteredStores = allStores.map(decodeName).filter((store) => store.startsWith(prefix));
      return Response.json({ stores: filteredStores });
    } catch (error) {
      this.logDebug("Could not list stores:", error);
      return new Response(null, { status: 500 });
    }
  }
  logDebug(...message) {
    if (!this.debug) {
      return;
    }
    this.logger("[Netlify Blobs server]", ...message);
  }
  async put(req) {
    const apiMatch = this.parseAPIRequest(req);
    if (apiMatch) {
      return Response.json({ url: apiMatch.url.toString() });
    }
    const url = new URL(req.url ?? "", this.address);
    const { dataPath, key, metadataPath } = this.getLocalPaths(url);
    if (!dataPath || !key || !metadataPath) {
      return new Response(null, { status: 400 });
    }
    const ifMatch = req.headers.get("if-match");
    const ifNoneMatch = req.headers.get("if-none-match");
    try {
      let fileExists = false;
      try {
        await fs.access(dataPath);
        fileExists = true;
      } catch {
      }
      const currentEtag = fileExists ? await _BlobsServer.generateETag(dataPath) : void 0;
      if (ifNoneMatch === "*" && fileExists) {
        return new Response(null, { status: 412 });
      }
      if (ifMatch && (!fileExists || ifMatch !== currentEtag)) {
        return new Response(null, { status: 412 });
      }
      const metadataHeader = req.headers.get(METADATA_HEADER_INTERNAL);
      const metadata = decodeMetadata(metadataHeader);
      const tempPath = join(dirname(dataPath), `.${Math.random().toString(36).slice(2)}`);
      const body = await req.arrayBuffer();
      await fs.mkdir(dirname(dataPath), { recursive: true });
      await fs.writeFile(tempPath, Buffer.from(body));
      await fs.rename(tempPath, dataPath);
      if (metadata) {
        await fs.mkdir(dirname(metadataPath), { recursive: true });
        await fs.writeFile(metadataPath, JSON.stringify(metadata));
      }
      const newEtag = await _BlobsServer.generateETag(dataPath);
      return new Response(null, {
        status: 200,
        headers: {
          etag: newEtag
        }
      });
    } catch (error) {
      if (isNodeError(error)) {
        this.logDebug("Error when writing data:", error);
      }
      return new Response(null, { status: 500 });
    }
  }
  /**
   * Parses the URL and returns the filesystem paths where entries and metadata
   * should be stored.
   */
  getLocalPaths(url) {
    if (!url) {
      return {};
    }
    let parts = url.pathname.split("/").slice(1);
    if (parts[0].startsWith(REGION_PREFIX)) {
      parts = parts.slice(1);
    }
    const [siteID, rawStoreName, ...rawKey] = parts;
    if (!siteID) {
      return {};
    }
    const rootPath = resolve(this.directory, "entries", siteID);
    if (!rawStoreName) {
      return { rootPath };
    }
    const key = rawKey.map(encodeName);
    const storeName = encodeName(rawStoreName);
    const storePath = resolve(rootPath, storeName);
    const dataPath = resolve(storePath, ...key);
    const metadataPath = resolve(this.directory, "metadata", siteID, storeName, ...key);
    return { dataPath, key: key.join("/"), metadataPath, rootPath: storePath };
  }
  /**
   * Helper method to generate an ETag for a file based on its path and last modified time.
   */
  static async generateETag(filePath) {
    try {
      const stats = await fs.stat(filePath);
      const hash = createHmac("sha256", stats.mtime.toISOString()).update(filePath).digest("hex");
      return `"${hash}"`;
    } catch {
      return "";
    }
  }
  async handleRequest(req) {
    if (!req.url || !this.validateAccess(req)) {
      return new Response(null, { status: 403 });
    }
    switch (req.method?.toLowerCase()) {
      case "delete" /* DELETE */: {
        this.dispatchOnRequestEvent("delete" /* DELETE */, req.url);
        return this.delete(req);
      }
      case "get" /* GET */: {
        return this.get(req);
      }
      case "put" /* PUT */: {
        this.dispatchOnRequestEvent("set" /* SET */, req.url);
        return this.put(req);
      }
      case "head" /* HEAD */: {
        this.dispatchOnRequestEvent("getMetadata" /* GET_METADATA */, req.url);
        return this.head(req);
      }
      default:
        return new Response(null, { status: 405 });
    }
  }
  /**
   * Tries to parse a URL as being an API request and returns the different
   * components, such as the store name, site ID, key, and signed URL.
   */
  parseAPIRequest(req) {
    if (!req.url) {
      return null;
    }
    const apiURLMatch = API_URL_PATH.exec(req.url);
    if (apiURLMatch) {
      const key = apiURLMatch.groups?.key;
      const siteID = apiURLMatch.groups?.site_id;
      const storeName = apiURLMatch.groups?.store_name;
      const urlPath = [siteID, storeName, key].filter(Boolean);
      const url = new URL(`/${urlPath.join("/")}?signature=${this.tokenHash}`, this.address);
      return {
        key,
        siteID,
        storeName,
        url,
        useSignedURL: req.headers.get("accept") === SIGNED_URL_ACCEPT_HEADER
      };
    }
    const legacyAPIURLMatch = LEGACY_API_URL_PATH.exec(req.url);
    if (legacyAPIURLMatch) {
      const fullURL = new URL(req.url, this.address);
      const storeName = fullURL.searchParams.get("context") ?? LEGACY_DEFAULT_STORE;
      const key = legacyAPIURLMatch.groups?.key;
      const siteID = legacyAPIURLMatch.groups?.site_id;
      const urlPath = [siteID, storeName, key].filter(Boolean);
      const url = new URL(`/${urlPath.join("/")}?signature=${this.tokenHash}`, this.address);
      return {
        key,
        siteID,
        storeName,
        url,
        useSignedURL: true
      };
    }
    return null;
  }
  validateAccess(req) {
    if (!this.token) {
      return true;
    }
    const authorization = req.headers.get("authorization") || "";
    if (authorization.toLowerCase().startsWith("bearer ") && authorization.slice("bearer ".length) === this.token) {
      return true;
    }
    if (!req.url) {
      return false;
    }
    const url = new URL(req.url, this.address);
    const signature = url.searchParams.get("signature");
    if (signature === this.tokenHash) {
      return true;
    }
    return false;
  }
  /**
   * Traverses a path and collects both blobs and directories into a `result`
   * object, taking into account the `directories` and `prefix` parameters.
   */
  static async walk(options) {
    const { directories, path, prefix, result, rootPath } = options;
    const entries = await fs.readdir(path);
    for (const entry of entries) {
      const entryPath = join(path, entry);
      const stat = await fs.stat(entryPath);
      let key = relative(rootPath, entryPath);
      if (sep !== "/") {
        key = key.split(sep).join("/");
      }
      const mask = key.slice(0, prefix.length);
      const isMatch = prefix.startsWith(mask);
      if (!isMatch) {
        continue;
      }
      if (!stat.isDirectory()) {
        const etag = await this.generateETag(entryPath);
        result.blobs?.push({
          etag,
          key,
          last_modified: stat.mtime.toISOString(),
          size: stat.size
        });
        continue;
      }
      if (directories && key.startsWith(prefix)) {
        result.directories?.push(key);
        continue;
      }
      await _BlobsServer.walk({ directories, path: entryPath, prefix, rootPath, result });
    }
  }
  async start() {
    await fs.mkdir(this.directory, { recursive: true });
    const server = new HTTPServer((req) => this.handleRequest(req));
    const address = await server.start(this.port ?? 0);
    const port = Number.parseInt(new URL(address).port);
    this.address = address;
    this.server = server;
    return {
      address,
      family: "ipv4",
      port
    };
  }
  async stop() {
    return this.server?.stop();
  }
};
export {
  BlobsServer,
  Operation
};
