"use strict"
// Burger-----------------------------------------------------------
let headerBurger = document.querySelector('.header__burger');
let headerMenu = document.querySelector('.menu-header__list');
let body = document.querySelector('body')
headerBurger.addEventListener('click', (e) => {
  headerBurger.classList.toggle('header__burger_active');
  headerMenu.classList.toggle('menu-header__list_active')
	body.classList.toggle('active');
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
    this.classList.toggle("footer-item-move_active");
    let panel = this.querySelector('.footer__list');
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

// ---------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
	const scrollItems = document.querySelectorAll('.scroll-item');

	const scrollAnimation = () => {
		let windowCenter = (window.innerHeight / 2) + window.scrollY;

		scrollItems.forEach(el => {
			let scrollOffset = el.offsetTop + (el.offsetHeight / 10);
			if(windowCenter >= scrollOffset) {
				el.classList.add('animation-class')
			} else {
				if(!el.classList.contains('_hide')) {
					el.classList.remove('animation-class')
				}
			}
		})
		
	}

	scrollAnimation();
	window.addEventListener('scroll', () => {
		scrollAnimation()
	})
})