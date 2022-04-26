'use strict'

const dogBtn = document.getElementById('cat-btn');
const dogImg = document.getElementById('dog-img');

dogBtn.addEventListener('click', getRandomCat);

function getRandomCat() {
	fetch('https://random.dog/woof.json')
		.then(res => res.json())
		.then(data => {
			if(data.url.includes('.mp4')) {
				getRandomCat();
			}
			else {
				dogImg.innerHTML = `<img src=${data.url} alt="dog" class="sidebar-ads" />`;
			}
		});
}
