import type { Route } from "./+types/communities";
import { Header } from "../components/header/header";
import { CommunityCard } from "../components/community-card/community-card";
import { mockCommunities } from "../data/mock-data";
import styles from "./communities.module.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Communities - Global Ground" },
    {
      name: "description",
      content: "Join communities focused on topics you care about.",
    },
  ];
}

export default function Communities() {
  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.content}>
        <div className={styles.header}>
          <h1 className={styles.title}>Communities</h1>
          <p className={styles.description}>
            Connect with people who share your interests. Build networks and engage in ongoing conversations.
          </p>
        </div>

        <div className={styles.grid}>
          {mockCommunities.map((community) => (
            <CommunityCard key={community.id} community={community} />
          ))}
        </div>
      </div>
    </div>
  );
}
