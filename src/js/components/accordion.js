$(function(){
    let acc = $(".acordion");
    let btn = $(".acordion--title-icon");
    acc.click(function(e){
        let target = e.target;
        target.nextElementSibling.classList.toggle("active");
    });
});