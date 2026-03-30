

// MOBILE NAVIGATION REPLACEMENT - Complete HTML replacement strategy
(function() {
    'use strict';
    
    function createMobileNavigation() {
        if (window.innerWidth <= 920) {
            console.log('Creating brand new mobile navigation...');
            
            // Create completely new mobile navigation HTML
            const newMobileNav = `
                <div id="custom-mobile-nav" style="
                    position: fixed !important;
                    top: 0 !important;
                    left: 0 !important;
                    right: 0 !important;
                    z-index: 9999 !important;
                    background: #080a29 !important;
                    padding: 15px !important;
                    display: flex !important;
                    flex-direction: column !important;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.3) !important;
                ">
                    <!-- Top Row: Logo and Button -->
                    <div style="
                        display: flex !important;
                        justify-content: space-between !important;
                        align-items: center !important;
                        margin-bottom: 15px !important;
                    ">
                        <a href="index.html" style="
                            flex: 0 0 auto !important;
                            text-decoration: none !important;
                        ">
                            <img src="assets/images/pivotq-final-vector-oPvykR4YtqNfcxXS.svg" 
                                 alt="PivotQ Logo" 
                                 style="height: 35px !important; width: auto !important;">
                        </a>
                        <a href="about.html" style="
                            background: #080a29 !important;
                            color: #fff !important;
                            padding: 8px 16px !important;
                            text-decoration: none !important;
                            border-radius: 4px !important;
                            font-size: 14px !important;
                            border: 1px solid #fff !important;
                        ">Hello I'm Q</a>
                    </div>
                    
                    <!-- Bottom Row: Navigation Links -->
                    <div style="
                        display: flex !important;
                        justify-content: space-around !important;
                        align-items: center !important;
                        gap: 10px !important;
                    ">
                        <a href="index.html" style="
                            color: #fff !important;
                            text-decoration: none !important;
                            padding: 10px 8px !important;
                            font-size: 16px !important;
                            text-align: center !important;
                            flex: 1 !important;
                        ">Home</a>
                        <a href="about.html" style="
                            color: #fff !important;
                            text-decoration: none !important;
                            padding: 10px 8px !important;
                            font-size: 16px !important;
                            text-align: center !important;
                            flex: 1 !important;
                        ">About</a>
                        <a href="case-study.html" style="
                            color: #fff !important;
                            text-decoration: none !important;
                            padding: 10px 8px !important;
                            font-size: 16px !important;
                            text-align: center !important;
                            flex: 1 !important;
                        ">Case Studies</a>
                    </div>
                </div>
            `;
            
            // Remove existing custom navigation if it exists
            const existingCustomNav = document.getElementById('custom-mobile-nav');
            if (existingCustomNav) {
                existingCustomNav.remove();
            }
            
            // Hide ALL existing headers
            const allHeaders = document.querySelectorAll('header, .block-header, .site-header');
            allHeaders.forEach(header => {
                header.style.display = 'none !important';
                header.style.visibility = 'hidden !important';
                header.style.height = '0 !important';
                header.style.overflow = 'hidden !important';
            });
            
            // Add new navigation to body
            document.body.insertAdjacentHTML('afterbegin', newMobileNav);
            
            // Add top padding to body to account for fixed navigation
            document.body.style.paddingTop = '120px !important';
            
            console.log('✅ Brand new mobile navigation created and existing headers hidden');
        }
    }
    
    // Run immediately and with delays
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', createMobileNavigation);
    } else {
        createMobileNavigation();
    }
    
    // Run multiple times to catch framework re-renders
    setTimeout(createMobileNavigation, 500);
    setTimeout(createMobileNavigation, 1500);
    setTimeout(createMobileNavigation, 3000);
    setTimeout(createMobileNavigation, 5000);
    
    // Run on resize
    window.addEventListener('resize', createMobileNavigation);
    
    // Run on framework events
    window.addEventListener('astro:load', createMobileNavigation);
    window.addEventListener('astro:after-swap', createMobileNavigation);
    
})();


