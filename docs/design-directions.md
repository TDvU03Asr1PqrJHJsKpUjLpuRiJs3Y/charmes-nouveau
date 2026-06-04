# Charmes Nouveau Design Directions

Created: 2026-06-04

This document records the design-selection gate for the Charmes Nouveau static site.

## Locked Constraints

- Target audience: younger first-time customers.
- Initial scope: home, menu, access, news, blog.
- Implementation: static HTML/CSS/JS for GitHub Pages.
- Publication posture: public URL used as limited-share preview with `noindex`.
- Primary CTA: Hot Pepper Beauty reservation link.
- Reservation URL: `https://beauty.hotpepper.jp/CSP/bt/reserve/?storeId=H000743704`
- Assets: generated abstract/mood visuals only.
- Do not copy Hot Pepper Beauty photos, reviews, or wording.
- Do not use AI images that look like real photos of the actual shop.

## Reference Sites Reviewed

### WATER

URL: https://www.water-salon.com/

Useful patterns:

- Calm concept-first hero with sparse, poetic copy.
- Navigation exposes concept, staff, price, reserve, blog, access.
- Uses large negative space and quiet typography to create a high-end feel.
- Price and access information are present without making the site feel dense.

How to translate:

- Use Charmes Nouveau's "new charm" and long East-Koganei history as the concept anchor.
- Use blue, water, light, and hair-flow abstract visuals instead of real salon photos.

### CITRON DESIGN WORKS

URL: https://www.citron-design-works.com/

Useful patterns:

- Small private-salon positioning is very clear.
- Copy focuses on calm, comfort, consultation, and care.
- Reservation and consultation are visible as practical actions.
- Sections are simple and readable.

How to translate:

- Position Charmes Nouveau as an approachable local salon where first-timers can consult comfortably.
- Keep access, reservation, and menu easy to find on mobile.

### ETCH HAIR DESIGN

URL: https://www.etchhair.com/

Useful patterns:

- Strong statement line and bilingual identity.
- Clear navigation: About, Info, Team, Services, Location & Contact, Gallery.
- Emphasizes specialist knowledge and trust.

How to translate:

- Use a stronger editorial tone for younger customers.
- Emphasize hair concerns such as gray blending, care, head spa, and consultation without copying external wording.

### saroweb

URL: https://saroweb.jp/

Useful patterns:

- Shows that salon sites can be divided into distinct worlds: minimal, natural, editorial, cinematic, story-led.
- Strong design naming helps non-designers choose a direction.
- Mentions practical quality foundations: SEO, speed, image optimization, and accessibility.

How to translate:

- Present Charmes Nouveau options as named directions with clear trade-offs.
- Keep the selected implementation lightweight and fast.

## Direction A: Minimal Quality

Working label: `Clear Blue Minimal`

Concept:

- A quiet, refined site built around clear blue, white space, and fine typography.
- Best for making the long-running salon feel modern without becoming loud.

Visual language:

- Base: warm white and soft blue-gray.
- Accent: Charmes blue.
- Typography: clean sans-serif with restrained Japanese headings.
- Imagery: abstract hair strands, soft water reflections, light through glass, blue awning-inspired shapes.
- Layout: generous vertical rhythm, large hero, slim nav, calm price tables.

Page behavior:

- Home opens with a full-width abstract hero and reservation CTA.
- Menu uses simple grouped pricing.
- Access is direct and utility-first.
- News/blog pages explain that latest posts continue on the current site.

Strengths:

- Safest balance of young, clean, and trustworthy.
- Works well without real shop photography.
- Low implementation risk.

Risks:

- Could feel too quiet if the goal is highly trendy or social-media-like.

## Direction B: Soft Natural

Working label: `Light Care Natural`

Concept:

- A gentle, approachable site that makes first-time visitors feel comfortable asking for advice.
- Best for emphasizing care, head spa, consultation, and local warmth.

Visual language:

- Base: ivory, pale green, light blue, soft gray.
- Accent: muted coral or fresh blue.
- Typography: rounded but not childish.
- Imagery: abstract botanical shadows, soft hair-care textures, hand-drawn line accents, light fabric.
- Layout: approachable cards, short paragraphs, clear CTA blocks.

Page behavior:

- Home leads with "髪も心も軽くなる相談しやすい美容室" style messaging.
- Menu highlights popular care routes before full pricing.
- Access includes a friendly "東小金井駅から徒歩" route section.
- News/blog pages feel like quiet bulletin boards.

Strengths:

- Most welcoming for first-time customers.
- Good fit for head spa and care-oriented services.
- Reduces anxiety around reservation.

Risks:

- May feel less sharp or fashion-forward to younger visitors seeking trendiness.

## Direction C: Youth Editorial

Working label: `Blue Edit Modern`

Concept:

- A more magazine-like, modern site for younger customers who judge salons by visual energy and mood.
- Best for making the salon feel newly refreshed and current.

Visual language:

- Base: off-white with bold black type.
- Accent: vivid blue and silver-gray.
- Typography: large editorial headings, compact body text, strong section numbers.
- Imagery: abstract cropped hair silhouettes, blue light gradients, collage-like productless shapes.
- Layout: asymmetric sections, large numbers, strong sticky reservation CTA.

Page behavior:

- Home uses punchy copy and a strong booking band.
- Menu is grouped by customer intent: cut, color, care, special day.
- Access is compact and map-forward.
- News/blog are styled as external reading cards.

Strengths:

- Strongest appeal to younger new customers.
- Feels clearly renewed compared with the current site.
- Good for Instagram/Hot Pepper traffic.

Risks:

- Highest mismatch risk with the existing local/long-running salon atmosphere.
- Needs careful restraint so it does not feel like a different shop.

## Recommendation

Choose Direction A if the priority is the safest public preview.

Choose Direction B if the priority is first-time comfort and local trust.

Choose Direction C if the priority is attracting younger customers with the strongest visual refresh.

Given the locked target of younger first-time customers and the rule against real-looking shop photos, the default recommendation is Direction A with selected touches from Direction C:

- A calm blue minimal base.
- Modern editorial section titles.
- Strong Hot Pepper reservation CTA.
- Abstract blue/hair/light imagery.

This gives the site a young refresh without overpromising a different physical salon experience.
