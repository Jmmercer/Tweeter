$(function() {

// Renders to the tweet container the tweets produced from create tweet function in order of newest to oldest.

 function renderTweets(tweets) {
  for(tweet of tweets){
    var newTweet = createTweetElement(tweet);
    $("#tweetContainer").prepend(newTweet);
  }
}
   aquireTweets()
  //appends data taken from forum submission to html as a tweet
   function createTweetElement(tweet){
     let $tweet = $("<article>").addClass("tweet");
     let $h3 = $("<h3 class='handle'>").text(tweet.user.handle);
     let $h2 = $("<h2>").text(tweet.user.name);
     let $img = $("<img class='avatars'>").attr("src", tweet.user.avatars.regular);
     let $header = $("<header>").append($img, $h3, $h2);
     $tweet.append($header);
     let $p = $("<p>").text(tweet.content.text);
     let $tweetBody = $("<section>").append($p);
     $tweet.append($tweetBody);
     let date = intelligibleDates((Date.now() - tweet.created_at));
     let $dateStamp = $('<span class="dateStamp">').text(date);
     let $icons = $('.icons');
     let $footer = $("<footer>").append($dateStamp)
     $tweet.append($footer)
      return $tweet;
   }

  // tweet submission event handler
  var $button = $('#tweetPost');
  $button.on('click', function (event) {
    event.preventDefault();
    if (text.value.length > 140){
      throw err
    }
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
