$('.slide_list').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

/* var _scrollTop = window.scrollY || document.documentElement.scrollTop;
console.log(_scrollTop) */

window.addEventListener('scroll', scrollWork)

const htmlElem = document.querySelector('html');
const withImg = document.querySelector('.with_img');
const savingImg = document.querySelector('.saving_img');
const moimImg = document.querySelector('.moim_img');
const weeks26Img = document.querySelector('.weeks26_img');
const foreignImg = document.querySelector('.foreign_img');

function scrollWork() {
  if (htmlElem.scrollTop >= 450 && htmlElem.scrollTop < 1200) {
    withImg.classList.add('on');
  } else if (htmlElem.scrollTop >= 1200 && htmlElem.scrollTop < 1900) {
    savingImg.classList.add('on');
  } else if (htmlElem.scrollTop >= 2000 && htmlElem.scrollTop < 2500) {
    moimImg.classList.add('on');
  } else if (htmlElem.scrollTop >= 2800 && htmlElem.scrollTop < 3400) {
    weeks26Img.classList.add('on');
  } else if (htmlElem.scrollTop >= 3500 && htmlElem.scrollTop < 4000) {
    foreignImg.classList.add('on');
  }
};

