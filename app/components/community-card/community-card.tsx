import { Link } from "react-router";
import type { Community } from "../../data/mock-data";
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
    <Link to={`/communities/${community.id}`} className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={community.imageUrl} alt={community.name} className={styles.image} />
      </div>

      <div className={styles.content}>
        <div className={styles.category}>{community.category}</div>
        <h3 className={styles.name}>{community.name}</h3>
        <p className={styles.description}>{community.description}</p>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <div className={styles.statValue}>{community.memberCount.toLocaleString()}</div>
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
