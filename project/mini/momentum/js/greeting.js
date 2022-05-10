'use strict'

//셀렉터
const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const HIDDEN_CALSSNAME = 'hidden';
const USERNAME_KEY = 'username'

const saveUserName = localStorage.getItem('USERNAME_KEY');

//함수
function onLoginSubmit(evnet) {
	evnet.preventDefault();
	loginForm.classList.add(HIDDEN_CALSSNAME); //이름 입력하면 폼양식이 사라지도록!
	const username = loginInput.value;
	localStorage.setItem('USERNAME_KEY', username);
	//console.log(username);
	paintGreetings(username);
};

function paintGreetings(saveUserName) {
	greeting.classList.remove(HIDDEN_CALSSNAME);
	greeting.innerText = `Hello ${saveUserName}`;
}


if (saveUserName === null) {
	//유저네임이 비어있으면 폼양식 그대로 보이게
	loginForm.classList.remove(HIDDEN_CALSSNAME);
	loginForm.addEventListener('submit', onLoginSubmit);
} else {
	paintGreetings(saveUserName);
}