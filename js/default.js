new WOW().init();

$('.atc_txt').slick({
	infinite: true,
	autoplay: true,
	autoplaySpeed: 800,
	slidesToShow: 1,
	adaptiveHeight: true,
  arrows: false,
  vertical: true
  });

$('.atc_slide01').slick({
	infinite: true,
	autoplay: true,
	autoplaySpeed: 800,
	slidesToShow: 1,
	adaptiveHeight: true,
	arrows: false
  });

  $('.section_slide').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows: false,
    dots: true
    });  
  

window.addEventListener('scroll', scrollWork)

const htmlElem = document.querySelector('html');
const headerElem = document.getElementById('header');

function scrollWork() {
  if (htmlElem.scrollTop > 400) {
    headerElem.classList.add('on');
  } else if (htmlElem.scrollTop < 500){
    headerElem.classList.remove('on');
  }
};

$(document).mousemove(function(e){
    $('.black-ball').css("top", e.pageY);
    $('.black-ball').css("left", e.pageX);
});

$( function() {
  $( "#draggable" ).draggable();
});

