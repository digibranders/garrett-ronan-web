# GitHub Raw Links (Publicly accessible if repo is public)
# IMPORTANT: These point to the 'dev' branch.
REPO_BASE = "https://raw.githubusercontent.com/digibranders/garrett-ronan-web/dev/public/email-signature"

# New Full Signature Images
URL_SIGN_LIGHT = f"{REPO_BASE}/new/Sign_Light.png" # For Dark Mode (Light Text)
URL_SIGN_DARK = f"{REPO_BASE}/new/Sign_Dark.png"   # For Light Mode (Dark Text)

OUTPUT_FILE = '/Users/apple/Desktop/AI/garrett-ronan-web/public/email-signature/garrett.html'

# Colors
COLOR_NAVY = '#1e2a3a'
COLOR_WHITE = '#ffffff'


html_content = f'''<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Garrett Ronan Signature</title>
    <style>
        body {{
            margin: 0;
            padding: 0;
            /* background-color: transparent !important; Removed to prevent confusion */
        }}
        
        a {{
            text-decoration: none;
            border: 0;
            outline: none;
        }}
        
        img {{
            border: 0;
            display: block;
        }}

        /* Dark Mode Media Query */
        @media (prefers-color-scheme: dark) {{
            .sign-light-mode {{
                display: none !important;
            }}
            .sign-dark-mode {{
                display: block !important;
            }}
        }}

        @media (prefers-color-scheme: light) {{
            .sign-light-mode {{
                display: block !important;
            }}
            .sign-dark-mode {{
                display: none !important;
            }}
        }}
    </style>
</head>
<body>
    <table cellpadding="0" cellspacing="0" border="0" width="600" style="width: 600px; border-collapse: collapse;">
        <tr>
            <td valign="top" style="padding: 0; margin: 0;">
                <a href="http://www.GKRHospitality.com" target="_blank" style="display: block;">
                    <!-- Light Mode: Show Dark Text (Sign_Dark.png) -->
                    <img src="{URL_SIGN_DARK}" class="sign-light-mode" alt="Garrett Ronan - GKR Hospitality" width="600" style="display: block; width: 600px; height: auto; border: 0;">
                    
                    <!-- Dark Mode: Show Light Text (Sign_Light.png) -->
                    <img src="{URL_SIGN_LIGHT}" class="sign-dark-mode" alt="Garrett Ronan - GKR Hospitality" width="600" style="display: none; width: 600px; height: auto; border: 0;">
                </a>
            </td>
        </tr>
    </table>
</body>
</html>
'''

with open(OUTPUT_FILE, 'w') as f:
    f.write(html_content)

print(f"Universal Signature generated at {OUTPUT_FILE}")
