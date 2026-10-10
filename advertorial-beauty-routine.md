# Derma Renew – Beauty-Routine-Advertorial

Route: `/artikel/derma-renew-beauty-routine/`

Source: `src/pages/artikel/derma-renew-beauty-routine.astro`

## Direction

German cold-traffic advertorial inspired by Auri's story → explanation → product → objections → offer sequence. Headline: “Der Tiegel war leer. Die Frage blieb.” The opening is explicitly an illustrative scene, not a fabricated testimonial. Uses existing editorial imagery from `advertorial-v3` and the existing product image.

Standalone Astro route with scoped styling, responsive editorial layout, sticky desktop product box, native FAQ disclosures, and a mobile offer bar revealed at the product section. Existing pages and shared layouts are untouched. No new dependencies.

## Measurement

Product links point to `https://dermapuris.de/products/derma-renew-komplex`.

- `utm_source=gesundheitshorizont`
- `utm_medium=advertorial`
- `utm_campaign=beauty_routine_story`
- `utm_content=product_reveal|sidebar|closing|mobile_sticky`

These parameters identify outbound placements; they do not implement conversion tracking. The standalone route deliberately does not inherit BaseLayout's unconditional Pixel, Clarity, or GA scripts. Connect consent-aware measurement before paid traffic. Incoming campaign parameters are not automatically forwarded.

## Current state

Local preview, not deployed. `noindex, follow` until the experiment is ready. No invented discounts, ratings, customer stories, limited stock, or guarantee terms. No result timeframe or DHT claims.

Before launch, match ingredient descriptions and product photography to the current label, validate current shop destination and offer, and review the complete ad/landing-page combination. Meta approval has not been tested or guaranteed.

## Validation

`npm run build` passes. The existing duplicate route warning for `derma-renew-hautpflege-durchbruch` is unrelated to this page. Browser checks: desktop hero, 390px mobile layout without horizontal overflow, product image loading, mobile offer visibility after reveal, and FAQ expansion.
