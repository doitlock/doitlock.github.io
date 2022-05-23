//json 파일로부터 아이템을 동적으로 받아와야 함
function loadItems() {
	return fetch('data/data.json')
	.then(response => response.json())
	.then(json => json.items);
}

//update the list with the given items
function displayItems(items) {
	const container = document.querySelector('.items');
	container.innerHTML = items.map(item => createHTMLString(item)).join('');
}

//create html list item from the given data item
function createHTMLString(item) {
	return `
	<li class="item">
		<img src="${item.image}" alt="${item.type}" class="item__thumnail" />
		<span class="item__description">${item.gender}, ${item.size}</span>
	</li>
	`;
}

function onButtonClick(event, items) {
	//dataset html5에서 추가된 속성. data-속성명="속성값". data- 로 시작하는 속성들을 하나로 모아 맵map으로 따로 모아서 관리한다.
	const dataset = event.target.dataset;
	const key = dataset.key;
	const value = dataset.value;

	if(key == null || value == null) {
		return; //둘다 눌-이면 빨리 함수를 끝내고
	} 

	displayItems(items.filter(item => item[key] === value));
}

function setEventListeners(items) {
	const logo = document.querySelector('.logo');
	const buttons = document.querySelector('.buttons');
	logo.addEventListener('click', () => displayItems(items)); //이벤트 위임
	buttons.addEventListener('click', event => onButtonClick(event, items));
}

//main
loadItems()
.then(items => {
	displayItems(items);
	setEventListeners(items);
})
.catch(console.log);