$(function(){
    let btn = $(".show-more");
    let posts = $('.another-posts');

    btn.click(function(e){
       if (posts[0].style.maxHeight) {

            posts[0].style.maxHeight = null;
            btn.html('<i class="fas fa-chevron-down"></i>');

        } else {

            btn.html('<i class="fas fa-chevron-up"></i>');
            posts[0].style.maxHeight = posts[0].scrollHeight * 3 + "px";

        };
    });
});