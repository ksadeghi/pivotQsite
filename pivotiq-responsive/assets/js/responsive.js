

// ===== PIVOTIQ RESPONSIVE JAVASCRIPT =====

document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile Navigation Toggle
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navbarNav = document.querySelector('.navbar-nav');
    
    if (navbarToggle && navbarNav) {
        navbarToggle.addEventListener('click', function() {
            navbarNav.classList.toggle('show');
            
            // Update toggle icon
            const icon = navbarToggle.querySelector('i') || navbarToggle;
            if (navbarNav.classList.contains('show')) {
                icon.innerHTML = '✕';
                icon.setAttribute('aria-label', 'Close menu');
            } else {
                icon.innerHTML = '☰';
                icon.setAttribute('aria-label', 'Open menu');
            }
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.navbar')) {
                navbarNav.classList.remove('show');
                const icon = navbarToggle.querySelector('i') || navbarToggle;
                icon.innerHTML = '☰';
                icon.setAttribute('aria-label', 'Open menu');
            }
        });
        
        // Close mobile menu when clicking on a link
        const navLinks = navbarNav.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navbarNav.classList.remove('show');
                const icon = navbarToggle.querySelector('i') || navbarToggle;
                icon.innerHTML = '☰';
                icon.setAttribute('aria-label', 'Open menu');
            });
        });
    }
    
    // Responsive Images with Lazy Loading
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // Smooth Scrolling for Anchor Links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
                const targetPosition = targetElement.offsetTop - navbarHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Responsive Table Wrapper
    const tables = document.querySelectorAll('table');
    tables.forEach(table => {
        if (!table.parentElement.classList.contains('table-responsive')) {
            const wrapper = document.createElement('div');
            wrapper.className = 'table-responsive';
            table.parentNode.insertBefore(wrapper, table);
            wrapper.appendChild(table);
        }
    });
    
    // Auto-resize Text Areas
    const textareas = document.querySelectorAll('textarea');
    textareas.forEach(textarea => {
        textarea.addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = this.scrollHeight + 'px';
        });
    });
    
    // Responsive Video Embeds
    const videos = document.querySelectorAll('iframe[src*="youtube"], iframe[src*="vimeo"]');
    videos.forEach(video => {
        if (!video.parentElement.classList.contains('video-responsive')) {
            const wrapper = document.createElement('div');
            wrapper.className = 'video-responsive';
            video.parentNode.insertBefore(wrapper, video);
            wrapper.appendChild(video);
        }
    });
    
    // Touch Gestures for Mobile
    let touchStartX = 0;
    let touchStartY = 0;
    
    document.addEventListener('touchstart', function(e) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
    });
    
    document.addEventListener('touchend', function(e) {
        if (!touchStartX || !touchStartY) return;
        
        const touchEndX = e.changedTouches[0].clientX;
        const touchEndY = e.changedTouches[0].clientY;
        
        const diffX = touchStartX - touchEndX;
        const diffY = touchStartY - touchEndY;
        
        // Swipe detection (minimum 50px movement)
        if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
            if (diffX > 0) {
                // Swipe left
                document.dispatchEvent(new CustomEvent('swipeLeft'));
            } else {
                // Swipe right
                document.dispatchEvent(new CustomEvent('swipeRight'));
            }
        }
        
        touchStartX = 0;
        touchStartY = 0;
    });
    
    // Responsive Font Size Adjustment
    function adjustFontSize() {
        const viewportWidth = window.innerWidth;
        const baseSize = 16;
        let scaleFactor = 1;
        
        if (viewportWidth < 375) {
            scaleFactor = 0.9;
        } else if (viewportWidth < 576) {
            scaleFactor = 0.95;
        } else if (viewportWidth > 1400) {
            scaleFactor = 1.1;
        }
        
        document.documentElement.style.fontSize = (baseSize * scaleFactor) + 'px';
    }
    
    // Debounced Resize Handler
    let resizeTimeout;
    function handleResize() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            adjustFontSize();
            
            // Close mobile menu on resize to desktop
            if (window.innerWidth > 767 && navbarNav) {
                navbarNav.classList.remove('show');
                const icon = navbarToggle?.querySelector('i') || navbarToggle;
                if (icon) {
                    icon.innerHTML = '☰';
                    icon.setAttribute('aria-label', 'Open menu');
                }
            }
            
            // Dispatch custom resize event
            document.dispatchEvent(new CustomEvent('responsiveResize', {
                detail: {
                    width: window.innerWidth,
                    height: window.innerHeight,
                    isMobile: window.innerWidth <= 767,
                    isTablet: window.innerWidth > 767 && window.innerWidth <= 1024,
                    isDesktop: window.innerWidth > 1024
                }
            }));
        }, 250);
    }
    
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);
    
    // Initial setup
    adjustFontSize();
    
    // Accessibility Improvements
    
    // Skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: #000;
        color: #fff;
        padding: 8px;
        text-decoration: none;
        z-index: 9999;
        border-radius: 4px;
    `;
    
    skipLink.addEventListener('focus', function() {
        this.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', function() {
        this.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Add main content ID if not exists
    const mainContent = document.querySelector('main') || document.querySelector('.page__blocks') || document.body;
    if (mainContent && !mainContent.id) {
        mainContent.id = 'main-content';
    }
    
    // Focus management for mobile menu
    if (navbarToggle && navbarNav) {
        navbarToggle.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    }
    
    // Keyboard navigation for dropdowns
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        const menu = dropdown.querySelector('.dropdown-menu');
        
        if (toggle && menu) {
            toggle.addEventListener('keydown', function(e) {
                if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    menu.classList.add('show');
                    const firstLink = menu.querySelector('a');
                    if (firstLink) firstLink.focus();
                }
            });
        }
    });
    
    // Performance Monitoring
    if ('performance' in window) {
        window.addEventListener('load', function() {
            setTimeout(() => {
                const perfData = performance.getEntriesByType('navigation')[0];
                if (perfData) {
                    console.log('Page Load Performance:', {
                        loadTime: perfData.loadEventEnd - perfData.loadEventStart,
                        domContentLoaded: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
                        totalTime: perfData.loadEventEnd - perfData.fetchStart
                    });
                }
            }, 0);
        });
    }
    
    // Service Worker Registration (for PWA capabilities)
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
            navigator.serviceWorker.register('/sw.js')
                .then(registration => {
                    console.log('SW registered: ', registration);
                })
                .catch(registrationError => {
                    console.log('SW registration failed: ', registrationError);
                });
        });
    }
});

// Utility Functions

// Device Detection
window.PivotIQ = window.PivotIQ || {};
window.PivotIQ.device = {
    isMobile: () => window.innerWidth <= 767,
    isTablet: () => window.innerWidth > 767 && window.innerWidth <= 1024,
    isDesktop: () => window.innerWidth > 1024,
    isTouch: () => 'ontouchstart' in window || navigator.maxTouchPoints > 0,
    isIOS: () => /iPad|iPhone|iPod/.test(navigator.userAgent),
    isAndroid: () => /Android/.test(navigator.userAgent)
};

// Responsive Image Loading
window.PivotIQ.loadResponsiveImage = function(img, sizes) {
    const devicePixelRatio = window.devicePixelRatio || 1;
    const viewportWidth = window.innerWidth;
    
    let selectedSize = sizes[0];
    for (let size of sizes) {
        if (viewportWidth >= size.minWidth) {
            selectedSize = size;
        }
    }
    
    const finalWidth = selectedSize.width * devicePixelRatio;
    img.src = selectedSize.src.replace('{width}', finalWidth);
};

// Responsive Breakpoint Checker
window.PivotIQ.breakpoint = function() {
    const width = window.innerWidth;
    if (width < 576) return 'xs';
    if (width < 768) return 'sm';
    if (width < 992) return 'md';
    if (width < 1200) return 'lg';
    return 'xl';
};

// Debounce Function
window.PivotIQ.debounce = function(func, wait, immediate) {
    let timeout;
    return function executedFunction() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

// Throttle Function
window.PivotIQ.throttle = function(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
};

