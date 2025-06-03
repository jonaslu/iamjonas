function logRequest(request, statusCode, url, env, ctx) {
  const now = new Date();
  const formattedDate = now.toISOString();

  const clientIP = request.headers.get("cf-connecting-ip") || "-";
  const method = request.method;
  const path = url.pathname;
  const protocol = request.cf.httpProtocol || "HTTP/1.1";
  const userAgent = request.headers.get("user-agent") || "-";
  const referer = request.headers.get("referer") || "-";

  const cfContent = request.cf.continent;
  const cfCountry = request.cf.country;
  const cfRegion = request.cf.region;
  const cfCity = request.cf.city;
  const cfAsOrg = request.cf.asOrganization;
  const cfColo = request.cf.colo;
  const cfLat = request.cf.latitude;
  const cfLong = request.cf.longitude;

  const cfData = `"${cfContent || "-"}" "${cfCountry || "-"}" "${cfRegion || "-"}" "${cfCity || "-"}" "${cfAsOrg || "-"}" "${cfColo || "-"}" ${cfLat || "-"} ${
    cfLong || "-"
  }`;

  const logLine = `${clientIP} - - [${formattedDate}] "${method} ${path} ${protocol}" ${statusCode} - "${referer}" "${userAgent}" | ${cfData}\n`;

  const randomSHA = crypto.randomUUID().slice(0, 5);
  const key = `logs/${formattedDate}-${randomSHA}.log`;

  ctx.waitUntil(
    env.ACCESS_LOG_BUCKET.put(key, logLine, {
      httpMetadata: {
        contentType: "text/plain",
      },
    })
  );
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const pathname = url.pathname;

    if (pathname === "/" || pathname.endsWith(".html") || pathname.endsWith(".xml") || pathname === "/feeds/posts/default") {
      let response;
      if (pathname === "/") {
        response = await env.ASSETS.fetch(new URL("http://fakehost.invalid/index.html"));
      } else {
        response = await env.ASSETS.fetch(request);
      }

      const { status } = response;
      logRequest(request, status, url, env, ctx);

      return response;
    }

    return env.ASSETS.fetch(request);
  },
};
