jQuery(document).ready(function(e){jQuery(document).on("click",".add-review .review-star i",function(){var e=jQuery(this).index(),s=jQuery(this).closest(".review-star").find("i");jQuery(this).closest(".review-star").find('input[name="reviewRating"]').val(e),s.removeClass("full"),jQuery.each(s,function(s){s+1<=e&&jQuery(this).addClass("full")})}),jQuery(document).on({mouseenter:function(){var e=jQuery(this).closest(".add-review .review-star").find("i"),s=jQuery(this).index();jQuery.each(e,function(e){e+1<=s&&jQuery(this).addClass("hover")})},mouseleave:function(){jQuery(".add-review  .review-star i").removeClass("hover")}},".add-review .review-star i"),e(function(){var s,i=e(".qty-wrap__butt .btn-ok"),t=e(".qty-wrap__butt .btn-cancel");e(".add-to-cart").click(function(i){i.preventDefault(),e(".qty-wrap").hide(),s=e(this).next(".qty-wrap").find(".qty-input"),e(this).next(".qty-wrap").stop().fadeIn(200)}),t.click(function(){s.val(1),e(this).closest(".qty-wrap").stop().fadeOut(200),setTimeout(function(){},100)}),i.click(function(){e(this).closest(".qty-wrap").stop().fadeOut(200)})}()),e(".slider-product").not(".slick-initialized").slick({slidesToShow:5,slidesToScroll:1,swipe:!0,arrows:!0,adaptiveHeight:!0,dots:!1,responsive:[{breakpoint:1200,settings:{slidesToShow:4}},{breakpoint:990,settings:{slidesToShow:3}},{breakpoint:768,settings:{slidesToShow:2}},{breakpoint:600,settings:{slidesToShow:2,arrows:!1}},{breakpoint:480,settings:{slidesToShow:1,arrows:!1}}]}),e(".slider-category-products").not(".slick-initialized").slick({slidesToShow:4,slidesToScroll:1,swipe:!0,arrows:!0,adaptiveHeight:!0,dots:!1,responsive:[{breakpoint:1200,settings:{slidesToShow:3}},{breakpoint:990,settings:{slidesToShow:2}},{breakpoint:768,settings:{slidesToShow:2}},{breakpoint:600,settings:{slidesToShow:2,arrows:!1}},{breakpoint:580,settings:{slidesToShow:1,arrows:!1}}]}),e(".slider-carousel").not(".slick-initialized").slick({slidesToShow:1,slidesToScroll:1,arrows:!0,adaptiveHeight:!0,dots:!0}),e(".slider-testimonial").not(".slick-initialized").slick({slidesToShow:1,slidesToScroll:1,arrows:!0,adaptiveHeight:!0,dots:!1,responsive:[{breakpoint:768,settings:{arrows:!1,dots:!0}}]}),e(".navbar-toggler").click(function(){e(this).toggleClass("open")}),e(".fancybox").fancybox({padding:[50,35,50,35],prevEffect:"none",nextEffect:"none",closeBtn:!0}),e(".fancybox-slider").fancybox({padding:[50,35,50,35],prevEffect:"none",nextEffect:"none",closeBtn:!0}),e(".certificates-slider").not(".slick-initialized").slick({slidesToShow:5,slidesToScroll:1,swipe:!0,arrows:!0,adaptiveHeight:!0,dots:!1,responsive:[{breakpoint:1200,settings:{slidesToShow:4}},{breakpoint:990,settings:{slidesToShow:3}},{breakpoint:768,settings:{slidesToShow:2}},{breakpoint:600,settings:{slidesToShow:2,arrows:!1}},{breakpoint:480,settings:{slidesToShow:1,arrows:!1}}]})});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsialF1ZXJ5IiwiZG9jdW1lbnQiLCJyZWFkeSIsIiQiLCJvbiIsInNlbGVjdGVkIiwidGhpcyIsImluZGV4Iiwic3RhciIsImNsb3Nlc3QiLCJmaW5kIiwidmFsIiwicmVtb3ZlQ2xhc3MiLCJlYWNoIiwiaSIsImFkZENsYXNzIiwibW91c2VlbnRlciIsIm1vdXNlbGVhdmUiLCJ0aGlzUXR5IiwiYnRuT2siLCJidG5DYW5jZWwiLCJjbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImhpZGUiLCJuZXh0Iiwic3RvcCIsImZhZGVJbiIsImZhZGVPdXQiLCJzZXRUaW1lb3V0Iiwibm90Iiwic2xpY2siLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsInN3aXBlIiwiYXJyb3dzIiwiYWRhcHRpdmVIZWlnaHQiLCJkb3RzIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyIsInRvZ2dsZUNsYXNzIiwiZmFuY3lib3giLCJwYWRkaW5nIiwicHJldkVmZmVjdCIsIm5leHRFZmZlY3QiLCJjbG9zZUJ0biJdLCJtYXBwaW5ncyI6IkFBQ0FBLE9BQU9DLFVBQVVDLE1BQU8sU0FBU0MsR0FLekJILE9BQU9DLFVBQVVHLEdBQUcsUUFBUyw2QkFBOEIsV0FDdkQsSUFBSUMsRUFBV0wsT0FBT00sTUFBTUMsUUFDeEJDLEVBQU9SLE9BQU9NLE1BQU1HLFFBQVEsZ0JBQWdCQyxLQUFLLEtBRXJEVixPQUFPTSxNQUFNRyxRQUFRLGdCQUFnQkMsS0FBSyw4QkFBOEJDLElBQUlOLEdBRTVFRyxFQUFLSSxZQUFZLFFBQ2pCWixPQUFPYSxLQUFLTCxFQUFNLFNBQVNNLEdBQ25CQSxFQUFJLEdBQU1ULEdBQ1ZMLE9BQU9NLE1BQU1TLFNBQVMsWUFLbENmLE9BQU9DLFVBQVVHLElBQ2ZZLFdBQVksV0FDTixJQUFJUixFQUFPUixPQUFPTSxNQUFNRyxRQUFRLDRCQUE0QkMsS0FBSyxLQUM3REwsRUFBV0wsT0FBT00sTUFBTUMs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dGVudCI6WyJcclxualF1ZXJ5KGRvY3VtZW50KS5yZWFkeSggZnVuY3Rpb24oJCkge1xyXG5cclxuICAgIC8vQWRkIHJhdGluZ1xyXG4gICAgKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICBqUXVlcnkoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuYWRkLXJldmlldyAucmV2aWV3LXN0YXIgaScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgc2VsZWN0ZWQgPSBqUXVlcnkodGhpcykuaW5kZXgoKTtcclxuICAgICAgICAgICAgdmFyIHN0YXIgPSBqUXVlcnkodGhpcykuY2xvc2VzdCgnLnJldmlldy1zdGFyJykuZmluZCgnaScpO1xyXG5cclxuICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLmNsb3Nlc3QoJy5yZXZpZXctc3RhcicpLmZpbmQoJ2lucHV0W25hbWU9XCJyZXZpZXdSYXRpbmdcIl0nKS52YWwoc2VsZWN0ZWQpO1xyXG5cclxuICAgICAgICAgICAgc3Rhci5yZW1vdmVDbGFzcygnZnVsbCcpO1xyXG4gICAgICAgICAgICBqUXVlcnkuZWFjaChzdGFyLCBmdW5jdGlvbihpKSB7XHJcbiAgICAgICAgICAgICAgICBpZigoaSArIDEpIDw9IHNlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLmFkZENsYXNzKCdmdWxsJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBqUXVlcnkoZG9jdW1lbnQpLm9uKHtcclxuICAgICAgICBcdFx0bW91c2VlbnRlcjogZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHZhciBzdGFyID0galF1ZXJ5KHRoaXMpLmNsb3Nlc3QoJy5hZGQtcmV2aWV3IC5yZXZpZXctc3RhcicpLmZpbmQoJ2knKTtcclxuICAgICAgICAgICAgICAgIHZhciBzZWxlY3RlZCA9IGpRdWVyeSh0aGlzKS5pbmRleCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGpRdWVyeS5lYWNoKHN0YXIsIGZ1bmN0aW9uKGkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZigoaSArIDEpIDw9IHNlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5hZGRDbGFzcygnaG92ZXInKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgXHRcdH0sXHJcbiAgICAgICAgXHRcdG1vdXNlbGVhdmU6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkoJy5hZGQtcmV2aWV3ICAucmV2aWV3LXN0YXIgaScpLnJlbW92ZUNsYXNzKCdob3ZlcicpO1xyXG4gICAgICAgIFx0XHR9XHJcbiAgICAgICAgXHR9LCAnLmFkZC1yZXZpZXcgLnJldmlldy1zdGFyIGknKTtcclxuXHJcbiAgICB9KCkpO1xyXG5cclxuICAgICQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGJ0bk9rID0gJCgnLnF0eS13cmFwX19idXR0IC5idG4tb2snKSxcclxuICAgICAgICAgICAgYnRuQ2FuY2VsID0gJCgnLnF0eS13cmFwX19idXR0IC5idG4tY2FuY2VsJyksXHJcbiAgICAgICAgICAgIHRoaXNRdHk7XHJcblxyXG4gICAgICAgICQoJy5hZGQtdG8tY2FydCcpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAkKCcucXR5LXdyYXAnKS5oaWRlKCk7XHJcbiAgICAgICAgICAgIHRoaXNRdHkgPSAkKHRoaXMpLm5leHQoJy5xdHktd3JhcCcpLmZpbmQoJy5xdHktaW5wdXQnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5uZXh0KCcucXR5LXdyYXAnKS5zdG9wKCkuZmFkZUluKDIwMCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGJ0bkNhbmNlbC5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdGhpc1F0eS52YWwoMSk7XHJcbiAgICAgICAgICAgICQodGhpcykuY2xvc2VzdCgnLnF0eS13cmFwJykuc3RvcCgpLmZhZGVPdXQoMjAwKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBidG5Pay5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCcucXR5LXdyYXAnKS5zdG9wKCkuZmFkZU91dCgyMDApO1xyXG4gICAgICAgICAgICAvLyBDYWxsIHBvcHVwXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KCkpO1xyXG5cclxuICAgIC8vIEluaXRpYWxpemUgaG9tZSBwcm9kdWN0cyBzbGlkZXJcclxuICAgICQoJy5zbGlkZXItcHJvZHVjdCcpLm5vdCgnLnNsaWNrLWluaXRpYWxpemVkJykuc2xpY2soe1xyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogNSxcclxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICBzd2lwZTogIHRydWUsXHJcbiAgICAgICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlLFxyXG4gICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBicmVha3BvaW50OiAxMjAwLFxyXG4gICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LHtcclxuICAgICAgICAgICAgICBicmVha3BvaW50OiA5OTAsXHJcbiAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjgsXHJcbiAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICB9LHtcclxuICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNjAwLFxyXG4gICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0se1xyXG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNDgwLFxyXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgXVxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIC8vIEluaXRpYWxpemUgY2F0ZWdvcnkgcHJvZHVjdHMgc2xpZGVyXHJcbiAgICAkKCcuc2xpZGVyLWNhdGVnb3J5LXByb2R1Y3RzJykubm90KCcuc2xpY2staW5pdGlhbGl6ZWQnKS5zbGljayh7XHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxyXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgIHN3aXBlOiAgdHJ1ZSxcclxuICAgICAgICBhcnJvd3M6IHRydWUsXHJcbiAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IHRydWUsXHJcbiAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEyMDAsXHJcbiAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0se1xyXG4gICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MCxcclxuICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcclxuICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIH0se1xyXG4gICAgICAgICAgICAgICBicmVha3BvaW50OiA2MDAsXHJcbiAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSx7XHJcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiA1ODAsXHJcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICBdXHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgLy8gSW5pdGlhbGl6ZSBIb21lIHNsaWRlclxyXG4gICAgJCgnLnNsaWRlci1jYXJvdXNlbCcpLm5vdCgnLnNsaWNrLWluaXRpYWxpemVkJykuc2xpY2soe1xyXG4gICAgXHRcdHNsaWRlc1RvU2hvdzogMSxcclxuICAgIFx0XHRzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgIFx0XHRhcnJvd3M6IHRydWUsXHJcbiAgICBcdFx0YWRhcHRpdmVIZWlnaHQ6IHRydWUsXHJcbiAgICBcdFx0ZG90czogdHJ1ZSxcclxuXHR9KTtcclxuXHJcbiAgLy8gSW5pdGlsaXplIHRlc3RpbW9uaWFscyBzbGlkZXJcclxuICAkKCcuc2xpZGVyLXRlc3RpbW9uaWFsJykubm90KCcuc2xpY2staW5pdGlhbGl6ZWQnKS5zbGljayh7XHJcbiAgXHRcdHNsaWRlc1RvU2hvdzogMSxcclxuICBcdFx0c2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgXHRcdGFycm93czogdHJ1ZSxcclxuICBcdFx0YWRhcHRpdmVIZWlnaHQ6IHRydWUsXHJcbiAgXHRcdGRvdHM6IGZhbHNlLFxyXG4gICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxyXG4gICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgIGRvdHM6IHRydWVcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgXVxyXG5cdH0pO1xyXG5cclxuICAvLyBIYW1idXJnZXIgYnV0dG9uXHJcbiAgJCgnLm5hdmJhci10b2dnbGVyJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcclxuICB9KTtcclxuXHJcbiAgJChcIi5mYW5jeWJveFwiKS5mYW5jeWJveCh7XHJcbiAgICAgICAgcGFkZGluZyAgICAgICAgIDogWzUwLCAzNSwgNTAsIDM1XSxcclxuICAgICAgICBwcmV2RWZmZWN0XHRcdDogJ25vbmUnLFxyXG5cdFx0bmV4dEVmZmVjdFx0XHQ6ICdub25lJyxcclxuXHRcdGNsb3NlQnRuXHRcdDogdHJ1ZVxyXG5cdH0pO1xyXG4gICAgJChcIi5mYW5jeWJveC1zbGlkZXJcIikuZmFuY3lib3goe1xyXG4gICAgICAgIHBhZGRpbmcgICAgICAgICA6IFs1MCwgMzUsIDUwLCAzNV0sXHJcbiAgICAgICAgcHJldkVmZmVjdFx0XHQ6ICdub25lJyxcclxuICBcdFx0bmV4dEVmZmVjdFx0XHQ6ICdub25lJyxcclxuICBcdFx0Y2xvc2VCdG5cdFx0OiB0cnVlXHJcbiAgXHR9KTtcclxuICAgICQoJy5jZXJ0aWZpY2F0ZXMtc2xpZGVyJykubm90KCcuc2xpY2staW5pdGlhbGl6ZWQnKS5zbGljayh7XHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiA1LFxyXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgIHN3aXBlOiAgdHJ1ZSxcclxuICAgICAgICBhcnJvd3M6IHRydWUsXHJcbiAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IHRydWUsXHJcbiAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEyMDAsXHJcbiAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0se1xyXG4gICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MCxcclxuICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcclxuICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIH0se1xyXG4gICAgICAgICAgICAgICBicmVha3BvaW50OiA2MDAsXHJcbiAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSx7XHJcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiA0ODAsXHJcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICBdXHJcbiAgICB9KTtcclxufSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
