import { createRequestHandler } from "react-router";

const requestHandler = createRequestHandler(
  () => import("virtual:react-router/server-build"),
  import.meta.env.MODE,
);

function frontendPrefixPath(pathname: string): string | null {
  if (pathname === "/frontend") {
    return "/";
  }
  if (pathname.startsWith("/frontend/")) {
    return pathname.slice("/frontend".length) || "/";
  }
  return null;
}

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const unprefixedPath = frontendPrefixPath(url.pathname);

    if (unprefixedPath !== null) {
      url.pathname = unprefixedPath;
      return Response.redirect(url.toString(), 308);
    }

    return requestHandler(request);
  },
} satisfies ExportedHandler;
