import { ImageResponse } from "next/og";
import { getEssay } from "@/lib/essays";
import { Sparkmark, SPARK_LIGHT } from "@/lib/sparkmark";
import { SITE_NAME } from "@/lib/site";
import { OG_SIZE, loadOgFonts } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "Data essay share card";

export default async function OgImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [essay, fonts] = await Promise.all([
    Promise.resolve(getEssay(slug)),
    loadOgFonts(),
  ]);

  const title = essay?.title ?? SITE_NAME;
  const dataset = essay?.dataset ?? null;
  const readMinutes = essay?.readingMinutes ?? null;
  const meta = [dataset, readMinutes ? `${readMinutes} min read` : null]
    .filter(Boolean)
    .join("  ·  ");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: "#faf8f4",
          fontFamily: "Source Serif 4, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            flex: 1,
            padding: 56,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              borderTop: "5px solid #16233f",
              paddingTop: 18,
            }}
          >
            <div
              style={{
                fontFamily: "IBM Plex Mono, monospace",
                fontSize: 22,
                letterSpacing: 5,
                textTransform: "uppercase",
                color: "#9b2335",
              }}
            >
              {SITE_NAME}
            </div>
            <div
              style={{
                fontSize: title.length > 60 ? 52 : 64,
                lineHeight: 1.05,
                color: "#16233f",
                marginTop: 26,
                letterSpacing: -1,
              }}
            >
              {title}
            </div>
          </div>
          {meta && (
            <div
              style={{
                fontFamily: "IBM Plex Mono, monospace",
                fontSize: 19,
                letterSpacing: 1,
                color: "#495061",
              }}
            >
              {meta}
            </div>
          )}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 468,
            borderLeft: "2px solid #e7e2d6",
            backgroundColor: "#f3efe7",
            overflow: "hidden",
          }}
        >
          <Sparkmark
            seed={slug}
            primaryViz={essay?.primaryViz ?? null}
            palette={SPARK_LIGHT}
            size={360}
          />
        </div>
      </div>
    ),
    { ...size, fonts: fonts.length ? fonts : undefined }
  );
}
