// common script
'use strict'

const header = $('#header');



$(document).scroll(function(){		
	if($(document).scrollTop() > 50) {	
		$(header).addClass("on");
	} else {
		$(header).removeClass("on");
	}
})	

//header에 hover하면 active클래스 추가
$(header).hover(function() {
	$(this).addClass("active");
}, function(){
	$(this).removeClass("active");
});

//부드러운스크롤링크이동
function go_scroll(id_name)	{
	let top_offs = $('#'+id_name).offset().top;
	$( 'html, body' ).stop().animate( { scrollTop : top_offs } );
};

