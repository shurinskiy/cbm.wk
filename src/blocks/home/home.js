import Swiper, { Mousewheel, Pagination } from 'swiper';

(() => {
	
	if (document.querySelectorAll(".home__slider").length) {
		let swiper;
		const breakpoint = window.matchMedia('(max-width:960px)');
	
		const enableSwiper = () => {
			swiper = new Swiper(".home__slider", {
				modules: [Mousewheel, Pagination],
				slidesPerView: 1,
				loop: true,
				speed: 800,
				direction: 'vertical',
				mousewheel: true,
				pagination: {
					el: '.home__dots',
					clickable: true,
					bulletClass: 'home__dot',
					bulletActiveClass: 'active'
				}
			});
		}
	
		const breakpointChecker = () => {
			if (breakpoint.matches === true) {
				if (swiper !== undefined ) swiper.destroy(true, false);
				// console.log(swiper);
				return;
			} else if ( breakpoint.matches === false ) {
				return enableSwiper();
			}
		}
	
		breakpoint.addEventListener('change', breakpointChecker);
		breakpointChecker();
	
		$('.home__middle[data-scrollable]').on('mousewheel', function(e) {
			e.stopPropagation();
		});
	}

})();