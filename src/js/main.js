//= './vendors/libs.min.js'


$(function(){
    let collapce = $('.collapce');
    let links = $('.links');
    let burger = $('.icon');

    $(".icon").click( function(e){
        this.classList.toggle("changed");
        collapce[0].classList.toggle("show");
        links[0].classList.toggle("show");
    });
    window.onresize = function(e){
        let computedStyle = document.documentElement.clientWidth;
        if(computedStyle >= 992) {
            burger[0].classList.remove("changed")
            collapce[0].classList.remove("show");
            links[0].classList.remove("show");
            
        }
    };
});


$(document).ready(function(){
    $('.carousel').slick({
        infinite: true,
        arrows: true,
        slidesToShow: 1,
        nextArrow:'<button type="button" class="next"><i class="fas fa-chevron-right"></i></button>',
        prevArrow:'<button type="button" class="prev"><i class="fas fa-chevron-left"></i></button>'
    });
  });