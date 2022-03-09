'use strict';

let list = document.querySelectorAll('.img-tab .list');
let itemBox = document.querySelectorAll('.img-tab .product .itembox');
let mainBody = document.querySelector('body.main');
let scrollTop = $('body, html').scrollTop();


/* 스크롤이벤트 */
// $(window).scroll(function() {	
//     let imgTab = $('#img-tab').offset().top - 100;
//     let mainQna = $('#qna').offset().top - 100;

//     if (scrollTop > imgTab && scrollTop < mainQna) {
//         mainBody.classList.add('change');
//     }
// });

/* 갤러리필터 */
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

accordionItems.forEach((item) =>{
    const accordionHeader = item.querySelector('.qna-header');
    accordionHeader.addEventListener('click', () =>{
        const openItem = document.querySelector('.accordion-open');
        toggleItem(item);

        if(openItem && openItem!== item){
            toggleItem(openItem);
        };
    });
});

const toggleItem = (item) =>{
    const accordionContent = item.querySelector('.qna-content');
    if(item.classList.contains('accordion-open')){
        accordionContent.removeAttribute('style');
        item.classList.remove('accordion-open');
    }else{
        accordionContent.style.height = accordionContent.scrollHeight + 'px';
        item.classList.add('accordion-open');
    };
};

