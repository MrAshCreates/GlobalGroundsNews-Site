import { useState } from "react";
import type { Route } from "./+types/conversations";
import { Header } from "../components/header/header";
import { ConversationCard } from "../components/conversation-card/conversation-card";
import { mockConversations } from "../data/mock-data";
import styles from "./conversations.module.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Conversations - Global Ground" },
    {
      name: "description",
      content: "Join active conversations on topics that matter to you.",
    },
  ];
}

const categories = ["All", "Environment", "Technology", "Education", "Health", "Society", "Economy"];

export default function Conversations() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredConversations =
    selectedCategory === "All" ? mockConversations : mockConversations.filter((c) => c.category === selectedCategory);

  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.content}>
        <div className={styles.header}>
          <h1 className={styles.title}>Active Conversations</h1>
          <p className={styles.description}>
            Join ongoing discussions and share your perspective. Every voice matters.
          </p>
        </div>

        <div className={styles.filters}>
          {categories.map((category) => (
            <button
              key={category}
              className={`${styles.filterButton} ${selectedCategory === category ? styles.active : ""}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filteredConversations.map((conversation) => (
            <ConversationCard key={conversation.id} conversation={conversation} />
          ))}
        </div>
      </div>
    </div>
  );
}
