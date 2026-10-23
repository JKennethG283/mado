# Mado Website: Implementation Plan (v3, branding)

Companion to [STORYBOARD.md](STORYBOARD.md). The storyboard says *what* the site shows; this file says *how* it is built and shipped.

> **Status (24 Oct 2026):** v3 is built in `web/builds/mado/`. The origin story is gone; the page now leads with the brand, using @madomatcha.brew for the look and an exploded-product scroll (from the reference video) for the peak.
> - **Verification:** the scroll harness runs on desktop (1440×900), mobile (390×844) and reduced motion. Screenshots are in `web/lab/`.
> - **Not done:** deploying to Vercel (needs your Vercel login) and testing on a real phone.

---

## 1. Stack and hosting

| Decision | Choice |
|---|---|
| Page | Static HTML + CSS + vanilla JS, no build step |
| Scroll engine | `scrollcraft.js` / `scrollcraft.css` (scroll-craft skill), unmodified |
| Bespoke code | `mado.js` + `mado.css`: the window aperture, the playlist player, the menu mini worlds, the contact block |
| Fonts | Fredoka + Inter (Google Fonts) |
| Hosting | Vercel static, Root Directory `web/builds/mado`, `vercel.json` caches `/assets/*` for a year |

---

## 2. Concept

> **It's the site where you scroll and the matcha latte comes apart in mid-air, then the menu turns into a playlist you can skip through.**

- **Grammar:** filmic one-shot: five acts, one arc, no visible sequence.
- **Signature moves:**
  1. **The 窓 aperture:** the logo ring is a clip-path window. It opens on the cup, opens onto the tea field, and closes on the shop's round wall sign, where the 窓 appears.
  2. **The playlist player:** a version of the cup's music-player label at page size. ⏮ / ⏭ scroll to the previous or next drink, ⏸ pauses the mini worlds, and the bar shows menu progress.

| # | Act | Device | Span | Feeling |
|---|---|---|---|---|
| 1 | The window | `pin` + aperture + sticker parallax | 2.0 | Delight |
| 2 | What's in the cup? ★ | `scrub` (exploding-cup clip), overlaps act 1's last screen for a seamless handoff | 3.0 | Wow |
| 3 | Leaf to powder | `pin` + aperture + 5-image crossfade | 2.6 | Calm |
| 4 | The playlist | `pan` + player + mini worlds | 2.8 | Appetite |
| 5 | Come hang | `pin` close, aperture closes into the logo | 1.5 | Belonging |

---

## 3. Assets (Higgsfield)

| File | Made with | Notes |
|---|---|---|
| `cup-assembled` | gpt_image_2, refs: Mado's own IG cup photo + our latte photo | Music-player label on the cup |
| `cup-exploded` | gpt_image_2, ref: cup-assembled | End frame of the explode |
| `cup-explode.mp4` | kling_o3_flf (pro), first/last frame | Encoded for scrubbing: 4.0 MB desktop, 1.1 MB mobile |
| `shop-interior` | gpt_image_2 | White tiles, wood counter, green aprons, round wall sign |
| `step-*`, `mill-poster` | gpt_image_2 / Kling (v2) | Reused for Leaf to powder |
| `drinks/*` | Higgsfield product photoshoot | Reused for the playlist |

Credits: v2 used 102; v3 so far about 26 (114.7 left). The v2 story assets are moved to `web/src/retired/` and are not deployed.

---

## 4. Content

All contact data lives in `CONTACT` at the top of `mado.js`:
- **Address:** 414 Elizabeth St, Surry Hills NSW 2010 (confirmed)
- **Currency:** AUD (confirmed)
- **Hours:** Open every day, 7am to 5pm
- **Instagram / TikTok:** @madomatcha.brew
- **Phone:** empty, so it stays hidden
- **Coconut Matcha Cloud price:** empty, so the card shows "Ask in store"

---

## 5. Verification

Run from `web/` while the local server runs (`.claude/launch.json` → `mado-site`, port 4500):

```bash
node C:/Users/User/.claude/skills/scroll-craft/scripts/shoot.mjs --url http://localhost:4500 --out lab/shots
```

Add `--width 390 --height 844` for mobile and `--reduced-motion` for reduced motion. Then read `lab/*/sheet.png`.

---

## 6. Deploy to Vercel

```bash
cd web/builds/mado
npx vercel login
npx vercel          # preview URL
npx vercel --prod   # production
```

Or connect the Git repository in the Vercel dashboard with **Root Directory = `web/builds/mado`**, Framework "Other", no build command.
