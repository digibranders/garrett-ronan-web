import os

# Configuration
# IMPORTANT: Update this URL to where you host your assets!
HOSTED_URL_BASE = 'https://PLACEHOLDER_URL_REPLACE_ME/email-signature'
OUTPUT_FILE = '/Users/apple/Desktop/AI/garrett-ronan-web/public/email-signature/garrett_outlook.html'

# Colors
COLOR_NAVY = '#1e2a3a'
COLOR_GOLD = '#ba8662'
COLOR_WHITE = '#ffffff'

# File Names (Ensure these match your hosted files)
FILE_LOGO_BLUE = 'GR_Blue.svg'
FILE_LOGO_WHITE = 'GR_White.svg'
FILE_CASTLE_LIGHT = 'Castle Light.svg'
FILE_CASTLE_DARK = 'Castle Dark.svg'
FILE_FAVICON = 'Favicon Gold.svg'

# Icon Paths (Standard Material/FontAwesome style) - keeping purely vector for now as these are inline SVG
# For Outlook, ideally these should be hosted PNGs too, but inline SVG MIGHT work in some versions.
# Safest is to use hosted PNGs for icons too.
# For this script, we will use the inline SVG for icons as a fallback, but users should replace with <img> if needed.
ICON_PIN = '''<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>'''
ICON_EMAIL = '''<path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>'''
ICON_PHONE = '''<path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>'''
ICON_WEB = '''<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>'''

