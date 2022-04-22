import Swiper, { Mousewheel } from 'swiper';

(() => {
	let swiper;
	const breakpoint = window.matchMedia('(max-width:960px)');

	const enableSwiper = () => {
		swiper = new Swiper(".home__slider", {
			modules: [Mousewheel],
			slidesPerView: 1,
			loop: true,
			speed: 800,
			direction: 'vertical',
			mousewheel: true
		});
	}

	const breakpointChecker = () => {
		if (breakpoint.matches === true) {
			if (swiper !== undefined ) swiper.destroy(true, false);
			return;
		} else if ( breakpoint.matches === false ) {
			return enableSwiper();
		}
	}

	breakpoint.addEventListener('change', breakpointChecker);
	breakpointChecker();

	$('.home__side[data-scrollable]').on('mousewheel', function(e) {
		e.stopPropagation();
	});

})();