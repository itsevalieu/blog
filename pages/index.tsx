import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Link from "next/link";
import Footer from "@components/Footer/Footer";
import Header from "@components/Header/Header";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Eva Lieu</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Blog for Eva" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <h1 className={styles.title} data-testid="cats">
          Hello
        </h1>

        <p className={styles.description}>
          Check out some of my blog posts, projects, or newsletters below.
        </p>

        <div className={styles.grid}>
          <Link href="/posts">
            <a className={[styles.card, styles.card_post].join(" ")}>
              <h2>Posts &rarr;</h2>
              <p>
                Thoughts and musings on programming, recent events, or life in
                general.
              </p>
            </a>
          </Link>
          <Link href="/projects">
            <a className={[styles.card, styles.card_project].join(" ")}>
              <h2>Projects &rarr;</h2>
              <p>Projects that I've worked on as a full stack developer.</p>
            </a>
          </Link>
          <Link href="/issues">
            <a className={[styles.card, styles.card_issue].join(" ")}>
              <h2>Issues &rarr;</h2>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
