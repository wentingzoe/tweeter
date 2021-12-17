$(() =>{

  // Event handler for form submission
	const $tweetform = $('#new-tweet-form');

	$tweetform.on('submit', function(event) {
		event.preventDefault();

		console.log('The tweets was submitted!');
		
    const tweetContent = $(this).serialize();
    const tweetText = event.target.text.value;
    const maxLength = 140;

    // remove errors
    $('.validation-error').text('').slideUp();
		
    if (tweetText.length >maxLength) {
      $('.validation-error').text(`Please limit your tweet to ${maxLength} characters!`).removeClass('hidden').slideDown();
      return;
    } else if (tweetText.length === 0){
      $('.validation-error').text('Please make sure to write something!').removeClass('hidden').slideDown();
      return;
    } else {
      //jquery POST
      $.post('/tweets', tweetContent, () => {
       $.getScript('/scripts/client.js');
        $('#new-tweet-form').trigger('reset');
        $('.counter').text(`${maxLength}`);
       
      });
    }
	});
})

