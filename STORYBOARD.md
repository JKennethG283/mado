# Mado — Website Storyboard v2

> **Concept: "Through the Window."** Mado (窓) means *window*. The whole site is something you look through: every chapter is framed by the round window from the logo, and scrolling slides the shoji open to the next scene. The last window you look through is the real one at the store.

---

## Brand kit (from the rebuilt logo)

| Token | Value | Use |
|---|---|---|
| Forest | `#1E3123` | Logo, headings, dark sections |
| Cream | `#F4EEE1` | Logo on dark, text on forest |
| Paper | `#FAF6EC` | Page background (washi feel) |
| Matcha | `#7FA650` | Accents, Japanese subtitles |
| Leaf | `#C9D85A` | Price tags, highlights (carried over from the original menu labels) |

**Type:** Fredoka 600 (headings) · Inter (body; Inter Medium Italic is the tagline font) · Zen Maru Gothic (Japanese — its rounded strokes match the kanji in the logo)

**Logo files:** `brand/logo/` — full logo, emblem (ring + 窓) and wordmark, each in green and cream, as SVG and 4096px PNG. The SVGs have separate `#ring`, `#kanji`, `#word` and `#tag` groups so they can be animated piece by piece (for example, draw the ring, then stamp the kanji).

---

## The story: "Three Friends, One Window"

*Dramatised for the site. Swap in the real names and details when you have them.*

1. **The Table.** Three friends, one cramped apartment, one bowl of cheap matcha at 2 a.m. They say what everyone says: *"We should open our own place."* This time nobody laughs.
2. **The Jar.** No investors, no savings. They put a glass jar on the table labelled **MADO FUND** and go to work: one pulls double shifts as a barista, one rides deliveries through monsoon rain, one tutors kids by day and washes dishes by night. Every coin goes in the jar. It takes far longer than they hoped, and they almost give up twice.
3. **The Journey.** The jar finally pays for three plane tickets to Japan. They go door to door through tea farms in Uji, and door after door closes. On the last day an old tea master slides open the window of his tea house, whisks them a bowl and says: *"Matcha is just a window. What you see through it is up to you."* They fly home with a supplier and a name.
4. **The Build.** They build the store themselves: they paint the walls, sand the counter and cut a big round window into the front wall. The first batches are bitter, lumpy and wrong. They keep whisking.
5. **Opening Day.** The round window lights up and a queue forms outside. Three friends behind one counter: the dream, made real one cup at a time.

**Website copy line:** *"Three friends. One jar of coins. One window to Japan."*

---

## Scroll storyboard

| # | Chapter | What happens on scroll | Parallax layers (back → front) |
|---|---|---|---|
| 0 | **The Window** (hero) | The ring draws itself, 窓 stamps in, and "Mādo" fades up. Leaf shadows drift across the paper. On first scroll the shoji slide apart and the camera pushes through the ring into a misty tea hillside. | Mountains · mist · tea rows · shoji frame |
| 1 | **The Table** | A night apartment scene seen through the round window: three silhouettes and a glowing bowl. | City lights · room · friends · window frame |
| 2 | **The Jar** | A pinned scene. The jar sits in the centre and fills with coins as you scroll, while three side panels cycle through the jobs (café, rain delivery, dishes). A day counter ticks up. | Jobs montage · jar · falling coins |
| 3 | **The Journey** | A plane line draws across an ink map to Kyoto. Farm doors slide shut one after another, then the tea master's window opens and the quote appears. | Map · torii and hills · door panels |
| 4 | **Leaf to Cup** (centrepiece) | A pinned sequence where one leaf travels through 8 steps: shade, first harvest, steam, dry into tencha, stone mill (scroll-scrubbed), powder, whisk (scroll-scrubbed), cup. The colour runs from dark shade green to jade to pale foam. | Field · process prop · drifting leaves and powder |
| 5 | **The Build → Opening Day** | Before and after: a scroll-driven wipe from a bare shell to the finished store, then the round window lights up and the queue fades in. | Street · storefront · round window glow |
| 6 | **The Menu** | A horizontal row of 11 round windows; each opens into its drink's mini world (see below). | Theme loop · cup · window ring |
| 7 | **Come Visit** | The final window is the real storefront. It slides open onto the map, address, tap-to-call phone, opening hours and Instagram. | Store photo · info panel |

A small 窓 emblem stays in the corner as the progress indicator, filling with green one chapter at a time.

---

## Menu: 11 drinks, 11 mini worlds

