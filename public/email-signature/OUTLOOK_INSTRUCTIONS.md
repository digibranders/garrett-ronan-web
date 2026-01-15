# Outlook Signature Instructions

Outlook on Desktop (Windows/Mac) uses Microsoft Word's rendering engine, which has specific limitations:

1.  **No Base64 Images**: Images embedded directly in code (Base64) are often blocked or stripped.
2.  **No CSS Backgrounds**: `background-image` does not work reliably. You must use `VML` (Vector Markup Language) or basic `<img>` tags.
3.  **Hosted Assets**: Images must be hosted on a public web server (like your website) and linked via absolute URLs (e.g., `https://www.yoursite.com/signature/logo.png`).

## Steps to Fix

### 1. Host the Assets

Upload the contents of `public/email-signature` to a publicly accessible folder on your website.
For example, if your site is `https://www.gkrhospitality.com`, upload them so they are accessible at:

- `https://www.gkrhospitality.com/email-signature/GR_Blue.svg`
- `https://www.gkrhospitality.com/email-signature/Castle Light.svg`
  etc.

### 2. Generate the Outlook-Compatible HTML

I have created a new script `generate_outlook.py`.
You need to edit this script to set your **Hosting URL**.

1.  Open `public/email-signature/generate_outlook.py`.
2.  Update the `HOSTED_URL_BASE` variable to your actual URL (e.g., `'https://www.gkrhospitality.com/email-signature'`).
3.  Run the script: `python3 public/email-signature/generate_outlook.py`.
4.  This will create `garrett_outlook.html`.

### 3. Convert to PNG (Recommended)

While modern Outlook supports SVG, older versions do not. For 100% compatibility, convert the `.svg` files to `.png` and update the filenames in the script.

### 4. Install in Outlook

1.  Open `garrett_outlook.html` in a browser.
2.  Select All (Cmd+A / Ctrl+A).
3.  Copy (Cmd+C / Ctrl+C).
4.  Paste into the Outlook Signature settings.
