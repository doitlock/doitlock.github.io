window.addEventListener('scroll', scrollWork)

const htmlElem = document.querySelector('html');
const headerElem = document.getElementById('header');

function scrollWork() {
  if (htmlElem.scrollTop > 0) {
    headerElem.classList.add('on');
  } else if (htmlElem.scrollTop < 80){
    headerElem.classList.remove('on');
  }
};

new WOW().init();

$('.visual_main_slide').slick({
  dots: false,
  infinite: true,
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 500,
  arrows: true
});