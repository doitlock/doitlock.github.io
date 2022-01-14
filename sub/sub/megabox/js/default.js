new WOW().init();

$('.benefits_slide01').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  vertical: true,
  dots: true
});

$('.benefits_slide02').slick({
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