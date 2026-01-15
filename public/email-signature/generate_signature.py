# GitHub Raw Links (Publicly accessible if repo is public)
# IMPORTANT: These point to the 'dev' branch.
REPO_BASE = "https://raw.githubusercontent.com/digibranders/garrett-ronan-web/dev/public/email-signature"

URL_LOGO_BLUE = f"{REPO_BASE}/GR_Blue.png"
URL_LOGO_WHITE = f"{REPO_BASE}/GR_White.png"
URL_CASTLE_LIGHT = f"{REPO_BASE}/Castle%20Light.png"
URL_CASTLE_DARK = f"{REPO_BASE}/Castle%20Dark.png"
URL_FAVICON = f"{REPO_BASE}/Favicon%20Gold.png"

OUTPUT_FILE = '/Users/apple/Desktop/AI/garrett-ronan-web/public/email-signature/garrett.html'

# Colors
COLOR_NAVY = '#1e2a3a'
COLOR_GOLD = '#ba8662'
COLOR_WHITE = '#ffffff'

# Helper removed as we have direct full URLs now


# SVG Icons
# Note for Outlook: Outlook 2019+ supports SVG. Older Outlooks do not.
# For maximum compatibility, convert these to PNG and host them too.
# For this script, we keep inline SVG for simplicity in modern clients, 
# but be aware Outlook might show blank boxes for these if it decides to block them.
ICON_PIN_SVG = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="#ba8662"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>'''
ICON_EMAIL_SVG = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="#ba8662"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>'''
ICON_PHONE_SVG = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="#ba8662"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>'''
ICON_WEB_SVG = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="#ba8662"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>'''


html_content = f'''<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Garrett Ronan Signature</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap');
        
        body {{
            margin: 0;
            padding: 0;
            font-family: 'Montserrat', sans-serif;
            background-color: transparent !important;
        }}
        
        /* Universal Resets */
        td, p, div, a {{
            font-family: 'Montserrat', sans-serif;
            mso-line-height-rule: exactly;
        }}
        
        a {{
            text-decoration: none;
            color: inherit;
        }}

        /* Dark Mode Media Query */
        @media (prefers-color-scheme: dark) {{
            /* We will handle image swapping via display:none on the img tags themselves for castle too */
            .text-main {{
                color: {COLOR_WHITE} !important;
            }}
            .logo-light, .castle-light {{
                display: none !important;
            }}
            .logo-dark, .castle-dark {{
                display: block !important;
            }}
            .icon-fill {{
                fill: {COLOR_GOLD} !important;
            }}
        }}

        @media (prefers-color-scheme: light) {{
            .text-main {{
                color: {COLOR_NAVY} !important;
            }}
            .logo-light, .castle-light {{
                display: block !important;
            }}
            .logo-dark, .castle-dark {{
                display: none !important;
            }}
        }}
    </style>
</head>
<body>
    <table cellpadding="0" cellspacing="0" border="0" width="600" style="width: 600px; border-collapse: collapse; font-family: 'Montserrat', sans-serif;">
        <tr>
            <td class="signature-container" valign="top" style="padding: 35px 40px; box-sizing: border-box;">
                
                <!-- Inner Layout -->
                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                    <!-- Line 1: Logo -->
                    <tr>
                        <td align="left" style="padding-bottom: 20px;" colspan="2"> 
                            <!-- Light Mode Logo -->
                            <img src="{URL_LOGO_BLUE}" class="logo-light" alt="Garrett Ronan" width="280" style="display: block; border: 0;">
                            <!-- Dark Mode Logo -->
                            <img src="{URL_LOGO_WHITE}" class="logo-dark" alt="Garrett Ronan" width="280" style="display: none; border: 0;">
                        </td>
                    </tr>
                    
                    <!-- Line 2: Spacer -->
                    <tr><td height="20" colspan="2"></td></tr>

                    <!-- Line 3: Content Row -->
                    <tr>
                        <!-- Left Col: Contact Info -->
                        <td valign="bottom" width="260">
                            <table cellpadding="0" cellspacing="0" border="0">
                                <!-- Address -->
                                <tr>
                                    <td width="32" valign="middle" style="padding-bottom: 12px;">
                                        {ICON_PIN_SVG}
                                    </td>
                                    <td class="text-main" valign="middle" style="padding-bottom: 12px; font-size: 14px; font-weight: 500; color: {COLOR_NAVY}; font-family: 'Montserrat', sans-serif;">
                                        42 Brighton View Rd Fairfield, CT, 06824 USA
                                    </td>
                                </tr>
                                <!-- Email -->
                                <tr>
                                    <td width="32" valign="middle" style="padding-bottom: 12px;">
                                        {ICON_EMAIL_SVG}
                                    </td>
                                    <td class="text-main" valign="middle" style="padding-bottom: 12px; font-size: 14px; font-weight: 500; color: {COLOR_NAVY}; font-family: 'Montserrat', sans-serif;">
                                        <a href="mailto:garrett@GKRHospitality.com" class="text-main" style="text-decoration: none; color: inherit;">garrett@GKRHospitality.com</a>
                                    </td>
                                </tr>
                                <!-- Phone -->
                                <tr>
                                    <td width="32" valign="middle" style="padding-bottom: 12px;">
                                        {ICON_PHONE_SVG}
                                    </td>
                                    <td class="text-main" valign="middle" style="padding-bottom: 12px; font-size: 14px; font-weight: 500; color: {COLOR_NAVY}; font-family: 'Montserrat', sans-serif;">
                                        <a href="tel:+19174605793" class="text-main" style="text-decoration: none; color: inherit;">+1-917-460-5793</a>
                                    </td>
                                </tr>
                                <!-- Website -->
                                <tr>
                                    <td width="32" valign="middle" style="padding-bottom: 12px;">
                                        {ICON_WEB_SVG}
                                    </td>
                                    <td class="text-main" valign="middle" style="padding-bottom: 12px; font-size: 14px; font-weight: 500; color: {COLOR_NAVY}; font-family: 'Montserrat', sans-serif;">
                                        <a href="http://www.GKRHospitality.com" class="text-main" style="text-decoration: none; color: inherit;">www.GKRHospitality.com</a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                        
                        <!-- Right Col: Castle + Monogram -->
                        <!-- Using side-by-side nested table to ensure alignment and fit -->
                        <td align="right" valign="bottom" width="260">
                            <table cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                    <!-- Castle -->
                                    <td valign="bottom" align="right" style="padding-right: 15px;">
                                        <img src="{URL_CASTLE_LIGHT}" class="castle-light" alt="" width="160" style="display: block; border: 0;">
                                        <img src="{URL_CASTLE_DARK}" class="castle-dark" alt="" width="160" style="display: none; border: 0;">
                                    </td>
                                    <!-- Monogram -->
                                    <td valign="bottom" align="right">
                                        <img src="{URL_FAVICON}" alt="GR" width="60" style="display: block; border: 0;">
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
'''

with open(OUTPUT_FILE, 'w') as f:
    f.write(html_content)

print(f"Universal Signature generated at {OUTPUT_FILE}")
