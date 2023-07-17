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