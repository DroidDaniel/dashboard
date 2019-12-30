$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 300) {
       $('#back2Top').fadeIn();
	    $(".navbar").css({"background":"#fff","transition":"0.5s"});
	/*	$(".container-fluid").removeClass("border-bottom");*/
	  }

	  else{
       $('#back2Top').fadeOut();
		  $(".navbar").css("background" , "#fff");  	
		/*  $(".container-fluid").addClass("border-bottom");*/
	  }
  });

/**mobile menu animation**/
  document.getElementById('menu-toggle').addEventListener(
  'click',
  function() {
    this.classList.toggle('menu-toggle-active');
  }
);

/**navbar scroll animation**/
  $('.navbar-toggler').click(function(){

    var hidden = $('.nav-in');
    if (hidden.hasClass('in')){
      hidden.removeClass('in');
    } else {
      hidden.addClass('in');
    }
    });

/**back to top animation**/
      $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});







 