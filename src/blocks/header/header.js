import scrollLock from 'scroll-lock';

(() => {
	const $shell = $('.header__menu-blind');
	const $toggle = $('.header__menu-toggle');

	$toggle.on('click', function(e) {
		e.preventDefault();
		e.stopPropagation();
		$(this).toggleClass('opened');
		$shell.toggleClass('opened');
		
		if($shell.hasClass('opened')) {
			$shell.css({'max-width': parseInt($shell.css('max-width')) + scrollLock.getPageScrollBarWidth()});
			scrollLock.disablePageScroll();
			return;
		}

		$shell.removeAttr('style');
		scrollLock.clearQueueScrollLocks();
		scrollLock.enablePageScroll();
	});

	$('.menu__item_haschild > a').on('click', function(e) {
		let $here = $(this).parent().find('.menu__submenu');
		
		if ($shell.css('position') == 'fixed') {
			e.stopPropagation();
			e.preventDefault();

			$('.menu__submenu:visible').not($here).slideUp();
			$here.slideToggle();
		}
	});

	
	$(window).on('resize', function(e) {
		if($shell.not('.opened').length)
			$('.menu__submenu').removeAttr('style');
	});


	$(window).on('click', function(e) {
		if($shell.hasClass('opened') && !e.target.closest('.header__menu-blind')) {
			e.preventDefault();
			$toggle.toggleClass('opened');
			$shell.toggleClass('opened').removeAttr('style');
			scrollLock.clearQueueScrollLocks();
			scrollLock.enablePageScroll();
		}
	});

})();
