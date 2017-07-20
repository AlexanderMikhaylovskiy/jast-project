$(document).ready(function(){
   $(".owl-carousel").owlCarousel({
   	margin: 10,
      nav: false,
      items:1,
      responsiveClass:true,
   });
   $(".owl-carousel1").owlCarousel({
    responsiveClass:true,
    responsive:{
        480:{
            items:2,
        },
        640:{
            items:3,
        },
        768:{
            items:4,
        }
    },
    margin: 10,
   	dots:false,
   	loop:true,
    nav:true,
   	navText: ["<img src='images/prev.png'>","<img src='images/prev.png'>"],
   });
   var $hamburger = $(".hamburger");
   $hamburger.on("click", function(e) {
     $hamburger.toggleClass("is-active");
     $(".nav").toggleClass("active");
     // Do something else, like open/close menu
   });
   $( "#tabs" ).tabs({
    active:0
   }
    );
});


