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
- Refactored Experience Timeline in `About.tsx` to use a 12-column grid instead of flexbox for better alignment of roles and descriptions.
- Verified build success with `npm run build`.

## 2026-01-14 (Migration to Next.js)

- Replaced `vite` and `react-router-dom` with `next` (Next.js 16 App Router).
- Refactored folder structure to follow Next.js conventions (`src/app/page.tsx`, `src/app/about/page.tsx`, etc.).
- Created `src/app/layout.tsx` for Root Layout.
- Created `tsconfig.json` with correct alias configuration (`@/*`).
- Configured Tailwind CSS v4 with `@tailwindcss/postcss` in `postcss.config.mjs`.
- Replaced all `<img>` tags with optimized `next/image` components.
- Replaced all `Link` (react-router-dom) with `Link` (next/link).
- Added `'use client'` directive to client-side components.
- Refactored `ScrollToTop` to use `usePathname`.
- Validated build success with `npm run build`.
- Asset Organization: Localized 25+ external images and organized into granular subfolders (logos, hero, services, work, about, testimonials) for better maintainability.
- Status: Stable build.
- Dependencies: Moved react/react-dom to valid dependencies and removed unused @tailwindcss/vite plugin.
- **Vercel Config**: Reverted `distDir` to standard Next.js defaults as Vercel Project Settings are correctly configured for Next.js.
- **UI Polish**: Reduced Navbar padding and adjusted logo size for better visual alignment.
- **Assets**: Explicitly configured favicon icons in `layout.tsx` metadata.
- **Status**: Stable build.

## 2026-01-15

- **Navbar Alignment**: Updated `Navbar.tsx` to match the reference design:
  - Added "Philosophy" and "Expertise" links.
  - Implemented numbered hover effect.
  - Updated font sizes and spacing.
  - Styled "Inquire" button as rounded "CONTACT US".
- **Footer Alignment**: Completely replaced `Footer.tsx` with 3-column reference layout ("Inquiries", "Office", "Connect").
- **Logo Correction**:
  - Replaced `gkr-logo.png` with the exact asset from the reference repository.
  - Switched `Navbar` and `Footer` logo rendering from `next/image` to standard `<img>` tags to ensure identical sizing behavior to the reference site.
- **Visual Validation**: Confirmed correct background colors (`#181818`) and logo positioning.
- **Gallery Page Implementation**:
  - Created `src/app/gallery/page.tsx` with masonry grid layout using `react-responsive-masonry`.
  - Implemented full-screen details modal using `@radix-ui/react-dialog`.
  - Added "Gallery" link to `Navbar.tsx`.
  - Populated with mock data and placeholder images.
  - Verified build success.
- **Refinement**: Updated Gallery modal to be true full-screen (`w-screen h-screen`) removing all borders and rounding.
- **Gallery Enhancements**:
  - Added Next/Previous keyboard and on-screen navigation to the details modal (Desktop arrows **always visible**).
  - Removed grayscale filter from grid images (full color by default).
  - Updated Hero typography to match the Services page style (Label + Serif Heading + Italic Accent).
  - Aligned Gallery page title to the **left** (previously centered).
  - **Case Study Logic**: Refactored gallery items to contain multiple images. Modal navigation now cycles through images within the selected case study.
  - **Refined Mobile UI**: Hidden the overlay image counter on mobile. Implemented **sticky image header** on mobile so the image stays at the top while content scrolls below it.
- **Footer Updates**: Removed "Instagram" and "Behance" links; added "X" link. Updated all social links with correct URLs.
- **Email Signature**:
  - Created `public/email-signature/garrett.html` as a self-contained HTML file (600x300) for easy copy-pasting into email clients.
  - Implemented automatic dark mode support using `@media (prefers-color-scheme: dark)`.
  - Embedded all assets (Logos, Castle background) as Base64 strings to ensure portability without external hosting dependencies.
  - Generated custom SVG icons for contact details in the correct Gold color.
