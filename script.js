$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }

        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    $('.navbar .menu li a').click(function(){
        $('.navbar .menu').removeClass("active");
        $('.navbar .menu-btn i').removeClass("active");
        $('.navbar .menu-btn[aria-expanded]').attr("aria-expanded", "false");
        $('.navbar .menu-btn[aria-expanded]').attr("aria-label", "Open navigation");
    });

    $('.navbar > .max-width > .menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
        var menuIsOpen = $('.navbar .menu').hasClass("active");
        $(this).attr("aria-expanded", menuIsOpen);
        $(this).attr("aria-label", menuIsOpen ? "Close navigation" : "Open navigation");
    });

    new Typed(".typing", {
        strings: ["Full-Stack Developer", "React Native Developer", "API Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    $('.carousel, .live-projects-carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2800,
        autoplaySpeed: 700,
        smartSpeed: 700,
        autoplayHoverPause: true,
        responsive: {
            0: { items: 1, nav: false },
            768: { items: 2, nav: false }
        }
    });
});
