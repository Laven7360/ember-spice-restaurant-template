# Ember & Spice implementation report

Completed 21 September 2026. The existing React/Vite site and all seven React Router pages were retained. Existing page design classes, branding, menu descriptions, prices, filters, and responsive breakpoints were preserved.

## What changed

- Replaced all 29 menu photos with visually reviewed, locally served, dish-specific illustrative photography. Home's three signatures share the corresponding Menu assets. Food/beverage cards on Experience also reuse matching local assets.
- Added a shared accessible image fallback that replaces a failed image element with an HTML/icon placeholder, without external fallback requests or changes to the image slot.
- Added a 90ms outgoing fade followed by a 310ms incoming fade with 16px upward movement and smooth easing. The navbar, footer, and floating concierge stay mounted outside the animation. Route swaps use animation completion with a short fallback timer, cancel obsolete navigation, and preserve scroll-to-top before the incoming page is painted. Reduced-motion preference disables the route animation and exit delay.
- The new photographs are AI-generated representations of the fictional restaurant's dishes. They are not real restaurant photography. The built-in image-generation tool was used; the complete prompt set and source audit are documented below.

## All source/configuration/documentation files changed

| File | Change |
| --- | --- |
| `.gitignore` | Ignore `.verification/`, which contains local testing tools, snapshots, audit originals, and screenshots. |
| `src/App.jsx` | Wrap the existing route definitions in PageTransition; keep shared chrome outside it. |
| `src/components/PageTransition.jsx` | New route transition lifecycle, cancellation, history handling, and reduced-motion subscription. |
| `src/components/ScrollToTop.jsx` | Scroll on the displayed pathname before paint, coordinated with the route swap. |
| `src/components/DishImage.jsx` | New lazy-loading image component with asynchronous decoding and accessible network-independent fallback. |
| `src/components/SignatureShowcase.jsx` | Use DishImage for the retained signature component. |
| `src/pages/Home.jsx` | Use DishImage for Home signature cards; retain their existing classes and markup structure. |
| `src/pages/Menu.jsx` | Use DishImage for cards and the detail modal; modal photography loads eagerly. |
| `src/pages/Experience.jsx` | Use DishImage for cards and the lightbox, preserving existing image fitting and layout. |
| `src/data/menuImages.js` | New shared mapping of all 29 dish IDs to local asset paths, respecting Vite's base URL. |
| `src/data/restaurantData.js` | Replace 32 menu/featured image references and two Experience food/beverage references with the shared local mapping. |
| `src/index.css` | Add scoped route animations, fixed-dialog handling, fallback styling, and reduced-motion override. |
| `docs/menu-image-audit.md` | Item-by-item original-image findings and replacement manifest. |
| `docs/menu-image-provenance.json` | Exact asset paths, dimensions, bytes, original URLs/status codes, and generation prompts. |
| `docs/implementation-report.md` | This file. |

## All 29 new image files

Every file below is under `public/images/menu/`. All are 1200 × 800 WebP; combined size is 3,401,360 bytes, with a largest file of 149,494 bytes.

```text
48-hour-wagyu-beef-rendang.webp
ayam-percik-kampung-roulade.webp
bunga-kantan-sparkling-elixir.webp
charred-bone-marrow-roti-crisps.webp
charred-sabah-rock-lobster.webp
crispy-soft-shell-crab-kerabu.webp
deconstructed-cendol-panna-cotta.webp
ember-teh-tarik-royale.webp
hearth-smoked-duck-satay.webp
kedondong-wild-mint-cooler.webp
lamb-masak-kicap-hitam.webp
lychee-butterfly-pea-spritz.webp
musang-king-durian-mille-feuille.webp
octopus-bakar-percik.webp
otak-otak-tartlet-royale.webp
pandan-coconut-clarified-punch.webp
pandan-souffle-smoked-gula-melaka.webp
prawn-paste-tiger-prawn-toast.webp
pulut-hitam-tart-jackfruit-gelato.webp
royal-tiger-prawn-laksa-lemak.webp
sarawak-spiced-black-tea.webp
smoked-asam-boi-highball.webp
smoked-king-oyster-terung-sambal.webp
smoked-lamb-rack-masak-hitam.webp
smoked-tofu-tempeh-kari-lemak.webp
truffle-nasi-kerabu-royale.webp
wagyu-beef-short-rib-bakar.webp
wild-barramundi-asam-pedas.webp
wild-mushroom-truffle-begedil.webp
```

## Verification

- `npm.cmd run build`: passed, Vite production build completed successfully.
- `npm.cmd run lint`: exit 0; no new warnings or errors. The nine pre-existing Reservations warnings remain, detailed below.
- Headless Chrome: all seven routes, stable navbar DOM, scroll-to-top from a scrolled page, rapid consecutive navigation, browser back/forward, and navigation cancelled back to its outgoing page passed.
- Browser animation events confirmed 90ms exit and 310ms entry; the entry begins with upward movement and finishes with no persistent transform. Reduced-motion navigation has no route animation or transform.
- All 29 Menu images decoded successfully at 1200 × 800. Each of the 29 detail modals loaded the matching photo. Home's three signature photos and menu filters passed.
- Deliberately blocked a real local image request: both card and modal displayed the accessible fallback with no broken `<img>` element. Switching to another category loaded its photos normally.
- All seven mobile routes passed at 390px width, including mobile drawer closing and horizontal-overflow checks.
- Compared existing design classes against a saved source baseline: unchanged. Menu content other than image URLs is unchanged. About's rendered header, heading, main and footer dimensions/styles exactly matched the baseline at 390px, 768px and 1440px.
- Production preview: all 29 image files returned HTTP 200, `image/webp`, and the expected byte counts. Experience's local food/beverage cards and lightboxes loaded successfully.
- Reviewed desktop Menu, mobile dish cards, the final fallback modal, and contact sheets of every original/replacement image. The main browser test recorded no runtime errors.

Browser-plugin discovery returned no connected browser. Verification therefore used a temporary standalone headless Chrome/Playwright setup in the ignored `.verification/` directory. This did not add application dependencies or change `package.json` or `package-lock.json`.

## Remaining issues and scope limits

- Nine existing lint warnings remain in `src/pages/Reservations.jsx`: seven unused imports and two unnecessary regex escapes. They were present before this work and are unrelated to photography or transitions.
- Interior/chef and other non-menu images still use their original external URLs. This work makes the menu photography local; it does not replace the site's other photography.
- New menu images are illustrative AI-generated assets, documented in [menu-image-provenance.json](menu-image-provenance.json). Replace them with the restaurant's own photography if this portfolio concept becomes a real restaurant site.
- Verification used Chrome; Safari and Firefox were not available for cross-browser checks.

## Generated and temporary artifacts

The ignored `dist/` directory was rebuilt. It includes `index.html`, `assets/index-DCUZwxia.js`, `assets/index-nfRSAcl_.css`, and copies of the 29 menu images, plus the existing public files. Build output is reproducible with `npm.cmd run build`.

The ignored `.verification/` directory contains baseline source/configuration copies, temporary dependencies, original downloads and contact sheets, generation input metadata, browser screenshots/results, and these audit/check scripts: `audit-originals.mjs`, `prepare-images.mjs`, `smoke.mjs`, `verify.mjs`, `compare-layout.mjs`, and `final-visual-check.mjs`. These are local review evidence and are not application assets.
