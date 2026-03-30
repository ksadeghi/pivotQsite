



// FIXED RESPONSIVE NAVIGATION - Ensures hamburger menu is visible on mobile
(function() {
    'use strict';
    
    function createFixedResponsiveNavigation() {
        console.log('Creating FIXED responsive navigation...');
        
        // Remove existing custom navigation if it exists
        const existingNav = document.getElementById('simple-responsive-nav');
        if (existingNav) {
            existingNav.remove();
        }
        
        // Remove existing styles
        const existingStyles = document.getElementById('responsive-nav-styles');
        if (existingStyles) {
            existingStyles.remove();
        }
        
        // AGGRESSIVELY hide ALL existing framework headers
        const frameworkSelectors = [
            'header', '.block-header', '.site-header', '.navigation', '.nav', '.menu',
            '.block-header-layout-mobile', '.block-header-layout-desktop',
            '.block-header-layout-mobile__dropdown', '.block-header__nav-links',
            '.block-header__hamburger-menu', '.burger', '.block-header__logo',
            '.block-header__button', 'astro-island[component-url*="Header"]',
            'astro-island[component-url*="Navigation"]', '[data-qa*="siteheader"]',
            '[data-qa*="navigation"]'
        ];
        
        frameworkSelectors.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => {
                element.style.display = 'none !important';
                element.style.visibility = 'hidden !important';
                element.style.height = '0 !important';
                element.style.overflow = 'hidden !important';
                element.style.opacity = '0 !important';
                element.style.position = 'absolute !important';
                element.style.left = '-9999px !important';
            });
        });
        
        // Create responsive navigation HTML with better mobile visibility
        const navigationHTML = `
            <nav id="simple-responsive-nav" style="
                position: fixed !important;
                top: 0 !important;
                left: 0 !important;
                right: 0 !important;
                z-index: 9999 !important;
                background: #080a29 !important;
                padding: 16px 24px !important;
                box-shadow: 0 2px 10px rgba(0,0,0,0.3) !important;
                font-family: 'DM Sans', sans-serif !important;
                width: 100% !important;
            ">
                <div style="
                    max-width: 1224px !important;
                    margin: 0 auto !important;
                    display: flex !important;
                    align-items: center !important;
                    justify-content: space-between !important;
                    width: 100% !important;
                ">
                    <!-- Logo -->
                    <a href="index.html" style="
                        flex: 0 0 auto !important;
                        text-decoration: none !important;
                    ">
                        <img src="assets/images/pivotq-final-vector-oPvykR4YtqNfcxXS.svg" 
                             alt="PivotQ Logo" 
                             style="height: 43px !important; width: auto !important; display: block !important;">
                    </a>

                    <!-- Desktop Navigation Links -->
                    <ul id="nav-links" style="
                        display: flex !important;
                        list-style: none !important;
                        align-items: center !important;
                        gap: 32px !important;
                        margin: 0 !important;
                        padding: 0 !important;
                        transition: all 0.3s ease !important;
                    ">
                        <li style="position: relative !important;">
                            <a href="index.html" style="
                                color: #fff !important;
                                text-decoration: none !important;
                                font-size: 16px !important;
                                font-weight: 400 !important;
                                padding: 8px 0 !important;
                                transition: opacity 0.2s ease !important;
                            ">Home</a>
                        </li>
                        
                        <li class="has-dropdown" style="position: relative !important;">
                            <a href="about.html" style="
                                color: #fff !important;
                                text-decoration: none !important;
                                font-size: 16px !important;
                                font-weight: 400 !important;
                                padding: 8px 0 !important;
                                transition: opacity 0.2s ease !important;
                            ">About ▼</a>
                            <div class="dropdown" style="
                                position: absolute !important;
                                top: 100% !important;
                                left: 0 !important;
                                background: #080a29 !important;
                                min-width: 200px !important;
                                box-shadow: 0 4px 12px rgba(0,0,0,0.2) !important;
                                border-radius: 4px !important;
                                opacity: 0 !important;
                                visibility: hidden !important;
                                transform: translateY(-10px) !important;
                                transition: all 0.3s ease !important;
                                z-index: 10000 !important;
                            ">
                                <a href="about.html" style="
                                    display: block !important;
                                    color: #fff !important;
                                    text-decoration: none !important;
                                    padding: 12px 16px !important;
                                    font-size: 14px !important;
                                    border-bottom: 1px solid rgba(255,255,255,0.1) !important;
                                    transition: background-color 0.2s ease !important;
                                ">About Us</a>
                                <a href="services.html" style="
                                    display: block !important;
                                    color: #fff !important;
                                    text-decoration: none !important;
                                    padding: 12px 16px !important;
                                    font-size: 14px !important;
                                    border-bottom: 1px solid rgba(255,255,255,0.1) !important;
                                    transition: background-color 0.2s ease !important;
                                ">Services</a>
                                <a href="how-we-deliver.html" style="
                                    display: block !important;
                                    color: #fff !important;
                                    text-decoration: none !important;
                                    padding: 12px 16px !important;
                                    font-size: 14px !important;
                                    border-bottom: 1px solid rgba(255,255,255,0.1) !important;
                                    transition: background-color 0.2s ease !important;
                                ">How We Deliver</a>
                                <a href="purpose-mission-values.html" style="
                                    display: block !important;
                                    color: #fff !important;
                                    text-decoration: none !important;
                                    padding: 12px 16px !important;
                                    font-size: 14px !important;
                                    border-bottom: 1px solid rgba(255,255,255,0.1) !important;
                                    transition: background-color 0.2s ease !important;
                                ">Purpose, Mission, Values</a>
                                <a href="our-promise.html" style="
                                    display: block !important;
                                    color: #fff !important;
                                    text-decoration: none !important;
                                    padding: 12px 16px !important;
                                    font-size: 14px !important;
                                    border-bottom: 1px solid rgba(255,255,255,0.1) !important;
                                    transition: background-color 0.2s ease !important;
                                ">Our Promise</a>
                                <a href="privacy.html" style="
                                    display: block !important;
                                    color: #fff !important;
                                    text-decoration: none !important;
                                    padding: 12px 16px !important;
                                    font-size: 14px !important;
                                    transition: background-color 0.2s ease !important;
                                ">Privacy Policy</a>
                            </div>
                        </li>
                        
                        <li class="has-dropdown" style="position: relative !important;">
                            <a href="case-study.html" style="
                                color: #fff !important;
                                text-decoration: none !important;
                                font-size: 16px !important;
                                font-weight: 400 !important;
                                padding: 8px 0 !important;
                                transition: opacity 0.2s ease !important;
                            ">Case Studies ▼</a>
                            <div class="dropdown" style="
                                position: absolute !important;
                                top: 100% !important;
                                left: 0 !important;
                                background: #080a29 !important;
                                min-width: 200px !important;
                                box-shadow: 0 4px 12px rgba(0,0,0,0.2) !important;
                                border-radius: 4px !important;
                                opacity: 0 !important;
                                visibility: hidden !important;
                                transform: translateY(-10px) !important;
                                transition: all 0.3s ease !important;
                                z-index: 10000 !important;
                            ">
                                <a href="property-management.html" style="
                                    display: block !important;
                                    color: #fff !important;
                                    text-decoration: none !important;
                                    padding: 12px 16px !important;
                                    font-size: 14px !important;
                                    border-bottom: 1px solid rgba(255,255,255,0.1) !important;
                                    transition: background-color 0.2s ease !important;
                                ">Mateenik</a>
                                <a href="case-study.html" style="
                                    display: block !important;
                                    color: #fff !important;
                                    text-decoration: none !important;
                                    padding: 12px 16px !important;
                                    font-size: 14px !important;
                                    transition: background-color 0.2s ease !important;
                                ">IaC Trans</a>
                            </div>
                        </li>
                        
                        <li style="position: relative !important;">
                            <a href="contact.html" style="
                                color: #fff !important;
                                text-decoration: none !important;
                                font-size: 16px !important;
                                font-weight: 400 !important;
                                padding: 8px 0 !important;
                                transition: opacity 0.2s ease !important;
                            ">Contact</a>
                        </li>

                        <!-- Mobile Hello I'm Q Button -->
                        <li class="mobile-only" style="display: none !important;">
                            <a href="about.html" style="
                                background: #ff2828 !important;
                                color: #fff !important;
                                border: 1px solid #ff2828 !important;
                                padding: 15px !important;
                                border-radius: 4px !important;
                                text-decoration: none !important;
                                font-size: 16px !important;
                                font-weight: 500 !important;
                                text-align: center !important;
                                display: block !important;
                                margin-top: 20px !important;
                                transition: all 0.2s ease !important;
                            ">Hello I'm Q</a>
                        </li>
                    </ul>

                    <!-- Hello I'm Q Button (Desktop) -->
                    <a href="about.html" class="desktop-only" style="
                        background: #080a29 !important;
                        color: #fff !important;
                        border: 1px solid #fff !important;
                        padding: 8px 16px !important;
                        border-radius: 4px !important;
                        text-decoration: none !important;
                        font-size: 16px !important;
                        font-weight: 500 !important;
                        transition: all 0.2s ease !important;
                    ">Hello I'm Q</a>

                    <!-- Mobile Hamburger Toggle - ALWAYS VISIBLE ON MOBILE -->
                    <button id="mobile-toggle" style="
                        display: none !important;
                        background: none !important;
                        border: none !important;
                        cursor: pointer !important;
                        padding: 10px !important;
                        flex-direction: column !important;
                        gap: 4px !important;
                        z-index: 10001 !important;
                    ">
                        <span style="
                            width: 25px !important;
                            height: 3px !important;
                            background: #fff !important;
                            display: block !important;
                            transition: all 0.3s ease !important;
                        "></span>
                        <span style="
                            width: 25px !important;
                            height: 3px !important;
                            background: #fff !important;
                            display: block !important;
                            transition: all 0.3s ease !important;
                        "></span>
                        <span style="
                            width: 25px !important;
                            height: 3px !important;
                            background: #fff !important;
                            display: block !important;
                            transition: all 0.3s ease !important;
                        "></span>
                    </button>
                </div>
            </nav>
        `;
        
        // Add navigation to body
        document.body.insertAdjacentHTML('afterbegin', navigationHTML);
        
        // Add body padding for fixed navigation
        document.body.style.paddingTop = '80px !important';
        
        // Add responsive styles with STRONGER mobile targeting
        const responsiveStyles = `
            <style id="responsive-nav-styles">
                /* FORCE hide framework navigation */
                header, .block-header, .site-header, .navigation, .nav, .menu,
                .block-header-layout-mobile, .block-header-layout-desktop,
                .block-header-layout-mobile__dropdown, .block-header__nav-links,
                .block-header__hamburger-menu, .burger, .block-header__logo,
                .block-header__button, astro-island[component-url*="Header"],
                astro-island[component-url*="Navigation"], [data-qa*="siteheader"],
                [data-qa*="navigation"] {
                    display: none !important;
                    visibility: hidden !important;
                    height: 0 !important;
                    overflow: hidden !important;
                    opacity: 0 !important;
                    position: absolute !important;
                    left: -9999px !important;
                }
                
                /* Hover effects for desktop */
                @media (min-width: 921px) {
                    #simple-responsive-nav a:hover {
                        opacity: 0.8 !important;
                    }
                    
                    #simple-responsive-nav .has-dropdown:hover .dropdown {
                        opacity: 1 !important;
                        visibility: visible !important;
                        transform: translateY(0) !important;
                    }
                    
                    #simple-responsive-nav .dropdown a:hover {
                        background-color: rgba(255,255,255,0.1) !important;
                    }
                    
                    #simple-responsive-nav .desktop-only:hover {
                        background: #1d1e20 !important;
                    }
                }
                
                /* STRONG Mobile styles - FORCE hamburger visibility */
                @media screen and (max-width: 920px) {
                    #nav-links {
                        position: fixed !important;
                        top: 80px !important;
                        left: 0 !important;
                        right: 0 !important;
                        background: #080a29 !important;
                        flex-direction: column !important;
                        align-items: stretch !important;
                        gap: 0 !important;
                        padding: 20px !important;
                        transform: translateY(-100%) !important;
                        opacity: 0 !important;
                        visibility: hidden !important;
                        transition: all 0.3s ease !important;
                        z-index: 10000 !important;
                    }
                    
                    #nav-links.active {
                        transform: translateY(0) !important;
                        opacity: 1 !important;
                        visibility: visible !important;
                    }
                    
                    #nav-links li {
                        border-bottom: 1px solid rgba(255,255,255,0.1) !important;
                    }
                    
                    #nav-links li:last-child {
                        border-bottom: none !important;
                    }
                    
                    #nav-links a {
                        display: block !important;
                        padding: 15px 0 !important;
                        font-size: 18px !important;
                    }
                    
                    #nav-links .dropdown {
                        position: static !important;
                        opacity: 1 !important;
                        visibility: visible !important;
                        transform: none !important;
                        box-shadow: none !important;
                        background: rgba(255,255,255,0.05) !important;
                        margin-top: 10px !important;
                        border-radius: 4px !important;
                    }
                    
                    /* FORCE hamburger button to show */
                    #mobile-toggle {
                        display: flex !important;
                        visibility: visible !important;
                        opacity: 1 !important;
                    }
                    
                    .desktop-only {
                        display: none !important;
                    }
                    
                    .mobile-only {
                        display: block !important;
                    }
                    
                    /* Hamburger animation */
                    #mobile-toggle.active span:nth-child(1) {
                        transform: rotate(45deg) translate(6px, 6px) !important;
                    }
                    
                    #mobile-toggle.active span:nth-child(2) {
                        opacity: 0 !important;
                    }
                    
                    #mobile-toggle.active span:nth-child(3) {
                        transform: rotate(-45deg) translate(6px, -6px) !important;
                    }
                }
                
                /* EXTRA STRONG mobile targeting for iPhone */
                @media screen and (max-width: 920px) and (orientation: portrait),
                       screen and (max-width: 920px) and (orientation: landscape) {
                    #mobile-toggle {
                        display: flex !important;
                        visibility: visible !important;
                        opacity: 1 !important;
                        position: relative !important;
                        z-index: 10001 !important;
                    }
                }
            </style>
        `;
        
        // Add styles to head
        document.head.insertAdjacentHTML('beforeend', responsiveStyles);
        
        // Add mobile menu functionality with better error handling
        setTimeout(() => {
            const mobileToggle = document.getElementById('mobile-toggle');
            const navLinks = document.getElementById('nav-links');
            
            if (mobileToggle && navLinks) {
                console.log('✅ Mobile toggle and nav links found, adding functionality');
                
                mobileToggle.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    console.log('🍔 Hamburger clicked!');
                    navLinks.classList.toggle('active');
                    mobileToggle.classList.toggle('active');
                });
                
                // Close menu when clicking outside
                document.addEventListener('click', function(e) {
                    if (!mobileToggle.contains(e.target) && !navLinks.contains(e.target)) {
                        navLinks.classList.remove('active');
                        mobileToggle.classList.remove('active');
                    }
                });
                
                // Close menu on window resize
                window.addEventListener('resize', function() {
                    if (window.innerWidth > 920) {
                        navLinks.classList.remove('active');
                        mobileToggle.classList.remove('active');
                    }
                });
            } else {
                console.error('❌ Mobile toggle or nav links not found!');
            }
        }, 100);
        
        console.log('✅ FIXED responsive navigation created successfully');
    }
    
    // Run immediately and with delays to catch framework loading
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', createFixedResponsiveNavigation);
    } else {
        createFixedResponsiveNavigation();
    }
    
    // Run multiple times to catch Vue.js/Astro hydration
    setTimeout(createFixedResponsiveNavigation, 100);
    setTimeout(createFixedResponsiveNavigation, 500);
    setTimeout(createFixedResponsiveNavigation, 1500);
    setTimeout(createFixedResponsiveNavigation, 3000);
    
    // Run on framework events
    window.addEventListener('astro:load', createFixedResponsiveNavigation);
    window.addEventListener('astro:after-swap', createFixedResponsiveNavigation);
    
})();




