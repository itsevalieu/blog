import { useState } from "react";
import Head from "next/head";
import styles from "@styles/Home.module.scss";
import List from "@components/List/List";
import Footer from "@components/Footer/Footer";
import Header from "@components/Header/Header";
import Hero from "@components/Hero/Hero";
import Subscribe from "@components/Subscribe/Subscribe";
import Teaser from "@components/Teaser/Teaser";

export default function Posts() {
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
    {
      id: 4,
      title: "Cat's Cradle4",
      excerpt: "This is an excerpt of cat's cradle.",
      date: "10/10/10",
    },
    {
      id: 5,
      title: "Cat's Cradle5",
      excerpt: "This is an excerpt of cat's cradle.",
      date: "10/10/10",
    },
    {
      id: 6,
      title: "Cat's Cradle6",
      excerpt: "This is an excerpt of cat's cradle.",
      date: "10/10/10",
    },
  ]);
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog | Posts</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Blog for Eva" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <Hero>
          <h1 className={styles.title}>Welcome to my blog</h1>
          <p className={styles.description}>
            Check out some of my blog posts, projects, or newsletters below.
          </p>
        </Hero>
        <Subscribe />
        <Teaser items={items.slice(0, 3)} />
        <List items={items.slice(3)} />
      </main>
      <Footer />
    </div>
  );
}
