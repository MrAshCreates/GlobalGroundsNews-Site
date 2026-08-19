import { Link } from "react-router";
import { Users, MessageSquare, Clock } from "lucide-react";
import type { Conversation } from "../../data/mock-data";
import styles from "./conversation-card.module.css";

interface ConversationCardProps {
  /**
   * The conversation data to display
   * @important
   */
  conversation: Conversation;
  className?: string;
}

function formatTimeRemaining(expiresAt: Date): string {
  const now = new Date();
  const diff = expiresAt.getTime() - now.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  if (days > 0) {
    return `${days}d ${hours}h remaining`;
  }
  return `${hours}h remaining`;
}

export function ConversationCard({ conversation, className }: ConversationCardProps) {
  return (
    <Link to={`/conversations/${conversation.id}`} className={styles.card}>
      <div className={styles.imageContainer}>
        {conversation.imageUrl && <img src={conversation.imageUrl} alt={conversation.title} className={styles.image} />}
        {conversation.isLive && (
          <div className={styles.liveBadge}>
            <span className={styles.liveDot} />
            LIVE
          </div>
        )}
      </div>

      <div className={styles.content}>
        <div className={styles.category}>{conversation.category}</div>
        <h3 className={styles.title}>{conversation.title}</h3>
        <p className={styles.description}>{conversation.description}</p>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <Users className={styles.statIcon} />
            {conversation.participantCount.toLocaleString()}
          </div>
          <div className={styles.stat}>
            <MessageSquare className={styles.statIcon} />
            {conversation.messageCount.toLocaleString()}
          </div>
        </div>

        <div className={styles.timer}>
          <Clock className={styles.timerIcon} />
          {formatTimeRemaining(conversation.expiresAt)}
        </div>
      </div>
    </Link>
  );
}
