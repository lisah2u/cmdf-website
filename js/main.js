// The Roots of Music - Main JavaScript File

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    initMobileMenu();

    // Smooth scrolling for navigation links
    initSmoothScrolling();

    // Intersection Observer for fade-in animations
    initScrollAnimations();

    // Navigation bar background on scroll
    initNavbarScroll();

    // Initialize logo animation separately
    initLogoAnimation();

    // Form handling
    initFormHandling();

    // Initialize counters animation
    initCounterAnimations();
});

// Mobile Menu Functions
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            
            // Toggle hamburger icon
            const icon = mobileMenuBtn.querySelector('svg path');
            if (mobileMenu.classList.contains('hidden')) {
                icon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
            } else {
                icon.setAttribute('d', 'M6 18L18 6M6 6l12 12');
            }
        });
        
        // Close mobile menu when clicking on links
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.add('hidden');
                const icon = mobileMenuBtn.querySelector('svg path');
                icon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!mobileMenuBtn.contains(event.target) && !mobileMenu.contains(event.target)) {
                mobileMenu.classList.add('hidden');
                const icon = mobileMenuBtn.querySelector('svg path');
                icon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
            }
        });
    }
}

// Smooth Scrolling Functions
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerOffset = 80; // Height of fixed header
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll Animations Functions
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Trigger counter animation if this element contains counters (only impact counters)
                const counters = entry.target.querySelectorAll('[id^="counter-"]');
                if (counters.length > 0) {
                    animateCounters(entry.target);
                }
            }
        });
    }, observerOptions);
    
    // Observe all fade-in elements
    const fadeElements = document.querySelectorAll('.fade-in, .fade-in-delay-1, .fade-in-delay-2, .fade-in-delay-3');
    fadeElements.forEach(element => {
        observer.observe(element);
    });
}

// Navbar Scroll Effect
function initNavbarScroll() {
    const header = document.querySelector('header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', function() {
        const currentScrollY = window.scrollY;

        if (currentScrollY > 100) {
            header.classList.add('backdrop-blur-md');
            // Keep the black background, just add blur effect
        } else {
            header.classList.remove('backdrop-blur-md');
        }

        lastScrollY = currentScrollY;
    });
}

// Logo Animation Effect
function initLogoAnimation() {
    const logo = document.getElementById('header-logo');

    if (!logo) {
        console.log('Logo not found');
        return;
    }

    // Set initial scale at page load
    logo.style.transform = 'scale(1.2)';

    // Add scroll event listener for logo animation
    function updateLogoScale() {
        const currentScrollY = window.scrollY;
        let scale;

        if (currentScrollY === 0) {
            scale = 1.2; // Enlarged when at top
        } else if (currentScrollY <= 300) {
            // Smooth transition from 1.2 to 1.0 over first 300px
            scale = 1.2 - (currentScrollY / 300) * 0.2;
        } else {
            // Continue shrinking after 300px to minimum of 0.8
            const additionalScroll = currentScrollY - 300;
            scale = Math.max(0.8, 1.0 - (additionalScroll / 500) * 0.2);
        }

        // Apply the scaling transform
        logo.style.transform = `scale(${scale})`;
    }

    // Add scroll event listener
    window.addEventListener('scroll', updateLogoScale);

    // Call once to set initial state
    updateLogoScale();
}

// Make function available globally
window.initLogoAnimation = initLogoAnimation;

// Form Handling Functions
function initFormHandling() {
    // Newsletter signup form
    const newsletterForm = document.querySelector('footer form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            if (validateEmail(email)) {
                // Simulate form submission
                showNotification('Thank you for subscribing to our newsletter!', 'success');
                emailInput.value = '';
            } else {
                showNotification('Please enter a valid email address.', 'error');
            }
        });
    }
    
    // Contact form (if exists) - Updated for Netlify Forms
    const contactForms = document.querySelectorAll('form[name="contact"]');
    contactForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            // Validate form before allowing Netlify to handle submission
            if (!validateContactForm(this)) {
                e.preventDefault();
                return false;
            }

            // Show loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Sending...';
            }

            // Let Netlify handle the actual submission
            // Form will redirect to success page
        });
    });
}

