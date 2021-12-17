$(() =>{
 /* header backgroud*/
var gradient = new Gradient();
gradient.initGradient("#canvas");

/*  nav buttom*/
$("#new-tweet-form").hide();
$("#writeTweeter").click(function(){
  $("#new-tweet-form").slideToggle("slow");
});


/*  back to top buttom */
var mybutton = document.getElementById("backtop");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

$('#backtop').click(function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
})

})