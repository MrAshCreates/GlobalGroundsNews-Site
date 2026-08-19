import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("conversations", "routes/conversations.tsx"),
  route("articles", "routes/articles.tsx"),
  route("communities", "routes/communities.tsx"),
  route("profile", "routes/profile.tsx"),
] satisfies RouteConfig;