// Counter Animation Functions
function initCounterAnimations() {
    // This will be triggered by the intersection observer
}

function animateCounters(container) {
    // Look for counter elements with IDs (only impact counters)
    const counterElements = container.querySelectorAll('[id^="counter-"]');
    
    counterElements.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const counterId = counter.id;
        
        // Only animate if not already animated and CountUp is available
        if (!counter.classList.contains('animated') && typeof CountUp !== 'undefined') {
            counter.classList.add('animated');
            
            // Initialize CountUp
            const countUp = new CountUp(counterId, 0, target, 0, 2.5, {
                useEasing: true,
                useGrouping: true,
                separator: ',',
                decimal: '.',
            });
            
            // Start the animation
            if (!countUp.error) {
                countUp.start();
            } else {
                // Fallback if CountUp fails
                counter.textContent = target.toLocaleString();
            }
        } else if (!counter.classList.contains('animated')) {
            // Fallback animation if CountUp is not available
            counter.classList.add('animated');
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;
            
            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.textContent = Math.floor(current).toLocaleString();
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target.toLocaleString();
                }
            };
            
            updateCounter();
        }
    });
}

// Utility Functions
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateContactForm(form) {
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;

    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            isValid = false;
            field.classList.add('border-red-500');
            showFieldError(field, 'This field is required');
        } else {
            field.classList.remove('border-red-500');
            hideFieldError(field);
        }
    });

    // Email validation
    const emailField = form.querySelector('input[type="email"]');
    if (emailField && emailField.value && !validateEmail(emailField.value)) {
        isValid = false;
        emailField.classList.add('border-red-500');
        showFieldError(emailField, 'Please enter a valid email address');
    } else if (emailField) {
        emailField.classList.remove('border-red-500');
        hideFieldError(emailField);
    }

    // Phone validation (if provided)
    const phoneField = form.querySelector('input[type="tel"]');
    if (phoneField && phoneField.value) {
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        if (!phoneRegex.test(phoneField.value.replace(/[\s\-\(\)]/g, ''))) {
            isValid = false;
            phoneField.classList.add('border-red-500');
            showFieldError(phoneField, 'Please enter a valid phone number');
        } else {
            phoneField.classList.remove('border-red-500');
            hideFieldError(phoneField);
        }
    }

    return isValid;
}

// Legacy function for backward compatibility
function handleContactForm(form) {
    if (validateContactForm(form)) {
        showNotification('Thank you for your message! We\'ll get back to you soon.', 'success');
        form.reset();
    }
}

function showFieldError(field, message) {
    // Remove existing error message
    hideFieldError(field);
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error text-red-500 text-sm mt-1';
    errorDiv.textContent = message;
    
    field.parentNode.appendChild(errorDiv);
}

function hideFieldError(field) {
    const existingError = field.parentNode.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg transition-all duration-300 transform translate-x-full ${
        type === 'success' ? 'bg-green-500 text-white' : 
        type === 'error' ? 'bg-red-500 text-white' : 
        'bg-blue-500 text-white'
    }`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// Parallax effect for hero section (optional enhancement)
function initParallaxEffect() {
    const hero = document.querySelector('.hero-bg');
    if (hero) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            hero.style.backgroundPosition = `center ${rate}px`;
        });
    }
}

// Initialize additional effects on load
window.addEventListener('load', function() {
    // Add any additional initialization here
    initParallaxEffect();
});

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    // ESC key closes mobile menu
    if (e.key === 'Escape') {
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
            const mobileMenuBtn = document.getElementById('mobile-menu-btn');
            const icon = mobileMenuBtn.querySelector('svg path');
            icon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
        }
    }
});

// Resize handler
window.addEventListener('resize', function() {
    // Close mobile menu on resize to larger screen
    if (window.innerWidth >= 1024) {
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu) {
            mobileMenu.classList.add('hidden');
        }
    }
});