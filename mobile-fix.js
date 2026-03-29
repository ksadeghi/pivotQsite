
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
        
        // 3. Hamburger menu fallback functionality
        function initMobileMenu() {
            const hamburgerButtons = document.querySelectorAll('.burger.block-header__hamburger-menu, [data-qa="builder-siteheader-btn-hamburger"]');
            const mobileDropdowns = document.querySelectorAll('.block-header-layout-mobile__dropdown');
            
            hamburgerButtons.forEach(function(button, index) {
                if (button && mobileDropdowns[index]) {
                    const dropdown = mobileDropdowns[index];
                    
                    // Ensure button is visible
                    button.style.display = 'block';
                    button.style.visibility = 'visible';
                    button.style.opacity = '1';
                    button.style.zIndex = '999';
                    
                    // HIDE dropdown by default
                    dropdown.classList.remove('block-header-layout-mobile__dropdown--open');
                    dropdown.style.display = 'none';
                    dropdown.style.visibility = 'hidden';
                    dropdown.style.opacity = '0';
                    dropdown.style.height = '0';
                    dropdown.style.maxHeight = '0';
                    dropdown.style.overflow = 'hidden';
                    
                    // Add click handler
                    button.addEventListener('click', function(e) {
                        e.preventDefault();
                        e.stopPropagation();
                        
                        console.log('Hamburger menu clicked');
                        
                        // Toggle dropdown visibility
                        const isOpen = dropdown.classList.contains('block-header-layout-mobile__dropdown--open');
                        
                        if (isOpen) {
                            // Close menu
                            dropdown.classList.remove('block-header-layout-mobile__dropdown--open');
                            dropdown.style.display = 'none';
                            dropdown.style.visibility = 'hidden';
                            dropdown.style.opacity = '0';
                            dropdown.style.height = '0';
                            dropdown.style.maxHeight = '0';
                            dropdown.style.overflow = 'hidden';
                        } else {
                            // Open menu
                            dropdown.classList.add('block-header-layout-mobile__dropdown--open');
                            dropdown.style.display = 'flex';
                            dropdown.style.visibility = 'visible';
                            dropdown.style.opacity = '1';
                            dropdown.style.height = 'auto';
                            dropdown.style.maxHeight = 'none';
                            dropdown.style.overflow = 'visible';
                        }
                    });
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

