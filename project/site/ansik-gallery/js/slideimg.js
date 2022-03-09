'use strict';

setImageSlide('#intro-slide', 1, true, 2000);
setImageSlide('#image-slide2', 3, true, 2000);

function setImageSlide(selector, first, status, speed) {
  $(selector).each(function() {
    var $selector = $(this);
    var numSlide = $selector.find('.slide > li').length;
    var slideNow = 0;
    var slidePrev = 0;
    var slideNext = 0;
    var slideFirst = first;
    var timerId = '';
    var timerSpeed = speed;
    var isTimerOn = status;
    var startX = 0;
    var startY = 0;
    var delX = 0;
    var delY = 0;
    var offsetX = 0;
    var offsetY = 0;
    var isBlocked = false;

    $selector.find('.slide > li').each(function(i) {
      $(this).css({'left': (i * 100) + '%', 'display': 'block'});
      $selector.find('.indicator').append('<li><a href="javascript:;">' + (i + 1) + '번 슬라이드</a></li>\n');
    });
    if (isTimerOn === true) {
      $selector.find('.control a.play').addClass('on');
    } else {
      $selector.find('.control a.play').removeClass('on');
    }
    showSlide(slideFirst);

    $selector.find('.indicator li a').on('click', function() {
      var index = $selector.find('.indicator li').index($(this).parent());
      showSlide(index + 1);
    });

    $selector.find('.slide li a').on('focus', function() {
      var index = $selector.find('.slide li').index($(this).parent());
      $selector.find('div.box').scrollLeft(0);
      showSlide(index + 1);
    });

    $selector.find('.control a.prev').on('click', function() {
      $(this).find('img').stop(true).animate({'left': '-10px'}, 30).animate({'left': '0px'}, 100);
      showSlide(slidePrev);
    });

    $selector.find('.control a.next').on('click', function() {
      $(this).find('img').stop(true).animate({'right': '-10px'}, 30).animate({'right': '0px'}, 100);
      showSlide(slideNext);
    });

    $selector.find('.control a.play').on('click', function() {
      if (isTimerOn === true) {
        stopTimer();
      } else {
        startTimer();
      }
    });
    
    $selector.find('.slide').on('mousedown', function(e) {
      e.preventDefault();
      $(this).css({'transition': 'none'});
      clearTimeout(timerId);
      $selector.find('span.bar').removeClass('on');
      startX = e.clientX;
      startY = e.clientY;
      offsetX = $(this).position().left;
      offsetY = $(this).position().top;

      $(document).on('mousemove', function(e) {
        delX = e.clientX - startX;
        delY = e.clientY - startY;
        delY = 0;
        if ((slideNow === 1 && delX > 0) || (slideNow === numSlide && delX < 0)) {
          delX = delX / 20;
        }
        $selector.find('.slide').css({'left': (offsetX + delX) + 'px', 'top': (offsetY + delY) + 'px'});
        if (Math.abs(delX) > 5 || Math.abs(delY) > 5) isBlocked = true;
      });

      $(document).on('mouseup', function(e) {
        $(document).off('mousemove mouseup');
        if (delX < -50 && slideNow !== numSlide) {
          showSlide(slideNext);
        } else if (delX > 50 && slideNow !== 1) {
          showSlide(slidePrev);
        } else {
          showSlide(slideNow);
        }
        delX = delY = 0;
      });
    });
    
    $selector.find('.slide > li > a').on('click', function(e) {
      if (isBlocked === true) {
        e.preventDefault();
        isBlocked = false;
      }
    });


    function startTimer() {
      timerId = setTimeout(function() {showSlide(slideNext);}, timerSpeed);
      $selector.find('span.bar').css({'animation-duration': timerSpeed + 'ms'}).addClass('on');
      $selector.find('.control a.play').addClass('on');
      isTimerOn = true;
    }

    function stopTimer() {
      clearTimeout(timerId);
      $selector.find('span.bar').removeClass('on');
      $selector.find('.control a.play').removeClass('on');
      isTimerOn = false;
    }

    function resetTimer() {
      clearTimeout(timerId);
      $selector.find('span.bar').removeClass('on');
      if (isTimerOn === true) {
        timerId = setTimeout(function() {showSlide(slideNext);}, timerSpeed);
        setTimeout(function() {$selector.find('span.bar').css({'animation-duration': (timerSpeed - 50) + 'ms'}).addClass('on');}, 50);
      }
    }

    function showSlide(n) {
      resetTimer();
      $selector.find('.slide').css({'transition': 'left 0.3s', 'left': (-(n - 1) * 100) + '%'});
      $selector.find('.indicator li').removeClass('on');
      $selector.find('.indicator li:eq(' + (n - 1) + ')').addClass('on');
      slideNow = n;
      slidePrev = (n === 1) ? numSlide : (n - 1);
      slideNext = (n === numSlide) ? 1 : (n + 1);
      // console.log(slidePrev + ' / ' + slideNow + ' / ' + slideNext);
    }
    
  });
}
