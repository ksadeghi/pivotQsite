




// RESTORE WORKING NAVIGATION - Keep Vue.js desktop nav, add mobile hamburger only
(function() {
    'use strict';
    
    function restoreWorkingNavigation() {
        console.log('Restoring working Vue.js navigation...');
        
        // Remove our custom navigation that doesn't work properly
        const customNav = document.getElementById('simple-responsive-nav');
        if (customNav) {
            customNav.remove();
        }
        
        // Remove custom styles
        const customStyles = document.getElementById('responsive-nav-styles');
        if (customStyles) {
            customStyles.remove();
        }
        
        const hideFrameworkStyles = document.getElementById('hide-framework-nav');
        if (hideFrameworkStyles) {
            hideFrameworkStyles.remove();
        }
        
        // Reset body padding
        document.body.style.paddingTop = '';
        
        // Make sure Vue.js navigation is visible and working
        const frameworkHeaders = document.querySelectorAll(
            'header, .block-header, .site-header, .navigation, .nav, .menu, ' +
            '.block-header-layout-mobile, .block-header-layout-desktop, ' +
            '.block-header-layout-mobile__dropdown, .block-header__nav-links, ' +
            '.block-header__hamburger-menu, .burger, .block-header__logo, ' +
            '.block-header__button'
        );
        
        frameworkHeaders.forEach(header => {
            // Restore visibility
            header.style.display = '';
            header.style.visibility = '';
            header.style.height = '';
            header.style.overflow = '';
            header.style.opacity = '';
            header.style.position = '';
            header.style.left = '';
            header.style.top = '';
        });
        
        // Add mobile-only hamburger menu improvements
        const mobileStyles = `
            <style id="mobile-hamburger-fix">
                /* Keep desktop navigation exactly as is */
                @media (min-width: 921px) {
                    /* Desktop navigation works perfectly - don't touch it */
                }
                
                /* Mobile improvements only */
                @media (max-width: 920px) {
                    /* Hide scattered menu items on mobile */
                    .block-header-item__dropdown,
                    .block-header-item__dropdown-area,
                    .item-content__icon-container,
                    .item-content__icon-container-wrapper {
                        display: none !important;
                    }
                    
                    /* Make sure hamburger menu is visible */
                    .burger,
                    .block-header__hamburger-menu,
                    [data-qa="builder-siteheader-btn-hamburger"] {
                        display: flex !important;
                        visibility: visible !important;
                        opacity: 1 !important;
                    }
                    
                    /* Ensure mobile dropdown works */
                    .block-header-layout-mobile__dropdown {
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
                    }
                    
                    /* Mobile navigation links */
                    .block-header__nav-links {
                        display: flex !important;
                        flex-direction: column !important;
                        gap: 0 !important;
                        padding: 20px !important;
                        background: #080a29 !important;
                    }
                    
                    .block-header__nav-links > .block-header-item {
                        display: block !important;
                        visibility: visible !important;
                        margin: 0 !important;
                        text-align: left !important;
                        border-bottom: 1px solid rgba(255,255,255,0.1) !important;
                    }
                    
                    .block-header__nav-links > .block-header-item .item-content {
                        display: block !important;
                        visibility: visible !important;
                        color: #fff !important;
                        text-decoration: none !important;
                        padding: 15px 0 !important;
                        font-size: 18px !important;
                        background: transparent !important;
                        border: none !important;
                    }
                    
                    /* Hide contact item in mobile menu if it's duplicated */
                    .block-header__nav-links > .block-header-item[data-qa*="contact"] {
                        display: none !important;
                    }
                }
            </style>
        `;
        
        document.head.insertAdjacentHTML('beforeend', mobileStyles);
        
        console.log('✅ Working Vue.js navigation restored with mobile improvements');
    }
    
    // Run immediately and with delays
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', restoreWorkingNavigation);
    } else {
        restoreWorkingNavigation();
    }
    
    setTimeout(restoreWorkingNavigation, 100);
    setTimeout(restoreWorkingNavigation, 500);
    setTimeout(restoreWorkingNavigation, 1500);
    
})();




