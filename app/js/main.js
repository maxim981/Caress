const heroSwiper = new Swiper('.hero__slider', {
	loop: true,
	slidesPerView: 1,
	speed: 600,
	grabCursor: true,
  	initialSlide: 0,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	// autoplay: {
	// 	delay: 4000,
	// }
	pagination: {
    	el: '.swiper-pagination',
    	clickable: true,
    	type: 'bullets',
  	},

});

const caressshopSwiper = new Swiper('.caressshop__slider', {
	loop: true,
	slidesPerView: 4,
	speed: 600,
	grabCursor: true,
  	initialSlide: 0,
  	spaceBetween: 20,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	// autoplay: {
	// 	delay: 4000,
	// }
	pagination: {
    	el: '.swiper-pagination',
    	clickable: true,
    	type: 'bullets',
  	},

});