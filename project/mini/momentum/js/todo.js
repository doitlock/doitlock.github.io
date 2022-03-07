'use strict'

//셀렉터
const todoForm = document.getElementById('todo-form');
const todoInput = document.querySelector('#todo-form input');
const todoList = document.getElementById('todo-list');
const toDos = [];

function saveTodos() {
	localStorage.setItem('todos', JSON.stringify(toDos)); //toDos배열을 담는다
}

function deleteTodo(event) {
	const li = event.target.parentElement; //x버튼의 부모인 li를 삭제
	li.remove();
}

function paintTodo(newTodo) {
	const li = document.createElement('li');
	const span = document.createElement('span');
	const button = document.createElement('button');

	button.innerText = '❌';
	button.addEventListener('click', deleteTodo);

	li.appendChild(span);
	li.appendChild(button);
	span.innerText = newTodo;
	todoList.appendChild(li);
}

function handleTodoSubmit(event) {
	event.preventDefault();
	const newTodo = todoInput.value;
	todoInput.value = "";
	toDos.push(newTodo);
	paintTodo(newTodo);
	saveTodos();
}

todoForm.addEventListener('submit', handleTodoSubmit);








