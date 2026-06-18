import Link from "next/link";

export default function NotFound() {
  return (
    <main id="content" className="notfound">
      <h1>Not found.</h1>
      <p>
        No page lives at this address — it may have been renamed or never
        existed.
      </p>
      <Link href="/" className="back-link">
        <span aria-hidden="true">←</span> Back home
      </Link>
    </main>
  );
}
