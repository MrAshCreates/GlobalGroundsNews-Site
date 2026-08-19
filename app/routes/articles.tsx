import type { Route } from "./+types/articles";
import { Header } from "../components/header/header";
import { ArticleCard } from "../components/article-card/article-card";
import { mockArticles } from "../data/mock-data";
import styles from "./articles.module.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Articles - Global Ground" },
    {
      name: "description",
      content: "Read balanced articles generated from community conversations.",
    },
  ];
}

export default function Articles() {
  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.content}>
        <div className={styles.header}>
          <h1 className={styles.title}>Community Articles</h1>
          <p className={styles.description}>
            Balanced perspectives from concluded conversations. Every article represents multiple viewpoints.
          </p>
        </div>

        <div className={styles.grid}>
          {mockArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
}
