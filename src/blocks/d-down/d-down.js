(() => {
	const $ddown = $('.d-down');

	$ddown.on('click', function(e) {
		if (!e.target.closest('.d-down__items'))
			$(this).toggleClass('d-down_opened');
	})

	$(window).on('click', function(e) {
		if($ddown.hasClass('d-down_opened') && !e.target.closest('.d-down'))
			$ddown.removeClass('d-down_opened');
	});

})();
