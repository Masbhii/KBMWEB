// Navbar scroll indicator
document.addEventListener('DOMContentLoaded', () => {
    // Mobile navbar behavior
    const navbar = document.getElementById('navbar');
    const navContainer = navbar.querySelector('.nav-container');
    let lastScrollTop = 0;
    let scrollTimeout;

    // Handle scroll behavior
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        if (window.innerWidth <= 768) { // Only for mobile devices
            window.clearTimeout(scrollTimeout);

            // Remove menu-open class while scrolling
            navbar.classList.remove('menu-open');

            scrollTimeout = setTimeout(() => {
                if (currentScroll > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
                lastScrollTop = currentScroll;
            }, 100);
        }
    });

    // Handle click behavior
    navContainer.addEventListener('click', (e) => {
        if (window.innerWidth <= 768 && navbar.classList.contains('scrolled')) {
            navbar.classList.toggle('menu-open');
            e.stopPropagation(); // Prevent body click from immediately closing
        }
    });

    // Close menu when clicking outside
    document.body.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navbar.classList.remove('menu-open');
        }
    });

    const sections = document.querySelectorAll('section[id]');
    const navButtons = document.querySelectorAll('.nav-links button');

    // Intersection Observer for sections
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const activeSection = entry.target.id;
                updateActiveButton(activeSection);
            }
        });
    }, { threshold: 0.5 });

    sections.forEach(section => observer.observe(section));

    // Update active button in navbar
    function updateActiveButton(sectionId) {
        navButtons.forEach(button => {
            button.classList.remove('active');
            if (button.dataset.section === sectionId) {
                button.classList.add('active');
            }
        });
    }

    // Ensure gallery section is properly observed on mobile
    const gallerySection = document.getElementById('gallery');
    if (gallerySection) {
        const galleryObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateActiveButton('gallery');
                }
            });
        }, { threshold: 0.3 });
        galleryObserver.observe(gallerySection);
    }

    // Smooth scroll to section
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const sectionId = button.dataset.section;
            const section = document.getElementById(sectionId);
            section.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Scroll animations for sections
    const fadeElements = document.querySelectorAll('.about-content, .gallery-grid');
    const fadeObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    fadeElements.forEach(element => fadeObserver.observe(element));
});

// Review slider
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.review-slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentSlide = 0;
    let isAnimating = false;

    // Show initial slide
    showSlide(currentSlide);

    // Previous button click
    prevBtn.addEventListener('click', () => {
        if (isAnimating) return;
        currentSlide--;
        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }
        changeSlide('prev');
    });

    // Next button click
    nextBtn.addEventListener('click', () => {
        if (isAnimating) return;
        currentSlide++;
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        changeSlide('next');
    });

    function changeSlide(direction) {
        if (isAnimating) return;
        isAnimating = true;

        const currentActive = document.querySelector('.review-slide.active');
        const nextSlide = slides[currentSlide];

        // Set initial positions
        if (direction === 'next') {
            nextSlide.style.transform = 'translateX(100%)';
            currentActive.style.transform = 'translateX(0)';
        } else {
            nextSlide.style.transform = 'translateX(-100%)';
            currentActive.style.transform = 'translateX(0)';
        }

        // Make next slide visible
        nextSlide.style.display = 'block';
        nextSlide.style.opacity = '0';

        // Trigger animation
        requestAnimationFrame(() => {
            currentActive.style.opacity = '0';
            nextSlide.style.opacity = '1';
            
            if (direction === 'next') {
                currentActive.style.transform = 'translateX(-100%)';
                nextSlide.style.transform = 'translateX(0)';
            } else {
                currentActive.style.transform = 'translateX(100%)';
                nextSlide.style.transform = 'translateX(0)';
            }

            currentActive.classList.remove('active');
            nextSlide.classList.add('active');

            // Reset after animation
            setTimeout(() => {
                currentActive.style.display = 'none';
                currentActive.style.transform = '';
                nextSlide.style.transform = '';
                isAnimating = false;
            }, 800);
        });
    }

    function showSlide(index) {
        slides.forEach(slide => {
            slide.classList.remove('active');
            slide.style.display = 'none';
        });
        slides[index].classList.add('active');
        slides[index].style.display = 'block';
    }

    // Auto advance slides every 5 seconds
    let autoSlideInterval = setInterval(autoAdvance, 5000);

    function autoAdvance() {
        if (!isAnimating) {
            currentSlide++;
            if (currentSlide >= slides.length) {
                currentSlide = 0;
            }
            changeSlide('next');
        }
    }

    // Pause auto-advance on hover
    const reviewContainer = document.querySelector('.review-container');
    reviewContainer.addEventListener('mouseenter', () => {
        clearInterval(autoSlideInterval);
    });

    reviewContainer.addEventListener('mouseleave', () => {
        autoSlideInterval = setInterval(autoAdvance, 5000);
    });
});
