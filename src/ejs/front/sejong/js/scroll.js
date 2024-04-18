'use strict';

var numPage = $('section.page').length;
var pageNow = 0;
var pagePrev = 0;
var pageNext = 0;
var isBlocked = false;
var timerId = '';

showPage(1);
checkPageNow();

$(window).on('scroll resize', function() {
  checkPageNow();
});

$('.side_menu ul > li > a').on('click', function() {
  var index = $('.side_menu ul > li').index($(this).parent());
  showPage(index + 1);
});

window.addEventListener('wheel', function(e) {
  e.preventDefault();
  clearTimeout(timerId);
  timerId = setTimeout(function() {isBlocked = false;}, 100);
  if (isBlocked === true) return false;
  isBlocked = true;
  var delta = e.deltaY;
  if (delta > 0) {
    showPage(pageNext);
  } else {
    showPage(pagePrev);
  }
}, {passive: false});

function showPage(n) {
  var scrollAmt = $('section.page:eq(' + (n - 1) + ')').offset().top;
  $('html').stop(true).animate({'scrollTop': scrollAmt}, 500);
}

function checkPageNow() {
  var scrollAmt = $(document).scrollTop();
  var n = 0;
  $('section.page').each(function(i) {
    var min = $(this).offset().top - ($(window).height() / 2);
    var max = $(this).offset().top + $(this).outerHeight(true) - ($(window).height() / 2);
    // console.log(i + ' -> ' + min + '~' + max);
    if (scrollAmt > min && scrollAmt <= max) {
      n = i + 1;
      return false;
    }
  });
  $('.side_menu ul > li').removeClass('on');
  $('.side_menu ul > li:eq(' + (n - 1) + ')').addClass('on');
  pageNow = n;
  pagePrev = (n <= 1) ? 1 : (n - 1);
  pageNext = (n >= numPage) ? numPage : (n + 1);
}