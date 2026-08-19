import { Link } from "react-router";
import { ArrowLeft, Users, MessageSquare, Clock, Calendar } from "lucide-react";
import type { Route } from "./+types/conversation-detail";
import { Header } from "../components/header/header";
import { ArticleCard } from "../components/article-card/article-card";
import { SafeImage } from "../components/safe-image/safe-image";
import { getArticlesForConversation, getConversationById } from "../data/mock-data";
import { formatClosesOn, formatCount, formatDateUtc, formatTimeRemaining } from "../lib/format";
import { useMounted } from "../hooks/use-mounted";
import styles from "./detail-page.module.css";

export function meta({ data }: Route.MetaArgs) {
  if (!data?.conversation) {
    return [{ title: "Conversation not found - Global Ground" }];
  }

  return [
    { title: `${data.conversation.title} - Global Ground` },
    { name: "description", content: data.conversation.description },
  ];
}

export async function loader({ params }: Route.LoaderArgs) {
  const conversation = getConversationById(params.id);

  if (!conversation) {
    throw new Response("Not Found", { status: 404 });
  }

  return { conversation, relatedArticles: getArticlesForConversation(conversation.id) };
}

export default function ConversationDetail({ loaderData }: Route.ComponentProps) {
  const { conversation, relatedArticles } = loaderData;
  const mounted = useMounted();
  const remaining = mounted
    ? formatTimeRemaining(conversation.expiresAt, new Date())
    : formatClosesOn(conversation.expiresAt);

  return (
    <div className={styles.container}>
      <Header />
      <article className={styles.content}>
        <Link to="/conversations" className={styles.backLink}>
          <ArrowLeft size={16} />
          All conversations
        </Link>

        {conversation.imageUrl && (
          <SafeImage src={conversation.imageUrl} alt={conversation.title} className={styles.heroImage} />
        )}

        {conversation.isLive && <div className={styles.liveBadge}>LIVE</div>}
        <div className={styles.category}>{conversation.category}</div>
        <h1 className={styles.title}>{conversation.title}</h1>
        <p className={styles.description}>{conversation.description}</p>

        <div className={styles.meta}>
          <div className={styles.metaItem}>
            <Users className={styles.metaIcon} />
            {formatCount(conversation.participantCount)} participants
          </div>
          <div className={styles.metaItem}>
            <MessageSquare className={styles.metaIcon} />
            {formatCount(conversation.messageCount)} messages
          </div>
          <div className={styles.metaItem}>
            <Calendar className={styles.metaIcon} />
            Opened {formatDateUtc(conversation.createdAt)}
          </div>
          <div className={styles.metaItem}>
            <Clock className={styles.metaIcon} />
            {remaining}
          </div>
        </div>

        <section className={styles.panel}>
          <h2 className={styles.panelTitle}>How this conversation works</h2>
          <p className={styles.description}>
            Join anonymously, share a perspective, and help the community reach a balanced summary. When this
            conversation closes, Global Ground publishes an article that represents the viewpoints raised here.
          </p>
        </section>

        {relatedArticles.length > 0 && (
          <section>
            <h2 className={styles.panelTitle}>Related articles</h2>
            <div className={styles.stack}>
              {relatedArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </section>
        )}
      </article>
    </div>
  );
}
