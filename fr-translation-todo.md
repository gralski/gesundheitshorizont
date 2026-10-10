# French Translation To-Do

## Scope Inventory

### Core web app
- [x] Shared shell locale support (`/fr`): base layout, header, footer
- [x] French homepage route: `/fr`
- [x] French article list route: `/fr/artikel`
- [x] French article detail route: `/fr/artikel/[...slug]`
- [ ] French legal pages: `/fr/impressum`, `/fr/datenschutz`
- [ ] Translate article markdown content (`src/content/artikel/*.md`) to French variants

### Funnel
- [x] French internal funnel dashboard: `/fr/internal/funnel-tracking`
- [ ] French translation for funnel landing page: `/haut-gesund-check/derma-renew`
- [ ] French translation for funnel page: `/haut-gesund-check/dermaf`
- [ ] French translation for funnel page: `/haut-gesund-check/dermapuris`

### Login / auth
- [ ] Locate login/auth UI in this repo or confirm external ownership
- [ ] If in-repo: add `fr` translation keys and localized route(s)
- [ ] If external (e.g., Shopify/account portal): hand off translation requirements for that system

## Notes
- No dedicated login/auth page/component was found yet in `src/` or `public/`.
- Current French routes localize shared UI/chrome and date/locale metadata first; long-form content translation is next.
