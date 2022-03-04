// common script
'use strict'

const header = document.getElementById('header');

//부드러운스크롤링크이동
function go_scroll(id_name)	{
	let top_offs = $('#'+id_name).offset().top;
	$( 'html, body' ).stop().animate( { scrollTop : top_offs } );
};

//header에 hover하면 active클래스 추가




