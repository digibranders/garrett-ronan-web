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
- Verified build success with `npm run build`.
