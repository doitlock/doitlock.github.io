'use strict'

let lightBtn = document.getElementById('light-btn');

//smooth scroll
function go_scroll(id_name)	{
	var top_offs = $('#'+id_name).offset().top;
	$( 'html, body' ).stop().animate( { scrollTop : top_offs } );
}

//dark mode
lightBtn.onclick = function() {
	lightBtn.classList.toggle('light-btn-on');
	document.body.classList.toggle('light-theme');

	if (localStorage.getItem('theme') == 'dark') {
		localStorage.setItem('theme', 'light');
	} else {
		localStorage.setItem('theme', 'dark');
	}
}

if (localStorage.getItem('theme') == 'dark') {
	lightBtn.classList.remove('light-btn-on');
	document.body.classList.remove('light-theme');
} else if(localStorage.getItem('theme') == 'light') {
	lightBtn.classList.add('light-btn-on');
	document.body.classList.add('light-theme');
} else {
	localStorage.setItem('theme', 'dark');
}