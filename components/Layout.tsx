import { ReactNode } from "react";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};
export default function Layout({ children, title = "Blog" }: Props) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <header>Header</header>
      {children}
      <footer>Footer</footer>
    </div>
  );
}
