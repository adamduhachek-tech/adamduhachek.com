# adamduhachek.com

Personal academic website for **Adam Duhachek** — Bielinski Family Faculty Scholar & Professor of Marketing, University of Illinois Chicago.

A static, self-contained site (no build step). Deployed on **Vercel** at **adamduhachek.com**.

## Structure

| Path | Page |
|---|---|
| `index.html` | Home — gallery of 50 interactive data essays (loads `gallery.json`) |
| `about.html` | About — bio, title, contact, research interests |
| `research.html` | Research — overview + full curriculum vitae (51 publications) |
| `teaching.html` | Teaching — courses, international teaching, doctoral advising (linked) |
| `style.css` | Shared styles |
| `gallery.json` | Manifest powering the Home gallery |
| `Duhachek June 2026 CV.pdf` | CV (linked from Research) |
| `*.html` (50 files) | The individual interactive data essays (each fully self-contained: hand-built D3, inlined data) |

All internal links are relative, so the site works at any host.

## Deploy on Vercel

1. Import this GitHub repo at [vercel.com/new](https://vercel.com/new).
2. **Framework Preset:** *Other*. **Build Command:** *(none)*. **Output Directory:** `.` (root). It's pure static — no build.
3. Deploy. Vercel serves `index.html` at `/` automatically (so the bare domain works, unlike the prior object-storage host).

### Custom domain (adamduhachek.com)

In the Vercel project → **Settings → Domains**, add `adamduhachek.com` (and `www.adamduhachek.com`), then set the DNS records Vercel shows at your registrar:
- Apex `adamduhachek.com` → **A** record to `76.76.21.21` (or the value Vercel displays), and/or
- `www` → **CNAME** to `cname.vercel-dns.com`.

Vercel issues the TLS certificate automatically once DNS resolves.

## Editing

Each essay is a standalone HTML file. To update the gallery, edit `gallery.json` (the Home page renders cards from it). The essays were generated from the analysis pipeline in the companion research repository.
