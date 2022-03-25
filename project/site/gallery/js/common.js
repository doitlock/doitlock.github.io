'use strict';

let list = document.querySelectorAll('.img-tab .list');
let itemBox = document.querySelectorAll('.img-tab .product .itembox');
let mainBody = document.querySelector('body.main');

const fullBgTxt = document.querySelector('.full-bg h4.first');
const fullBgTxt02 = document.querySelector('.full-bg h4.second');
const imgPartFirst = document.querySelector('#img-part');
const imgPartSecond = document.querySelector('#img-part02');

/* scroll event */
$(document).on('scroll resize', function() {
    checkScroll();
    checkVisibility([imgPartFirst, imgPartSecond, fullBgTxt, fullBgTxt02]);

    let scrollTop = $(document).scrollTop();
    let imgTab = $('#img-tab').offset().top - 300;
    let imgPart = $('#img-part').offset().top - 300;
    let imgPart02 = $('#img-part02').offset().top - 300;
    let mainStore = $('#store').offset().top - 300;

    if (scrollTop > imgTab && scrollTop < mainStore) {
        mainBody.classList.add('change');
    } else {
        mainBody.classList.remove('change');
    }

    if (scrollTop > imgPart && scrollTop < imgPart02) {
        mainBody.classList.add('change02');
    } else {
        mainBody.classList.remove('change02');
    }
});



/* top btn */
$('#scroll-top').on('click', function() {
    $('html, body').stop(true).animate({'scrollTop': 0}, 500);
});



/* gallery filter */
for (let i = 0; i < list.length; i++) {
	list[i].addEventListener('click', function() {
		for (let j = 0; j < list.length; j++) {
			list[j].classList.remove('active');
		};
		this.classList.add('active');

		let dataFilter = this.getAttribute('data-filter');

		for (let k = 0; k < itemBox.length; k++) {
			itemBox[k].classList.remove('active');
			itemBox[k].classList.add('hide');

			if (itemBox[k].getAttribute('data-item') == dataFilter || dataFilter == 'all') {
				itemBox[k].classList.remove('hide');
				itemBox[k].classList.add('active');
			};			
		};
	});
};

/* qna */
const accordionItems = document.querySelectorAll('.qna-item');

accordionItems.forEach((item) => {
    const accordionHeader = item.querySelector('.qna-header');
    accordionHeader.addEventListener('click', () =>{
        const openItem = document.querySelector('.accordion-open');
        toggleItem(item);

        if(openItem && openItem!== item){
            toggleItem(openItem);
        };
    });
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
    let imgPartTop = $('#img-part').offset().top - 200;
    let drawSlideTop = $('#draw-slide').offset().top - 300;
    let imgTabTop = $('#img-tab').offset().top - 300;
    let asideMenu = $('#aside');
    let scrollTop = $('#scroll-top');

    if (scrollAmt > imgPartTop) {
        asideMenu.stop(true).animate({'opacity':1}, 100);
        scrollTop.stop(true).animate({'opacity':1}, 100);

        if (scrollAmt > drawSlideTop && scrollAmt < imgTabTop) { 
            //if문안에 if문을 작성해서 해결함!
            asideMenu.stop(true).animate({'opacity':0}, 100);
        }
    } else {
        asideMenu.stop(true).animate({'opacity':0}, 100);
        scrollTop.stop(true).animate({'opacity':0}, 100);
    }
    
    $('#aside').css({'top': (scrollAmt + 150) + 'px'});
};

/* scrollevent */
function checkVisibility(selector) {
    $(selector).each(function() {
        let $selector = $(this);
        let scrollTop = $(document).scrollTop();
        let min = $selector.offset().top - $(window).height();
        let max = $selector.offset().top + $selector.outerHeight();

        let textMoveMin = $('.text-move').offset().top - $(window).height();
        let textMoveMax = $('.text-move').offset().top + $selector.outerHeight();
        let textMove01 = $('.text-move h3.text01');
        let textMove02 = $('.text-move h3.text02');
        let textMove03 = $('.text-move h3.text03');

        if (scrollTop <= min) {
            $selector.removeClass('trans-up');
        } else if (scrollTop >= max) {
            $selector.removeClass('trans-up');
        } else {
            $selector.addClass('trans-up');
        }

        let scale = (((scrollTop - textMoveMin) * 500) / (textMoveMax - textMoveMin)) + 1;
        textMove01.css({'left': scale });
        textMove02.css({'left': -scale });
        textMove03.css({'left': scale });
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