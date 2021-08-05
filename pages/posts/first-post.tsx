import Layout from "../../components/Layout";
import Link from "next/link";

export default function FirstPost() {
  return (
    <Layout title="Blog | First Post">
      <h1>First Post</h1>
      <p>Description</p>
      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>
    </Layout>
  );
}
