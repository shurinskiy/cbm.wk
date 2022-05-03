(() => {

	$('.p-video').on('click', '.p-video__play', function(e) {
		let $self = $(this);

		$self
			.prev('.p-video__frame')
			.attr('src', $self.data('youtubeSrc'))
			.end()
			.fadeOut();
	});

})();
