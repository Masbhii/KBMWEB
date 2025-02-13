// Navbar scroll indicator
document.addEventListener('DOMContentLoaded', () => {
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

    // Show initial slide
    showSlide(currentSlide);

    // Previous button click
    prevBtn.addEventListener('click', () => {
        currentSlide--;
        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }
        showSlide(currentSlide);
    });

    // Next button click
    nextBtn.addEventListener('click', () => {
        currentSlide++;
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        showSlide(currentSlide);
    });

    function showSlide(index) {
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        slides[index].classList.add('active');
    }

    // Auto advance slides every 5 seconds
    setInterval(() => {
        currentSlide++;
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        showSlide(currentSlide);
    }, 5000);
});
