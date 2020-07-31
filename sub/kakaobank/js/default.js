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
const savingImg = document.querySelector('.saving_img');
const foreignImg = document.querySelector('.foreign_img');

function scrollWork() {
  if (htmlElem.scrollTop >= 1200 && htmlElem.scrollTop < 1900) {
    savingImg.classList.add('on');
  } else if (htmlElem.scrollTop >= 3500 && htmlElem.scrollTop < 4000) {
    foreignImg.classList.add('on');
  }
};

