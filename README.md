# Frontend Mentor - Room homepage solution

This is a solution to the [Room homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/room-homepage-BtdBY_ENq). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Navigate the slider using either their mouse/trackpad or keyboard

### How to run the project

- Clone the repo
- Open the index.html file in your browser or use a live server extension in your code editor, that's it!

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Github repo](https://github.com/Robertron624/room-homepage-slider)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla Javascript

### What I learned

I learned a lot with this project, specially creating a slider with vanilla javascript. I had to do a lot of research and testing to get it to work.


The functions to move the slides
```js
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
```

### Continued development

At this point (July 17 of 2023) this is the last free medium project, so I'll be moving on to the advance ones. I'll be focusing on learning React (because I use it at my job) and Svelte (I think it's the best alternative to React), so I'll be doing the projects with those frameworks.

### Useful resources

- [Build an image carousel from scratch with vanilla JavaScript](https://blog.logrocket.com/build-image-carousel-from-scratch-vanilla-javascript/) - This LogRocket article helped me understand how to build a carousel with vanilla javascript. I'd recommend it to anyone still learning this concept since it's native and can be implemented in any browser and without any js framework and no longer work with only vanilla javascript.

## Author

- Personal Website - [Robert Ramirez](https://robert-ramirez.netlify.app)
- Frontend Mentor User- [@Robertron624](https://www.frontendmentor.io/profile/Robertron624)
- Twitter - [@robertdowny](https://www.twitter.com/robertdowny)