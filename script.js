/* ========================================
   MOBILE NAVIGATION
======================================== */
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const navLinks = document.querySelectorAll('.nav-link');

// Show menu
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

// Hide menu
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

// Hide menu when clicking nav links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
});

/* ========================================
   HEADER SCROLL EFFECT
======================================== */
const header = document.getElementById('header');

function scrollHeader() {
    if (window.scrollY >= 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', scrollHeader);

/* ========================================
   ACTIVE LINK ON SCROLL
======================================== */
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            if (navLink) navLink.classList.add('active');
        } else {
            if (navLink) navLink.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', scrollActive);

/* ========================================
   TYPED TEXT ANIMATION
======================================== */
const typedTextElement = document.querySelector('.typed-text');
const texts = [
    'Web Tasarım Uzmanı',
    'E-Ticaret Danışmanı',
    'Dijital Pazarlama Stratejisti',
    'WordPress Geliştirici',
    'SEO Uzmanı'
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeText() {
    const currentText = texts[textIndex];

    if (isDeleting) {
        typedTextElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typedTextElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentText.length) {
        // Pause at end of word
        isDeleting = true;
        typingSpeed = 2000;
    } else if (isDeleting && charIndex === 0) {
        // Move to next word
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typingSpeed = 500;
    }

    setTimeout(typeText, typingSpeed);
}

// Start typing animation
if (typedTextElement) {
    setTimeout(typeText, 1000);
}

/* ========================================
   SCROLL REVEAL ANIMATION
======================================== */
function reveal() {
    const reveals = document.querySelectorAll('.reveal');

    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

// Add reveal class to elements
function addRevealClass() {
    const elementsToReveal = document.querySelectorAll(
        '.service-card, .portfolio-card, .skill-item, .contact-item, .about-text'
    );

    elementsToReveal.forEach((element, index) => {
        element.classList.add('reveal');
        element.style.transitionDelay = `${index * 0.1}s`;
    });
}

// Initialize reveal
document.addEventListener('DOMContentLoaded', () => {
    addRevealClass();
    reveal();
});

window.addEventListener('scroll', reveal);

/* ========================================
   SMOOTH SCROLL FOR ANCHOR LINKS
======================================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerHeight = document.getElementById('header').offsetHeight;
            const targetPosition = targetElement.offsetTop - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

/* ========================================
   WHATSAPP NUMBER CONFIGURATION
======================================== */
// WhatsApp numaranızı buraya girin (905XXXXXXXXX formatında)
const WHATSAPP_NUMBER = '905XXXXXXXXX';

// Update all WhatsApp links
function updateWhatsAppLinks() {
    const whatsappElements = [
        document.getElementById('whatsapp-link'),
        document.getElementById('whatsapp-btn'),
        document.getElementById('footer-whatsapp')
    ];

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}`;

    whatsappElements.forEach(element => {
        if (element) {
            element.href = whatsappUrl;
        }
    });
}

// Initialize WhatsApp links
document.addEventListener('DOMContentLoaded', updateWhatsAppLinks);

/* ========================================
   INTERSECTION OBSERVER FOR ANIMATIONS
======================================== */
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

// Observe section titles
document.querySelectorAll('.section-title, .section-subtitle').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
});

/* ========================================
   PREVENT FORM SUBMISSION (if form exists)
======================================== */
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Form handling logic here
        alert('Mesajınız alındı! En kısa sürede dönüş yapacağım.');
    });
}

/* ========================================
   LAZY LOADING FOR IMAGES (future use)
======================================== */
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lozad.js/1.16.0/lozad.min.js';
    document.body.appendChild(script);
}

/* ========================================
   CONSOLE MESSAGE
======================================== */
console.log('%cTolgahan İkinci Portfolio', 'color: #1a56db; font-size: 24px; font-weight: bold;');
console.log('%cWeb Tasarım | E-Ticaret | Dijital Pazarlama', 'color: #4b5563; font-size: 14px;');
