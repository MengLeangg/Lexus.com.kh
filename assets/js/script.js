//  animation Hamburger Menu
$('.nav-toggle').click(function(){
    $('.nav-toggle').toggleClass('active');
})

// animation search button

$(document).ready(function(){
    $('#btnSearch').click(function(){
        $('.menu-item').toggleClass('hide-item');
        $('.search-form').toggleClass('active');
        $('.close').toggleClass('active');
        $('#btnSearch').toggleClass('active');
    })

    $('.close').click(function(){
        $('.menu-item').removeClass('hide-item');
        $('.search-form').removeClass('active');
        $('.close').removeClass('active');
        $('#btnSearch').removeClass('active');
    })
});