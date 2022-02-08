'use strict'

//부드러운스크롤링크이동
function go_scroll(id_name)	{
	var top_offs = $('#'+id_name).offset().top;
	$( 'html, body' ).stop().animate( { scrollTop : top_offs } );
}

