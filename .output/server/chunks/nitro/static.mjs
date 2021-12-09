import { createError } from 'h3';
import { withLeadingSlash, withoutTrailingSlash, parseURL } from 'ufo';
import { promises } from 'fs';
import { resolve, dirname } from 'pathe';
import { fileURLToPath } from 'url';

const assets = {
  "/_nuxt/about-87b2d18a.mjs": {
    "type": "application/javascript",
    "etag": "\"228-MHATZ3GJ+WDqWq37g3v/md6ebDk\"",
    "mtime": "2021-12-07T12:38:28.207Z",
    "path": "../public/_nuxt/about-87b2d18a.mjs"
  },
  "/_nuxt/counter-17d331d1.mjs": {
    "type": "application/javascript",
    "etag": "\"2c8-WTMKYy2OXsR9wmRfPrxFkVxMVjI\"",
    "mtime": "2021-12-07T12:38:28.206Z",
    "path": "../public/_nuxt/counter-17d331d1.mjs"
  },
  "/_nuxt/custom-59c9fcbf.mjs": {
    "type": "application/javascript",
    "etag": "\"2c4-+gM1u9fIQB6Ej1ievkZ36qs6PNc\"",
    "mtime": "2021-12-07T12:38:28.205Z",
    "path": "../public/_nuxt/custom-59c9fcbf.mjs"
  },
  "/_nuxt/entry-666242b0.mjs": {
    "type": "application/javascript",
    "etag": "\"199f7-XOiGwNu2bgBnfvtq/tqZwaibWPM\"",
    "mtime": "2021-12-07T12:38:28.203Z",
    "path": "../public/_nuxt/entry-666242b0.mjs"
  },
  "/_nuxt/index-22f50eb3.mjs": {
    "type": "application/javascript",
    "etag": "\"e3-mCnCJi4x7FZlv0AuGgUbibnD0fg\"",
    "mtime": "2021-12-07T12:38:28.203Z",
    "path": "../public/_nuxt/index-22f50eb3.mjs"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"48b-t3rO7QSsOiHJZwu/teV7H3Nt86s\"",
    "mtime": "2021-12-07T12:38:28.202Z",
    "path": "../public/_nuxt/manifest.json"
  },
  "/_nuxt/assets/entry.5dae9b6a.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1d6b-nlfSxCfQHu9susAHDfwd5I6ppuQ\"",
    "mtime": "2021-12-07T12:38:28.207Z",
    "path": "../public/_nuxt/assets/entry.5dae9b6a.css"
  }
};

const mainDir = dirname(fileURLToPath(globalThis.entryURL));

function readAsset (id) {
  return promises.readFile(resolve(mainDir, getAsset(id).path))
}

function getAsset (id) {
  return assets[id]
}

const METHODS = ["HEAD", "GET"];
const PUBLIC_PATH = "/_nuxt/";
const TWO_DAYS = 2 * 60 * 60 * 24;
const STATIC_ASSETS_BASE = "/Users/ankit.agarwal/Documents/poc/nuxt3-starter/nuxt-starter-kit/dist" + "/" + "1638880702";
async function serveStatic(req, res) {
  if (!METHODS.includes(req.method)) {
    return;
  }
  let id = withLeadingSlash(withoutTrailingSlash(parseURL(req.url).pathname));
  let asset = getAsset(id);
  if (!asset) {
    const _id = id + "/index.html";
    const _asset = getAsset(_id);
    if (_asset) {
      asset = _asset;
      id = _id;
    }
  }
  if (!asset) {
    if (id.startsWith(PUBLIC_PATH) && !id.startsWith(STATIC_ASSETS_BASE)) {
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    res.statusCode = 304;
    return res.end("Not Modified (etag)");
  }
  const ifModifiedSinceH = req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime) {
    if (new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
      res.statusCode = 304;
      return res.end("Not Modified (mtime)");
    }
  }
  if (asset.type) {
    res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag) {
    res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime) {
    res.setHeader("Last-Modified", asset.mtime);
  }
  if (id.startsWith(PUBLIC_PATH)) {
    res.setHeader("Cache-Control", `max-age=${TWO_DAYS}, immutable`);
  }
  const contents = await readAsset(id);
  return res.end(contents);
}

export { serveStatic as default };
