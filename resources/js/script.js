$(document).ready(function(){
//  $("h1").click(function(){
//    $(this).hide();
//  });
    $('.js--sec-about').waypoint(function(direction){
        if(direction == "down"){
            $('nav').addClass('sticky');
        }else{
            $('nav').removeClass('sticky');
        }
    },{
         offset: 60 
    });
});