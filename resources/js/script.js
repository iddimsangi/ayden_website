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
    })
});