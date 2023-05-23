const header = document.querySelector('.header');
const nav = document.querySelector('.nav')
const navTrigger = document.querySelector('.header__nav-trigger')
const navLink = document.querySelectorAll('.nav__link')
navTrigger.addEventListener('click', () => {
  nav.classList.toggle('open')
})

navLink.forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open')
  })
})

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
})

let swiper = new Swiper('.slider', {
  slidesPerView: 2,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 50,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
  }
})

const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2200,
  delay: 400,
  reset: false,
})

sr.reveal('.hero__title, .features__container, .companies__text, .testimonials__text, .newsletter__container, .footer__logo, .footer__right');
sr.reveal('.hero__btn, .slider, .hero__subtitle, .footer__subtitle', { delay: 600 });
sr.reveal('.hero__img, .footer__bottom', {delay: 600, origin: 'bottom'});
sr.reveal('.feature, .socials__link', { interval: '100' });
sr.reveal('.features__cta-text', { delay: 600, origin: 'top'});
sr.reveal('.section-1__img, .section-2__text, .section-3__img', { origin: 'left' });
sr.reveal('.section-1__text, .section-2__img, .section-3__text', { origin: 'right' });
sr.reveal('.brands__img', { interval: '50' });
sr.reveal('.footer__info', { interval: '100' })


