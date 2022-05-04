import Swiper from 'swiper';

(() => {
	new Swiper(".i-hard__items", {
		spaceBetween: 30,
		loop: true,
		breakpoints: {
			1430: { 
				slidesPerView: 2.7,
			},
			1280: { 
				slidesPerView: 2.5,
			},
			1100: { 
				slidesPerView: 2.3,
			},
			1000: { 
				slidesPerView: 2.0,
			},
			870: { 
				slidesPerView: 1.8,
			},
			740: { 
				slidesPerView: 1.6,
			},
			540: { 
				slidesPerView: 1.3,
			},
			0: { 
				slidesPerView: 1,
			}
		}
	});
})();