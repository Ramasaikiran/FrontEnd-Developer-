# CampusPe Landing Page

Responsive landing page for CampusPe, a platform that connects students, colleges and employers. Built from a Figma design for a 24-hour frontend assignment.

**Live site:** https://front-end-developer-orcin.vercel.app/

## Tech stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Plain CSS (`app/globals.css`), no UI libraries
- Inter via `next/font`

## Sections

1. Navbar
2. Hero with audience cards (College, Job seeker, Hiring) and stats
3. Trusted partners
4. Opportunity discovery with live feed panel
5. Resume upload
6. For colleges
7. For employers
8. App interface preview and download
9. Support block
10. Footer

## Getting started

```bash
git clone https://github.com/Ramasaikiran/FrontEnd-Developer-.git
cd FrontEnd-Developer-
npm install
npm run dev
```

Open http://localhost:3000.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Create a production build |
| `npm start` | Run the production build |

## Project structure

```
app/
  layout.tsx     Root layout, font, metadata
  page.tsx       Landing page content and components
  globals.css    All styles, with responsive breakpoints
public/
  app-screens.png    App screens strip
  app-download.png   Download section phones
  partners.png       Partner logos
```

## Responsive behavior

- Desktop: two-column sections, three audience cards.
- Tablet (under 900px): single column, floating hero cards hidden.
- Mobile (under 560px): two-column stats, smaller layout spacing.

## Deployment

Deployed on Vercel. Every push to `main` triggers a new deploy.

## Notes

- Images in `public/` are placeholders cropped from design screenshots. Replace them with exported Figma assets for sharper results.
- Links are placeholders (`#`).
