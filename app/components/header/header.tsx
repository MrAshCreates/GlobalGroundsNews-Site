import { Link, useLocation } from "react-router";
import { Globe, MessageSquare, FileText, Users, User } from "lucide-react";
import { Button } from "../ui/button/button";
import { ColorSchemeToggle } from "../ui/color-scheme-toggle/color-scheme-toggle";
import styles from "./header.module.css";
import classNames from "classnames";

/**
 * Main navigation header component
 */
export function Header({ className }: { className?: string }) {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className={classNames(styles.header, className)}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <Globe className={styles.logoIcon} />
          <span>Global Ground</span>
        </Link>

        <nav className={styles.nav}>
          <Link to="/" className={classNames(styles.navLink, isActive("/") && styles.active)}>
            Home
          </Link>
          <Link to="/conversations" className={classNames(styles.navLink, isActive("/conversations") && styles.active)}>
            <MessageSquare className={styles.navIcon} />
            Conversations
          </Link>
          <Link to="/articles" className={classNames(styles.navLink, isActive("/articles") && styles.active)}>
            <FileText className={styles.navIcon} />
            Articles
          </Link>
          <Link to="/communities" className={classNames(styles.navLink, isActive("/communities") && styles.active)}>
            <Users className={styles.navIcon} />
            Communities
          </Link>
        </nav>

        <div className={styles.actions}>
          <ColorSchemeToggle />
          <Link to="/profile">
            <Button variant="outline" size="icon" aria-label="Open profile">
              <User className={styles.navIcon} />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
