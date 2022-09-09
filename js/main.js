$(document).ready(function() {

    window.addEventListener("scroll", function () {
        let winHeight = this.scrollY;
        let aboutWhiteBg = $('.about>.bg_blue');
        let projectsWhiteBg = $('.projects>.bg_blue');

        aboutWhiteBg.width(winHeight+200)
        projectsWhiteBg.width(winHeight-1500)

        if($(this).scrollTop() > 0) {
            $('.header').addClass('stickyhead')
        }

        if($(this).scrollTop() == 0){
            $('.header').removeClass('stickyhead', 2000, "callBack")
        }

        // if(winHeight + $(window).height() >= whiteBg.offset().top) {
        //     console.log("hello");
        // }
    })

    $(".menuToggle").click(function() {
        $(this).toggleClass("active");
        $('.header__menu_list').toggleClass('active')
    });
    $('.header__menu_item>a').click(function () {
        $(".menuToggle").toggleClass("active")
         $('.header__menu_list').toggleClass('active')
    })
    
    $(".projects__slider.owl-carousel").owlCarousel({
        loop: true,
        responsive: true,
        margin: 75,
        dots: false,
        responsive:{ 
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    });

    $(".photo__slider.owl-carousel").owlCarousel({
        loop: true,
        center: true,
        dots:true,
        responsive:{ 
            0:{
                items:1,
            },
            600:{
                items:1,
            },
            1000:{
                items:1,
            }
        }
    });
});