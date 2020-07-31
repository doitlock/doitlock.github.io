window.addEventListener('scroll', scrollWork)

const htmlElem = document.querySelector('html');
const headerElem = document.getElementById('header');

function scrollWork() {
  if (htmlElem.scrollTop > 0) {
    headerElem.classList.add('on');
  } else if (htmlElem.scrollTop < 230){
    headerElem.classList.remove('on');
  }
};

