

// ===== CONSERVATIVE MOBILE NAVIGATION FOR PIVOTIQ =====
// This script adds mobile navigation without breaking existing functionality

document.addEventListener('DOMContentLoaded', function() {
    
    // Add mobile navigation toggle button
    function addMobileNavToggle() {
        const navContainer = document.querySelector('.pivotiq-nav-content');
        const navLinks = document.querySelector('.pivotiq-nav-links');
        
        if (navContainer && navLinks && !document.querySelector('.mobile-nav-toggle')) {
            // Create mobile toggle button
            const toggleButton = document.createElement('button');
            toggleButton.className = 'mobile-nav-toggle';
            toggleButton.innerHTML = '☰';
            toggleButton.setAttribute('aria-label', 'Toggle navigation menu');
            toggleButton.setAttribute('aria-expanded', 'false');
            
            // Insert toggle button
            navContainer.insertBefore(toggleButton, navLinks);
            
            // Add click event listener
            toggleButton.addEventListener('click', function() {
                const isOpen = navLinks.classList.contains('show');
                
                if (isOpen) {
                    navLinks.classList.remove('show');
                    toggleButton.innerHTML = '☰';
                    toggleButton.setAttribute('aria-expanded', 'false');
                } else {
                    navLinks.classList.add('show');
                    toggleButton.innerHTML = '✕';
                    toggleButton.setAttribute('aria-expanded', 'true');
                }
            });
            
            // Close menu when clicking on a link
            const navLinkElements = navLinks.querySelectorAll('a');
            navLinkElements.forEach(link => {
                link.addEventListener('click', function() {
                    navLinks.classList.remove('show');
                    toggleButton.innerHTML = '☰';
                    toggleButton.setAttribute('aria-expanded', 'false');
                });
            });
            
            // Close menu when clicking outside
            document.addEventListener('click', function(event) {
                if (!navContainer.contains(event.target)) {
                    navLinks.classList.remove('show');
                    toggleButton.innerHTML = '☰';
                    toggleButton.setAttribute('aria-expanded', 'false');
                }
            });
        }
    }
    
    // Add viewport meta tag if missing
    function ensureViewportMeta() {
        if (!document.querySelector('meta[name="viewport"]')) {
            const viewportMeta = document.createElement('meta');
            viewportMeta.name = 'viewport';
            viewportMeta.content = 'width=device-width, initial-scale=1.0, shrink-to-fit=no';
            document.head.appendChild(viewportMeta);
        }
    }
    
    // Make images responsive
    function makeImagesResponsive() {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            if (!img.style.maxWidth) {
                img.style.maxWidth = '100%';
                img.style.height = 'auto';
            }
        });
    }
    
    // Handle window resize
    function handleResize() {
        const navLinks = document.querySelector('.pivotiq-nav-links');
        const toggleButton = document.querySelector('.mobile-nav-toggle');
        
        // Close mobile menu on resize to desktop
        if (window.innerWidth > 767 && navLinks && toggleButton) {
            navLinks.classList.remove('show');
            toggleButton.innerHTML = '☰';
            toggleButton.setAttribute('aria-expanded', 'false');
        }
    }
    
    // Debounced resize handler
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(handleResize, 250);
    });
    
    // Initialize everything
    ensureViewportMeta();
    addMobileNavToggle();
    makeImagesResponsive();
    
    // Add keyboard navigation support
    document.addEventListener('keydown', function(event) {
        const toggleButton = document.querySelector('.mobile-nav-toggle');
        const navLinks = document.querySelector('.pivotiq-nav-links');
        
        if (event.key === 'Escape' && navLinks && navLinks.classList.contains('show')) {
            navLinks.classList.remove('show');
            if (toggleButton) {
                toggleButton.innerHTML = '☰';
                toggleButton.setAttribute('aria-expanded', 'false');
                toggleButton.focus();
            }
        }
    });
    
    // Add touch support for better mobile experience
    let touchStartY = 0;
    let touchEndY = 0;
    
    document.addEventListener('touchstart', function(e) {
        touchStartY = e.changedTouches[0].screenY;
    });
    
    document.addEventListener('touchend', function(e) {
        touchEndY = e.changedTouches[0].screenY;
        handleSwipe();
    });
    
    function handleSwipe() {
        const navLinks = document.querySelector('.pivotiq-nav-links');
        const toggleButton = document.querySelector('.mobile-nav-toggle');
        
        if (touchEndY < touchStartY - 50 && navLinks && navLinks.classList.contains('show')) {
            // Swipe up - close menu
            navLinks.classList.remove('show');
            if (toggleButton) {
                toggleButton.innerHTML = '☰';
                toggleButton.setAttribute('aria-expanded', 'false');
            }
        }
    }
    
    console.log('PivotIQ Conservative Responsive Navigation Loaded');
});


