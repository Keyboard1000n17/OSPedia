export async function handler(event) {
  try {
    const url = new URL(event.rawUrl);
    const path = url.pathname.replace("/.netlify/functions/archive-proxy", "");
    const target = "https://archive.org" + path;

    // Forward the Range header if present
    const headers = {};
    if (event.headers.range) {
      headers.Range = event.headers.range;
    }

    const resp = await fetch(target, { headers });

    // Netlify expects ArrayBuffer -> base64, but we can return raw bytes with isBase64Encoded false
    const buffer = await resp.arrayBuffer();

    return {
      statusCode: resp.status,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type":
          resp.headers.get("content-type") || "application/octet-stream",
        "Accept-Ranges": "bytes",
        "Content-Range": resp.headers.get("content-range") || undefined,
      },
      body: Buffer.from(buffer).toString("binary"), // send raw bytes
      isBase64Encoded: false, // v86 can handle binary
    };
  } catch (err) {
    console.error(err);
    return { statusCode: 500, body: "Proxy error" };
  }
}