Taken from the store's menu board. Prices are in USD (Iced · Hot S/L). Edit them in the `MENU` list in `brand/menu/mado-menu.html`.

**Imagery split:** the printed menu keeps the illustrated cups; the Higgsfield photos in `brand/photos/drinks/` are for the website.

| # | Drink | Price | Layers (bottom → top) | Mini theme animation inside its window |
|---|---|---|---|---|
| 01 | Matcha Latte | Iced $7.50 · Hot $5.50 / $6.00 | milk / matcha | Ice cubes drop and green swirls into white milk |
| 02 | Iced Double Matcha Banana Pudding | $12.00 | milk / matcha / matcha banana pudding / cookie crumble | Banana slices tumble and cookie crumble rains onto a wobbling pudding dome |
| 03 | Iced Salted Caramel Matcha Einspänner | $10.00 | milk / matcha / cookie / einspänner cream / salted caramel | Caramel drizzles over cream, a cookie drops in, salt flakes sparkle |
| 04 | Iced Mango Matcha | $9.00 | mango purée / milk / matcha | Mango cubes fall into golden purée, summer light |
| 05 | Iced Strawberry Matcha | $9.00 | strawberry purée / milk / matcha | Strawberries splash into red purée, pink bubbles rise |
| 06 | Earl Grey Matcha | Iced $8.00 · Hot $6.00 / $6.50 | earl grey syrup / milk / matcha | Bergamot slices and tea leaves drift through soft steam |
| 07 | Dirty Matcha Latte | Iced $9.00 · Hot $6.50 / $7.00 | espresso / milk / matcha | An espresso shot drops and swirls through the green (the "& Brew" moment) |
| 08 | Iced Matcha Cheese Foam | $9.00 | milk / matcha / cheese foam | A thick cloud of foam slowly settles on top |
| 09 | Iced Double Matcha | $11.00 | milk / matcha / matcha cloud | A chasen whisks a deep green cloud that blooms over the cup |
| 10 | Iced Creamy Coconut Matcha | $9.00 | coconut milk / coconut cream / matcha / desiccated coconut | A coconut cracks open and coconut snow falls |
| 11 | Iced Coconut Matcha Cloud | $ ? (hidden in the photo) | coconut water / matcha cloud / shredded coconut | Clear coconut water ripples and a green cloud floats down |
| — | Milk & Alternatives | +$0.50 per cup | Oat, Almond, Soy, Coconut, Skim, Lactose-Free, Coconut Water | Small milk cartons slide in like window panes |

---

## Content checklist

- [x] Logo in HD (SVG + PNG, green and cream)
- [x] Menu redesign (HTML source + A4 300dpi PNG)
- [x] Origin story (dramatised draft)
- [x] 11 HD drink photos (`brand/photos/drinks/`, 1792×2240, Higgsfield, each made from that drink's menu-board photo)
- [x] Real drink names and prices (from the menu board)
- [ ] Price of the Iced Coconut Matcha Cloud ← hidden in the photo
- [ ] Store address, Google Maps link, phone, opening hours, Instagram handle ← needed
- [ ] Matcha origin region (Uji, Kyoto is used as a placeholder)
- [ ] Real founder names and photos (optional; illustrated silhouettes work without them)

---

## Higgsfield asset plan (next phase)

**Style key, appended to every prompt:**
`soft natural window light, washi paper and warm wood, deep forest green #1E3123 and cream #F4EEE1 palette, matcha green accents, gentle film grain, calm Japanese minimalism, cinematic, high detail`

| Chapter | Stills | Loops (image → video) |
|---|---|---|
| 0 Hero | Misty tea hillside as 3 layers, shoji paper texture | Leaf shadows on paper, drifting mist |
| 1–3 Story | Night apartment table, MADO FUND jar, 3 jobs, Uji farm doors, tea master at a window | Coins dropping, rain on a delivery rider, window sliding open |
| 4 Process | 8 steps (shade, picking, steam, tencha, stone mill, powder, sifting, whisk) | Stone mill turning, whisk, falling powder, rising steam |
| 5 Build | Empty shell → finished store, round window lit at dusk | Window glow turning on, queue silhouettes |
| 6 Menu | 11 product shots, all at the same angle and lighting | 11 short theme loops (3–5 s) |
| 7 Visit | Storefront exterior | Window glow and soft street bokeh |

Rough total: about 30 stills and 20 loops. The 11 menu product shots come first: each uses that drink's photo from the menu board as a reference, so the real drink and the 窓 cup print stay recognisable.
