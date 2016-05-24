var main = function() {
    $('.dropdown-toggle').click(function() {
        $('.dropdown-menu').toggle();
    });


    $('.arrow-next').click(function(e) {
        e.preventDefault();
        $('.arrow-next').addClass('disabled-arrow');
        var currentSlide = $('.active-slide');
        var nextSlide = currentSlide.next();

        var currentDot = $('.active-dot');
        var nextDot = currentDot.next();

        if (nextSlide.length === 0) {
            nextSlide = $('.slide').first();
            nextDot = $('.dot').first();
        }

        currentSlide.slideUp(600, function() {
            nextSlide.slideDown(600, function() {
                $('.arrow-next').removeClass('disabled-arrow');
            }).addClass('active-slide');
        }).removeClass('active-slide');

        currentDot.removeClass('active-dot');
        nextDot.addClass('active-dot');
    });


    $('.arrow-prev').click(function(e) {
        e.preventDefault();
        $('.arrow-prev').addClass('disabled-arrow');
        var currentSlide = $('.active-slide');
        var prevSlide = currentSlide.prev();

        var currentDot = $('.active-dot');
        var prevDot = currentDot.prev();

        if (prevSlide.length === 0) {
            prevSlide = $('.slide').last();
            prevDot = $('.dot').last();
        }

        currentSlide.slideUp(600, function() {
            prevSlide.slideDown(600, function() {
                $('.arrow-prev').removeClass('disabled-arrow');
            }).addClass('active-slide');
        }).removeClass('active-slide');

        currentDot.removeClass('active-dot');
        prevDot.addClass('active-dot');
    });
}

$(document).ready(main);
