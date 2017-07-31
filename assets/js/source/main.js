
jQuery(document).ready( function($) {

    //Add rating
    (function() {

        jQuery(document).on('click', '.add-review .review-star i', function() {
            var selected = jQuery(this).index();
            var star = jQuery(this).closest('.review-star').find('i');

            jQuery(this).closest('.review-star').find('input[name="review-rating"]').val(selected);

            star.removeClass('full');
            jQuery.each(star, function(i) {
                if((i + 1) <= selected) {
                    jQuery(this).addClass('full');
                }
            });
        });

        jQuery(document).on({
        		mouseenter: function(){
                var star = jQuery(this).closest('.add-review .review-star').find('i');
                var selected = jQuery(this).index();

                jQuery.each(star, function(i) {
                    if((i + 1) <= selected) {
                        jQuery(this).addClass('hover');
                    }
                });

        		},
        		mouseleave: function(){
                jQuery('.add-review  .review-star i').removeClass('hover');
        		}
        	}, '.add-review .review-star i');

    }());

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

  $(".fancybox").fancybox({
        padding         : [50, 35, 50, 35],
        prevEffect		: 'none',
		nextEffect		: 'none',
		closeBtn		: true
	});
    $(".fancybox-slider").fancybox({
        padding         : [50, 35, 50, 35],
        prevEffect		: 'none',
  		nextEffect		: 'none',
  		closeBtn		: true
  	});
    $('.certificates-slider').not('.slick-initialized').slick({
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
});
