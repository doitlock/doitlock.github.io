'use strict'

//셀렉터
const todoForm = document.getElementById('todo-form');
const todoInput = document.querySelector('#todo-form input');
const todoList = document.getElementById('todo-list');

const TODOS_KEY = "todos"; //로컬스토리지에 담기는 키값 이름. 헷갈리지 않기 위해 전부 대문자.

let toDos = [];

 //브라우저에 todo내용을 기록. localStorage에는 오직 텍스트만 저장할 수 있다. JSON.stringify은 js코드를 스트링으로 바꿔준다.
function saveTodos() {
	localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //toDos라는 array를 담고 스트링으로 바꿈.
}

function deleteTodo(event) { //event를 입력해야 어떤 버튼을 클릭했는지 알 수 있음
	const li = event.target.parentElement; //x버튼의 부모선택자. li를 삭제
	li.remove();
	toDos = toDos.filter(todo => todo.id !== parseInt(li.id)); 
	//todo는 todos db에 있는 요소 중 하나. 클릭한 li.id와 다른 todo는 남긴다.
	//todo.id는 num타입, li.id는 string타입이다.parseInt는 문자열을 숫자로 바꾼다.
	saveTodos();
}

/*
filter 사용방법

EX01) 바나나 빼기.
const arr = ["pizza", "banana", "tomato"];
function sexyFilter(food) { return food !== "banana"};
arr.filter(sexyFilter); // (2)["pizza", "tomato"]

EX02) 1000보다 큰 수는 지우기.
const arr = [1234,5454,233,567,46,897,5712];
function sexyFunction(num) { return num <= 1000};
arr.filter(sexyFunction); // (4)[233,567,46,897]

*/

function paintTodo(newTodo) {
	const li = document.createElement('li');
	const span = document.createElement('span');
	const button = document.createElement('button');

	button.innerText = '❌';
	button.addEventListener('click', deleteTodo);

	li.appendChild(span);
	li.appendChild(button);
	span.innerText = newTodo.text;
	todoList.appendChild(li);
}

function handleTodoSubmit(event) {
	event.preventDefault();
	const newTodo = todoInput.value;
	todoInput.value = "";
	const newTodoObj = {
		text: newTodo,
		id: Date.now(), //각id를 가지도록, 각각 li item을 구별하도록
	}
	toDos.push(newTodoObj);
	paintTodo(newTodoObj);
	saveTodos();
}

todoForm.addEventListener('submit', handleTodoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
	//스트링을 JSON.parse안에 넣으면 실제로 무언가를 할 수 있는 배열을 얻는다. 
	const parsedToDos = JSON.parse(savedToDos);
	toDos = parsedToDos; //이전에 작성해둔 todo를 저장한다. 덮어쓰지 못하게. 
	parsedToDos.forEach(paintTodo); //array기 때문에 foreach필요
}

//array에서 뭔가를 삭제할 때, 실제로 array에서 삭제된 것이 아니다. 지우고 싶은 item을 삭제하고 새로운 array가 생성된다. 지우고 싶은 item을 제외한다! filter라는 함수를 사용하면 됨.필터는 true를 리턴해야 한다. 






