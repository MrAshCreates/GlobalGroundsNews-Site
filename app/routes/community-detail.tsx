import { Link } from "react-router";
import { ArrowLeft, Users } from "lucide-react";
import type { Route } from "./+types/community-detail";
import { Header } from "../components/header/header";
import { ConversationCard } from "../components/conversation-card/conversation-card";
import { SafeImage } from "../components/safe-image/safe-image";
import { getCommunityById, getConversationsForCategory } from "../data/mock-data";
import { formatCount } from "../lib/format";
import styles from "./detail-page.module.css";

export function meta({ data }: Route.MetaArgs) {
  if (!data?.community) {
    return [{ title: "Community not found - Global Ground" }];
  }

  return [
    { title: `${data.community.name} - Global Ground` },
    { name: "description", content: data.community.description },
  ];
}

export async function loader({ params }: Route.LoaderArgs) {
  const community = getCommunityById(params.id);

  if (!community) {
    throw new Response("Not Found", { status: 404 });
  }

  return { community, conversations: getConversationsForCategory(community.category) };
}

export default function CommunityDetail({ loaderData }: Route.ComponentProps) {
  const { community, conversations } = loaderData;

  return (
    <div className={styles.container}>
      <Header />
      <article className={styles.content}>
        <Link to="/communities" className={styles.backLink}>
          <ArrowLeft size={16} />
          All communities
        </Link>

        <SafeImage src={community.imageUrl} alt={community.name} className={styles.heroImage} />
        <div className={styles.category}>{community.category}</div>
        <h1 className={styles.title}>{community.name}</h1>
        <p className={styles.description}>{community.description}</p>

        <div className={styles.meta}>
          <div className={styles.metaItem}>
            <Users className={styles.metaIcon} />
            {formatCount(community.memberCount)} members
          </div>
          <div className={styles.metaItem}>{community.activeConversations} active conversations</div>
        </div>

        {conversations.length > 0 && (
          <section>
            <h2 className={styles.panelTitle}>Active conversations</h2>
            <div className={styles.stack}>
              {conversations.map((conversation) => (
                <ConversationCard key={conversation.id} conversation={conversation} />
              ))}
            </div>
          </section>
        )}
      </article>
    </div>
  );
}
