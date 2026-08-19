import { Link } from "react-router";
import { Clock, Eye, Calendar } from "lucide-react";
import classNames from "classnames";
import type { Article } from "../../data/mock-data";
import { formatCount, formatDateUtc } from "../../lib/format";
import { SafeImage } from "../safe-image/safe-image";
import styles from "./article-card.module.css";

interface ArticleCardProps {
  /**
   * The article data to display
   * @important
   */
  article: Article;
  className?: string;
}

export function ArticleCard({ article, className }: ArticleCardProps) {
  return (
    <Link to={`/articles/${article.id}`} className={classNames(styles.card, className)}>
      <div className={styles.imageContainer}>
        <SafeImage src={article.imageUrl} alt={article.title} className={styles.image} />
      </div>

      <div className={styles.content}>
        <div className={styles.category}>{article.category}</div>
        <h3 className={styles.title}>{article.title}</h3>
        <p className={styles.summary}>{article.summary}</p>

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
            {formatCount(article.viewCount)}
          </div>
        </div>
      </div>
    </Link>
  );
}
