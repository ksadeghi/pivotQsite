
#!/usr/bin/env python3
import os
import re

def add_navigation_menu(file_path):
    """Add a simple navigation menu to the HTML file"""
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Create a simple navigation menu
    nav_menu = '''
    <style>
    .pivotiq-nav {
        background: rgba(0, 0, 0, 0.9);
        padding: 10px 0;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 9999;
        text-align: center;
    }
    .pivotiq-nav a {
        color: white;
        text-decoration: none;
        margin: 0 15px;
        padding: 8px 12px;
        border-radius: 4px;
        transition: background 0.3s;
        font-size: 14px;
    }
    .pivotiq-nav a:hover {
        background: rgba(255, 255, 255, 0.2);
    }
    .pivotiq-nav-spacer {
        height: 50px;
    }
    </style>
    <div class="pivotiq-nav">
        <a href="index.html">Home</a>
        <a href="about.html">About</a>
        <a href="services.html">Services</a>
        <a href="solutions.html">Solutions</a>
        <a href="case-study.html">Case Study</a>
        <a href="how-we-work.html">How We Work</a>
        <a href="contact.html">Contact</a>
        <a href="free-assessment.html">Free Assessment</a>
        <a href="privacy.html">Privacy</a>
    </div>
    <div class="pivotiq-nav-spacer"></div>
    '''
    
    # Insert navigation after the opening body tag
    content = re.sub(r'(<body[^>]*>)', r'\1' + nav_menu, content, flags=re.IGNORECASE)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"Added navigation to: {os.path.basename(file_path)}")

def main():
    website_dir = '/workspace/complete-website'
    
    # Add navigation to all HTML files
    for file in os.listdir(website_dir):
        if file.endswith('.html'):
            file_path = os.path.join(website_dir, file)
            add_navigation_menu(file_path)
    
    print("\nNavigation menu added to all pages!")

if __name__ == "__main__":
    main()

