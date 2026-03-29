

#!/usr/bin/env python3
import re
import os

def fix_mateenik_link(file_path):
    """Fix the Mateenik navigation link to point to the correct page"""
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Fix Mateenik link - it should point to property-management.html since that's the AI Property Management case study
    content = re.sub(
        r'data-qa="navigation-item-mateenik"><a class="item-content" target="" href="index\.html"',
        r'data-qa="navigation-item-mateenik"><a class="item-content" target="" href="property-management.html"',
        content
    )
    
    # Also fix any other Mateenik references
    content = re.sub(
        r'data-qa="navigationblock-page-mateenik">Mateenik</a>',
        r'data-qa="navigationblock-page-mateenik">Mateenik</a>',
        content
    )
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"Fixed Mateenik link in: {os.path.basename(file_path)}")

def main():
    website_dir = '/workspace/complete-website'
    
    # Fix Mateenik link in all HTML files
    for file in os.listdir(website_dir):
        if file.endswith('.html'):
            file_path = os.path.join(website_dir, file)
            fix_mateenik_link(file_path)
    
    print("\nMateenik navigation link has been fixed!")
    print("Mateenik now points to property-management.html")

if __name__ == "__main__":
    main()


