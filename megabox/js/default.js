new WOW().init();

$('.sec01_slide').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  vertical: true,
  dots: true
});

$('.sec02_slide').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000
});

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
}  