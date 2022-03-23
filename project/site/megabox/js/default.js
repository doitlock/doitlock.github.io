'use strict'

let menuDepth1 = $('.main_menu_list > li');


// hamburger menu
function show_menu(layer_sitemap){
    const menu = document.getElementById('layer_sitemap');
    const menuBtn = document.querySelector('.dropdown_button');

    if(menu.style.display == 'block'){
        menu.style.display = 'none';
        menuBtn.classList.remove('on');
    } else {
        menu.style.display = 'block';  
        menuBtn.classList.add('on');          
    }
};

// depth menu
$(menuDepth1).hover(function() {
	$(this).addClass('active');
}, function(){
	$(this).removeClass('active');
});





