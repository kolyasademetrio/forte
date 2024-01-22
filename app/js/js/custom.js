$(window).on("load", function () {});

/* viewport width */
$(function () {
   /* burger */
   if ($(".js-open-menu").length) {
      $(".js-open-menu").click(function (e) {
         e.preventDefault(e);
         $(".js-menu").addClass("m-active");
         $("body").addClass("navigation-opened");
      });
   }

   if ($(".js-close-menu").length) {
      $(".js-close-menu").click(function (e) {
         e.preventDefault(e);
         $(".js-menu").removeClass("m-active");
         $("body").removeClass("navigation-opened");
      });
   }

   //  if ($(".js-gallery").length) {
   //     $(".js-gallery").magnificPopup({
   //        delegate: "a",
   //        type: "image",
   //        tLoading: "Loading image #%curr%...",
   //        mainClass: "mfp-img-mobile",
   //        gallery: {
   //           enabled: true,
   //           navigateByImgClick: true,
   //        },
   //        image: {
   //           tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
   //        },
   //        fixedContentPos: false,
   //        removalDelay: 500, //delay removal by X to allow out-animation
   //        callbacks: {
   //           beforeOpen: function () {
   //              // just a hack that adds mfp-anim class to markup
   //              this.st.image.markup = this.st.image.markup.replace(
   //                 "mfp-figure",
   //                 "mfp-figure mfp-with-anim"
   //              );
   //              this.st.mainClass = this.st.el.attr("data-effect");
   //           },
   //        },
   //     });
   //  }

   /* components */
   if ($(".js-slider-logos").length) {
      $(".js-slider-logos").slick({
         dots: false,
         arrows: false,
         autoplay: false,
         infinite: true,
         speed: 300,
         variableWidth: true,
         slidesToScroll: 1,
      });
   }

   if ($(".js-slider-feedback").length) {
      $(".js-slider-feedback").slick({
         dots: false,
         arrows: true,
         autoplay: false,
         infinite: true,
         speed: 300,
         //  centerMode: true,
         //  variableWidth: true,
         slidesToShow: 3,
         slidesToScroll: 1,
         nextArrow:
            '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none"><path opacity="0.4" d="M1 14.9707L9 8.14392L1 1.31714" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
         prevArrow:
            '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none"><path opacity="0.4" d="M9 1.1792L1 8.00598L9 14.8328" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
         responsive: [
            {
               breakpoint: 1024,
               settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
               },
            },
            {
               breakpoint: 768,
               settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
               },
            },
            {
               breakpoint: 480,
               settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
               },
            },
         ],
      });
   }

   if ($(".js-slider-technology").length) {
      let $status = $(".js-slider-technology").next().find(".js-slider-technology-qty");
      $(".js-slider-technology").on(
         "init reInit afterChange",
         function (event, slick, currentSlide, nextSlide) {
            //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
            let i = (currentSlide ? currentSlide : 0) + 1;
            $status.html(
               i + '/<span class="projects__slider-qty_sm">' + slick.slideCount + "</span>"
            );
            $status.html(
               `<div class="current">${i}</div>
               <div class="delimiter">/</div>
               <div class="total">${slick.slideCount}</div>`
            );
         }
      );

      let $prev = $(".js-slider-technology").next().find(".js-slider-technology-prev");
      let $next = $(".js-slider-technology").next().find(".js-slider-technology-next");

      $(".js-slider-technology").slick({
         dots: false,
         arrows: true,
         autoplay: false,
         infinite: true,
         speed: 300,
         slidesToScroll: 1,
         slidesToShow: 1,
         nextArrow: $next,
         prevArrow: $prev,
      });
   }

   //  if ($(".js-agency-slider").length) {
   //     $(window).on("resize orientationchange", function () {
   //        $(".js-agency-slider").slick("resize");
   //     });
   //  }

   //  if ($(".fake-iframe").length) {
   //     $(".fake-iframe").each(function () {
   //        $(document).delegate("#" + this.id, "click", function () {
   //           let iframe_url = "";
   //           if (this.getAttribute("data-youtube-vimeo") == "youtube") {
   //              iframe_url = "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1";
   //           } else if (this.getAttribute("data-youtube-vimeo") == "vimeo") {
   //              iframe_url =
   //                 "https://player.vimeo.com/video/" +
   //                 this.id +
   //                 "?color&amp;autoplay=1&amp;loop=0&amp;muted=0&amp;title=1&amp;portrait=1&amp;byline=1#t=";
   //           }

   //           const iframe =
   //              '<iframe width="' +
   //              $(this).width() +
   //              '" height="' +
   //              $(this).height() +
   //              '" src="' +
   //              iframe_url +
   //              '" frameborder="0" allowfullscreen=""></iframe>';

   //           $(this).find(".fake-iframe__play").remove();

   //           $(this).append(iframe);
   //        });
   //     });
   //  }
});
