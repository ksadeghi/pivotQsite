


// CLEANUP SCATTERED MENU ITEMS - Remove all visible navigation elements
(function() {
    'use strict';
    
    function cleanupScatteredMenus() {
        if (window.innerWidth <= 920) {
            console.log('Cleaning up scattered menu items...');
            
            // Hide all navigation-related elements that might be visible
            const elementsToHide = [
                // Vue.js/Astro navigation components
                '.block-header',
                '.site-header',
                'header',
                '.navigation',
                '.nav',
                '.menu',
                
                // Specific Vue.js classes
                '.block-header-layout-mobile',
                '.block-header-layout-mobile__dropdown',
                '.block-header__nav-links',
                '.block-header-item',
                '.block-header__nav',
                
                // Any remaining navigation links
                'nav',
                '[data-qa*="navigation"]',
                '[data-qa*="nav"]',
                '[data-qa*="menu"]',
                '[data-qa*="header"]',
                
                // Astro islands that might contain navigation
                'astro-island[component-url*="Header"]',
                'astro-island[component-url*="Navigation"]',
                'astro-island[component-url*="Nav"]',
                
                // Any elements with navigation-related text content
                'a[href="index.html"]:not(#custom-mobile-nav a)',
                'a[href="about.html"]:not(#custom-mobile-nav a)',
                'a[href="case-study.html"]:not(#custom-mobile-nav a)',
                'a[href="contact.html"]:not(#custom-mobile-nav a)',
                
                // Generic selectors for scattered elements
                'div:has(> a[href="index.html"]):not(#custom-mobile-nav):not(#mobile-dropdown)',
                'div:has(> a[href="about.html"]):not(#custom-mobile-nav):not(#mobile-dropdown)',
                'div:has(> a[href="case-study.html"]):not(#custom-mobile-nav):not(#mobile-dropdown)',
                'div:has(> a[href="contact.html"]):not(#custom-mobile-nav):not(#mobile-dropdown)'
            ];
            
            // Hide elements by selector
            elementsToHide.forEach(selector => {
                try {
                    const elements = document.querySelectorAll(selector);
                    elements.forEach(element => {
                        // Skip our custom navigation
                        if (element.id === 'custom-mobile-nav' || element.id === 'mobile-dropdown') {
                            return;
                        }
                        
                        // Skip if element is inside our custom navigation
                        if (element.closest('#custom-mobile-nav') || element.closest('#mobile-dropdown')) {
                            return;
                        }
                        
                        element.style.display = 'none !important';
                        element.style.visibility = 'hidden !important';
                        element.style.opacity = '0 !important';
                        element.style.height = '0 !important';
                        element.style.overflow = 'hidden !important';
                    });
                } catch (e) {
                    // Some selectors might not work in all browsers, ignore errors
                }
            });
            
            // More aggressive approach: find elements by text content
            const allElements = document.querySelectorAll('*');
            allElements.forEach(element => {
                // Skip our custom navigation
                if (element.id === 'custom-mobile-nav' || element.id === 'mobile-dropdown') {
                    return;
                }
                
                // Skip if element is inside our custom navigation
                if (element.closest('#custom-mobile-nav') || element.closest('#mobile-dropdown')) {
                    return;
                }
                
                // Check if element contains navigation text
                const text = element.textContent?.trim();
                if (text && (
                    text === 'Home' || 
                    text === 'About' || 
                    text === 'Case Studies' || 
                    text === 'Contact' || 
                    text === "Hello I'm Q"
                )) {
                    // Check if it's a navigation link (has href or is clickable)
                    if (element.tagName === 'A' || 
                        element.onclick || 
                        element.getAttribute('href') ||
                        element.closest('a') ||
                        element.closest('[onclick]') ||
                        element.closest('nav') ||
                        element.closest('.nav') ||
                        element.closest('.menu') ||
                        element.closest('.navigation')) {
                        
                        element.style.display = 'none !important';
                        element.style.visibility = 'hidden !important';
                        element.style.opacity = '0 !important';
                        element.style.height = '0 !important';
                        element.style.overflow = 'hidden !important';
                    }
                }
            });
            
            // Hide any remaining visible navigation containers
            const potentialNavContainers = document.querySelectorAll('div, section, nav, header');
            potentialNavContainers.forEach(container => {
                // Skip our custom navigation
                if (container.id === 'custom-mobile-nav' || container.id === 'mobile-dropdown') {
                    return;
                }
                
                // Skip if element is inside our custom navigation
                if (container.closest('#custom-mobile-nav') || container.closest('#mobile-dropdown')) {
                    return;
                }
                
                // Check if container has multiple navigation links
                const navLinks = container.querySelectorAll('a[href*=".html"]');
                if (navLinks.length >= 2) {
                    // This looks like a navigation container
                    container.style.display = 'none !important';
                    container.style.visibility = 'hidden !important';
                    container.style.opacity = '0 !important';
                    container.style.height = '0 !important';
                    container.style.overflow = 'hidden !important';
                }
            });
            
            console.log('✅ Scattered menu items cleaned up');
        }
    }
    
    // Run cleanup function multiple times
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', cleanupScatteredMenus);
    } else {
        cleanupScatteredMenus();
    }
    
    // Run multiple times to catch dynamic content
    setTimeout(cleanupScatteredMenus, 100);
    setTimeout(cleanupScatteredMenus, 500);
    setTimeout(cleanupScatteredMenus, 1000);
    setTimeout(cleanupScatteredMenus, 2000);
    setTimeout(cleanupScatteredMenus, 3000);
    setTimeout(cleanupScatteredMenus, 5000);
    
    // Run on resize
    window.addEventListener('resize', cleanupScatteredMenus);
    
    // Run on framework events
    window.addEventListener('astro:load', cleanupScatteredMenus);
    window.addEventListener('astro:after-swap', cleanupScatteredMenus);
    
})();



