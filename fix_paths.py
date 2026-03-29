#!/usr/bin/env python3
import re
import os

def fix_html_paths(file_path):
    """Fix all asset paths in HTML file to use simplified structure"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Fix CSS file references
    content = re.sub(
        r'href="[^"]*_files/([^"]*\.css)"',
        r'href="assets/css/\1"',
        content
    )
    
    # Fix JavaScript file references
    content = re.sub(
        r'src="[^"]*_files/([^"]*\.js)"',
        r'src="assets/js/\1"',
        content
    )
    
    # Fix image references (AVIF, WebP, SVG)
    content = re.sub(
        r'src="[^"]*_files/([^"]*\.(avif|webp|svg))"',
        r'src="assets/images/\1"',
        content
    )
    
    # Fix srcset references for responsive images
    content = re.sub(
        r'srcset="[^"]*_files/([^"]*\.(avif|webp|svg))[^"]*"',
        r'srcset="assets/images/\1"',
        content
    )
    
    # Fix any remaining asset references in the _files directories
    content = re.sub(
        r'"[^"]*_files/([^"]*\.(css|js|avif|webp|svg|png|jpg|jpeg))"',
        r'"assets/\2s/\1"',
        content
    )
    
    # Write the fixed content back
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"Fixed paths in: {file_path}")

def main():
    # Fix the main index.html file
    fix_html_paths('/workspace/amplify-fixed/index.html')
    
    print("Path fixing completed!")

if __name__ == "__main__":
    main()