- **Content Update**: Updated "How We Work" section in `src/app/page.tsx` with refined copy for all 5 steps.
- **Bug Fix**: Fixed syntax error in `src/app/gallery/page.tsx` (unexpected `{9`).
- **Outlook Compatibility**: Updated `public/email-signature/generate_signature.py` to use GitHub Raw URLs (pointing to `dev` branch) and transitioned to a single Full Image Signature (Light/Dark variants) for pixel-perfect rendering and copying in Outlook.
- **Assets**: Added `Sign_Light.png` and `Sign_Dark.png` to `public/email-signature/new/` and linked them in the generated HTML.
- **Final Deliverable**: Created `public/email-signature/garrett_v3.html` which uses the user-provided full-signature images with an HTML Image Map for clickable links, ensuring 100% visual fidelity and no cropping.
- **Refurbished Email Signature**:
  - Created `email-sign.html` from scratch using a robust 2-column table layout (Left: Info, Right: Castle Image).
  - Implemented dual-mode (Light/Dark) support using `prefers-color-scheme`.
  - Switched to inline SVGs for icons (Gold `#ba8662`) for zero-dependency rendering.
  - Used explicit `<img>` tags for all visual elements to ensure correct scaling in Outlook.
  - **Alignment Improvements**:
    - Consolidated contact info into a single table with rigid column widths (20px icon, auto text) and spacer rows (`height="8"`) for consistent cross-client rendering.
    - Set Left Column vertical alignment to `middle` to center content relative to the Castle, improving visual balance.
    - Increased vertical separation between Signature and Contact Info (`padding-bottom: 40px`).
  - **Alignment Improvements**:
    - Consolidated contact info into a single table with rigid column widths (20px icon, auto text) and spacer rows (`height="8"`) for consistent cross-client rendering.
    - Set Left Column vertical alignment to `middle` to center content relative to the Castle, improving visual balance.
    - Increased vertical separation between Signature and Contact Info (`padding-bottom: 40px`).
  - **Alignment Improvements**:
    - Consolidated contact info into a single table with rigid column widths (20px icon, auto text) and spacer rows (`height="8"`) for consistent cross-client rendering.
    - Set Left Column vertical alignment to `middle` to center content relative to the Castle, improving visual balance.
  - **Alignment Improvements**:
    - Consolidated contact info into a single table with rigid column widths (20px icon, auto text) and spacer rows (`height="8"`) for consistent cross-client rendering.
    - Set Left Column vertical alignment to `middle` to center content relative to the Castle, improving visual balance.
  - **Alignment Improvements**:
    - Consolidated contact info into a single table with rigid column widths (20px icon, auto text) and spacer rows (`height="8"`) for consistent cross-client rendering.
    - Set Left Column vertical alignment to `middle` to center content relative to the Castle, improving visual balance.
  - **Alignment Improvements**:
    - Consolidated contact info into a single table with rigid column widths (20px icon, auto text) and spacer rows (`height="8"`) for consistent cross-client rendering.
    - Set Left Column vertical alignment to `middle` to center content relative to the Castle, improving visual balance.
    - Adjusted vertical separation between Signature and Contact Info to `padding-bottom: 10px`.
  - **Alignment Improvements**:
    - Consolidated contact info into a single table with rigid column widths (20px icon, auto text) and spacer rows (`height="8"`) for consistent cross-client rendering.
    - Set Left Column vertical alignment to `middle` to center content relative to the Castle, improving visual balance.
    - Adjusted vertical separation between Signature and Contact Info to `padding-bottom: 10px`.
    - **Castle Alignment**: Applied `padding-bottom: 65px` to align the castle's bottom edge with the Website address line.
    - Adjusted Castle position: moved further Left (70px).
    - Revised Column Widths: Left (300px) / Right (300px).
    - Defined explicit Left Column (380px) and Right Column (220px) widths.
  - **Refinement**: Adjusted Castle image width to `220px` to match the exact visual proportions requested. Forced address to single line (`white-space: nowrap`).
  - **Assets**: Switched to hosted PNGs for signatures (`GR_Blue.png` / `GR_White.png`) via GitHub Raw URLs. Updated Castle images to use hosted `Castle_Dark%20BG.png` and `Castle_Light%20BG.png` from the dev branch.
  - **Transparency**: Removed explicit background colors (`#ffffff` and `#000000`) from the main signature tables to allow for transparency and better integration with Outlook's native theming.
