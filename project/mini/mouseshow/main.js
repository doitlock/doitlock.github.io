'use strict';
		
const ball = document.querySelectorAll('.ball');
const cursor = document.querySelector('#cursor');

//눈알
document.onmousemove = function (event) {
	let x = event.clientX * 100 / window.innerWidth + "%"; 	
	let y = event.clientY * 100 / window.innerHeight + "%"; 

	for (let i = 0; i < ball.length; i++) {
		ball[i].style.left = x;
		ball[i].style.top = y;
	}
}

//커서
document.addEventListener('mousemove', function(event) {
  let x = event.clientX;
  let y = event.clientY;

  cursor.style.left = `${x}px`;
  cursor.style.top = `${y}px`;
})
