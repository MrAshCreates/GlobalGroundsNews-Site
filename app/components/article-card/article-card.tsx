import { Link } from "react-router";
import { Clock, Eye, Calendar } from "lucide-react";
import type { Article } from "../../data/mock-data";
import styles from "./article-card.module.css";

interface ArticleCardProps {
  /**
   * The article data to display
   * @important
   */
  article: Article;
  className?: string;
}

function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

export function ArticleCard({ article, className }: ArticleCardProps) {
  return (
    <Link to={`/articles/${article.id}`} className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={article.imageUrl} alt={article.title} className={styles.image} />
      </div>

      <div className={styles.content}>
        <div className={styles.category}>{article.category}</div>
        <h3 className={styles.title}>{article.title}</h3>
        <p className={styles.summary}>{article.summary}</p>

        <div className={styles.meta}>
          <div className={styles.metaItem}>
            <Calendar className={styles.metaIcon} />
            {formatDate(article.publishedAt)}
          </div>
          <div className={styles.metaItem}>
            <Clock className={styles.metaIcon} />
            {article.readTime} min read
          </div>
          <div className={styles.metaItem}>
            <Eye className={styles.metaIcon} />
            {article.viewCount.toLocaleString()}
          </div>
        </div>
      </div>
    </Link>
  );
}
