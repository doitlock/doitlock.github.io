'use strict';

// setDrag['.drag-box .box1', '.drag-box .box2', '.drag-box .box3','.drag-box .box4','.drag-box .box5','.drag-box .box6','.drag-box .box7','.drag-box .box8','.drag-box .box9','.drag-box .box10','.drag-box .box11','.drag-box .box12'];

let dragImg = document.querySelectorAll('.drag-box a');


function setDrag(selector) {
  var startX = 0;
  var startY = 0;
  var delX = 0;
  var delY = 0;
  var offsetX = 0;
  var offsetY = 0;
  var isBlocked = false;

  $(selector).on('mousedown', function(e) {
    e.preventDefault();
    startX = e.clientX;
    startY = e.clientY;
    offsetX = $(this).position().left;
    offsetY = $(this).position().top;

    $(document).on('mousemove', function(e) {
      delX = e.clientX - startX;
      delY = e.clientY - startY;
      $(selector).css({'left': (offsetX + delX) + 'px', 'top': (offsetY + delY) + 'px'});
      if (Math.abs(delX) > 5 || Math.abs(delY) > 5) isBlocked = true;
    });

    $(document).on('mouseup', function(e) {
      $(document).off('mousemove mouseup');
    });
  });
  
  $(selector).on('click', function(e) {
    if (isBlocked === true) {
      e.preventDefault();
      isBlocked = false;
    }
  });
}

for (let i = 0; i < dragImg.length; i++) {
  
  const field = document.querySelector('.drag-box');
  const fieldRect = field.getBoundingClientRect();
  const x1 = 0;
  const y1 = 0;
  const x2 = fieldRect.width;
	const y2 = fieldRect.height;

  const x = randomNumber(x1, x2);
  const y = randomNumber(y1, y2);

  dragImg[i].style.left = `${x}px`;
  dragImg[i].style.top = `${y}px`;

	setDrag(dragImg[i]);
}

function randomNumber(min, max) {
	return Math.random() * (max - min) + min;
}