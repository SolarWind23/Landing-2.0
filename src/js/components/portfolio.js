$(function(e){
    let tabLinks = document.getElementsByClassName("tab-panel-link");
    let tabPanels = $('.tab-panel');
    let i = 0;
    
    $('.nav-tab-panel').click(function(e){
    
       let  target = e.target;
       let  data = target.getAttribute('data-toggle');
       let  chosenPanel= $(`#${data}`);

        if (!target.classList.contains('nav-tab-panel')) {
            
            for (i = 0; i < tabLinks.length; i++) {
                tabLinks[i].className = tabLinks[i].className.replace(" active", "");
            }
            target.classList.add('active');
    
            for (i = 0; i < tabPanels.length; i++) {
                tabPanels[i].className = tabPanels[i].className.replace(" active", "");
            };
            chosenPanel[0].classList.add('active');
        };
        

    });
});