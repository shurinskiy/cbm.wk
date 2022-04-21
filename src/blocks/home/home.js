import Swiper, { Mousewheel } from 'swiper';

(() => {

	new Swiper(".home__slider", {
		modules: [Mousewheel],
		slidesPerView: 1,
		loop: true,
		speed: 800,
		direction: 'vertical',
		mousewheel: true
	});

})();
