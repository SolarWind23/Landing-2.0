$(document).ready(function(){
    $('.carousel').slick({
        infinite: true,
        arrows: true,
        slidesToShow: 1,
        nextArrow:'<button type="button" class="next"><i class="fas fa-chevron-right"></i></button>',
        prevArrow:'<button type="button" class="prev"><i class="fas fa-chevron-left"></i></button>'
    });
});