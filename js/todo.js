const toDoForm = document.querySelector('.todo__form');
const toDoInput = toDoForm.querySelector('.todo__input');
const toDoList = document.querySelector('.todo__ul');
const TODOS_LS = 'todos';

let toDos = [];

function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;

    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo) {
        return toDo.id !== parseInt(li.id);
    });

    toDos = cleanToDos;
    saveToDos();
}//deleteToDo

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}//saveToDos

function paintToDo(text) {
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    const span = document.createElement('span');
    const newId = toDos.length + 1;

    delBtn.innerText = '❌';
    delBtn.classList.add('background-none');
    delBtn.addEventListener('click', deleteToDo);

    span.innerText = text;

    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;

    toDoList.appendChild(li);

    const toDoObj = {
        text: text,
        id: newId
    };

    toDos.push(toDoObj);
    saveToDos();
}//paintToDo

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;

    paintToDo(currentValue);
    toDoInput.value = '';
}//handleSubmit

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);

    if (loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo) {
            paintToDo(toDo.text);
        });
    }
}//loadToDos

function init() {
    loadToDos();
    toDoForm.addEventListener('submit', handleSubmit);
}//init

init();