// Main Application Module
import { CounterAnimation } from './counter.js';
import { Timeline } from './timeline.js';
import { Gallery } from './gallery.js';
import { StatsVisualizer } from './stats.js';
import { ThemeToggle } from './theme.js';

class App {
    constructor() {
        this.init();
    }

    init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.initializeModules());
        } else {
            this.initializeModules();
        }
    }

    initializeModules() {
        // Initialize all modules
        new ThemeToggle();
        new CounterAnimation();
        new Timeline();
        new Gallery();
        new StatsVisualizer();

        // Initialize navigation
        this.initNavigation();

        // Initialize form
        this.initForm();

        // Initialize scroll effects
        this.initScrollEffects();
    }

    initNavigation() {
        const navLinks = document.querySelectorAll('.nav-link');
        const navbar = document.querySelector('.navbar');

        // Smooth scroll to sections
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Active section highlighting
        const sections = document.querySelectorAll('.section, .hero');

        const observerOptions = {
            threshold: 0.3,
            rootMargin: '-80px 0px -80px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${id}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, observerOptions);

        sections.forEach(section => observer.observe(section));

        // Navbar scroll effect
        let lastScroll = 0;
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;

            if (currentScroll > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }

            lastScroll = currentScroll;
        });
    }

    initForm() {
        const form = document.querySelector('.fan-form');
        const messageDiv = document.querySelector('.form-message');

        form?.addEventListener('submit', (e) => {
            e.preventDefault();

            const formData = new FormData(form);
            const data = Object.fromEntries(formData);

            // Validate
            if (!data.name || !data.email || !data.message) {
                this.showMessage('Please fill in all fields', 'error');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                this.showMessage('Please enter a valid email address', 'error');
                return;
            }

            // Simulate form submission
            console.log('Form submitted:', data);
            this.showMessage('Thank you for your message! We\'ll get back to you soon.', 'success');
            form.reset();
        });
    }

    showMessage(text, type) {
        const messageDiv = document.querySelector('.form-message');
        if (!messageDiv) return;

        messageDiv.textContent = text;
        messageDiv.className = `form-message ${type}`;
        messageDiv.style.display = 'block';

        setTimeout(() => {
            messageDiv.style.display = 'none';
        }, 5000);
    }

    initScrollEffects() {
        // Parallax effect for hero
        const hero = document.querySelector('.hero');
        const heroBackground = document.querySelector('.hero-background');

        if (hero && heroBackground) {
            window.addEventListener('scroll', () => {
                const scrolled = window.pageYOffset;
                const parallaxSpeed = 0.5;
                heroBackground.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
            });
        }

        // Lazy loading for all images
        const lazyImages = document.querySelectorAll('img[loading="lazy"]');

        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.classList.add('loaded');
                        imageObserver.unobserve(img);
                    }
                });
            });

            lazyImages.forEach(img => imageObserver.observe(img));
        }
    }
}

// Initialize the app
new App();
