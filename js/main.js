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

//header text
const headText = document.querySelector('.fancy');
const strHeadText = headText.textContent;
const splitHeadText = strHeadText.split(""); //글자 조각
headText.textContent = "";

let char = 0;
let timer = setInterval(onTik, 40);

for (let i = 0; i < splitHeadText.length; i++) {
	headText.innerHTML += `<span>${splitHeadText[i]}</span>`	
}

function onTik() {
	const span = headText.querySelectorAll('span')[char];
	span.classList.add('fade');
	char++;

	if(char === splitHeadText.length) {
		complete();
		return;
	}
}

function complete() {
	clearInterval(timer);
	timer = null;
}