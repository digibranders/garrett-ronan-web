# Refactor Report

## 2026-01-15 - Professional Email Signature (v4 Single-Card)

- **File**: `email-sign.html`
- **Goal**: Create a **single** 600x300px adaptive signature card.
- **Implementation**:
  - **Structure**: Single `<table>` wrapper with `width="600"` and `height="300"`.
  - **Adaptive Styles**:
    - Default (Light): White background, Navy text, `Sign_Dark` + `Castle_Dark BG`.
    - Dark (`prefers-color-scheme: dark`): Navy background, White text, `Sign_Light` + `Castle_Light BG`.
  - **Assets**: Strict matches to user URLs.
  - **Icons**: Gold (#ba8662) PNGs from Icons8.
- **Outlook Compatibility**: used `mso` comments to handle image swapping where possible and table-based layout for stability.

_Status: Ready for user verification._

## 2026-01-16 - Email Signature Refinement (Dark Mode & Layout)

- **File**: `email-sign.html`
- **Goal**: strict 600x300px layout, 2-column structure, Dark/Light mode toggle, Outlook link color fix.
- **Changes**:
  - Implemented dual-table strategy: `.light-mode` visible by default, `.dark-mode` visible via media query.
  - Wrapped Dark Mode in `<!--[if !mso]><!-->` conditional comments to hide from Outlook Desktop (fallback to Light).
  - Enforced 600x300 container.
  - Split into 2 columns: Text (Left, ~380px), Image (Right, ~220px).
  - Reduced logo width to 280px for better proportion.
  - Set background to `transparent` for better blending (text color handles contrast).
  - Added `color: inherit` and `text-decoration: none` to links to prevent Outlook blue links.
  - Assets: `GR_Blue.png`/`Castle_Light BG.png` (Light), `GR_White.png`/`Castle_Dark BG.png` (Dark).

_Status: Ready for user verification._

### Update: 2026-01-16 10:25 AM

- **Action**: Aligned Castle Image with Website Text
- **Details**:
  - Added `padding-bottom: 25px` to the `<td>` element containing the castle image in both `.light-mode` and `.dark-mode` sections.
  - This ensures the bottom of the castle image align visually with the "www.GKRHospitality.com" text in the adjacent left column.
- **Files Modified**: `email-sign.html`
- **Result**: Castle image is now lifted to align with the text block baseline.

### Update: 2026-01-16 10:30 AM

- **Action**: Replaced Emoji Icons with Gold Image Icons
- **Details**:
  - Extracted 4 gold icons (Pin, Email, Phone, Globe) from user-provided image (`uploaded_image_1768539465820.png`) using `sharp` script `slice_icons.cjs`.
  - Saved icons to `public/sign/` as `icon-gold-pin.png`, `icon-gold-email.png`, `icon-gold-phone.png`, `icon-gold-web.png`.
  - Updated `email-sign.html` to replace the previous emoji characters with these new images (width: 20px).
- **Files Modified**: `email-sign.html`, `public/sign/*`
- **Result**: Icons now match the strict gold design required by the user.

### Update: 2026-01-16 10:40 AM

- **Action**: Applied Custom Dark Mode Color
- **Details**:
  - Extracted color `#FFF7F2` from user-provided image.
  - Replaced all occurrences of `#FFFFFF` (White) with `#FFF7F2` (Off-white/Cream) in the `.dark-mode` section of `email-sign.html`.
  - This applies to the address, email link/span, phone link/span, and website link/span.
- **Files Modified**: `email-sign.html`
- **Result**: Dark mode text now matches the specific brand color provided.

### Update: 2026-01-16 10:45 AM

- **Action**: Updated Icon File References
- **Details**:
  - Updated `email-sign.html` to point to user-named icon files: `Address.png`, `Mail.png`, `Phone.png`, `Website.png`.
  - Replaced prior `icon-gold-*.png` references in both Light and Dark mode sections.
- **Files Modified**: `email-sign.html`
- **Result**: Signature now uses the finalized icon file names.

### Update: 2026-01-16 10:55 AM

- **Action**: Resized Icons to Match Text Height
- **Details**:
  - Updated the `width` attribute of all 4 icons (`Address.png`, `Mail.png`, `Phone.png`, `Website.png`) to `14px` in both Light and Dark mode sections.
  - This aligns the visual weight of the icons with the adjacent 13px text.
- **Files Modified**: `email-sign.html`
- **Result**: Icons are now more proportional to the text.

### Update: 2026-01-16 11:00 AM

- **Action**: Aligned Castle Bottom with Text
- **Details**:
  - Removed fixed `height="300"` from the main `<table>` in both Light and Dark mode sections.
  - Reduced Castle image `width` from `220` to `180` in both sections to ensure it doesn't dictate a table height taller than the text column.
  - Removed `padding-bottom: 25px` from the Castle image container, allowing natural bottom alignment.
  - Effectively, the table now shrinks to the height of the text column (~200px), and the bottom-aligned castle sits flush with the bottom of the text.
- **Files Modified**: `email-sign.html`
- **Result**: Visual bottom alignment of Website text and Castle image.

### Update: 2026-01-16 11:15 AM

- **Action**: Updated Global Text Color
- **Details**:
  - Replaced all text colors in both Light and Dark mode sections with `#c79e7e` (Gold/Bronze).
  - This unifies the text color across all themes as per specific user request.
  - Previous colors (Navy `#1F2A35` and Cream `#FFF7F2`) were completely replaced.
- **Files Modified**: `email-sign.html`
- **Result**: All text (Address, Email, Phone, Website) now renders in `#c79e7e`.

### Update: 2026-01-16 11:25 AM

- **Action**: Applied Ideal Dimensions (Explicit Heights)
- **Details**:
  - To prevent layout shifts in email clients (like Outlook) that don't respect CSS aspect ratios perfectly without explicit attributes:
  - Added `height="18"` to all icon `<img>` tags (calculated from native 28x35 aspect ratio with width 14).
  - Added `height="167"` to Castle `<img>` tags (calculated from native 545x507 aspect ratio with width 180).
  - Maintained `auto` height for Logos (`GR_Gold.png`) as the source dimensions were variable/unverified, relying on the robust `width="180"` attribute.
- **Files Modified**: `email-sign.html`
- **Result**: Signature HTML is now more robust against initial rendering shifts.

### Update: 2026-01-16 11:35 AM

- **Action**: Downscaled Entire Signature
- **Details**:
  - Reduced overall width from 600px to 480px.
  - Reduced Logo width from 180px to 130px.
  - Reduced text font size from 13px to 11px (line-height 14px).
  - Reduced icons from 14px to 11px width.
  - Reduced Castle image from 180px to 130px width (height 120px).
- **Files Modified**: `email-sign.html`
- **Result**: A more compact signature (~20% smaller) while maintaining all alignment and proportions.

### Update: 2026-01-16 11:45 AM

- **Action**: Applied Bulletproof Link Styling
- **Details**:
  - To prevent Outlook from forcing blue/underlined links:
  - Added `!important` to `color: #c79e7e` and `text-decoration: none` on both `<a>` and inner `<span>` tags.
  - Added `mso-line-height-rule: exactly` to `<a>` tags.
  - Applied to Email, Phone, and Website links in both Light and Dark mode sections.
- **Files Modified**: `email-sign.html`
- **Result**: Links are now "bulletproof" against Outlook style overrides.

### Update: 2026-01-16 12:30 PM

- **Action**: Exposed Email Signature via URL
- **Details**:
  - Moved `sign_2.html` to `public/email-sign.html` to allow direct browser access.
  - Verified image paths are absolute URLs (Github Raw), ensuring they work from any location.
  - Fixed a typo in the HTML (`</ta ble>`).
- **Files Modified**: `public/email-sign.html`
- **Result**: Signature is now accessible at `/email-sign.html` (e.g., `localhost:3000/email-sign.html`).

## 2026-01-16 - Domain Configuration Guide

- **Type**: Documentation
- **Goal**: Provide steps to connect GoDaddy domain to Vercel.
- **Action**: Created `Vercel_GoDaddy_Integration_Guide.md` with step-by-step instructions.
- **Status**: Guide provided to user.

## 2026-01-16 - UI Refinements

- **Font Identification**: Confirmed stats numbers use **Cormorant Garamond** (via `font-serif` utility and `theme.css`).
- **Navbar Update**: Hidden "Gallery" link as per user request (commented out in `Navbar.tsx`).
- **Build Status**: Verified successfully.

## 2026-01-16 - Mobile Menu Alignment

- **Issue**: Mobile menu items were center-aligned, causing jagged numbering.
- **Fix**: Updated `Navbar.tsx` to use `items-start` for left alignment within the centered container.
- **Result**: "00", "01", etc. now form a vertical line.
- **Build Status**: Verified successfully.
