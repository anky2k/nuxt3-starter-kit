import { createError } from 'h3';
import { withLeadingSlash, withoutTrailingSlash, parseURL } from 'ufo';
import { promises } from 'fs';
import { resolve, dirname } from 'pathe';
import { fileURLToPath } from 'url';

const assets = {
  "/_nuxt/about-e0afe491.mjs": {
    "type": "application/javascript",
    "etag": "\"228-Yy2hDaZLC0mg/dzAMI8J8IPNj2w\"",
    "mtime": "2021-12-09T12:49:58.123Z",
    "path": "../public/_nuxt/about-e0afe491.mjs"
  },
  "/_nuxt/card-comp-fc47b043.mjs": {
    "type": "application/javascript",
    "etag": "\"735-dRvKZIwykNND+dVhtIj7O+oBx8c\"",
    "mtime": "2021-12-09T12:49:58.120Z",
    "path": "../public/_nuxt/card-comp-fc47b043.mjs"
  },
  "/_nuxt/counter-d23263b5.mjs": {
    "type": "application/javascript",
    "etag": "\"2c8-XTjX2rw/f98UJiTeqQZ9zXtSOLY\"",
    "mtime": "2021-12-09T12:49:58.120Z",
    "path": "../public/_nuxt/counter-d23263b5.mjs"
  },
  "/_nuxt/custom-dd13755f.mjs": {
    "type": "application/javascript",
    "etag": "\"2c4-mMbBJxl1uClRGTK2UZ66s3XQmbg\"",
    "mtime": "2021-12-09T12:49:58.119Z",
    "path": "../public/_nuxt/custom-dd13755f.mjs"
  },
  "/_nuxt/entry-2a9d7df2.mjs": {
    "type": "application/javascript",
    "etag": "\"1aa6e-hkpBhyavMbzPrIqTxGjkPQvW85U\"",
    "mtime": "2021-12-09T12:49:58.118Z",
    "path": "../public/_nuxt/entry-2a9d7df2.mjs"
  },
  "/_nuxt/index-06da3a52.mjs": {
    "type": "application/javascript",
    "etag": "\"e3-ljQyBLIhR1uFMnQphuqe0CHoQEM\"",
    "mtime": "2021-12-09T12:49:58.118Z",
    "path": "../public/_nuxt/index-06da3a52.mjs"
  },
  "/_nuxt/index-21224fbc.mjs": {
    "type": "application/javascript",
    "etag": "\"22e-r6Sqs7GypdQy4WmoM+MXVvKpHpA\"",
    "mtime": "2021-12-09T12:49:58.117Z",
    "path": "../public/_nuxt/index-21224fbc.mjs"
  },
  "/_nuxt/index-ca9409c7.mjs": {
    "type": "application/javascript",
    "etag": "\"27c-IEltqk7TReS5dI5rrow0Ulb72AQ\"",
    "mtime": "2021-12-09T12:49:58.117Z",
    "path": "../public/_nuxt/index-ca9409c7.mjs"
  },
  "/_nuxt/lazy-load-ca842d9a.mjs": {
    "type": "application/javascript",
    "etag": "\"1d1-68V8aKpQpBTAxMD8hnHLwZ92pUQ\"",
    "mtime": "2021-12-09T12:49:58.116Z",
    "path": "../public/_nuxt/lazy-load-ca842d9a.mjs"
  },
  "/_nuxt/list-fb794f3b.mjs": {
    "type": "application/javascript",
    "etag": "\"399-Xx8J9jg0uRHLKUwWmRUk4kxbFZI\"",
    "mtime": "2021-12-09T12:49:58.116Z",
    "path": "../public/_nuxt/list-fb794f3b.mjs"
  },
  "/_nuxt/loader-38ec5bf8.mjs": {
    "type": "application/javascript",
    "etag": "\"546-KTZuTaINoShcKn+H+2KsGyf7DkQ\"",
    "mtime": "2021-12-09T12:49:58.115Z",
    "path": "../public/_nuxt/loader-38ec5bf8.mjs"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"10bd-Ro+CK55jeNZK/POuioOafoRTHUY\"",
    "mtime": "2021-12-09T12:49:58.115Z",
    "path": "../public/_nuxt/manifest.json"
  },
  "/_nuxt/shimmer-df693c89.mjs": {
    "type": "application/javascript",
    "etag": "\"413-MnSWfjcHoZyqsXmxzPLIuvJ5XUY\"",
    "mtime": "2021-12-09T12:49:58.114Z",
    "path": "../public/_nuxt/shimmer-df693c89.mjs"
  },
  "/_nuxt/simple-fetch-5217a93a.mjs": {
    "type": "application/javascript",
    "etag": "\"3c3-xRl1Lqlytc2B7zFMo7IRNG/FsAI\"",
    "mtime": "2021-12-09T12:49:58.114Z",
    "path": "../public/_nuxt/simple-fetch-5217a93a.mjs"
  },
  "/_nuxt/simple-network-fetch-2898c978.mjs": {
    "type": "application/javascript",
    "etag": "\"6b9-rZzn/VPv3+n+eCuw/rKk7EYvZq8\"",
    "mtime": "2021-12-09T12:49:58.113Z",
    "path": "../public/_nuxt/simple-network-fetch-2898c978.mjs"
  },
  "/_nuxt/skeleton-loading-be91f84f.mjs": {
    "type": "application/javascript",
    "etag": "\"42e-hmyxdDeh4yBP2xOHOqNycAmPc8U\"",
    "mtime": "2021-12-09T12:49:58.112Z",
    "path": "../public/_nuxt/skeleton-loading-be91f84f.mjs"
  },
  "/_nuxt/assets/entry.1c1e2ba6.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2ae4-dGq72ZN9Irbw0VbDT03QLyekPHA\"",
    "mtime": "2021-12-09T12:49:58.122Z",
    "path": "../public/_nuxt/assets/entry.1c1e2ba6.css"
  },
  "/_nuxt/assets/shimmer.00cd0e39.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"45c-xarNUoLRMmWH4gvFNkG+GeAj9qo\"",
    "mtime": "2021-12-09T12:49:58.121Z",
    "path": "../public/_nuxt/assets/shimmer.00cd0e39.css"
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
const STATIC_ASSETS_BASE = "/Users/ankit.agarwal/Documents/poc/nuxt3-starter/nuxt-starter-kit/dist" + "/" + "1639054191";
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
