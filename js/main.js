'use strict'

//smooth scroll
function go_scroll(id_name)	{
	var top_offs = $('#'+id_name).offset().top;
	$( 'html, body' ).stop().animate( { scrollTop : top_offs } );
}