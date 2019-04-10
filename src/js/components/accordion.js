$(function(){
    $(".acordion").click(function(e){
        let target = e.target;
        target.nextElementSibling.classList.toggle("active");
    
        if(target.nextElementSibling.classList.contains("active")) {
            target.firstElementChild.outerHTML='<i class="acordion-title-icon fas fa-minus-circle"></i>';
        }else {
            target.firstElementChild.outerHTML='<i class="acordion-title-icon fas fa-plus-circle"></i>';
        };
    });
});