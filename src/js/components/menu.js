$(function(){
    let collapce = $('.collapce');
    let links = $('.links');
    let burger = $('.burger-icon');
    let header = $('.header');
    $('.burger-icon').click( function(e){
        this.classList.toggle("changed");
        collapce[0].classList.toggle("show");
        links[0].classList.toggle("show");
        header[0].classList.toggle("scroll")
      
    });
    window.onresize = function(e){
        let computedStyle = document.documentElement.clientWidth;
        if(computedStyle >= 992) {
            burger[0].classList.remove("changed")
            collapce[0].classList.remove("show");
            links[0].classList.remove("show");
            header[0].classList.remove("scroll");
        };
    };
});