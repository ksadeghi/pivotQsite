
// Mobile Safari Compatibility Fixes

(function() {
    'use strict';
    
    // 1. Detect if we're on mobile Safari
    const isMobileSafari = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    const isMobile = window.innerWidth <= 920;
    
    if (isMobileSafari || isMobile) {
        console.log('Mobile Safari detected, applying fixes...');
        
        // 2. Add no-js class initially, remove when JS loads
        document.documentElement.classList.add('no-js');
        
        // 3. Two-line mobile navigation setup (NO hamburger menu)
        function initMobileMenu() {
            // Hide all hamburger buttons
            const hamburgerButtons = document.querySelectorAll('.burger.block-header__hamburger-menu, [data-qa="builder-siteheader-btn-hamburger"]');
            hamburgerButtons.forEach(function(button) {
                if (button) {
                    button.style.display = 'none';
                    button.style.visibility = 'hidden';
                }
            });
            
            // Show mobile navigation as regular visible menu
            const mobileDropdowns = document.querySelectorAll('.block-header-layout-mobile__dropdown');
            mobileDropdowns.forEach(function(dropdown) {
                if (dropdown) {
                    dropdown.style.display = 'block';
                    dropdown.style.visibility = 'visible';
                    dropdown.style.opacity = '1';
                    dropdown.style.height = 'auto';
                    dropdown.style.maxHeight = 'none';
                    dropdown.style.overflow = 'visible';
                    dropdown.style.position = 'static';
                    dropdown.style.background = 'transparent';
                }
            });
            
            // Ensure navigation links are visible and properly styled
            const navLinks = document.querySelectorAll('.block-header__nav-links');
            navLinks.forEach(function(nav) {
                if (nav) {
                    nav.style.display = 'flex';
                    nav.style.flexDirection = 'row';
                    nav.style.justifyContent = 'center';
                    nav.style.alignItems = 'center';
                    nav.style.gap = '20px';
                    nav.style.flexWrap = 'wrap';
                }
            });
            
            // Style navigation items
            const navItems = document.querySelectorAll('.block-header-item .item-content');
            navItems.forEach(function(item) {
                if (item) {
                    item.style.display = 'block';
                    item.style.visibility = 'visible';
                    item.style.color = '#fff';
                    item.style.textDecoration = 'none';
                    item.style.padding = '8px 12px';
                    item.style.fontSize = '16px';
                    item.style.whiteSpace = 'nowrap';
                }
            });
        }
        
        // 4. Force visibility of mobile elements
        function forceMobileVisibility() {
            const mobileElements = document.querySelectorAll(`
                .layout-element,
                .text-box,
                .image-wrapper,
                .grid-button,
                .block-header,
                .block-header__nav,
                .block-header-item,
                .item-content
            `);
            
            mobileElements.forEach(function(element) {
                if (element) {
                    element.style.display = element.style.display || 'block';
                    element.style.visibility = 'visible';
                }
            });
        }
        
        // 5. Fix viewport issues
        function fixViewport() {
            const viewport = document.querySelector('meta[name="viewport"]');
            if (viewport) {
                viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes');
            }
        }
        
        // 6. Initialize fixes when DOM is ready
        function initFixes() {
            document.documentElement.classList.remove('no-js');
            fixViewport();
            forceMobileVisibility();
            initMobileMenu();
            
            console.log('Mobile fixes applied');
        }
        
        // 7. Run fixes on different events to ensure they work
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initFixes);
        } else {
            initFixes();
        }
        
        // Also run after a short delay to catch dynamically loaded content
        setTimeout(initFixes, 1000);
        setTimeout(initFixes, 3000);
        
        // 8. Re-apply fixes when window resizes
        window.addEventListener('resize', function() {
            setTimeout(forceMobileVisibility, 100);
        });
        
        // 9. Listen for Vue.js/Astro hydration events
        window.addEventListener('astro:load', initFixes);
        window.addEventListener('astro:after-swap', initFixes);
        
        // 10. Fallback: periodically check and fix mobile issues
        setInterval(function() {
            if (window.innerWidth <= 920) {
                forceMobileVisibility();
            }
        }, 5000);
    }
})();

