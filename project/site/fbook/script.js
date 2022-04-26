'use strict'

const settingsMenu = document.querySelector('.settings-menu');
const darkBtn = document.getElementById('dark-btn');
const clock = document.getElementById('clock');
const todayDate = document.getElementById('today-date');

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

//set,get item에 들어가는 theme등 텍스트는 걍 아무거나 써도 된다.
if (localStorage.getItem('bgmode') == 'light') {
	darkBtn.classList.remove('dark-btn-on');
	document.body.classList.remove('dark-theme');
} else if(localStorage.getItem('bgmode') == 'dark') {
	darkBtn.classList.add('dark-btn-on');
	document.body.classList.add('dark-theme');
} else {
	localStorage.setItem('bgmode', 'light');
}

//현재 시간
function getClock() {
	const date = new Date();
	const hours = String(date.getHours()).padStart(2, '0');
	const minutes = String(date.getMinutes()).padStart(2, '0');
	const seconds = String(date.getSeconds()).padStart(2, '0');
	clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();//밑에꺼랑 순서 중요
setInterval(getClock, 1000); //순서중요

//오늘 날짜
function getDate() {
	const date = new Date();
	let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
	todayDate.innerText = String(date.toLocaleDateString('ko-KR', options));
}

getDate();

