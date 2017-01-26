$( document ).ready(function() {
console.log('charcounterloaded')
$('#text').keydown(function(){
  console.log('hello world');
  var remai = document.getElementById("remaining");
  if(this.value.length > 140){
    return false;
  }
  $("#remaining").html(140 - this.value.length);
});
});
