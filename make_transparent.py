
from PIL import Image
import os

TARGET_FILES = [
    '/Users/apple/Desktop/AI/garrett-ronan-web/src/assets/images/logos/waldorf.png',
    '/Users/apple/Desktop/AI/garrett-ronan-web/src/assets/images/logos/hilton_hotels.png'
]

def make_transparent(filepath):
    if not os.path.exists(filepath):
        print(f"File not found: {filepath}")
        return

    print(f"Processing: {os.path.basename(filepath)}")
    try:
        img = Image.open(filepath)
        img = img.convert("RGBA")
        datas = img.getdata()

        new_data = []
        for item in datas:
            # Change all white (also shades of whites)
            # to transparent
            if item[0] > 240 and item[1] > 240 and item[2] > 240:
                new_data.append((255, 255, 255, 0))
            else:
                new_data.append(item)

        img.putdata(new_data)
        img.save(filepath, "PNG")
        print(f"Successfully saved: {filepath}")
    except Exception as e:
        print(f"Error processing {filepath}: {e}")

if __name__ == "__main__":
    for f in TARGET_FILES:
        make_transparent(f)
