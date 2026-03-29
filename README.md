# PivotIQ.ai Website Deployment Package

## Overview
This package contains a self-contained version of the PivotIQ.ai website, ready for deployment on AWS Amplify or any static hosting service.

## Package Contents
- **pivotiq-website-package.zip** (11MB) - Complete website package
- All HTML pages from the original website
- All supporting assets (CSS, JavaScript, images, fonts)
- Processed to remove external dependencies

## Key Changes Made
1. **Homepage Setup**: The main page "Production-Grade AI Applications & Automation Solutions" has been renamed to `index.html` for proper hosting
2. **External References Removed**: All references to pivotiq.ai and external CDNs have been removed or localized
3. **Self-Contained**: No external dependencies - everything needed is included in the package
4. **AWS Amplify Ready**: Structured for direct deployment to AWS Amplify

## Deployment Instructions

### AWS Amplify Deployment
1. Log into your AWS Console and navigate to AWS Amplify
2. Click "New App" → "Host web app"
3. Choose "Deploy without Git provider"
4. Upload the `pivotiq-website-package.zip` file
5. AWS Amplify will automatically extract and deploy the contents
6. The `index.html` file will serve as your homepage

### Alternative Hosting
The package can be deployed to any static hosting service:
- Netlify: Drag and drop the zip file
- Vercel: Upload via their dashboard
- GitHub Pages: Extract and commit to a repository
- Any web server: Extract contents to web root directory

## File Structure
```
deployment-package/
├── index.html (main homepage)
├── [Other HTML pages].htm
└── [Page Name]_files/
    ├── CSS files
    ├── JavaScript files
    ├── Images (AVIF, WebP, SVG)
    └── Fonts
```

## Notes
- All external links have been neutralized (pointing to "#" or removed)
- Social media links have been preserved but point to generic URLs
- The website is fully functional offline
- All images and assets are optimized and included locally

## Support
This package was created to provide a self-contained, deployable version of your website without any external dependencies.
