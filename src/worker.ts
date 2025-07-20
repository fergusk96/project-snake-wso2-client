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

    // 2. Fallback to static asset serving (the default site worker behavior)
    // (This is usually handled by the framework or the rest of your fetch handler)
    return env.ASSETS.fetch(request);
  }
};