'use strict';

let mainBody = document.querySelector('body.main');


/* scroll event */
$(document).on('scroll resize', function() {
    checkScroll();

    let scrollTop = $(document).scrollTop();
    let textMove = $('.text-move');

    let textMoveMin = textMove.offset().top - $(window).height();
    let textMoveMax = textMove.offset().top + textMove.outerHeight();
    let textMove01 = $('.text-move h3.text01');
    let textMove02 = $('.text-move h3.text02');
    let textMove03 = $('.text-move h3.text03');

    let scale = (((scrollTop - textMoveMin) * 500) / (textMoveMax - textMoveMin)) + 1;
    textMove01.css({'left': scale});
    textMove02.css({'left': -scale});
    textMove03.css({'left': scale});
});

/* top btn */
$('#scroll-top').on('click', function() {
    $('html, body').stop(true).animate({'scrollTop': 0}, 500);
});

const toggleItem = (item) => {
    const accordionContent = item.querySelector('.qna-content');
    if(item.classList.contains('accordion-open')){
        accordionContent.removeAttribute('style');
        item.classList.remove('accordion-open');
    }else{
        accordionContent.style.height = accordionContent.scrollHeight + 'px';
        item.classList.add('accordion-open');
    };
};


/* aside menu */
function checkScroll() {
    let scrollAmt = $(document).scrollTop();
    let asideMenu = $('#aside');
    let scrollTop = $('#scroll-top');

    asideMenu.stop(true).animate({'opacity':0, 'top': (scrollAmt + 150) + 'px'}, 100);
    scrollTop.stop(true).animate({'opacity':0}, 100);

};

/* scrollevent */
function checkVisibility(selector) {
    $(selector).each(function() {
        let $selector = $(this);
        let scrollTop = $(document).scrollTop();
        let min = $selector.offset().top - $(window).height();
        let max = $selector.offset().top + $selector.outerHeight();

        if (scrollTop <= min) {
            $selector.removeClass('trans-up');
        } else if (scrollTop >= max) {
            $selector.removeClass('trans-up');
        } else {
            $selector.addClass('trans-up');
        }


    });
}

/* popup */
function openLayerPopup(id, width, height, el) {
    let $popup = $('#' + id);
    let widthPopup = (width === undefined) ? 600 : width;
    let heightPopup = (height === undefined) ? 800 : height;
    let $return = $(el);
    
    $('.layer-mask').addClass('on');
    $popup.css({'width': widthPopup + 'px', 'height': heightPopup + 'px'}).attr({'tabindex': 0}).addClass('on');
    $popup.before('<a href="#"></a>').after('<a href="#"></a>');
    $popup.find('.last').attr({'tabindex': 0});
    $popup.trigger('focus');
    
    $popup.find('.close').on('click', function() {close();});
    $popup.prev().on('focus', function() {
      $popup.find('.last').trigger('focus');
    });
    $popup.next().on('focus', function() {
      $popup.trigger('focus');
    });
    
    function close() {
      $return.trigger('focus');
      $('.layer-mask').removeClass('on');
      $popup.removeClass('on');
      $popup.prev().remove();
      $popup.next().remove();
      $popup.find('.close').off('click');
    }
  }