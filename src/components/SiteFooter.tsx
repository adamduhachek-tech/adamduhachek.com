import Link from "next/link";
import { SITE_AFFILIATION, AUTHOR_EMAIL } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer>
      <div className="wrap">
        <span>&copy; Adam Duhachek &middot; {SITE_AFFILIATION}</span>
        <span>
          <Link href="/about">About</Link> &middot;{" "}
          <Link href="/research">Research</Link> &middot;{" "}
          <Link href="/teaching">Teaching</Link> &middot;{" "}
          <a href={`mailto:${AUTHOR_EMAIL}`}>{AUTHOR_EMAIL}</a>
        </span>
      </div>
    </footer>
  );
}
