#!/usr/bin/env python3
import re
import os
import shutil
from pathlib import Path

def clean_filename(filename):
    """Convert HTML filename to clean URL-friendly name"""
    # Remove .htm extension and clean up
    name = filename.replace('.htm', '').replace('.html', '')
    
    # Create clean filenames for each page
    page_mapping = {
        'Production-Grade AI Applications & Automation Solutions _ PivotIQ.Ai': 'index',
        'AI agent development _ PivotIQ.Ai': 'services',
        'Connect with Practical AI Solutions at Pivotiq.ai _ PivotIQ.Ai': 'contact',
        'Ethical AI Solutions with Data Security _ PivotIQ.Ai': 'about',
        'Free proof of value _ PivotIQ.Ai': 'free-assessment',
        'IAC Trans Case Study_ Accelerate Cloud & AI Deployment _ PivotIQ.Ai': 'case-study',
        'Production-grade AI _ PivotIQ.Ai': 'solutions',
        'Responsible AI Solutions for Measurable Outcomes _ PivotIQ.Ai': 'how-we-work',
        'Uncompromised security and confidentiality. Adhere to stringent standards like GDPR, HIPPA. _ PivotIQ.Ai': 'privacy',
        'AI Property Management Platform by Pivotiq.ai _ PivotIQ.Ai': 'property-management'
    }
    
    return page_mapping.get(name, name.lower().replace(' ', '-').replace('_', '-'))

def fix_html_paths_and_navigation(file_path, output_path):
    """Fix all asset paths and navigation links in HTML file"""
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
    
    # Create navigation mapping based on data-page-id attributes
    navigation_mapping = {
        'z7M_o7': 'services.html',           # Services
        'ai-C9hDF': 'contact.html',          # Contact
        'zKtees': 'privacy.html',            # Privacy/Security
        'zYpGcC': 'how-we-work.html',        # Our Promise/How We Work
        'zXEDnA': 'solutions.html',          # How We Deliver/Solutions
        'zoramk': 'about.html',              # About (Hello I'm)
        'z0AJYw': 'case-study.html',         # Case Study
        'z5JnJd': 'property-management.html' # Property Management
    }
    
    # Fix navigation links with data-page-id attributes
    for page_id, target_page in navigation_mapping.items():
        content = re.sub(
            rf'href=""\s+data-page-id="{page_id}"',
            f'href="{target_page}"',
            content
        )
        content = re.sub(
            rf'data-page-id="{page_id}"\s+href=""',
            f'href="{target_page}"',
            content
        )
    
    # Fix any remaining empty href attributes to point to home
    content = re.sub(r'href=""(?!\s+data-page-id)', 'href="index.html"', content)
    
    # Write the fixed content
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"Processed: {file_path} -> {output_path}")

def main():
    # Get all HTML files
    html_files = [f for f in os.listdir('/workspace') if f.endswith('.htm')]
    
    print("Processing HTML files...")
    
    for html_file in html_files:
        # Get clean filename
        clean_name = clean_filename(html_file)
        output_filename = f"{clean_name}.html"
        
        input_path = f"/workspace/{html_file}"
        output_path = f"/workspace/complete-website/{output_filename}"
        
        # Process the file
        fix_html_paths_and_navigation(input_path, output_path)
    
    # Copy assets from all _files directories to ensure we have everything
    print("\nCopying additional assets...")
    
    for item in os.listdir('/workspace'):
        if item.endswith('_files') and os.path.isdir(f'/workspace/{item}'):
            files_dir = f'/workspace/{item}'
            
            # Copy CSS files
            for root, dirs, files in os.walk(files_dir):
                for file in files:
                    if file.endswith('.css'):
                        src = os.path.join(root, file)
                        dst = f'/workspace/complete-website/assets/css/{file}'
                        if not os.path.exists(dst):
                            shutil.copy2(src, dst)
                            print(f"Copied CSS: {file}")
                    
                    elif file.endswith('.js'):
                        src = os.path.join(root, file)
                        dst = f'/workspace/complete-website/assets/js/{file}'
                        if not os.path.exists(dst):
                            shutil.copy2(src, dst)
                            print(f"Copied JS: {file}")
                    
                    elif file.endswith(('.avif', '.webp', '.svg', '.png', '.jpg', '.jpeg')):
                        src = os.path.join(root, file)
                        dst = f'/workspace/complete-website/assets/images/{file}'
                        if not os.path.exists(dst):
                            shutil.copy2(src, dst)
                            print(f"Copied Image: {file}")
    
    print("\nComplete website created successfully!")
    print("Files created:")
    for file in sorted(os.listdir('/workspace/complete-website')):
        if file.endswith('.html'):
            print(f"  - {file}")

if __name__ == "__main__":
    main()
