import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.scss";
import Link from "next/link";

export default function Projects() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog | Projects</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Blog for Eva" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to my portfolio</h1>

        <p className={styles.description}>
          Check out some of my blog posts, projects, or newsletters below.
        </p>
        <div>
          <Link href="/">
            <a>Back Home</a>
          </Link>
        </div>

        <div className={styles.grid}></div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
