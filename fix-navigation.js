// Navigation Fix Script for Mobile Compatibility
// This script replaces complex Vue.js navigation with simple, mobile-friendly navigation

(function() {
    'use strict';
    
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initNavigationFix);
    } else {
        initNavigationFix();
    }
    
    function initNavigationFix() {
        // Remove complex navigation elements that cause mobile issues
        removeComplexElements();
        
        // Create simple navigation
        createSimpleNavigation();
        
        // Fix mobile viewport if not set
        fixViewport();
        
        console.log('Navigation fixed for mobile compatibility');
    }
    
    function removeComplexElements() {
        // Remove Vue.js astro-island elements that cause issues
        const astroIslands = document.querySelectorAll('astro-island');
        astroIslands.forEach(island => {
            island.style.display = 'none !important';
            island.style.visibility = 'hidden !important';
            island.style.height = '0 !important';
            island.style.overflow = 'hidden !important';
        });
        
        // Hide ALL complex header elements - be more aggressive
        const complexHeaders = document.querySelectorAll('header, .block-header, [class*="block-header"], [data-qa*="header"], sectionheader');
        complexHeaders.forEach(header => {
            if (!header.classList.contains('simple-mobile-nav')) {
                header.style.display = 'none !important';
                header.style.visibility = 'hidden !important';
                header.style.height = '0 !important';
                header.style.overflow = 'hidden !important';
                header.style.position = 'absolute !important';
                header.style.left = '-9999px !important';
            }
        });
        
        // Remove ALL navigation elements that aren't ours
        const allNavElements = document.querySelectorAll('nav, [class*="nav"], [data-qa*="nav"], [class*="navigation"], [data-qa*="navigation"]');
        allNavElements.forEach(nav => {
            if (!nav.closest('.simple-mobile-nav')) {
                nav.style.display = 'none !important';
                nav.style.visibility = 'hidden !important';
                nav.style.height = '0 !important';
                nav.style.overflow = 'hidden !important';
            }
        });
        
        // Remove dropdown triggers and complex navigation
        const dropdownTriggers = document.querySelectorAll('.block-header-item__mobile-dropdown-trigger, .burger, [data-qa*="hamburger"], .block-header-item__dropdown, .block-header-item__dropdown-area, [class*="dropdown"]');
        dropdownTriggers.forEach(trigger => {
            trigger.style.display = 'none !important';
            trigger.style.visibility = 'hidden !important';
        });
        
        // Hide any remaining complex elements by class patterns
        const complexSelectors = [
            '[class*="block-header"]',
            '[data-qa*="builder-siteheader"]', 
            '[class*="header-content"]',
            '[class*="header-layout"]',
            '.block-header-logo',
            '.block-header__logo',
            '.block-header__nav',
            '.block-header__nav-links',
            '.block-header-item',
            '.item-content-wrapper',
            '.item-content',
            'sectionheader'
        ];
        
        complexSelectors.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => {
                if (!element.closest('.simple-mobile-nav')) {
                    element.style.display = 'none !important';
                    element.style.visibility = 'hidden !important';
                    element.style.height = '0 !important';
                    element.style.overflow = 'hidden !important';
                }
            });
        });
    }
    
    function createSimpleNavigation() {
        // Check if simple navigation already exists
        if (document.querySelector('.simple-mobile-nav')) {
            return;
        }
        
        // Create simple navigation HTML
        const navHTML = `
            <header class="simple-mobile-nav" style="
                background: #080a29;
                color: white;
                padding: 15px 20px;
                position: sticky;
                top: 0;
                z-index: 1000;
                width: 100%;
                box-sizing: border-box;
            ">
                <div style="
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    max-width: 1200px;
                    margin: 0 auto;
                    flex-wrap: wrap;
                    gap: 15px;
                ">
                    <img src="assets/images/pivotq-final-vector-oPvykR4YtqNfcxXS.svg" 
                         alt="PivotIQ.Ai logo" 
                         style="height: 40px; width: auto;">
                    
                    <nav style="
                        display: flex;
                        gap: 20px;
                        align-items: center;
                        flex-wrap: wrap;
                    ">
                        <a href="index.html" style="
                            color: white;
                            text-decoration: none;
                            padding: 8px 12px;
                            border-radius: 4px;
                            transition: background-color 0.3s;
                        ">Home</a>
                        <a href="about.html" style="
                            color: white;
                            text-decoration: none;
                            padding: 8px 12px;
                            border-radius: 4px;
                            transition: background-color 0.3s;
                        ">About</a>
                        <a href="services.html" style="
                            color: white;
                            text-decoration: none;
                            padding: 8px 12px;
                            border-radius: 4px;
                            transition: background-color 0.3s;
                        ">Services</a>
                        <a href="case-study.html" style="
                            color: white;
                            text-decoration: none;
                            padding: 8px 12px;
                            border-radius: 4px;
                            transition: background-color 0.3s;
                        ">Case Studies</a>
                        <a href="contact.html" style="
                            color: white;
                            text-decoration: none;
                            padding: 8px 12px;
                            border-radius: 4px;
                            transition: background-color 0.3s;
                        ">Contact</a>
                    </nav>
                    
                    <a href="about.html" style="
                        background: #ff2828;
                        color: white;
                        padding: 10px 20px;
                        border-radius: 4px;
                        text-decoration: none;
                        font-weight: 500;
                        transition: background-color 0.3s;
                    ">Hello I'm Q</a>
                </div>
            </header>
        `;
        
        // Insert navigation at the beginning of body
        document.body.insertAdjacentHTML('afterbegin', navHTML);
        
        // Add hover effects
        const navLinks = document.querySelectorAll('.simple-mobile-nav a');
        navLinks.forEach(link => {
            link.addEventListener('mouseenter', function() {
                if (this.style.background !== 'rgb(255, 40, 40)') {
                    this.style.background = 'rgba(255, 255, 255, 0.1)';
                }
            });
            link.addEventListener('mouseleave', function() {
                if (this.style.background !== 'rgb(255, 40, 40)') {
                    this.style.background = 'transparent';
                }
            });
        });
        
        // Add mobile responsive styles AND aggressive hiding of complex navigation
        const style = document.createElement('style');
        style.textContent = `
            /* Mobile responsive styles */
            @media (max-width: 768px) {
                .simple-mobile-nav div {
                    flex-direction: column !important;
                    text-align: center !important;
                }
                .simple-mobile-nav nav {
                    justify-content: center !important;
                    gap: 15px !important;
                }
                .simple-mobile-nav nav a {
                    font-size: 16px !important;
                    padding: 10px 8px !important;
                }
            }
            
            /* AGGRESSIVE HIDING of all complex navigation elements */
            astro-island,
            .block-header,
            [class*="block-header"],
            [data-qa*="header"],
            [data-qa*="navigation"],
            [class*="header-content"],
            [class*="header-layout"],
            .block-header-logo,
            .block-header__logo,
            .block-header__nav,
            .block-header__nav-links,
            .block-header-item,
            .item-content-wrapper,
            .item-content,
            sectionheader,
            [data-qa*="builder-siteheader"],
            .burger,
            [data-qa*="hamburger"],
            .block-header-item__dropdown,
            .block-header-item__dropdown-area,
            [class*="dropdown"],
            .block-header-item__mobile-dropdown-trigger {
                display: none !important;
                visibility: hidden !important;
                height: 0 !important;
                overflow: hidden !important;
                position: absolute !important;
                left: -9999px !important;
                opacity: 0 !important;
            }
            
            /* Show ONLY our simple navigation */
            .simple-mobile-nav,
            .simple-mobile-nav * {
                display: flex !important;
                visibility: visible !important;
                height: auto !important;
                overflow: visible !important;
                position: relative !important;
                left: auto !important;
                opacity: 1 !important;
            }
        `;
        document.head.appendChild(style);
    }
    
    function fixViewport() {
        // Check if viewport meta tag exists and is correct
        let viewportMeta = document.querySelector('meta[name="viewport"]');
        if (!viewportMeta) {
            viewportMeta = document.createElement('meta');
            viewportMeta.name = 'viewport';
            document.head.appendChild(viewportMeta);
        }
        
        // Set mobile-friendly viewport
        viewportMeta.content = 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes';
    }
    
})();
