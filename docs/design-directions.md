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
- Hot Pepper Beauty may be used for factual verification and reservation linking only.

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

## Updated Watercolor French Directions

The previous dramatic black/blue concept was intentionally replaced after review. The current preview compares three softer watercolor/abstract French directions while preserving practical salon information.

## Direction A: Paris Atelier Watercolor

Working label: `Paris Atelier Watercolor`

Concept:

- A quiet Paris atelier mood built around paper white, ink blue, and soft watercolor washes.
- Best for balancing the salon's 50-year local trust with a younger, refined first impression.

Visual language:

- Base: warm paper, pale blue, muted rose, ink brown.
- Typography: elegant serif headings with readable Japanese body text.
- Imagery: original abstract watercolor, atelier-window geometry, soft hair-flow lines.
- Layout: generous negative space, quiet price/access modules, stable reservation CTA.

Page behavior:

- Scroll subtly shifts watercolor background washes.
- Candidate panel uses sticky desktop composition and stacked mobile composition.
- Shared information remains compact and readable.

Strengths:

- Strongest balance of French tone, trust, and usability.
- Least likely to overpromise a different physical shop.

Risks:

- May need enough modern CTA and menu structure so it does not feel too classical.

## Direction B: Lumiere du Sud

Working label: `Lumiere du Sud`

Concept:

- A warm Southern France mood using sunlight, pale yellow, olive green, and the blue awning memory.
- Best for making first-time visitors feel comfortable and open to consultation.

Visual language:

- Base: warm white, mimosa yellow, olive, light blue.
- Typography: light serif or approachable sans-serif headings with clean body text.
- Imagery: original watercolor light fields, awning-blue marks, botanical hints.
- Layout: approachable menu preview and clear Web reservation CTA.

Page behavior:

- Background washes brighten as the section enters.
- Cards appear calm and readable, without heavy animation.

Strengths:

- Most welcoming and approachable for younger first-time customers.
- Good fit for local trust and station-near convenience.

Risks:

- Can become too casual if the long-running salon credibility is underplayed.

## Direction C: Mode Francaise Abstract

Working label: `Mode Francaise Abstract`

Concept:

- A French fashion editorial mood using strong whitespace, abstract brush lines, and small rouge accents.
- Best for creating the most memorable young-facing visual identity.

Visual language:

- Base: clean off-white, deep blue/ink, champagne, restrained rouge.
- Typography: dramatic serif headings with neutral sans-serif body text.
- Imagery: original abstract watercolor, ink hair lines, editorial composition.
- Layout: sharper asymmetry, compact access blocks, fashion-magazine pacing.

Page behavior:

- Scroll introduces linear brush movement and stronger section contrast.
- Reservation CTA remains practical despite the editorial tone.

Strengths:

- Strongest visual memory and most contemporary mood.
- Good if the salon wants a sharper refresh.

Risks:

- Highest mismatch risk with existing local warmth.
- Rouge and editorial gestures should stay small.

## Recommendation

Choose Paris Atelier if the priority is the safest public preview.

Choose Lumiere du Sud if the priority is first-time comfort and local warmth.

Choose Mode Francaise if the priority is attracting younger customers with the strongest visual refresh.

Given the locked target of younger first-time customers and the rule against real-looking shop photos, the default recommendation is Paris Atelier:

- It aligns naturally with "new charm" and the French naming.
- It keeps the long-running local salon credible.
- It leaves room for a stronger menu/access/reservation layer after selection.

This gives the site a young refresh without overpromising a different physical salon experience.
