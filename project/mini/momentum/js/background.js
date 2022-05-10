'use strict'

//셀렉터
const images = [
	"0.avif",
	"1.avif",
	"2.avif"
]

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement('img'); //엘리먼트 생성

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);




