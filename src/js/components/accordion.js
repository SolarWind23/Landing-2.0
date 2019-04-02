$(function(){
    let acc = $(".acordion");
    acc.click(function(e){
        let target = e.target;
        target.nextElementSibling.classList.toggle("active");
    });
});