import Swiper from 'swiper';

(() => {

	new Swiper(".p-slider__items", {
		spaceBetween: 20,
		slidesPerView: 5,
		loop: true,
		breakpoints: {
			1440: { 
				slidesPerView: 4.5,
			},
			1100: { 
				slidesPerView: 3.5,
			},
			960: { 
				slidesPerView: 2.5,
			},
			780: { 
				slidesPerView: 2.3,
			},
			640: { 
				slidesPerView: 2.0,
			},
			480: { 
				slidesPerView: 1.5,
			},
			0: { 
				slidesPerView: 1,
			}
		}
	});

})();
