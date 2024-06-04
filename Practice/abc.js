$(document).ready(function(){
    // Page loader
    $(window).on('load', function(){
        $('#page-loader').fadeOut('slow');
    });

    // Lazy load images
    $('.lazy-load').each(function(){
        var src = $(this).attr('data-src');
        $(this).attr('src', src);
    });

    // Tabs functionality
    $('.tab-button').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('.tab-button').removeClass('active');
        $('.tab-content').removeClass('active');

        $(this).addClass('active');
        $("#" + tab_id).addClass('active');
    });

    // Owl Carousel
    $(".owl-carousel").owlCarousel({
        items: 1,
        lazyLoad: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        nav: true
    });

    // Mobile menu
    $('nav ul').hide();
    $('.menu-toggle').click(function(){
        $('nav ul').toggle();
    });
});