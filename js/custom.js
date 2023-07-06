/**********To Top**********/
$(function() {
    new WOW().init();
    $(document).on('scroll', function() {
        if ($(window).scrollTop() > 100) {
            $('.scroll-top-wrapper').addClass('show');
        } else {
            $('.scroll-top-wrapper').removeClass('show');
        }
    });
    $('.scroll-top-wrapper').on('click', scrollToTop);
});

function scrollToTop() {
    verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
    element = $('body');
    offset = element.offset();
    offsetTop = offset.top;
    $('html, body').animate({ scrollTop: offsetTop }, 500, 'linear');
}


/**********Fixed nav********/
var nums = $('.HeaderNav').offset().top;
$(window).scroll(function() {
    if ($(window).scrollTop() > nums) {
        $('.HeaderNav').addClass('fixedheader');
    } else {
        $('.HeaderNav').removeClass('fixedheader');
        nums = $('.HeaderNav').offset().top;
    }
});

// 
$(document).ready(function() {
    $("#SearchBtn").click(function() {
        $(".SearchBox").show();
    });

    $("#CloseSearchBox").click(function() {
        $(".SearchBox").hide();
    });
});


// Dropdown menu click to open sub
$(document).ready(function() {
    $(".dropdown a").click(function() {
        $(this).parent().toggleClass('open').siblings().removeClass("open");
    });
});
//nav overlay 
$(document).ready(function() {
    $("#ShowNav").click(function() {
        $('body').addClass('ShowOverlay');
        $('#navbarTogglerDemo').addClass('shownav');
    });
    $("#HideNav").click(function() {
        $('body').removeClass('ShowOverlay');
        $('#navbarTogglerDemo').removeClass('shownav');
    });
});
// Per page Nav Active
$(document).ready(function() {
    var url = window.location;
    $('ul.navbar-nav a[href="' + url + '"]').parent().addClass('active');
    $('ul.navbar-nav a').filter(function() {
        return this.href == url;
    }).parent().addClass('active');
});

$('.Testimonials').owlCarousel({
    loop: false,
    center: true,
    margin: 0,
    nav: false,
    dots: true,
    dotsData: true,
    dotsContainer: '.owl-dots',
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});

// $("button").click(function() {
//     var active = carousel.find(".owl-dot.active");
//     alert(active.text())
// })