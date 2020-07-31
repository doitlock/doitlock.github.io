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
  if (htmlElem.scrollTop > 400) {
    headerElem.classList.add('on');
  } else if (htmlElem.scrollTop < 500){
    headerElem.classList.remove('on');
  }
};




function formatDate(date) { var d = new Date(date), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear(); if (month.length < 2) month = '0' + month; if (day.length < 2) day = '0' + day; return [year, month, day].join('-'); }



