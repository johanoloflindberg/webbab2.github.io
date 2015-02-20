(function($){

    var toggleMenu = function() {
        $('#menu-toggle').toggleClass('active');
        $('html').toggleClass('menu-is-open');
        $('.menu').toggleClass('open');
    };

    // Menu settings
    $('#menu-toggle, .menu-close').on('click', function(){
        toggleMenu();
    });

    // Menu scroll
    $('.js-menu-item').on('click', function() {
        var id = $(this).attr('href').split('#')[1],
            $el = $('#' + id);

        toggleMenu();

        $('html, body').animate({
            scrollTop: $el.offset().top
        }, 1000);
    });

    // Hide menu when scrolling too far down
    (function(){
        var $header = $('.header'),
            $menuToggle = $('#menu-toggle'),
            height = $header.height();

        $(window).scroll(function(){
            if ($(this).scrollTop() > height) {
                $menuToggle.addClass('hidden');
            }
            else {
                $menuToggle.removeClass('hidden');
            }
        });
    })();

})(jQuery);