
// Remove Hamburger Menu and Show Desktop Navigation on Mobile
(function() {
    'use strict';
    
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initMobileNavFix);
    } else {
        initMobileNavFix();
    }
    
    function initMobileNavFix() {
        // Load the CSS fix
        loadMobileNavCSS();
        
        // Apply JavaScript fixes
        removeHamburgerMenu();
        showDesktopNavigation();
        fixNavigationLayout();
        
        console.log('Mobile navigation fix applied - hamburger menu removed, desktop nav shown');
    }
    
    function loadMobileNavCSS() {
        // Check if CSS is already loaded
        if (document.querySelector('#mobile-nav-fix-css')) {
            return;
        }
        
        // Create and inject CSS
        const link = document.createElement('link');
        link.id = 'mobile-nav-fix-css';
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = 'mobile-navigation-fix.css';
        document.head.appendChild(link);
    }
    
    function removeHamburgerMenu() {
        // Find and hide all hamburger menu elements
        const hamburgerMenus = document.querySelectorAll('.burger, .block-header__hamburger-menu, button[data-qa="builder-siteheader-btn-hamburger"]');
        hamburgerMenus.forEach(menu => {
            menu.style.display = 'none';
            menu.style.visibility = 'hidden';
        });
        
        // Hide mobile dropdown containers
        const mobileDropdowns = document.querySelectorAll('.block-header-layout-mobile__dropdown');
        mobileDropdowns.forEach(dropdown => {
            dropdown.style.display = 'none';
        });
        
        // Hide entire mobile layout
        const mobileLayouts = document.querySelectorAll('.block-header-layout-mobile');
        mobileLayouts.forEach(layout => {
            layout.style.display = 'none';
        });
    }
    
    function showDesktopNavigation() {
        // Force desktop navigation to be visible
        const desktopLayouts = document.querySelectorAll('.block-header-layout-desktop');
        desktopLayouts.forEach(layout => {
            layout.style.display = 'flex';
            layout.style.flexDirection = 'column';
            layout.style.width = '100%';
        });
        
        // Make navigation elements visible
        const navElements = document.querySelectorAll('.block-header__nav');
        navElements.forEach(nav => {
            nav.style.display = 'block';
            nav.style.width = '100%';
            nav.style.visibility = 'visible';
            nav.style.opacity = '1';
        });
        
        // Style navigation links for mobile
        const navLinks = document.querySelectorAll('.block-header__nav-links');
        navLinks.forEach(links => {
            links.style.display = 'flex';
            links.style.flexWrap = 'wrap';
            links.style.justifyContent = 'center';
            links.style.alignItems = 'center';
            links.style.gap = '10px';
            links.style.padding = '10px 5px';
            links.style.margin = '0';
            links.style.listStyle = 'none';
            links.style.visibility = 'visible';
            links.style.opacity = '1';
        });
    }
    
    function fixNavigationLayout() {
        // Style individual navigation items
        const navItems = document.querySelectorAll('.block-header-item');
        navItems.forEach(item => {
            item.style.position = 'relative';
            item.style.whiteSpace = 'nowrap';
            item.style.visibility = 'visible';
            item.style.opacity = '1';
        });
        
        // Style navigation item links
        const itemLinks = document.querySelectorAll('.block-header-item .item-content');
        itemLinks.forEach(link => {
            link.style.padding = '8px 12px';
            link.style.fontSize = '14px';
            link.style.textDecoration = 'none';
            link.style.borderRadius = '4px';
            link.style.transition = 'background-color 0.3s ease';
        });
        
        // Handle dropdowns on mobile
        setupMobileDropdowns();
        
        // Ensure logo and buttons are properly positioned
        const logos = document.querySelectorAll('.block-header__logo');
        logos.forEach(logo => {
            logo.style.marginBottom = '10px';
        });
        
        const buttons = document.querySelectorAll('.block-header__button');
        buttons.forEach(button => {
            button.style.marginTop = '10px';
            button.style.alignSelf = 'center';
        });
    }
    
    function setupMobileDropdowns() {
        const dropdownItems = document.querySelectorAll('.block-header-item[aria-haspopup="true"]');
        dropdownItems.forEach(item => {
            const dropdownArea = item.querySelector('.block-header-item__dropdown-area');
            if (dropdownArea) {
                // Style dropdown area
                dropdownArea.style.position = 'absolute';
                dropdownArea.style.top = '100%';
                dropdownArea.style.left = '0';
                dropdownArea.style.background = 'white';
                dropdownArea.style.border = '1px solid #ddd';
                dropdownArea.style.borderRadius = '4px';
                dropdownArea.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
                dropdownArea.style.zIndex = '1000';
                dropdownArea.style.minWidth = '200px';
                dropdownArea.style.display = 'none';
                
                // Add hover events
                item.addEventListener('mouseenter', () => {
                    dropdownArea.style.display = 'block';
                });
                
                item.addEventListener('mouseleave', () => {
                    dropdownArea.style.display = 'none';
                });
                
                // Style dropdown links
                const dropdownLinks = dropdownArea.querySelectorAll('.item-content');
                dropdownLinks.forEach(link => {
                    link.style.display = 'block';
                    link.style.padding = '10px 15px';
                    link.style.color = '#333';
                    link.style.textDecoration = 'none';
                    link.style.borderRadius = '0';
                    
                    link.addEventListener('mouseenter', () => {
                        link.style.backgroundColor = '#f5f5f5';
                    });
                    
                    link.addEventListener('mouseleave', () => {
                        link.style.backgroundColor = 'transparent';
                    });
                });
            }
        });
    }
    
    // Apply fixes on window resize to ensure consistency
    window.addEventListener('resize', function() {
        setTimeout(initMobileNavFix, 100);
    });
    
})();
