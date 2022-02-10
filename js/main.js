$(document).ready(function () {
    "use strict";


    $(".faq_block_content_list_item_title").click(function() {
        $(this).parent().toggleClass("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });

    $('.reviews_block_top_content_slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: $('.reviews_block_top_content_prev'),
        nextArrow: $('.reviews_block_top_content_next'),
        responsive: [
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          }
        ],
      });


      $('.reviews_block_bottom_content_slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: $('.reviews_block_bottom_content_prev'),
        nextArrow: $('.reviews_block_bottom_content_next'),
        responsive: [
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          }
        ],
      });


      $('.model_block_content_slider').slick({
        dots: true,
        slidesPerRow: 2,
        dots: false,
        rows: 2,
        prevArrow: $('.model .prev'),
        nextArrow: $('.model .next'),
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesPerRow: 1,
                    rows: 1,
                }
            }
        ]
    });

    // if($(window).width() < 1199) {
    //     $('.model_block_content_slider').slick({
    //         dots: true,
    //         slidesPerRow: 1,
    //         dots: false,
    //         rows: 1,
    //         prevArrow: $('.model .prev'),
    //         nextArrow: $('.model .next'),
    //     });
    //  } else {
    //     $('.model_block_content_slider').slick({
    //         dots: true,
    //         slidesPerRow: 2,
    //         dots: false,
    //         rows: 2,
    //         prevArrow: $('.model .prev'),
    //         nextArrow: $('.model .next')
    //     });
    //  }

});