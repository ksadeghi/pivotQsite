

// CLEAN HAMBURGER MENU FOR IPHONE 13 PRO
(function() {
    'use strict';
    
    function createHamburgerMenu() {
        if (window.innerWidth <= 920) {
            console.log('Creating clean hamburger menu for iPhone 13 Pro...');
            
            // Remove existing custom navigation if it exists
            const existingCustomNav = document.getElementById('custom-mobile-nav');
            if (existingCustomNav) {
                existingCustomNav.remove();
            }
            
            // Hide ALL existing headers
            const allHeaders = document.querySelectorAll('header, .block-header, .site-header');
            allHeaders.forEach(header => {
                header.style.display = 'none !important';
            });
            
            // Create hamburger menu HTML
            const hamburgerMenuHTML = `
                <div id="custom-mobile-nav" style="
                    position: fixed !important;
                    top: 0 !important;
                    left: 0 !important;
                    right: 0 !important;
                    z-index: 9999 !important;
                    background: #080a29 !important;
                    padding: 15px !important;
                    display: flex !important;
                    justify-content: space-between !important;
                    align-items: center !important;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.3) !important;
                ">
                    <!-- Logo -->
                    <a href="index.html" style="text-decoration: none !important;">
                        <img src="assets/images/pivotq-final-vector-oPvykR4YtqNfcxXS.svg" 
                             alt="PivotQ Logo" 
                             style="height: 35px !important; width: auto !important;">
                    </a>
                    
                    <!-- Hamburger Button -->
                    <button id="hamburger-btn" style="
                        background: transparent !important;
                        border: none !important;
                        cursor: pointer !important;
                        padding: 10px !important;
                        display: flex !important;
                        flex-direction: column !important;
                        gap: 4px !important;
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
                
                <!-- Dropdown Menu (Hidden by default) -->
                <div id="mobile-dropdown" style="
                    position: fixed !important;
                    top: 65px !important;
                    left: 0 !important;
                    right: 0 !important;
                    z-index: 9998 !important;
                    background: #080a29 !important;
                    padding: 20px !important;
                    display: none !important;
                    flex-direction: column !important;
                    gap: 15px !important;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.3) !important;
                ">
                    <a href="index.html" style="
                        color: #fff !important;
                        text-decoration: none !important;
                        padding: 15px 0 !important;
                        font-size: 18px !important;
                        border-bottom: 1px solid rgba(255,255,255,0.1) !important;
                        display: block !important;
                    ">🏠 Home</a>
                    
                    <a href="about.html" style="
                        color: #fff !important;
                        text-decoration: none !important;
                        padding: 15px 0 !important;
                        font-size: 18px !important;
                        border-bottom: 1px solid rgba(255,255,255,0.1) !important;
                        display: block !important;
                    ">ℹ️ About</a>
                    
                    <a href="case-study.html" style="
                        color: #fff !important;
                        text-decoration: none !important;
                        padding: 15px 0 !important;
                        font-size: 18px !important;
                        border-bottom: 1px solid rgba(255,255,255,0.1) !important;
                        display: block !important;
                    ">📊 Case Studies</a>
                    
                    <a href="contact.html" style="
                        color: #fff !important;
                        text-decoration: none !important;
                        padding: 15px 0 !important;
                        font-size: 18px !important;
                        border-bottom: 1px solid rgba(255,255,255,0.1) !important;
                        display: block !important;
                    ">📞 Contact</a>
                    
                    <a href="about.html" style="
                        background: #ff2828 !important;
                        color: #fff !important;
                        text-decoration: none !important;
                        padding: 15px !important;
                        font-size: 16px !important;
                        text-align: center !important;
                        border-radius: 5px !important;
                        display: block !important;
                        margin-top: 10px !important;
                    ">👋 Hello I'm Q</a>
                </div>
            `;
            
            // Add hamburger menu to body
            document.body.insertAdjacentHTML('afterbegin', hamburgerMenuHTML);
            
            // Add top padding to body
            document.body.style.paddingTop = '80px !important';
            
            // Add hamburger menu functionality
            const hamburgerBtn = document.getElementById('hamburger-btn');
            const dropdown = document.getElementById('mobile-dropdown');
            let isOpen = false;
            
            if (hamburgerBtn && dropdown) {
                hamburgerBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    isOpen = !isOpen;
                    
                    if (isOpen) {
                        // Open menu
                        dropdown.style.display = 'flex';
                        console.log('📱 Hamburger menu opened');
                        
                        // Animate hamburger to X
                        const spans = hamburgerBtn.querySelectorAll('span');
                        spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
                        spans[1].style.opacity = '0';
                        spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
                    } else {
                        // Close menu
                        dropdown.style.display = 'none';
                        console.log('📱 Hamburger menu closed');
                        
                        // Reset hamburger animation
                        const spans = hamburgerBtn.querySelectorAll('span');
                        spans[0].style.transform = 'none';
                        spans[1].style.opacity = '1';
                        spans[2].style.transform = 'none';
                    }
                });
                
                // Close menu when clicking outside
                document.addEventListener('click', function(e) {
                    if (!hamburgerBtn.contains(e.target) && !dropdown.contains(e.target)) {
                        if (isOpen) {
                            isOpen = false;
                            dropdown.style.display = 'none';
                            
                            // Reset hamburger animation
                            const spans = hamburgerBtn.querySelectorAll('span');
                            spans[0].style.transform = 'none';
                            spans[1].style.opacity = '1';
                            spans[2].style.transform = 'none';
                        }
                    }
                });
            }
            
            console.log('✅ Clean hamburger menu created for iPhone 13 Pro');
        }
    }
    
    // Run immediately and with delays
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', createHamburgerMenu);
    } else {
        createHamburgerMenu();
    }
    
    // Run multiple times to catch framework re-renders
    setTimeout(createHamburgerMenu, 500);
    setTimeout(createHamburgerMenu, 1500);
    setTimeout(createHamburgerMenu, 3000);
    
    // Run on resize
    window.addEventListener('resize', createHamburgerMenu);
    
})();


