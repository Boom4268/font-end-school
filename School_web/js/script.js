
$(document).ready(function(){
  //lib
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin:20,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive:{
      0:{
          items:1,
          nav: false
        },
      500:{
            items:1,
            nav: true, 
            margin: 20
        },
      769:{
            items:3,
            nav: true
        }
    }
  });
  $(window).scroll(function(){
    if($(this).scrollTop()){
      $('.navbar').addClass('sticky');
      $('#backtop').removeClass('fade');
      
    }else{
      $('.navbar').removeClass('sticky');
      $('#backtop').addClass('fade');
    }
  });

  //back to top
  $("#backtop").click(function(){
    $('html, body').animate({
      scrollTop: 0}, 
      200);
  });
});