/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(() => {
	const createTweetElement = (tweetObj) => {
		const $tweet = $(`
    <article class="tweet">
    <header class="tweet-header">
      <div class="img-name">
        <img class="avatar" src="${tweetObj.user.avatars}">
        <span class="username"> ${tweetObj.user.name} </span>
      </div>
      <span class="handle"> ${tweetObj.user.handle} </span>
    </header>
    <p class="tweet-content">${tweetObj.content.text} </p>
    <footer class="tweet-footer">
      <span class"timestamp"> ${timeago.format(tweetObj.created_at)}</span>
      <div class="icons">
        <i class="fa fa-flag" aria-hidden="true"></i>
        <i class="fa fa-retweet" aria-hidden="true"></i>
        <i class="fa fa-heart" aria-hidden="true"></i>
      </div>
    </footer>
    </article>`);

		return $tweet;

	};

	const renderTweets = function(tweets) {
		$('#allTweets').html('');
		for (let key of tweets) {
			$newTweet = createTweetElement(key);
			$('#allTweets').prepend($newTweet);
		}
	};

  const loadtweets = () => {
    $.get('/tweets').then((data) => {
      renderTweets(data);
    });
  };
  loadtweets();
});
