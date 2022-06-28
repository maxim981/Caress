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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGhlcm9Td2lwZXIgPSBuZXcgU3dpcGVyKCcuaGVyb19fc2xpZGVyJywge1xyXG5cdGxvb3A6IHRydWUsXHJcblx0c2xpZGVzUGVyVmlldzogMSxcclxuXHRzcGVlZDogNjAwLFxyXG5cdGdyYWJDdXJzb3I6IHRydWUsXHJcbiAgXHRpbml0aWFsU2xpZGU6IDAsXHJcblx0bmF2aWdhdGlvbjoge1xyXG5cdFx0bmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXHJcblx0XHRwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuXHR9LFxyXG5cdC8vIGF1dG9wbGF5OiB7XHJcblx0Ly8gXHRkZWxheTogNDAwMCxcclxuXHQvLyB9XHJcblx0cGFnaW5hdGlvbjoge1xyXG4gICAgXHRlbDogJy5zd2lwZXItcGFnaW5hdGlvbicsXHJcbiAgICBcdGNsaWNrYWJsZTogdHJ1ZSxcclxuICAgIFx0dHlwZTogJ2J1bGxldHMnLFxyXG4gIFx0fSxcclxuXHJcbn0pO1xyXG5cclxuY29uc3QgY2FyZXNzc2hvcFN3aXBlciA9IG5ldyBTd2lwZXIoJy5jYXJlc3NzaG9wX19zbGlkZXInLCB7XHJcblx0bG9vcDogdHJ1ZSxcclxuXHRzbGlkZXNQZXJWaWV3OiA0LFxyXG5cdHNwZWVkOiA2MDAsXHJcblx0Z3JhYkN1cnNvcjogdHJ1ZSxcclxuICBcdGluaXRpYWxTbGlkZTogMCxcclxuICBcdHNwYWNlQmV0d2VlbjogMjAsXHJcblx0bmF2aWdhdGlvbjoge1xyXG5cdFx0bmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXHJcblx0XHRwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuXHR9LFxyXG5cdC8vIGF1dG9wbGF5OiB7XHJcblx0Ly8gXHRkZWxheTogNDAwMCxcclxuXHQvLyB9XHJcblx0cGFnaW5hdGlvbjoge1xyXG4gICAgXHRlbDogJy5zd2lwZXItcGFnaW5hdGlvbicsXHJcbiAgICBcdGNsaWNrYWJsZTogdHJ1ZSxcclxuICAgIFx0dHlwZTogJ2J1bGxldHMnLFxyXG4gIFx0fSxcclxuXHJcbn0pOyJdLCJmaWxlIjoibWFpbi5qcyJ9