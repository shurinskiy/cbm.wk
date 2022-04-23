import scrollLock from 'scroll-lock';

(() => {
	const breakpoint = window.matchMedia('(max-width:960px)');
	const $header = $('.header');
	const $shell = $header.find('.header__menu-blind');
	const $toggle = $header.find('.header__menu-toggle');

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
			$('.menu__submenu:visible').not($here).slideUp();
			
			if ($here.is(':hidden')) {
				e.preventDefault();
				$here.slideDown();
			}
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


	$(window).on('scroll', function() {
		$header[($(this).scrollTop() > 40 ? 'add': 'remove') + 'Class']('header_filled');
	});

})();
