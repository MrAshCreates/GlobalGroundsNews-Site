import { Link } from "react-router";
import classNames from "classnames";
import type { Community } from "../../data/mock-data";
import { formatCount } from "../../lib/format";
import { SafeImage } from "../safe-image/safe-image";
import styles from "./community-card.module.css";

interface CommunityCardProps {
  /**
   * The community data to display
   * @important
   */
  community: Community;
  className?: string;
}

export function CommunityCard({ community, className }: CommunityCardProps) {
  return (
    <Link to={`/communities/${community.id}`} className={classNames(styles.card, className)}>
      <div className={styles.imageContainer}>
        <SafeImage src={community.imageUrl} alt={community.name} className={styles.image} />
      </div>

      <div className={styles.content}>
        <div className={styles.category}>{community.category}</div>
        <h3 className={styles.name}>{community.name}</h3>
        <p className={styles.description}>{community.description}</p>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <div className={styles.statValue}>{formatCount(community.memberCount)}</div>
            <div className={styles.statLabel}>Members</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statValue}>{community.activeConversations}</div>
            <div className={styles.statLabel}>Active</div>
          </div>
        </div>
      </div>
    </Link>
  );
}
