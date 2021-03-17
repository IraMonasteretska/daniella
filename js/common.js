$(document).ready(function () {

    // main slider


    var $status = $('.mainslider-section .pagingInfo');
    var $slickElement = $('.mainslider');

    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        if (slick.slideCount < 10) {
            var i = (currentSlide ? currentSlide : 0) + 1;
            $status.text('/ 0' + i);
        } else {
            var i = (currentSlide ? currentSlide : 0) + 1;
            $status.text('/' + i);
        }

    });

    $slickElement.slick({
        dots: false,
        infinite: true,
        speed: 500,
        prevArrow: '<button type="button" class="slick-prev">Prev</button>',
        nextArrow: '<button type="button" class="slick-next">Next</button>',
        // autoplay: true,
        autoplaySpeed: 4000,
        pauseOnFocus: false,
        pauseOnHover: false,
        speed: 400
    });

    var $slickAbout = $('#about_slider1');

    $slickAbout.slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow: $('.about-slider-prev1'),
        nextArrow: $('.about-slider-next1'),
        // autoplay: true,
        autoplaySpeed: 4000,
        pauseOnFocus: false,
        pauseOnHover: false,
        speed: 400
    });

    var $slickAbout2 = $('#about_slider2');

    $slickAbout2.slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow: $('.about-slider-prev2'),
        nextArrow: $('.about-slider-next2'),
        // autoplay: true,
        autoplaySpeed: 4000,
        pauseOnFocus: false,
        pauseOnHover: false,
        speed: 400
    });





    // SELECTS
    $(".month, .year").select2({
        minimumResultsForSearch: -1
    });

    $(".sort__tag select").select2({
        minimumResultsForSearch: -1,
        containerCssClass: "error",
        dropdownCssClass: "catalog-dropdown",
    });

    // menu
    var newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'menubg');
    $('header').append(newDiv);

    $('.burgermenu-btn').click(function () {
        $('.header__rightm').addClass('openmenu');
        $('.menubg').addClass('open')
    });


    $('.menubg, .closemenu-btn').click(function () {
        $('.header__rightm').removeClass('openmenu');
        $('.menubg').removeClass('open')
    });

    // FIlter - left sidebar
    $('.cattitle').click(function () {
        $(this).toggleClass('rotate-arrow');
        $(this).siblings('.submenu-cat').slideToggle();
    });

    // HIDE filters
    $('.hide-filters').click(function () {
        $(this).toggleClass('showf-text');
        $('.filters-col').toggle();
    });

    // catalog colums
    $('.sort-col2').click(function () {
        $('.sort__col span').removeClass('active');
        $(this).addClass('active');
        $('.catalog-imgblocks').addClass('two-col');
    });

    $('.sort-col3').click(function () {
        $('.sort__col span').removeClass('active');
        $(this).addClass('active');
        $('.catalog-imgblocks').removeClass('two-col');
    });


    
});