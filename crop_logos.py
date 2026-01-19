
import os
from PIL import Image

# Directory containing logos
LOGO_DIR = '/Users/apple/Desktop/AI/garrett-ronan-web/src/assets/images/logos'

def crop_image(file_path):
    try:
        img = Image.open(file_path)
        img = img.convert("RGBA")
        
        # Get bounding box of non-zero alpha pixels
        bbox = img.getbbox()
        
        if bbox:
            # Check if cropping is needed
            if bbox != (0, 0, img.width, img.height):
                cropped_img = img.crop(bbox)
                cropped_img.save(file_path)
                print(f"Cropped: {os.path.basename(file_path)} - Original: {img.size} -> New: {cropped_img.size}")
            else:
                print(f"Skipped (No padding): {os.path.basename(file_path)}")
        else:
            print(f"Skipped (Empty image): {os.path.basename(file_path)}")
            
    except Exception as e:
        print(f"Error processing {os.path.basename(file_path)}: {str(e)}")

def main():
    print("Starting logo cropping process...")
    if not os.path.exists(LOGO_DIR):
        print(f"Directory not found: {LOGO_DIR}")
        return

    files = [f for f in os.listdir(LOGO_DIR) if f.lower().endswith(('.png', '.jpg', '.jpeg', '.webp'))]
    
    if not files:
        print("No image files found.")
        return

    for filename in files:
        file_path = os.path.join(LOGO_DIR, filename)
        crop_image(file_path)
        
    print("Finished processing logos.")

if __name__ == "__main__":
    main()
