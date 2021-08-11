import { ReactNode } from "react";
import Head from "next/head";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import styles from "./Layout.module.scss";
type Props = {
  children?: ReactNode;
  title?: string;
};
export default function Layout({ children, title = "Blog" }: Props) {
  return (
    <div className={styles.Layout}>
      {/* <Head>
        <title>{title}</title>
      </Head> */}
      <Header />
      {children}
      <Footer />
    </div>
  );
}
