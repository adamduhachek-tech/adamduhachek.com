import { ImageResponse } from "next/og";
import { Sparkmark, SPARK_LIGHT } from "@/lib/sparkmark";
import { SITE_NAME } from "@/lib/site";
import { OG_SIZE, loadOgFonts } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = `${SITE_NAME} — interactive data essays on well-being`;

// A spread of visualization families so the strip reads as a varied gallery.
const STRIP: { seed: string; viz: string }[] = [
  { seed: "ad-choropleth", viz: "choropleth" },
  { seed: "ad-slope", viz: "slope" },
  { seed: "ad-series", viz: "time-series" },
  { seed: "ad-scatter", viz: "scatter" },
  { seed: "ad-dumbbell", viz: "dumbbell" },
];

export default async function SiteOgImage() {
  const fonts = await loadOgFonts();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#faf8f4",
          padding: 56,
          fontFamily: "Source Serif 4, serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              borderTop: "5px solid #16233f",
              paddingTop: 16,
              fontFamily: "IBM Plex Mono, monospace",
              fontSize: 20,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#495061",
            }}
          >
            <span style={{ color: "#9b2335" }}>{SITE_NAME}</span>
            <span>Interactive data essays</span>
          </div>
          <div
            style={{
              fontSize: 84,
              lineHeight: 1.02,
              letterSpacing: -2,
              color: "#16233f",
              marginTop: 40,
            }}
          >
            Interactive Data Essays
          </div>
          <div
            style={{
              fontSize: 30,
              lineHeight: 1.4,
              color: "#495061",
              marginTop: 20,
              maxWidth: 900,
            }}
          >
            Hand-built visualizations on human well-being — how people rate their
            lives against how their days actually feel, across surveys, countries,
            and five decades.
          </div>
        </div>

        <div style={{ display: "flex", gap: 18 }}>
          {STRIP.map((s) => (
            <div
              key={s.seed}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 196,
                height: 132,
                backgroundColor: "#f3efe7",
                border: "1px solid #e7e2d6",
                borderRadius: 8,
              }}
            >
              <Sparkmark
                seed={s.seed}
                primaryViz={s.viz}
                palette={SPARK_LIGHT}
                size={104}
              />
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size, fonts: fonts.length ? fonts : undefined }
  );
}
