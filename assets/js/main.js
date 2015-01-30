;(function(){

    // Menu settings
    $('#menu-toggle, .menu-close').on('click', function(){
        $('#menu-toggle').toggleClass('active');
        $('html').toggleClass('menu-open');
        $('.menu').toggleClass('open');
    });

})(jQuery);