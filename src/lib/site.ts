export const SITE_NAME = "Adam Duhachek";
export const SITE_AFFILIATION = "University of Illinois Chicago";
export const AUTHOR_EMAIL = "adamd@uic.edu";

/** The production canonical, used for OG/share URLs and sitemap. */
const PRODUCTION_URL = "https://adamduhachek.com";

export function siteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  // On the production deployment, always use the custom domain so canonical
  // links and share cards point at adamduhachek.com, not the *.vercel.app host.
  if (process.env.VERCEL_ENV === "production") return PRODUCTION_URL;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL)
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
}
