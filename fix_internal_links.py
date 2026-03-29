
#!/usr/bin/env python3
import re
import os

def fix_internal_links(file_path):
    """Fix all internal pivotq.ai links to point to relative HTML files"""
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # URL mapping for internal links
    url_mapping = {
        'https://www.pivotq.ai/': 'index.html',
        'https://www.pivotq.ai/production-grade-ai': 'solutions.html',
        'https://www.pivotq.ai/ai-agent-development': 'services.html',
        'https://www.pivotq.ai/ai-solutions': 'contact.html',
        'https://www.pivotq.ai/security': 'privacy.html',
        'https://www.pivotq.ai/our-promise-and-data-security': 'how-we-work.html',
        'https://www.pivotq.ai/how-we-deliver-free-proof-of-value': 'solutions.html',
        'https://www.pivotq.ai/iac-trans': 'case-study.html',
        'https://www.pivotq.ai/automated-documentation-application-documentation-and-insights': 'property-management.html',
        'https://www.pivotq.ai/coming-soon': 'about.html',
        'https://www.pivotq.ai/free-proof-of-value': 'free-assessment.html'
    }
    
    # Fix all internal links
    for old_url, new_url in url_mapping.items():
        content = re.sub(re.escape(old_url), new_url, content)
    
    # Fix any remaining pivotq.ai URLs that might have different paths
    content = re.sub(r'https://www\.pivotq\.ai/[^"\'>\s]*', '#', content)
    
    # Fix canonical URLs and meta tags to be relative
    content = re.sub(r'"https://www\.pivotq\.ai/"', '""', content)
    content = re.sub(r'"https://www\.pivotq\.ai"', '""', content)
    
    # Fix external asset URLs (zyrosite.com) to be empty or point to local assets
    content = re.sub(r'https://assets\.zyrosite\.com/[^"\'>\s]*', '', content)
    
    # Fix LinkedIn URL to be generic
    content = re.sub(r'https://www\.linkedin\.com/', '#', content)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"Fixed internal links in: {os.path.basename(file_path)}")

def main():
    website_dir = '/workspace/complete-website'
    
    # Fix internal links in all HTML files
    for file in os.listdir(website_dir):
        if file.endswith('.html'):
            file_path = os.path.join(website_dir, file)
            fix_internal_links(file_path)
    
    print("\nAll internal links have been fixed!")
    print("Now all navigation should work with relative URLs.")

if __name__ == "__main__":
    main()

