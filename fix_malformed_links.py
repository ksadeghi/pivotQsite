

#!/usr/bin/env python3
import re
import os

def fix_malformed_links(file_path):
    """Fix malformed links that were created during URL replacement"""
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Fix malformed URLs that start with "index.html" followed by a path
    # These were created when replacing https://www.pivotq.ai/ with index.html
    
    # Pattern: href="index.html[path]" -> href="[mapped-file].html"
    malformed_patterns = {
        'index.htmlhow-we-deliver-free-proof-of-value': 'solutions.html',
        'index.htmlour-promise-and-data-security': 'how-we-work.html', 
        'index.htmlai-solutions': 'contact.html',
        'index.htmlcoming-soon': 'about.html',
        'index.htmlproduction-grade-ai': 'solutions.html',
        'index.htmlai-agent-development': 'services.html',
        'index.htmlsecurity': 'privacy.html',
        'index.htmliac-trans': 'case-study.html',
        'index.htmlautomated-documentation-application-documentation-and-insights': 'property-management.html',
        'index.htmlfree-proof-of-value': 'free-assessment.html'
    }
    
    # Fix all malformed patterns
    for malformed_url, correct_url in malformed_patterns.items():
        content = re.sub(re.escape(malformed_url), correct_url, content)
    
    # Fix any remaining "index.html[something]" patterns to just "index.html"
    content = re.sub(r'index\.html[a-zA-Z0-9\-_/]+', 'index.html', content)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"Fixed malformed links in: {os.path.basename(file_path)}")

def main():
    website_dir = '/workspace/complete-website'
    
    # Fix malformed links in all HTML files
    for file in os.listdir(website_dir):
        if file.endswith('.html'):
            file_path = os.path.join(website_dir, file)
            fix_malformed_links(file_path)
    
    print("\nAll malformed links have been fixed!")
    print("Navigation should now work properly.")

if __name__ == "__main__":
    main()


