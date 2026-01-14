# Refactor Report

## 2026-01-13

- Fixed build errors caused by invalid `figma:asset/*` imports in `Contact.tsx`, `Services.tsx`, `About.tsx`, and `Home.tsx`.
- Replaced `figma:asset` schema with local asset paths (`@/assets/`).
- Verified build success with `npm run build`.

## 2026-01-14

- Updated the "Key Markets" list in `Home.tsx` to include Miami, Las Vegas, Charleston, Dublin, and London.
- Added mission statement text block with vertical line styling to the "Our Work" section in `Home.tsx`.
- Adjusted mission statement vertical line to be thinner (`w-[1px]`) and taller (`h-32 md:h-36`).
- Reduced bottom padding of the "Our Work" section to minimize space below the mission statement.
- Added "Phone Number" and "Project Type" fields to the contact form in `Contact.tsx`.
- Implemented `ScrollToTop` component to fix scroll position on route changes and hash links.
- Standardized navigation links in `Home.tsx` to handle cross-page hash navigation (`/#section`).
- Centered the "Additional Support" card in `Services.tsx` list.
- Fixed layout overlap issue for the "Schedule Call" button in `Home.tsx` by allowing text wrapping.
- Applied grid alignment fix (`lg:col-start-2`) to center the "Additional Support" card below "Legal" on the Home page.
- Reduced top padding of the "What We Do" section in `Home.tsx` to minimize whitespace.
- Updated the "Schedule Your Complimentary Diagnostic Call" button text to force a 2-line layout for better visual balance.
- Added `vercel.json` configuration to fix 404 errors on page refresh by rewriting all routes to `index.html`.
- Updated "Consulted With" section in `Home.tsx` to include "Buccament" logo.
- Applied favicon assets by creating a `public` directory and updating `index.html` with correct links.
- Renamed all logo assets in `src/assets/` from hashed filenames to meaningful names and updated imports in `Home.tsx`.
- Verified build success with `npm run build`.
