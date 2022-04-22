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

	$('.home__side[data-scrollable]').on('mousewheel', function(e) {
		e.stopPropagation();
	});

})();