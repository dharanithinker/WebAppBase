/**
 * AI Solutions Website JavaScript
 * Modern ES6+ implementation for website interactivity
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all functionality
    initializeNavigation();
    initializeHeaderScroll();
    initializeFormValidation();
    initializeScrollAnimations();
    initializeServiceCards();
    initializeLoadingEffects();
});

/**
 * Navigation functionality (mobile hamburger and smooth scrolling)
 */
const initializeNavigation = () => {
    // DOM Elements
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;
    let mobileNav = document.querySelector('.mobile-nav');
    
    // Create mobile nav if it doesn't exist
    if (!mobileNav) {
        mobileNav = document.createElement('div');
        mobileNav.className = 'mobile-nav';
        mobileNav.innerHTML = navLinks.outerHTML;
        body.appendChild(mobileNav);
    }
    
    // Toggle mobile navigation
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileNav.classList.toggle('active');
        body.classList.toggle('no-scroll');
    });
    
    // Close mobile nav when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !mobileNav.contains(e.target) && mobileNav.classList.contains('active')) {
            hamburger.classList.remove('active');
            mobileNav.classList.remove('active');
            body.classList.remove('no-scroll');
        }
    });
    
    // Smooth scrolling for all navigation links
    const allNavLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');
    
    allNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Close mobile nav if open
            if (mobileNav.classList.contains('active')) {
                hamburger.classList.remove('active');
                mobileNav.classList.remove('active');
                body.classList.remove('no-scroll');
            }
            
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Get header height for offset
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                // Smooth scroll to target
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
};

/**
 * Header scroll effects
 */
const initializeHeaderScroll = () => {
    const header = document.querySelector('header');
    const scrollThreshold = 50;
    
    // Initial check in case page is loaded scrolled down
    if (window.scrollY > scrollThreshold) {
        header.classList.add('scrolled');
    }
    
    // Add scroll event listener
    window.addEventListener('scroll', () => {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
};

/**
 * Form validation and submission
 */
const initializeFormValidation = () => {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form fields
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const subject = document.getElementById('subject');
            const message = document.getElementById('message');
            
            // Validate fields
            let isValid = true;
            
            if (!validateField(name, /^[a-zA-Z\s]{2,}$/)) {
                showError(name, 'Please enter a valid name (at least 2 characters, letters only)');
                isValid = false;
            } else {
                removeError(name);
            }
            
            if (!validateField(email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
                showError(email, 'Please enter a valid email address');
                isValid = false;
            } else {
                removeError(email);
            }
            
            if (!validateField(subject, /.{3,}/)) {
                showError(subject, 'Subject must be at least 3 characters');
                isValid = false;
            } else {
                removeError(subject);
            }
            
            if (!validateField(message, /.{10,}/)) {
                showError(message, 'Message must be at least 10 characters');
                isValid = false;
            } else {
                removeError(message);
            }
            
            // If valid, submit form (simulate submission)
            if (isValid) {
                // Show loading state
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
                
                // Simulate API call
                setTimeout(() => {
                    // Reset form
                    contactForm.reset();
                    
                    // Show success message
                    const successMessage = document.createElement('div');
                    successMessage.className = 'success-message';
                    successMessage.textContent = 'Your message has been sent successfully!';
                    contactForm.appendChild(successMessage);
                    
                    // Reset button
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalText;
                    
                    // Remove success message after 5 seconds
                    setTimeout(() => {
                        successMessage.remove();
                    }, 5000);
                }, 1500);
            }
        });
        
        // Helper functions for form validation
        function validateField(field, regex) {
            return regex.test(field.value.trim());
        }
        
        function showError(field, message) {
            // Remove existing error if any
            removeError(field);
            
            // Create and add error message
            const errorMessage = document.createElement('div');
            errorMessage.className = 'error-message';
            errorMessage.textContent = message;
            errorMessage.style.color = '#e74c3c';
            errorMessage.style.fontSize = '1.2rem';
            errorMessage.style.marginTop = '0.5rem';
            field.parentNode.appendChild(errorMessage);
            
            // Add error class to field
            field.style.borderColor = '#e74c3c';
        }
        
        function removeError(field) {
            // Remove error message if exists
            const error = field.parentNode.querySelector('.error-message');
            if (error) {
                error.remove();
            }
            
            // Reset field style
            field.style.borderColor = '';
        }
    }
};

