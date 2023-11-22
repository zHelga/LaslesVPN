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
/* const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let i = 0; i < animItems.length; i++) {
			const animItem = animItems[i];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
				console.log(animItem)
			} else {
				
				if(!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_active')
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.scrollX || document.documentElement.scrollLeft,
			scrollTop = window.scrollY || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
	}
	animOnScroll();
} */

document.addEventListener('DOMContentLoaded', () => {
	const scrollItems = document.querySelectorAll('.scroll-item');

	const scrollAnimation = () => {
		let windowCenter = (window.innerHeight / 2) + window.scrollY;

		scrollItems.forEach(el => {
			let scrollOffset = el.offsetTop + (el.offsetHeight / 10);
			console.log(scrollOffset)
			if(windowCenter >= scrollOffset) {
				el.classList.add('animation-class')
			} else {
				if(!el.classList.contains('_hide')) {
					el.classList.remove('animation-class')
				}
			}
		})
		
	}

	// scrollAnimation();
	window.addEventListener('scroll', () => {
		scrollAnimation()
	})
})