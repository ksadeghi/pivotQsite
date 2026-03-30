
// ULTIMATE MOBILE FIX - Aggressive DOM manipulation
(function() {
    'use strict';
    
    function ultimateMobileFix() {
        if (window.innerWidth <= 920) {
            console.log('Applying ultimate mobile fix...');
            
            // 1. Hide ALL hamburger menus and buttons
            const hamburgers = document.querySelectorAll(`
                .burger,
                .block-header__hamburger-menu,
                [data-qa="builder-siteheader-btn-hamburger"],
                button[title="Menu"]
            `);
            hamburgers.forEach(el => {
                el.style.display = 'none';
                el.style.visibility = 'hidden';
                el.remove(); // Completely remove from DOM
            });
            
            // 2. Hide ALL dropdown areas and submenus
            const dropdowns = document.querySelectorAll(`
                .block-header-item__dropdown,
                .block-header-item__dropdown-area,
                .item-content__icon-container,
                .item-content__icon-container-wrapper
            `);
            dropdowns.forEach(el => {
                el.style.display = 'none';
                el.style.visibility = 'hidden';
                el.remove(); // Completely remove from DOM
            });
            
            // 3. Remove duplicate navigation sections
            const headers = document.querySelectorAll('.block-header');
            if (headers.length > 1) {
                // Keep only the first header, remove duplicates
                for (let i = 1; i < headers.length; i++) {
                    headers[i].remove();
                }
            }
            
            // 4. Force simple mobile layout on remaining header
            const header = document.querySelector('.block-header');
            if (header) {
                header.style.cssText = `
                    display: flex !important;
                    flex-direction: column !important;
                    padding: 15px !important;
                    background: #080a29 !important;
                    position: relative !important;
                    z-index: 1000 !important;
                `;
                
                // 5. Style the mobile layout container
                const mobileLayout = header.querySelector('.block-header-layout-mobile');
                if (mobileLayout) {
                    mobileLayout.style.cssText = `
                        display: flex !important;
                        justify-content: space-between !important;
                        align-items: center !important;
                        margin-bottom: 15px !important;
                        width: 100% !important;
                    `;
                }
                
                // 6. Style the logo
                const logo = header.querySelector('.block-header__logo');
                if (logo) {
                    logo.style.cssText = `
                        flex: 0 0 auto !important;
                        max-width: 150px !important;
                    `;
                }
                
                // 7. Style the Hello I'm Q button
                const button = header.querySelector('.block-header__button');
                if (button) {
                    button.style.cssText = `
                        flex: 0 0 auto !important;
                        font-size: 14px !important;
                        padding: 8px 16px !important;
                        margin-left: 10px !important;
                    `;
                }
                
                // 8. Style the navigation dropdown container
                const dropdown = header.querySelector('.block-header-layout-mobile__dropdown');
                if (dropdown) {
                    dropdown.style.cssText = `
                        display: block !important;
                        visibility: visible !important;
                        opacity: 1 !important;
                        position: static !important;
                        background: transparent !important;
                        padding: 0 !important;
                        margin: 0 !important;
                        height: auto !important;
                        max-height: none !important;
                        overflow: visible !important;
                    `;
                }
                
                // 9. Style the navigation links horizontally
                const navLinks = header.querySelector('.block-header__nav-links');
                if (navLinks) {
                    navLinks.style.cssText = `
                        display: flex !important;
                        flex-direction: row !important;
                        justify-content: space-around !important;
                        align-items: center !important;
                        gap: 10px !important;
                        padding: 0 !important;
                        margin: 0 !important;
                        list-style: none !important;
                        width: 100% !important;
                        flex-wrap: wrap !important;
                    `;
                    
                    // 10. Style individual navigation items
                    const navItems = navLinks.querySelectorAll('.block-header-item');
                    navItems.forEach((item, index) => {
                        // Only show main navigation items (Home, About, Case Studies)
                        const itemContent = item.querySelector('.item-content');
                        if (itemContent) {
                            const text = itemContent.textContent.trim();
                            if (['Home', 'About', 'Case Studies'].includes(text)) {
                                item.style.cssText = `
                                    display: block !important;
                                    visibility: visible !important;
                                    margin: 0 !important;
                                    flex: 1 !important;
                                    text-align: center !important;
                                `;
                                
                                itemContent.style.cssText = `
                                    display: block !important;
                                    visibility: visible !important;
                                    color: #fff !important;
                                    text-decoration: none !important;
                                    padding: 10px 5px !important;
                                    font-size: 16px !important;
                                    white-space: nowrap !important;
                                    background: transparent !important;
                                    border: none !important;
                                    text-align: center !important;
                                `;
                            } else {
                                // Hide other items like Contact (it's in top row)
                                item.style.display = 'none';
                            }
                        }
                    });
                }
            }
            
            console.log('Ultimate mobile fix applied successfully');
        }
    }
    
    // Apply fix immediately and on various events
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', ultimateMobileFix);
    } else {
        ultimateMobileFix();
    }
    
    // Apply fix after Vue.js/Astro hydration
    setTimeout(ultimateMobileFix, 1000);
    setTimeout(ultimateMobileFix, 3000);
    setTimeout(ultimateMobileFix, 5000);
    
    // Apply fix on window resize
    window.addEventListener('resize', ultimateMobileFix);
    
    // Apply fix on Astro events
    window.addEventListener('astro:load', ultimateMobileFix);
    window.addEventListener('astro:after-swap', ultimateMobileFix);
    
})();