def create_svg_icon(path_data, color):
    # Using larger size for better visibility
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="{color}">{path_data}</svg>'''

# URLs
url_logo_blue = f"{HOSTED_URL_BASE}/{FILE_LOGO_BLUE}"
url_logo_white = f"{HOSTED_URL_BASE}/{FILE_LOGO_WHITE}"
url_castle_light = f"{HOSTED_URL_BASE}/{FILE_CASTLE_LIGHT}"
url_castle_dark = f"{HOSTED_URL_BASE}/{FILE_CASTLE_DARK}"
url_favicon = f"{HOSTED_URL_BASE}/{FILE_FAVICON}"

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
        }}
        
        /* Outlook Specific Hints */
        p, td, div {{
            font-family: 'Montserrat', sans-serif;
            mso-line-height-rule: exactly;
        }}

        /* Dark Mode Handling - Works in Apple Mail, iOS, some Outlooks */
        @media (prefers-color-scheme: dark) {{
            .signature-container {{
                background-image: url('{url_castle_dark}') !important;
                color: {COLOR_WHITE} !important;
            }}
            .text-main {{
                color: {COLOR_WHITE} !important;
            }}
            .logo-light {{
                display: none !important;
            }}
            .logo-dark {{
                display: block !important;
            }}
            .icon-fill {{
                fill: {COLOR_GOLD} !important;
            }}
            /* Update VML fill for dark mode is not possible via CSS, 
               so Outlook mostly stays Light mode unless using specialized dark mode hacks */
        }}
        
        @media (prefers-color-scheme: light) {{
            .signature-container {{
                background-image: url('{url_castle_light}') !important;
                color: {COLOR_NAVY} !important;
            }}
            .text-main {{
                color: {COLOR_NAVY} !important;
            }}
            .logo-light {{
                display: block !important;
            }}
            .logo-dark {{
                display: none !important;
            }}
        }}
    </style>
</head>
<body>
    <!-- VML Background for Outlook -->
    <!--[if gte mso 9]>
    <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:600px;height:300px;">
    <v:fill type="frame" src="{url_castle_light}" color="#ffffff" />
    <v:textbox inset="0,0,0,0">
    <![endif]-->
    
    <table cellpadding="0" cellspacing="0" border="0" width="600" style="width: 600px; height: 300px; border-collapse: collapse; font-family: 'Montserrat', sans-serif;">
        <tr>
            <td class="signature-container" valign="top" background="{url_castle_light}" style="
                width: 600px; 
                height: 300px; 
                background-image: url('{url_castle_light}'); 
                background-repeat: no-repeat; 
                background-position: right bottom; 
                background-size: auto 85%;
                padding: 35px 40px;
                box-sizing: border-box;
                position: relative;">
                
                <!-- Inner Layout -->
                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                    <!-- Line 1: Logo -->
                    <tr>
                        <td align="left" style="padding-bottom: 20px;"> 
                            <img src="{url_logo_blue}" class="logo-light" alt="Garrett Ronan" width="280" style="display: block; border: 0;">
                            <!-- Dark mode logo hidden by default -->
                            <img src="{url_logo_white}" class="logo-dark" alt="Garrett Ronan" width="280" style="display: none; border: 0;">
                        </td>
                    </tr>
                    
                    <!-- Line 2: Spacer -->
                    <tr><td height="30"></td></tr>

                    <!-- Line 3: Contact Info -->
                    <tr>
                        <td valign="bottom">
                            <table cellpadding="0" cellspacing="0" border="0">
                                <!-- Address -->
                                <tr>
                                    <td width="32" valign="middle" style="padding-bottom: 12px;">
                                        {create_svg_icon(ICON_PIN, COLOR_GOLD)}
                                    </td>
                                    <td class="text-main" valign="middle" style="padding-bottom: 12px; font-size: 14px; font-weight: 500; color: {COLOR_NAVY}; font-family: 'Montserrat', sans-serif;">
                                        42 Brighton View Rd Fairfield, CT, 06824 USA
                                    </td>
                                </tr>
                                <!-- Email -->
                                <tr>
                                    <td width="32" valign="middle" style="padding-bottom: 12px;">
                                        {create_svg_icon(ICON_EMAIL, COLOR_GOLD)}
                                    </td>
                                    <td class="text-main" valign="middle" style="padding-bottom: 12px; font-size: 14px; font-weight: 500; color: {COLOR_NAVY}; font-family: 'Montserrat', sans-serif;">
                                        <a href="mailto:garrett@GKRHospitality.com" class="text-main" style="text-decoration: none; color: inherit;">garrett@GKRHospitality.com</a>
                                    </td>
                                </tr>
                                <!-- Phone -->
                                <tr>
                                    <td width="32" valign="middle" style="padding-bottom: 12px;">
                                        {create_svg_icon(ICON_PHONE, COLOR_GOLD)}
                                    </td>
                                    <td class="text-main" valign="middle" style="padding-bottom: 12px; font-size: 14px; font-weight: 500; color: {COLOR_NAVY}; font-family: 'Montserrat', sans-serif;">
                                        <a href="tel:+19174605793" class="text-main" style="text-decoration: none; color: inherit;">+1-917-460-5793</a>
                                    </td>
                                </tr>
                                <!-- Website -->
                                <tr>
                                    <td width="32" valign="middle" style="padding-bottom: 12px;">
                                        {create_svg_icon(ICON_WEB, COLOR_GOLD)}
                                    </td>
                                    <td class="text-main" valign="middle" style="padding-bottom: 12px; font-size: 14px; font-weight: 500; color: {COLOR_NAVY}; font-family: 'Montserrat', sans-serif;">
                                        <a href="http://www.GKRHospitality.com" class="text-main" style="text-decoration: none; color: inherit;">www.GKRHospitality.com</a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                        
                        <!-- Right Bottom: GR Monogram -->
                        <td align="right" valign="bottom">
                            <img src="{url_favicon}" alt="GR" width="75" style="display: block; border: 0;">
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
    
    <!--[if gte mso 9]>
    </v:textbox>
    </v:rect>
    <![endif]-->
</body>
</html>
'''

with open(OUTPUT_FILE, 'w') as f:
    f.write(html_content)

print(f"Outlook-compatible Signature generated at {OUTPUT_FILE}")
print(f"NOTE: Please replace 'PLACEHOLDER_URL_REPLACE_ME' in {OUTPUT_FILE} with your actual hosted asset URL before using.")
