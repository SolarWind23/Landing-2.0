//= './vendors/libs.min.js'


$(function(){
    $(".icon").click(function(e){
      
        this.classList.toggle("changed");

        let menu = $('.collapce');
        menu[0].classList.toggle("show");


        let menuItem = $(".links--item");
       


        for(let i=0; i <= menuItem.length-1; i++) {
            menuItem[i].classList.toggle("respons");
        };
       
        
    });
});
