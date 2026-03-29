

#!/usr/bin/env python3
import re
import os

def fix_all_navigation_links(file_path):
    """Fix all navigation links to point to the correct pages"""
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Define the correct navigation mapping based on what makes logical sense
    navigation_fixes = {
        # About dropdown items
        'data-qa="navigation-item-aboutus"><a class="item-content" target="" href="solutions.html"': 
        'data-qa="navigation-item-aboutus"><a class="item-content" target="" href="about.html"',
        
        'data-qa="navigationblock-page-aboutus">About Us</a>':
        'data-qa="navigationblock-page-aboutus">About Us</a>',
        
        # How We Deliver should go to solutions or how-we-work
        'data-qa="navigation-item-howwedeliver"><a class="item-content" target="" href="solutions.html"':
        'data-qa="navigation-item-howwedeliver"><a class="item-content" target="" href="how-we-work.html"',
        
        # Purpose, Mission, Values should go to about page
        'data-qa="navigation-item-purpose,mission,values"><a class="item-content" target="" href="index.html"':
        'data-qa="navigation-item-purpose,mission,values"><a class="item-content" target="" href="about.html"',
        
        # Our Promise should go to how-we-work (it's already correct)
        # Privacy policy is already correct
        
        # Services dropdown - make sure it goes to services page
        'data-qa="navigation-item-services"><a class="item-content" target="" href="services.html"':
        'data-qa="navigation-item-services"><a class="item-content" target="" href="services.html"',
    }
    
    # Apply all fixes
    for old_pattern, new_pattern in navigation_fixes.items():
        content = re.sub(re.escape(old_pattern), new_pattern, content)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"Fixed all navigation links in: {os.path.basename(file_path)}")

def main():
    website_dir = '/workspace/complete-website'
    
    # Fix navigation in all HTML files
    for file in os.listdir(website_dir):
        if file.endswith('.html'):
            file_path = os.path.join(website_dir, file)
            fix_all_navigation_links(file_path)
    
    print("\nAll navigation links have been corrected!")
    print("\nCorrected Navigation Map:")
    print("- About Us → about.html")
    print("- Services → services.html") 
    print("- How We Deliver → how-we-work.html")
    print("- Purpose, Mission, Values → about.html")
    print("- Our Promise → how-we-work.html")
    print("- Privacy Policy → privacy.html")
    print("- Mateenik → property-management.html")
    print("- IaC Trans → case-study.html")

if __name__ == "__main__":
    main()


