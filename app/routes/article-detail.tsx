import { Link } from "react-router";
import { ArrowLeft, Clock, Eye, Calendar } from "lucide-react";
import type { Route } from "./+types/article-detail";
import { Header } from "../components/header/header";
import { ConversationCard } from "../components/conversation-card/conversation-card";
import { SafeImage } from "../components/safe-image/safe-image";
import { getArticleById, getConversationById } from "../data/mock-data";
import { formatCount, formatDateUtc } from "../lib/format";
import styles from "./detail-page.module.css";

export function meta({ data }: Route.MetaArgs) {
  if (!data?.article) {
    return [{ title: "Article not found - Global Ground" }];
  }

  return [
    { title: `${data.article.title} - Global Ground` },
    { name: "description", content: data.article.summary },
  ];
}

export async function loader({ params }: Route.LoaderArgs) {
  const article = getArticleById(params.id);

  if (!article) {
    throw new Response("Not Found", { status: 404 });
  }

  return { article, conversation: getConversationById(article.conversationId) };
}

export default function ArticleDetail({ loaderData }: Route.ComponentProps) {
  const { article, conversation } = loaderData;

  return (
    <div className={styles.container}>
      <Header />
      <article className={styles.content}>
        <Link to="/articles" className={styles.backLink}>
          <ArrowLeft size={16} />
          All articles
        </Link>

        <SafeImage src={article.imageUrl} alt={article.title} className={styles.heroImage} />
        <div className={styles.category}>{article.category}</div>
        <h1 className={styles.title}>{article.title}</h1>
        <p className={styles.description}>{article.summary}</p>

        <div className={styles.meta}>
          <div className={styles.metaItem}>
            <Calendar className={styles.metaIcon} />
            {formatDateUtc(article.publishedAt)}
          </div>
          <div className={styles.metaItem}>
            <Clock className={styles.metaIcon} />
            {article.readTime} min read
          </div>
          <div className={styles.metaItem}>
            <Eye className={styles.metaIcon} />
            {formatCount(article.viewCount)} views
          </div>
        </div>

        <section className={styles.panel}>
          <h2 className={styles.panelTitle}>Community-balanced summary</h2>
          <p className={styles.description}>
            This article was generated from a concluded community conversation. It presents the main arguments with
            equal weight and does not rank viewpoints by popularity.
          </p>
        </section>

        {conversation && (
          <section>
            <h2 className={styles.panelTitle}>Source conversation</h2>
            <ConversationCard conversation={conversation} />
          </section>
        )}
      </article>
    </div>
  );
}
