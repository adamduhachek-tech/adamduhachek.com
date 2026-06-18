"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE_NAME, SITE_AFFILIATION } from "@/lib/site";

const TABS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/research", label: "Research" },
  { href: "/teaching", label: "Teaching" },
];

export function SiteNav() {
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav className="nav">
      <div className="row">
        <div className="brand">
          <Link href="/">
            {SITE_NAME}
            <span className="sub">{SITE_AFFILIATION}</span>
          </Link>
        </div>
        <div className="tabs">
          {TABS.map((t) => (
            <Link
              key={t.href}
              href={t.href}
              className={isActive(t.href) ? "active" : undefined}
              aria-current={isActive(t.href) ? "page" : undefined}
            >
              {t.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
