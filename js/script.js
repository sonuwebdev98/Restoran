// Humburger menu 
$(function () {

    
    $(".hamburger").click(function () {

      $("ul").toggleClass("active");

    });
    
  });

// Humburger menu 




//...................Sticky Navbar starts ...............//
$(function(){

  $(window).on('scroll', function(){

    if ($(window).scrollTop ()){

        $('nav').addClass('dark-nav');
    }


    else{
        $('nav').removeClass('dark-nav');
    }

})



});




//...................Sticky Navbar Ends ...............//

// OwlCarousel starts here 

$('.owl-carousel').owlCarousel({
  loop:true,
  autoplayTimeout:5000,
  autoplay:true,
  margin:25, 
  nav:false,
  responsive:{
      0:{
          items:1
      },
      768:{
          items:2
      },
      992:{
          items:3
      },

      1200:{
        items:3
      }
  }
})

// OwlCarousel ends here 

