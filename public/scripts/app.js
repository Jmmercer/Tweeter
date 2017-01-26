/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(function() {

 function renderTweets(tweets) {
  for(tweet of tweets){
    var newTweet = createTweetElement(tweet);
    $("#tweetContainer").append(newTweet);
  }
}
   aquireTweets()

   function createTweetElement(tweet){
     console.log(tweet)
     console.log(tweet.user)
     let $tweet = $("<article>").addClass("tweet");
     let $h3 = $("<h3 class='handle'>").text(tweet.user.handle);
     let $h2 = $("<h2>").text(tweet.user.name);
     let $img = $("<img class='avatars'>").attr("src", tweet.user.avatars.regular);
     let $header = $("<header>").append($img, $h3, $h2);
     $tweet.append($header);
     let $p = $("<p>").text(tweet.content.text);
     let $tweetBody = $("<section>").append($p);
     $tweet.append($tweetBody);
     let $dateStamp = $('<span class="dateStamp">').text(tweet.created_at);
     let $icons = $('.icons');
     let $footer = $("<footer>").append($dateStamp)
     $tweet.append($footer)
      return $tweet;
   }


  var $button = $('#tweetPost');
  $button.on('click', function (event) {
    event.preventDefault();
    console.log('Button clicked, performing ajax call...');
    $.ajax({
      url: '/tweets/',
      method: 'POST',
      data: $(this).serialize(),
      success: function (result) {
        console.log('Success: ', result);
        aquireTweets()
      }
    });
  });
function aquireTweets(){
  $.ajax({
    url: '/tweets/',
    method: 'GET',
    success: function (aquisition) {
      renderTweets(aquisition)
    }
  })
}

});
