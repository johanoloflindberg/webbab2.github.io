(function($){

    // Menu settings
    $('#menu-toggle, .menu-close').on('click', function(){
        $('#menu-toggle').toggleClass('active');
        $('html').toggleClass('menu-open');
        $('.menu').toggleClass('open');
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