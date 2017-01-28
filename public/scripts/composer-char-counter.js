// Counts down available characters remaining in tweet text field. Then colours red if limit is surpased.
$( document ).ready(function() {
  console.log('charcounterloaded')
$('#text').keydown(function() {
  console.log('hello world');
  var remai = document.getElementById("remaining");
  if(this.value.length > 140) {
    $("#remaining").css('color', 'red')
  }
    else
  {
    $("#remaining").css('color', '#244751');;
  }
  $("#remaining").html(140 - this.value.length);
});
});
