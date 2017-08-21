
jQuery(document).ready( function($) {

    //Add rating
    (function() {

        jQuery(document).on('click', '.add-review .review-star i', function() {
            var selected = jQuery(this).index();
            var star = jQuery(this).closest('.review-star').find('i');

            jQuery(this).closest('.review-star').find('input[name="reviewRating"]').val(selected);

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

    $(function() {
        var btnOk = $('.qty-wrap__butt .btn-ok'),
            btnCancel = $('.qty-wrap__butt .btn-cancel'),
            thisQty;

        $('.add-to-cart').click(function(e) {
            e.preventDefault();
            $('.category-products__item .qty-wrap').hide();
            thisQty = $(this).next('.qty-wrap').find('.qty-input');
            $(this).next('.qty-wrap').stop().fadeIn(200);
        });

        btnCancel.click(function() {
            thisQty.val(1);
            $(this).closest('.qty-wrap').stop().fadeOut(200);
            setTimeout(function(){
            }, 100);
        });

        btnOk.click(function() {
            $(this).closest('.qty-wrap').stop().fadeOut(200);
            // Call popup
        });
    }());

    $(function() {
        $('#small-images li > a').click(function(e) {
            e.preventDefault();
            var imageUrl = $(this).attr('href');
            $('#small-images li').removeClass('current');
            $(this).closest('li').addClass('current');
            $('.detail-page__image-box').find('img').attr('src', imageUrl);
        });
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


    // Initialize category products slider
    $('.slider-category-products').not('.slick-initialized').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        swipe:  true,
        arrows: true,
        adaptiveHeight: true,
        dots: false,
        responsive: [
          {
              breakpoint: 1200,
              settings: {
                  slidesToShow: 3,
              }
          },{
              breakpoint: 990,
              settings: {
                  slidesToShow: 2,
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
                breakpoint: 580,
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
                  arrows: true,
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
        width		: 1000,
        maxWidth :1000,
		// height		: '100%',
		autoSize	: false,
        padding         : [50, 15, 50, 15],
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
                    arrows: true,
                }
             }
       ]
    });
});
