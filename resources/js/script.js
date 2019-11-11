$(document).ready(function(){
//  $("h1").click(function(){
//    $(this).hide();
//  });
    /*-----------------STICKY NAVIGATIONS-------------------------*/
    $('.js--sec-about').waypoint(function(direction){
        if(direction == "down"){
            $('nav').addClass('sticky');
        }else{
            $('nav').removeClass('sticky');
        }
    },{
         offset: 60 
    });
    /*----------------SCROLL NAVIGATIONS---------------------------*/
    $('.js-scroll-to-section-form').click(function(){
        $('html, body').animate({scrollTop:$('.js--section-form').offset().top},1000);
    });
    $('.js-scroll-to-section-services').click(function(){
        $('html, body').animate({scrollTop:$('.js--sec-services').offset().top},1000);
    }); 
    $('.js-scroll-to-main-sec').click(function(){
        $('html, body').animate({scrollTop:$('.js--main-sec').offset().top},1000);
    });
    
      /* Navigation scroll */
 
    $("a[href^='#']").click(function(e) {
	e.preventDefault();
	
	var position = $($(this).attr("href")).offset().top;

	$("body, html").animate({
		scrollTop: position
	} /* speed */ );
});
});