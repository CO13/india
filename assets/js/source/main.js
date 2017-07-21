
jQuery(document).ready( function($) {

    // Initialize home products slider
    $('.slider-product').not('.slick-initialized').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        swipe:  true,
        arrows: true,
        adaptiveHeight: true,
        dots: false,
        responsive: [
          {
              breakpoint: 1200,
              settings: {
                  slidesToShow: 4,
              }
          },{
              breakpoint: 990,
              settings: {
                  slidesToShow: 3,
              }
          }, {
              breakpoint: 768,
              settings: {
                  slidesToShow: 2,
              }
           },{
               breakpoint: 600,
               settings: {
                  slidesToShow: 2,
                   arrows: false,
               }
            },{
                breakpoint: 480,
                settings: {
                   slidesToShow: 1,
                    arrows: false,
                }
             }
       ]
    });

    // Initialize Home slider
    $('.slider-carousel').not('.slick-initialized').slick({
    		slidesToShow: 1,
    		slidesToScroll: 1,
    		arrows: true,
    		adaptiveHeight: true,
    		dots: true,
	});

  // Initilize testimonials slider
  $('.slider-testimonial').not('.slick-initialized').slick({
  		slidesToShow: 1,
  		slidesToScroll: 1,
  		arrows: true,
  		adaptiveHeight: true,
  		dots: false,
        responsive: [
           {
              breakpoint: 768,
              settings: {
                  arrows: false,
                  dots: true
              }
           }
       ]
	});

  // Hamburger button
  $('.navbar-toggler').click(function() {
      $(this).toggleClass('open');
  });
});