/**
 * Scroll animations for elements
 */
const initializeScrollAnimations = () => {
    // Elements to animate
    const animateElements = document.querySelectorAll('.section-header, .about-content, .service-card, .contact-item');
    
    // Create IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observe each element
    animateElements.forEach(element => {
        // Add base animation class
        element.classList.add('animate-on-scroll');
        // Start observing
        observer.observe(element);
    });
    
    // Add CSS for animations if not already in styles.css
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
        .animate-on-scroll {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .animated {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(styleSheet);
};

/**
 * Service card hover effects
 */
const initializeServiceCards = () => {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        // Add hover effect for icons
        const icon = card.querySelector('.service-icon i');
        
        card.addEventListener('mouseenter', () => {
            icon.style.transform = 'scale(1.2) rotate(10deg)';
            icon.style.transition = 'transform 0.3s ease';
        });
        
        card.addEventListener('mouseleave', () => {
            icon.style.transform = 'scale(1) rotate(0deg)';
        });
        
        // Add click effect for mobile
        card.addEventListener('click', () => {
            // Only add effect if not already clicked
            if (!card.classList.contains('clicked')) {
                card.classList.add('clicked');
                
                // Remove clicked class after animation
                setTimeout(() => {
                    card.classList.remove('clicked');
                }, 500);
            }
        });
    });
    
    // Add CSS for card click effect
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
        .service-card.clicked {
            animation: cardPulse 0.5s ease;
        }
        
        @keyframes cardPulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.03); }
            100% { transform: scale(1); }
        }
    `;
    document.head.appendChild(styleSheet);
};

/**
 * Loading animations when page loads
 */
const initializeLoadingEffects = () => {
    // Show loading overlay
    const overlay = document.createElement('div');
    overlay.className = 'page-loader';
    overlay.innerHTML = `
        <div class="loader-content">
            <div class="spinner"></div>
            <p>Loading AI Solutions...</p>
        </div>
    `;
    document.body.appendChild(overlay);
    
    // Add CSS for loading overlay
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
        .page-loader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: var(--white);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            transition: opacity 0.5s ease, visibility 0.5s ease;
        }
        
        .loader-content {
            text-align: center;
        }
        
        .spinner {
            width: 50px;
            height: 50px;
            border: 3px solid rgba(67, 97, 238, 0.3);
            border-radius: 50%;
            border-top-color: var(--primary-color);
            animation: spin 1s ease-in-out infinite;
            margin: 0 auto 15px;
        }
        
        @keyframes spin {
            to { transform: rotate(360deg); }
        }
        
        .page-loader.fade-out {
            opacity: 0;
            visibility: hidden;
        }
    `;
    document.head.appendChild(styleSheet);
    
    // Hide loading overlay when page is loaded
    window.addEventListener('load', () => {
        // Add small delay for better UX
        setTimeout(() => {
            overlay.classList.add('fade-out');
            
            // Remove overlay after animation
            setTimeout(() => {
                overlay.remove();
            }, 500);
            
            // Animate hero section elements
            animateHeroElements();
        }, 500);
    });
    
    // Animate hero section elements
    const animateHeroElements = () => {
        const heroContent = document.querySelector('.hero-content');
        const heroImage = document.querySelector('.hero-image');
        
        if (heroContent) {
            heroContent.style.animation = 'fadeInLeft 1s ease forwards';
        }
        
        if (heroImage) {
            heroImage.style.animation = 'fadeInRight 1s ease forwards 0.3s';
        }
        
        // Add CSS for hero animations
        const heroStyles = document.createElement('style');
        heroStyles.textContent = `
            @keyframes fadeInLeft {
                from {
                    opacity: 0;
                    transform: translateX(-50px);
                }
                to {
                    opacity: 1;
                    transform: translateX(0);
                }
            }
            
            @keyframes fadeInRight {
                from {
                    opacity: 0;
                    transform: translateX(50px);
                }
                to {
                    opacity: 1;
                    transform: translateX(0);
                }
            }
        `;
        document.head.appendChild(heroStyles);
    };
};
