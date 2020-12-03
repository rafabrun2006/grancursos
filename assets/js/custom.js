function hasCondensed() {
    return 750 <= window.innerWidth && window.innerWidth <= 1024;
}

function configPage() {
    $('body').removeAttr('data-leftbar-compact-mode');
    $('.side-filter').removeAttr('style');
    if (hasCondensed()) {
        $('body').attr("data-leftbar-compact-mode", "condensed");
    }
}

window.addEventListener('resize', configPage);

$(function () {
    configPage();
    $('.button-menu-mobile').on('click', function () {
        $('body').toggleClass('sidebar-enable');
    });

    $('.side-nav-link').on('click', function () {
        if ($(this).next('ul') && !hasCondensed()) {
            $(this).next('ul').toggleClass('mm-collapse').toggleClass('mm-show');
            $(this).parent().toggleClass('mm-active');
        }
    });

    $('#btn-side-filter').on('click',function(){
        $('.side-filter').toggle();
    })
});