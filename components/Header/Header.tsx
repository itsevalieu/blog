import Link from "next/link";
import styles from "./Header.module.scss";
export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header_brand}>
        <Link href="/">
          <a>
            <h1>Home</h1>
          </a>
        </Link>
      </div>
      <div className={styles.header_links}>
        <Link href="/posts">
          <a>Blog</a>
        </Link>
        <Link href="/portfolio">
          <a>Portfolio</a>
        </Link>
        <Link href="/issues">
          <a>Newsletter</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
        <Link href="/resume">
          <a>Resume</a>
        </Link>
      </div>
    </header>
  );
}
