$(document).ready(function() {
	$('#tweet-text').on('input', function() {
		let countText = $(this).val().length;
		const max = 140;
		$(this).siblings('.button-count').children('.counter').text(max - countText);

		if (countText > 140) {
			$('.counter').css('color', 'red');
		} else {
			$('.counter').css('color', '');
		}
	});
});
