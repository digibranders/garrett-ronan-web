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
