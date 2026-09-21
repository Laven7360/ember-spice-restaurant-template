# Ember & Spice — Premium Restaurant Website Template

## Project overview

Ember & Spice is a fictional contemporary Malaysian restaurant concept created as a freelance web-development portfolio and website template project. It demonstrates a complete restaurant frontend with warm charcoal-and-gold styling, editorial food photography, and a multi-page browsing experience.

## Live Demo

**Coming soon**

## Key features

- Seven dedicated pages with shared navigation, footer, and floating WhatsApp enquiry access.
- A 29-item menu with categories, dietary filters, signature highlights, and dish-detail modals.
- Local optimized menu photography and graceful image fallbacks.
- Dining-experience galleries, tasting-menu presentations, reviews, and a location FAQ.
- Subtle route transitions with coordinated scroll-to-top and reduced-motion support.

## Pages and routes

| Route | Page |
| --- | --- |
| `/` | Home and signature dishes |
| `/about` | Restaurant concept and culinary story |
| `/menu` | Menu categories, filters, and dish details |
| `/experience` | Dining spaces, gallery, and tasting menus |
| `/reviews` | Demonstration testimonials and dining philosophy |
| `/reservations` | Simulated reservation form and confirmation |
| `/visit` | Location, contact details, service hours, and FAQ |

## Technology stack

React 19, Vite 8, React Router 7, Tailwind CSS 4, Lucide React icons, and Oxlint. The application uses JavaScript and JSX with npm dependency locking.

## Responsive design

Mobile, tablet, and desktop layouts use responsive grids, flexible typography, and a mobile navigation drawer. Menu cards, contact actions, and reservation controls adapt to the available screen width.

## Menu and reservation functionality

The menu includes Small Plates, Mains, From the Grill, Desserts, and Drinks. Visitors can filter dishes and open detail modals containing descriptions, prices, and dietary information. Shared content lives in `src/data/restaurantData.js`.

Reservations are a **frontend simulation**: users select a date, service, time, party size, and seating area, then enter contact details. Client-side validation leads to a demonstration confirmation and generated reference number. There is no restaurant backend, live availability check, real booking, or email/WhatsApp confirmation delivery.

## WhatsApp enquiry integration

The floating concierge and other WhatsApp links direct portfolio enquiries to `60167938894`, displayed as **+60 16-793 8894**, with this pre-filled message:

> Hello, I'm interested in this restaurant website template and would like to enquire about a website.

The destination and message are configured centrally in `src/data/restaurantData.js`. Opening a link prepares a WhatsApp chat; it does not automatically send a message.

## Accessibility and performance considerations

- Menu images provide descriptive alternative text and accessible failure placeholders.
- Controls include accessible names and focus styling where implemented.
- Route transitions respect `prefers-reduced-motion` and keep shared navigation mounted.
- Menu photography uses local WebP assets, lazy-loaded cards, and asynchronous decoding; modal images load eagerly.

These are implemented considerations, not a claim of full accessibility certification or a particular performance score. Some non-menu photography and fonts still load from external providers.

## Local development

Use a recent Node.js LTS release compatible with the installed Vite version and npm.

```bash
npm ci
npm run dev
```

Open the local URL printed by Vite. No API keys or environment variables are required for the current frontend.

Run the code checks with:

```bash
npm run lint
```

On Windows, use `npm.cmd` if PowerShell blocks the `npm.ps1` launcher.

## Production build

```bash
npm run build
npm run preview
```

The build is generated in `dist/`; the preview command serves it locally for review. A production host must serve the app entry point for React Router paths such as `/menu` and `/visit`. If hosting under a subdirectory, configure the Vite base path and router base consistently before deployment.

## Project structure

```text
src/
  components/          Shared UI, image handling, and route transitions
  pages/               Route-level page components
  data/                Restaurant content and local image mappings
  assets/              Bundled source assets
  App.jsx              Application shell and route definitions
  main.jsx             React entry point
  index.css            Theme and shared styles
public/
  images/menu/         29 local menu photographs
docs/                  Implementation notes and image audit/provenance
index.html             HTML entry point and metadata
vite.config.js         Vite configuration
```

Dependencies, production output, local verification artifacts, and private environment files are excluded through `.gitignore`. Keep required files in `src/assets/` and `public/` with the project.

## Portfolio and template usage

This project showcases restaurant website design and frontend implementation for prospective freelance clients. Its structure can serve as the starting point for a separately scoped client website. Before a real launch, replace demonstration content and contact details, supply approved brand assets, connect any required services, and review accessibility and deployment configuration.

Menu images are AI-generated illustrative photography created for this fictional concept. The [image audit](docs/menu-image-audit.md) and [provenance record](docs/menu-image-provenance.json) document the assets. No license file has been selected yet; this README does not grant reuse rights.

## Disclaimer

**Ember & Spice is fictional and is not an operating restaurant.** Restaurant stories, personnel, reviews, recognitions, location details, menus, and reservation confirmations are demonstration content, not real endorsements or bookings. The public telephone and WhatsApp contact are intentional portfolio enquiry channels.
