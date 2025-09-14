export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // 1. Serve images from R2 at /images/<filename>
    if (url.pathname.startsWith("/images/")) {
      const key = url.pathname.replace("/images/", "");
      const object = await env.IMAGE_BUCKET.get(key);

      if (!object) {
        return new Response("Not found", { status: 404 });
      }

      const headers = new Headers();
      headers.set("Content-Type", object.httpMetadata?.contentType || "application/octet-stream");

      return new Response(object.body, { headers });
    }

    // 2. Try to serve the static asset
    if (env.ASSETS && env.ASSETS.fetch) {
      const assetResponse = await env.ASSETS.fetch(request);
      if (assetResponse.status !== 404) {
        return assetResponse;
      }
    }

    // 3. Fallback: serve index.html for SPA routes
    if (env.ASSETS && env.ASSETS.fetch) {
      const indexRequest = new Request(new URL("/index.html", url), request);
      return await env.ASSETS.fetch(indexRequest);
    }

    return new Response("Not found", { status: 404 });
  }
};