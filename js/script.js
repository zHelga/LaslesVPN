"use strict"
// Burger-----------------------------------------------------------
let headerBurger = document.querySelector('.header__burger');
let headerMenu = document.querySelector('.menu-header__list');

headerBurger.addEventListener('click', (e) => {
  headerBurger.classList.toggle('header__burger_active');
  headerMenu.classList.toggle('menu-header__list_active')
})

// Slider--------------------------------------------------------------
const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    798: {
      slidesPerView: 2,
    },
    997: {
      slidesPerView: 2.5,
    },
  },
});

// -----------------------------------------------------------
let footerItems = document.querySelectorAll('.footer-item-move');

for ( let i = 0; i < footerItems.length; i++) {
  footerItems[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.querySelector('.footer__list');
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}