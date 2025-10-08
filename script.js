/**
 * The Creative Dev - Main JavaScript
 * Handles mobile navigation and interactive features
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile Menu Functionality
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = mobileMenuBtn.querySelector('.menu-icon');
    
    // Toggle mobile menu
    function toggleMobileMenu() {
        const isHidden = mobileMenu.classList.contains('hidden');
        
        if (isHidden) {
            // Show menu
            mobileMenu.classList.remove('hidden');
            mobileMenuBtn.setAttribute('aria-expanded', 'true');
            
            // Change icon to X
            menuIcon.innerHTML = `
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            `;
        } else {
            // Hide menu
            mobileMenu.classList.add('hidden');
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
            
            // Change icon back to hamburger
            menuIcon.innerHTML = `
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            `;
        }
    }
    
    // Event listener for mobile menu button
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
        
        // Set initial aria-expanded state
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
    }
    
    // Close mobile menu when clicking on links
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (!mobileMenu.classList.contains('hidden')) {
                toggleMobileMenu();
            }
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = mobileMenu.contains(event.target);
        const isClickOnButton = mobileMenuBtn.contains(event.target);
        
        if (!isClickInsideMenu && !isClickOnButton && !mobileMenu.classList.contains('hidden')) {
            toggleMobileMenu();
        }
    });
    
    // Close mobile menu on window resize to desktop size
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 768 && !mobileMenu.classList.contains('hidden')) {
            toggleMobileMenu();
        }
    });
    
    // Smooth scrolling for anchor links (if any)
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                if (!mobileMenu.classList.contains('hidden')) {
                    toggleMobileMenu();
                }
            }
        });
    });
    
    // Add active state to current page navigation link
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('nav-link--active');
        }
    });
    
    // Form validation (for future contact forms)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            // Basic form validation can be added here
            const requiredFields = form.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');
                } else {
                    field.classList.remove('error');
                }
            });
            
            if (!isValid) {
                e.preventDefault();
                console.log('Form validation failed');
            }
        });
    });
    
    // Filter functionality (for courses and blog pages)
    const filterButtons = document.querySelectorAll('.filter-button, .blog-filter');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all filter buttons
            filterButtons.forEach(btn => btn.classList.remove('filter-button--active', 'blog-filter--active'));
            
            // Add active class to clicked button
            this.classList.add(this.classList.contains('filter-button') ? 'filter-button--active' : 'blog-filter--active');
            
            // Filter functionality would be implemented here based on data attributes
            const filterValue = this.getAttribute('data-filter');
            console.log('Filtering by:', filterValue);
        });
    });
    
    // Add scroll effect to navigation
    let lastScrollTop = 0;
    const nav = document.querySelector('.nav-container');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add shadow when scrolled
        if (scrollTop > 10) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Initialize any tooltips or interactive elements
    console.log('The Creative Dev - JavaScript initialized');
});

// Utility functions for future use
const utils = {
    // Debounce function for performance optimization
    debounce: function(func, wait, immediate) {
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
    },
    
    // Format date for blog posts
    formatDate: function(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    },
    
    // Create loading state for buttons
    setLoadingState: function(button, isLoading) {
        if (isLoading) {
            button.disabled = true;
            button.innerHTML = 'Loading...';
            button.classList.add('loading');
        } else {
            button.disabled = false;
            button.classList.remove('loading');
        }
    }
};

// Export utils for use in other scripts if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = utils;
}