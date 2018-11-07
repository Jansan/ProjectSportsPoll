/* Menu bar */
$(document).ready(function () {
    $(".menu-bar").on("click", function () {
        $("nav ul").toggleClass("showing");
    });

});
/* Scroll Top */
$(window).on("scroll", function () {
    if ($(window).scrollTop()) {
        $('nav').addClass('blue');
    } else {
        $('nav').removeClass('blue');
    }
})