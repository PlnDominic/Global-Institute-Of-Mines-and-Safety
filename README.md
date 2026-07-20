# Global Institute of Mines and Safety (GIMS) — Website

Marketing and enrollment website for the **Global Institute of Mines and Safety (GIMS)**, a vocational training institute in Ghana offering programs in mining and heavy-equipment operation, in partnership with the **Catholic University of Ghana (CUG)**.

> **Tagline:** *Empowered to Perform*
> **Location:** Afrisipa, near Sunyani Tanoso (Bono Region, Ghana)
> **Program:** 3 months · Certificate, Testimonial, Attachment Letter, License E, Free Hostel & Uniform
> **Contact:** 0244 181 760 / 0201 151 145 · TikTok "Global Institute of Mines Tv"

## Overview

A fully static site — no build step, no dependencies. Open `index.html` in a browser, or serve the folder with any static file server:

```sh
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Structure

```
index.html       # Single-page site: hero, programs, package, enrollment, contact
css/tokens.css   # GIMS design-system tokens (colors, type, spacing, effects)
css/main.css     # Component styles (buttons, cards, badges, forms) + layout
js/main.js       # Enrollment form flow + mobile navigation
assets/logo.jpg  # GIMS crest
assets/photos/   # On-site photos from GIMS's own media (Facebook page + press)
```

Photo credits: `safety-training-day.jpg` and `gims-students.jpg` were supplied
by GIMS from their own media; `equipment-fleet.jpg` is the GIMS equipment photo
published with their press coverage on ModernGhana.

## Design system

The site implements the GIMS design system created in Claude Design:

- **Colors:** Safety Orange `#f87800` on near-black steel `#141619`, with a steel-gray neutral ramp and hi-vis semantic accents.
- **Type:** Oswald (condensed uppercase display), Barlow (body), Space Mono (numbers/codes) — loaded from Google Fonts.
- **Motifs:** 45° hazard stripes as accent bars and media placeholders; squared industrial radii (3/6/10px); orange glow reserved for the primary button and hero crest.
- **Motion:** restrained — 120–320ms color transitions and a 1px press translate; no decorative animation.

## Sections

1. **Header** — sticky, dark, orange rule; brand crest + nav + Enroll Now CTA (collapses to a menu on mobile).
2. **Hero** — "Train to operate. Built to perform." with program stats (3 months · 5 in package · License E) and the crest.
3. **Programs** — Heavy Equipment Operation, Surface Mining Fundamentals, Safety & Compliance.
4. **Package** — the five inclusions: Certificate, Testimonial, Attachment Letter, License E, Hostel & Uniform.
5. **Enroll** — application form (name, phone, email, program, hostel/terms) with a thank-you confirmation state.
6. **Footer** — location and contact details.
