import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("conversations", "routes/conversations.tsx"),
  route("conversations/:id", "routes/conversation-detail.tsx"),
  route("articles", "routes/articles.tsx"),
  route("articles/:id", "routes/article-detail.tsx"),
  route("communities", "routes/communities.tsx"),
  route("communities/:id", "routes/community-detail.tsx"),
  route("profile", "routes/profile.tsx"),
] satisfies RouteConfig;
