import Link from "next/link";
export default function Header() {
  return (
    <header>
      <Link href="/">
        <a>Home</a>
      </Link>
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
    </header>
  );
}
