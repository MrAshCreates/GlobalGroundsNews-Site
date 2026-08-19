import type { Route } from "./+types/profile";
import { Header } from "../components/header/header";
import { Button } from "../components/ui/button/button";
import { UserCircle, Shield, Users, Settings } from "lucide-react";
import styles from "./profile.module.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Profile - Global Ground" },
    {
      name: "description",
      content: "Manage your Global Ground profile and privacy settings.",
    },
  ];
}

export default function Profile() {
  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.avatarContainer}>
            <UserCircle className={styles.avatarIcon} />
          </div>
          <div className={styles.anonymousBadge}>
            <Shield className={styles.badgeIcon} />
            Anonymous User
          </div>
          <h1 className={styles.title}>Your Profile</h1>
          <p className={styles.description}>
            You are currently browsing anonymously. Your identity is protected by default.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <Shield className={styles.sectionIcon} />
            Privacy & Security
          </h2>
          <p className={styles.infoText}>
            All Global Ground accounts are anonymous by default. This ensures your safety and allows you to express your
            opinions freely without fear of judgment or retaliation.
          </p>
          <div className={styles.highlight}>
            <div className={styles.highlightTitle}>
              <Shield className={styles.highlightIcon} />
              Protected Identity
            </div>
            <p className={styles.infoText}>
              Your real identity is never shared unless you mutually agree with another user to reveal it. Both parties
              must consent before any personal information is exchanged.
            </p>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <Users className={styles.sectionIcon} />
            Identity Sharing
          </h2>
          <p className={styles.infoText}>
            You can choose to reveal your identity to specific users you trust. When both parties agree, you'll be able
            to see each other's profiles and connect on a more personal level.
          </p>
          <Button variant="outline">Manage Connections</Button>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <Settings className={styles.sectionIcon} />
            Account Settings
          </h2>
          <p className={styles.infoText}>
            Customize your experience, manage notifications, and control your privacy preferences.
          </p>
          <Button variant="outline">Open Settings</Button>
        </div>
      </div>
    </div>
  );
}
