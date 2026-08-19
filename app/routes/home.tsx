import { Link } from "react-router";
import type { Route } from "./+types/home";
import { Header } from "../components/header/header";
import { Button } from "../components/ui/button/button";
import { ConversationCard } from "../components/conversation-card/conversation-card";
import { mockConversations } from "../data/mock-data";
import { Shield, Users, FileText, Clock } from "lucide-react";
import styles from "./home.module.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Global Ground - The Voice of the People" },
    {
      name: "description",
      content: "A platform for meaningful conversations and unbiased news, built by the people, for the people.",
    },
  ];
}

export default function Home() {
  const featuredConversations = mockConversations.slice(0, 3);

  return (
    <div className={styles.container}>
      <Header />

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>The Voice of the People</h1>
          <p className={styles.subtitle}>
            A global platform for meaningful conversations. Connect with diverse perspectives, engage in thoughtful
            dialogue, and help shape balanced, community-driven news.
          </p>
          <div className={styles.heroActions}>
            <Link to="/conversations">
              <Button size="lg">Explore Conversations</Button>
            </Link>
            <Link to="/communities">
              <Button variant="outline" size="lg">
                Join Communities
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Featured Conversations</h2>
          <p className={styles.sectionDescription}>
            Join active discussions on topics that matter. Every conversation has a purpose and a timeline.
          </p>
        </div>
        <div className={styles.conversationsGrid}>
          {featuredConversations.map((conversation) => (
            <ConversationCard key={conversation.id} conversation={conversation} />
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>How It Works</h2>
          <p className={styles.sectionDescription}>
            Global Ground is built on principles of security, anonymity, and meaningful engagement.
          </p>
        </div>
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <Shield className={styles.featureIcon} />
            <h3 className={styles.featureTitle}>Anonymous by Default</h3>
            <p className={styles.featureDescription}>
              Your privacy is paramount. All accounts are anonymous unless you mutually agree to reveal your identity
              with another user.
            </p>
          </div>
          <div className={styles.featureCard}>
            <Users className={styles.featureIcon} />
            <h3 className={styles.featureTitle}>Diverse Perspectives</h3>
            <p className={styles.featureDescription}>
              Engage with people who share your views or challenge them. Growth comes from understanding different
              perspectives.
            </p>
          </div>
          <div className={styles.featureCard}>
            <Clock className={styles.featureIcon} />
            <h3 className={styles.featureTitle}>Time-Limited Conversations</h3>
            <p className={styles.featureDescription}>
              Conversations have a purpose and an end. When they conclude, we create balanced articles reflecting all
              viewpoints.
            </p>
          </div>
          <div className={styles.featureCard}>
            <FileText className={styles.featureIcon} />
            <h3 className={styles.featureTitle}>Balanced Articles</h3>
            <p className={styles.featureDescription}>
              Every concluded conversation becomes an article that presents multiple perspectives with equal weight and
              respect.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
