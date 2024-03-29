// Scroll to first element
$('#bracket-down span').click(function() {
    var scrollDistance = $('#lead').next().offset().top - $('header').height() + 5;
    $('html, body').animate({
        scrollTop: scrollDistance + 'px'
    }, 500);
});

// Navbar hide logo on scroll
// 	Note: the transparency is through CSS from the class added
$(window).resize(function(){
  logo_visibility_toggler();
});

$(document).scroll(function() {
 logo_visibility_toggler();
})

function logo_visibility_toggler(){
  if (($(document).scrollTop() + 49 > $('#lead-content img').offset().top ) )
    $('.topnav').addClass('show-logo');
  else
    $('.topnav').removeClass('show-logo');
}

/****************************************************************
	Contents:
	  * Navbar
	  * Scroll Top (Footer)
****************************************************************/

/////////////// Navbar ///////////////////////////
$('#toggle-nav').click(function(){
    //var x = $("#myTopnav");
    // var a = x.getElementsByClassName("nav-links")[0];
    if (!$("#toggle-nav").hasClass("responsive")) {
      $(".nav-links").children().slideDown("fast",function(){
        $(this).css("display", "block");
      });
      $("#toggle-nav").addClass("responsive");
      //y.className += "hidden";
    } else {
      $(".nav-links").children().slideUp("fast");
      $(".dropdown-content").children().slideUp("fast");
      $("#myTopnav").removeClass("responsive");
    }
});
$('#myTopnav .dropdown').click(function(){
  var a = $(this);
  x = $(a).find(".dropdown-content");
  $(a).find(".dropdown-content").width($(a).width());
  $(".dropdown-content").toArray().forEach((value) => {
    if(value!=x.toArray()[0]){
      $(value).children().slideUp("fast");
    }
  }); 
  $(a).find(".dropdown-content").children().slideToggle("fast",function(){
    if ($(this).is(":visible"))
      $(this).css("display", "block");
  });
})

var curr= $('#toggle-nav').css('display');
$(window).resize(function(){
  var x = document.getElementById("myTopnav");
   /// alert($('#toggle-nav').css('display'));
  if ($('#toggle-nav').css('display')!=curr){
    curr = $('#toggle-nav').css('display');
    if ($('#toggle-nav').css('display')==='none'){
      $(".nav-links").children().slideDown("fast",function(){
        if ($(this).is(":visible"))
          $(this).css("display", "block");
      });
      $(".dropdown-content").children().slideUp("fast");
      //$(".dropdown-content").children().slideDown();
      x.className = "topnav";
    }
    else{
      $(".nav-links").children().slideUp("fast");
      $(".dropdown-content").children().slideUp("fast");
    }
  }
});

/////////////// scroll top ///////////////////////////
var stepTime = 20;
var docBody = document.body;
var focElem = document.documentElement;
var scrollAnimationStep = function (initPos, stepAmount) {
    var newPos = initPos - stepAmount > 0 ? initPos - stepAmount : 0;
    docBody.scrollTop = focElem.scrollTop = newPos;
    newPos && setTimeout(function () {
        scrollAnimationStep(newPos, stepAmount);
    }, stepTime);
}
var scrollTopAnimated = function (speed) {
    var topOffset = docBody.scrollTop || focElem.scrollTop;
    var stepAmount = topOffset;
    speed && (stepAmount = (topOffset * stepTime)/speed);
    scrollAnimationStep(topOffset, stepAmount);
};