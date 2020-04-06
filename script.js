$(document).ready(function() {
    $('.container li:eq(1), .main_btna, .main_btn').on('click', function() {
        $('.overlay').fadeToggle('slow');
        $('.modal').slideDown('slow');
    });
    $('.close').on('click', function() {
        $('.overlay').fadeToggle('slow');
        $('.modal').slideUp('slow');
    });
});