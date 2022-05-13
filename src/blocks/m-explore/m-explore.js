(() => {

	$('.m-explore__accordeon').on('click', '.m-explore__head', function(e) {
		e.preventDefault();
		const $self = $(this);
		const $block = $self.next('.m-explore__block');
		
		$('.m-explore__accordeon .m-explore__block:visible').not($block).slideUp(400, function() {
			$(this).prev('.m-explore__head').removeClass('opened');
		});
		
		if ($self.hasClass('opened')) {
			$block.slideToggle(400, function() {
				$self.removeClass('opened');
			});
		} else {
			$block.slideToggle(400);
			$self.addClass('opened');
		}
	});

})();
