// Mobile navigation menu

const mobileHamburger = document.querySelector('.mobile-hamburger');

const mobileNavClosed = document.querySelector('.mobile-nav-closed');

const mobileCloseIcon = document.querySelector('.mobile-close');

const mobileNavOpen = document.querySelector('.mobile-nav-open');

let isMobileNavOpen = false;


mobileHamburger.addEventListener('click', () => {
    if (!isMobileNavOpen) {
        mobileNavClosed.classList.add('hidden');
        mobileNavOpen.classList.remove('hidden');
        isMobileNavOpen = true;
    }
});

mobileCloseIcon.addEventListener('click', () => {
    if (isMobileNavOpen) {
        mobileNavClosed.classList.remove('hidden');
        mobileNavOpen.classList.add('hidden');
        isMobileNavOpen = false;
    }
});

// Slider controls
const slider = document.querySelector('.slider-wrapper');
const prevBtn = document.querySelector('.previous');
const nextBtn = document.querySelector('.next');

const slides = document.querySelectorAll('.slide');

let currentSlide = 0;
let maxSlide = slides.length - 1;

prevBtn.addEventListener('click', () => {
    if(currentSlide === 0) {
        currentSlide = maxSlide;
    } else {
        currentSlide--;
    }

    // Will go to last slide when it reaches the beginning
    slides.forEach((slide, index) => {
       slide.style.transform = `translateX(${(index - currentSlide) * 100}%)`;
    });
});

nextBtn.addEventListener('click', () => {
    if(currentSlide === maxSlide) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }

    // Will go to first slide when it reaches the end
    slides.forEach((slide, index) => {
       slide.style.transform = `translateX(${(index - currentSlide) * 100}%)`;
    });
});

slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${index * 100}%)`;
});

// Moving slider with arrow keys

document.addEventListener('keydown', (e) => {

    if(e.key === 'ArrowRight') {
        if(currentSlide === maxSlide) {
            currentSlide = 0;
        } else {
            currentSlide++;
        }

        // Will go to first slide when it reaches the end
        slides.forEach((slide, index) => {
            slide.style.transform = `translateX(${(index - currentSlide) * 100}%)`;
        });
    }

    if(e.key === 'ArrowLeft') {
        if(currentSlide === 0) {
            currentSlide = maxSlide;
        } else {
            currentSlide--;
        }

        // Will go to last slide when it reaches the beginning
        slides.forEach((slide, index) => {
            slide.style.transform = `translateX(${(index - currentSlide) * 100}%)`;
        });
    }
});