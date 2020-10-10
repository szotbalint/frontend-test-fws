var wind = $(window);
var sticky = $("#stickyHeader");
wind.on('scroll', function() {
    var scroll = wind.scrollTop();
    if (scroll < 150) {
        sticky.removeClass('sticky-top');
    } else {
        sticky.addClass('sticky-top');
    }
});

$('.parallax-window').parallax({ imageSrc: 'img/exported-header-bg.png' });

(function($) {
    $(document).ready(function() {
        $.jScrollability([{
            'selector': '.reveal-demo',
            'start': '.row',
            'end': '.col-6',
            'fn': {
                'top': {
                    'start': 100,
                    'end': 15,
                    'unit': '%'
                }
            }
        }]);
    });
})(jQuery);