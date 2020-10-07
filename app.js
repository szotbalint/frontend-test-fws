var wind = $(window);
var sticky = $("#stickyHeader");
wind.on('scroll', function() {
    var scroll = wind.scrollTop();
    if (scroll < 100) {
        sticky.removeClass('sticky-top');
    } else {
        sticky.addClass('sticky-top');
    }
});

$('.parallax-window').parallax({ imageSrc: 'img/exported-header-bg.png' });