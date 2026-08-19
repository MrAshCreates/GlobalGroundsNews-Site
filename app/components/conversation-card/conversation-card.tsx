import { Link } from "react-router";
import { Users, MessageSquare, Clock } from "lucide-react";
import classNames from "classnames";
import type { Conversation } from "../../data/mock-data";
import { formatClosesOn, formatCount, formatTimeRemaining } from "../../lib/format";
import { useMounted } from "../../hooks/use-mounted";
import { SafeImage } from "../safe-image/safe-image";
import styles from "./conversation-card.module.css";

interface ConversationCardProps {
  /**
   * The conversation data to display
   * @important
   */
  conversation: Conversation;
  className?: string;
}

function ConversationTimer({ expiresAt }: { expiresAt: Date }) {
  const mounted = useMounted();
  const label = mounted ? formatTimeRemaining(expiresAt, new Date()) : formatClosesOn(expiresAt);

  return (
    <div className={styles.timer}>
      <Clock className={styles.timerIcon} />
      {label}
    </div>
  );
}

export function ConversationCard({ conversation, className }: ConversationCardProps) {
  return (
    <Link to={`/conversations/${conversation.id}`} className={classNames(styles.card, className)}>
      <div className={styles.imageContainer}>
        {conversation.imageUrl && (
          <SafeImage src={conversation.imageUrl} alt={conversation.title} className={styles.image} />
        )}
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
            {formatCount(conversation.participantCount)}
          </div>
          <div className={styles.stat}>
            <MessageSquare className={styles.statIcon} />
            {formatCount(conversation.messageCount)}
          </div>
        </div>

        <ConversationTimer expiresAt={conversation.expiresAt} />
      </div>
    </Link>
  );
}
