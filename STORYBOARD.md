# Mado: Website Storyboard v3 (branding)

> **Concept: "Through the Window", playful edition.** Mado (窓) means *window*. The logo's ring is a real window on the page: it opens on the cup, opens onto the tea fields, and closes at the end around the round sign on the shop wall, which becomes the logo.
>
> v3 drops the origin story (three friends, the jar, the journey) and leads with the brand: the cup, the matcha, the playlist menu and the shop.

---

## Brand reference (from @madomatcha.brew)

- **Where:** 414 Elizabeth St, Surry Hills NSW 2010 ("new home"), open every day 7am to 5pm. TikTok and Instagram: @madomatcha.brew.
- **Voice:** casual and Gen Z ("same ur fav matcha, new chapter", "peeps 🫶🏻", meme reels about the Monday rush).
- **Signature object:** every cup wears a white sticker label designed like a **music player** (logo, progress bar, ⏮ ⏸ ⏭).
- **Look:** bright white-tile shop, pale wood, dark-green aprons, gerbera flowers, pink sticker graphics, florist collabs, sparkles.

| Token | Value | Use |
|---|---|---|
| Cream | `#F6F0E2` | Page ground |
| Forest | `#1E3123` | Logo, ink, sticker outlines |
| Matcha | `#2E6B2C` | Buttons, highlights |
| Lime | `#C9D85A` | Tags, price pills |
| Pink | `#F4A6C1` | Stickers, the milk card |
| Sun | `#F2C14E` | Flower stickers |

Type: Fredoka (display, rounded like the wordmark) and Inter (body). Stickers have a hard offset shadow, a slight tilt and a thin forest outline.

---

## Scroll storyboard

| # | Section | What happens on scroll | Feeling |
|---|---|---|---|
| 1 | **The window** (hero) | The Mado cup sits inside the logo ring with flower, sparkle, heart and music-note stickers around it. Headline: *Same ur fav matcha. New chapter.* Scrolling opens the ring to full screen, the stickers scatter at different depths, and the cup grows to fill the frame. | Delight |
| 2 | **What's in the cup?** ★ peak | The cup **explodes into its layers** under your scroll: ice rises, the matcha and milk lift out as splashes, matcha powder bursts between them, and the empty cup stays put with its now-playing label. Sticker labels name each part. | Wow |
| 3 | **Leaf to powder** | A small round window on a dark ground opens onto the tea field: shade → pick → steam → dry → stone mill, with short playful captions. | Calm |
| 4 | **The playlist** (menu) | 11 drinks slide sideways as "tracks", each in a round window with its own falling-particle mini world. A player bar works: ⏮ / ⏭ jump between drinks, ⏸ pauses the animations, and the progress bar follows the scroll. | Appetite |
| 5 | **Come hang** (visit) | The bright shop interior shrinks into a round window that lands on the green sign on the wall; the 窓 appears on it and the ring closes around it to form the logo. Address, hours, Instagram, TikTok and directions. | Belonging |

The 窓 emblem in the top-left corner fills its ring as you scroll and links back to the top.

---

## Menu: 11 drinks, 11 mini worlds

Taken from the store's menu board. Prices are in AUD (confirmed). Edit the printed menu in `brand/menu/mado-menu.html` (the `MENU` list) and the website menu in `web/builds/mado/index.html`.

**Imagery split:** the printed menu keeps the illustrated cups; the Higgsfield photos in `brand/photos/drinks/` are for the website.

| # | Drink | Price | Layers (bottom → top) | Mini world |
|---|---|---|---|---|
| 01 | Matcha Latte | Iced $7.50 · Hot $5.50 / $6.00 | milk / matcha | Falling ice cubes |
| 02 | Iced Double Matcha Banana Pudding | $12.00 | milk / matcha / matcha banana pudding / cookie crumble | Banana slices and cookie crumbs |
| 03 | Iced Salted Caramel Matcha Einspänner | $10.00 | milk / matcha / cookie / einspänner cream / salted caramel | Caramel drops and biscuits |
| 04 | Iced Mango Matcha | $9.00 | mango purée / milk / matcha | Mango cubes |
| 05 | Iced Strawberry Matcha | $9.00 | strawberry purée / milk / matcha | Strawberries |
| 06 | Earl Grey Matcha | Iced $8.00 · Hot $6.00 / $6.50 | earl grey syrup / milk / matcha | Lavender and tea leaves |
| 07 | Dirty Matcha Latte | Iced $9.00 · Hot $6.50 / $7.00 | espresso / milk / matcha | Coffee beans |
| 08 | Iced Matcha Cheese Foam | $9.00 | milk / matcha / cheese foam | Rising foam bubbles |
| 09 | Iced Double Matcha | $11.00 | milk / matcha / matcha cloud | Rising matcha dust |
| 10 | Iced Creamy Coconut Matcha | $9.00 | coconut milk / coconut cream / matcha / desiccated coconut | Coconut flakes |
| 11 | Iced Coconut Matcha Cloud | ? (hidden in the photo) | coconut water / matcha cloud / shredded coconut | Shredded coconut |
| — | Milk & Alternatives | +$0.50 per cup | Oat, Almond, Soy, Coconut, Skim, Lactose-Free, Coconut Water | Pink "Remix it" card |

---

## Content checklist

- [x] Logo in HD (SVG + PNG, green and cream)
- [x] Menu redesign (HTML source + A4 300dpi PNG)
- [x] 11 HD drink photos (`brand/photos/drinks/`)
- [x] Address, hours, Instagram, TikTok (from Instagram bio)
- [x] Address confirmed: 414 Elizabeth St, Surry Hills NSW 2010
- [x] Prices confirmed as AUD
- [x] Phone number: 0424 308 859 (from the Google Maps listing)
- [ ] Price of the Iced Coconut Matcha Cloud
