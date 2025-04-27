// Add this to your existing script.js
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');
    const overlay = document.querySelector('.overlay');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navbar.classList.toggle('active');
            overlay.classList.toggle('active');
        });
    }
    
    // Close menu when clicking on overlay
    if (overlay) {
        overlay.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            navbar.classList.remove('active');
            this.classList.remove('active');
        });
    }
    
    // Close menu when clicking on a nav link (for mobile)
    const navLinks = document.querySelectorAll('.navbar ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                menuToggle.classList.remove('active');
                navbar.classList.remove('active');
                overlay.classList.remove('active');
            }
        });
    });
});

 // Add this to your script.js
 document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');
    
    menuToggle.addEventListener('click', () => {
        navbar.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
    
    // Animate project cards on scroll
    const animateOnScroll = () => {
        const projectCards = document.querySelectorAll('.project-card');
        const windowHeight = window.innerHeight;
        
        projectCards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;
            const animationPoint = windowHeight - 100;
            
            if(cardPosition < animationPoint) {
                card.style.animationPlayState = 'running';
            }
        });
    };
    
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
});
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');
    
    menuToggle.addEventListener('click', () => {
        navbar.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
    
    // No need for scroll animations since we want elements to stay visible
});
// Navigation active state
document.addEventListener('DOMContentLoaded', function() {
    // Get current page URL
    const currentPage = window.location.pathname.split('/').pop();
    
    // Find all nav links
    const navLinks = document.querySelectorAll('.navbar ul li a');
    
    // Set active class based on current page
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (linkPage === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // Filter functionality for gallery
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                button.classList.add('active');
                
                const filterValue = button.getAttribute('data-filter');
                
                // Filter gallery items
                galleryItems.forEach(item => {
                    if (filterValue === 'all' || item.classList.contains(filterValue)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }
    
    // Form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the form data to a server
            console.log('Form submitted:', { name, email, subject, message });
            
            // Show success message
            alert('Thank you for your message! I will get back to you soon.');
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // Scroll animations
    const animateElements = document.querySelectorAll('[data-animate]');
    
    const animateOnScroll = () => {
        animateElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animate');
            }
        });
    };
    
    // Initial check
    animateOnScroll();
    
    // Check on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add hover effects to all buttons
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-link');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.classList.add('hover-grow');
        });
        
        button.addEventListener('mouseleave', () => {
            button.classList.remove('hover-grow');
        });
    });
    
    // Add animation to cards
    const cards = document.querySelectorAll('.link-card, .info-card, .project-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.classList.add('hover-shadow');
        });
        
        card.addEventListener('mouseleave', () => {
            card.classList.remove('hover-shadow');
        });
    });
});