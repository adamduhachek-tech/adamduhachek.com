import { getGalleryItems } from "@/lib/gallery";
import { GalleryGrid } from "@/components/GalleryGrid";

// Editorial framing for the gallery masthead.
const INTRO = {
  title: "Interactive Data Essays",
  description:
    "Hand-built, interactive data visualizations on human well-being — how people rate their lives against how their days actually feel, across surveys, countries, and five decades. Each essay draws on a single survey backbone and is fully self-contained.",
};

export default function Home() {
  const items = getGalleryItems();
  return (
    <main id="content">
      <div className="wrap" style={{ paddingTop: 36 }}>
        <section style={{ marginBottom: 8 }}>
          <h1>{INTRO.title}</h1>
          <div className="rule" />
          <p className="lede">{INTRO.description}</p>
        </section>
        <GalleryGrid items={items} />
      </div>
    </main>
  );
}
