'use strict'

let settingsMenu = document.querySelector('.settings-menu');
let darkBtn = document.getElementById('dark-btn');

function settingsMenuToggle() {
	settingsMenu.classList.toggle('settings-menu-height');
}

//dark mode
darkBtn.onclick = function() {
	darkBtn.classList.toggle('dark-btn-on');
	document.body.classList.toggle('dark-theme');

	if (localStorage.getItem('bgmode') == 'light') {
		localStorage.setItem('bgmode', 'dark');
	} else {
		localStorage.setItem('bgmode', 'light');
	}
}

if (localStorage.getItem('bgmode') == 'light') {
	darkBtn.classList.remove('dark-btn-on');
	document.body.classList.remove('dark-theme');
} else if(localStorage.getItem('bgmode') == 'dark') {
	darkBtn.classList.add('dark-btn-on');
	document.body.classList.add('dark-theme');
} else {
	localStorage.setItem('bgmode', 'light');
}

//셋,겟타임에 들어가는 theme등 텍스트는 걍 아무거나 써도 됨. 메소드 아님