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
  const sec = document.querySelector('section');
  if (htmlElem.scrollTop > 400) {
    headerElem.classList.add('on');
    sec.style.paddingTop = '240px';
  } else if (htmlElem.scrollTop < 500) {
    headerElem.classList.remove('on');
    sec.style.paddingTop = 0;
  }
};

$(document).mousemove(function (e) {
  $('.black-ball').css("top", e.pageY);
  $('.black-ball').css("left", e.pageX);
});

$(function () {
  $("#draggable01").draggable();
  $("#draggable02").draggable();
});

//팝업 스크립트

var modals = document.getElementsByClassName("modal");
var btns = document.getElementsByClassName("myBtn");
var spanes = document.getElementsByClassName("close");
var funcs = [];
 

function Modal(num) {
  return function() {
    btns[num].onclick =  function() {
        modals[num].style.display = "block";
        console.log(num);
    };
 
    spanes[num].onclick = function() {
        modals[num].style.display = "none";
    };
  };
}
 
for(var i = 0; i < btns.length; i++) {
  funcs[i] = Modal(i);
}
 
for(var j = 0; j < btns.length; j++) {
  funcs[j]();
}
 
window.onclick = function(event) {
  if (event.target.className == "modal") {
      event.target.style.display = "none";
  }
};