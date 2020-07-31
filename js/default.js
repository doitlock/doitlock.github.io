new WOW().init();

$('.atc_slide01').slick({
	infinite: true,
	autoplay: true,
	autoplaySpeed: 800,
	slidesToShow: 1,
	adaptiveHeight: true,
	arrows: false
  });


window.addEventListener('scroll', scrollWork)

const htmlElem = document.querySelector('html');
const headerElem = document.getElementById('header');

function scrollWork() {
  if (htmlElem.scrollTop > 100) {
    headerElem.classList.add('on');
  } else if (htmlElem.scrollTop < 500){
    headerElem.classList.remove('on');
  }
};



