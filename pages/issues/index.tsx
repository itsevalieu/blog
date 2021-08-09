import { useState } from "react";
import Head from "next/head";
import styles from "@styles/Home.module.scss";
import Link from "next/link";
import List from "@components/List/List";
import Footer from "@components/Footer/Footer";

export default function Issues() {
  const [items, setItems] = useState<any[]>([
    {
      id: 1,
      title: "Cat's Cradle1",
      excerpt: "This is an excerpt of cat's cradle.",
      date: "10/10/10",
    },
    {
      id: 2,
      title: "Cat's Cradle2",
      excerpt: "This is an excerpt of cat's cradle.",
      date: "10/10/10",
    },
    {
      id: 3,
      title: "Cat's Cradle3",
      excerpt: "This is an excerpt of cat's cradle.",
      date: "10/10/10",
    },
  ]);
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog | Issues</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Blog for Eva" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to my newsletter</h1>

        <p className={styles.description}>
          Check out some of my blog posts, projects, or newsletters below.
        </p>
        <div>
          <Link href="/">
            <a>Back Home</a>
          </Link>
        </div>
        <List items={items} />
        <div className={styles.grid}></div>
      </main>
      <Footer />
    </div>
  );
}
