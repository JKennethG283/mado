# Fingerprints

Every site you build with **scroll-craft** gets one row here, appended after it
ships. The registry exists so your next build can prove it is a different page
rather than a re-skin of one you already made.

This file is **yours**. It starts empty on purpose: the gate is about not
repeating *yourself*, so it has nothing to say until you have built something.

The rules and the gate live in the skill's
`references/uniqueness.md`. Short version:

**A new build must differ from EVERY row below on at least 4 of the 6
dimensions.** Four against each row individually, not four on average across the
table. If a planned build fails, change the plan. Never edit a row to make room
for it.

The six dimensions are: **grammar**, **nav treatment**, **hero device**,
**act-sequence shape**, **close pattern**, **signature move**.

Dimension 6 is free, because a signature move is unique by definition. So the
gate really asks for three more out of the remaining five, and a build that
changes only grammar and world will fail it.

---

## The registry

| Build | Grammar | Nav treatment | Hero device | Act-sequence shape | Close pattern | Signature move | World | Port |
|---|---|---|---|---|---|---|---|---|
| mado | Filmic one-shot | Fixed bar: 窓 emblem whose ring fills with page progress (links to top) + pill nav (Story, Matcha, Menu, Find us) | Pinned logo-ring aperture opening onto 3 parallax planes (far plate, mid alpha hill rows, alpha tea sprig breaking the frame) | pin+parallax · flow · pin(jar fill) · flow+reveal(doors, iris) · pin(aperture full-bleed, 4-image crossfade) · scrub(mill, peak) · pan(11-drink rail) · pin(close); 8 acts, ~14.5vh pinned + 2 flow | Pinned close: the shop photo's round window rides the shrinking aperture into the logo ring; copy + contact hold; footer in stage | The 窓 aperture: one circular window that opens, holds, blows full-bleed and closes back into the logo across the page | Photographic, Uji tea country, forest + bone + leaf-lime | 4500 |
| mado-v3 (supersedes mado) | Filmic one-shot | Same as mado: progress-ring 窓 emblem + pill nav (The cup, Matcha, Menu, Find us) | Logo-ring aperture with the product cup inside + sticker parallax scattering outward; ring opens into the next act's first frame | pin(aperture+stickers) · scrub(exploding cup, overlapped under the hero, clip-map travel, peak) · pin(aperture on dark, 5-image crossfade) · pan(playlist rail + player) · pin(close); 5 acts, ~11.9vh | Pinned close: shop interior shrinks onto its own round wall sign, kanji appears, logo ring closes around it | Working playlist player for the menu (prev/next jump the rail, pause stops the mini worlds) + 窓 aperture | Light cream sticker-sheet, forest/matcha/lime/pink, photographic product | 4500 |

---

## What is taken

Add a bullet here whenever a build claims something a later build should avoid
reusing: a grammar, a nav treatment, a close pattern, a signature move, an
act-count-and-length band. The shared columns are what the next build inherits
as a constraint, so writing them down is the whole point.

- **Aperture-as-chrome**: a brand-mark ring used as a clip-path window that opens and closes the page (mado).
- **Progress emblem**: the logo's ring filling with page progress as the home link (mado).
- **Menu as rail of round windows with per-item particle worlds** (mado).
- **Exploded-product scrub handed off under a covering hero** (mado-v3).
- **Menu-as-playlist with a functional player bar** (mado-v3).

---

## Appending a row

After shipping, add one line to the table and one bullet to **What is taken** if
the build claimed something new. Fill every column. Say what the build shares
with existing rows.

Rows are append-only. A build that has been superseded stays in the table,
because the space it occupies is still occupied.

---

## Worked example

The skill's author kept a registry of twelve builds across eight page grammars.
If you want to see what a filled-in table looks like, and which shapes tend to
collide, read `EXAMPLES.md` in the scroll-craft repository. Treat it as
illustration only: those rows are somebody else's builds and they do **not**
constrain yours.
