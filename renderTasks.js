import {
    getStorageItems,
    emptyProtocol,
    removeItemFromStorage,
    addNewItemtoStorage,
    getId} from './dataStorage.js';

let taskTemplate = document.querySelector('#task-template').content;
let newItemTemplate = taskTemplate.querySelector('.todo-list-item');
let list = document.querySelector('.todo-list');
let items = list.children;
let emptyListMessage = document.querySelector('.empty-tasks');
let newItemForm = document.querySelector('.add-form');
let newItemTitle = newItemForm.querySelector('.add-form-input');

export function renderTasksFromStorage() {
    getStorageItems().forEach((item, index) => {
        renderTask(item, index);
      });
      for (let i = 0; i < items.length; i++) {
        addCheckHandler(items[i], i.toString(10));
      }
    toggleEmptyListMessage();    
}

export function renderTask(taskTitle, id) {
    if (taskTitle !== "") {
      let task = newItemTemplate.cloneNode(true);
      let taskDescription = task.querySelector('span');
      taskDescription.textContent = taskTitle;
      addCheckHandler(task, id);
      list.appendChild(task);   
    }
    return
};

function addCheckHandler(item, id) {
  
    let checkbox = item.querySelector('.todo-list-input');
    let removeButton = item.querySelector('.remove-button');
    
    checkbox.addEventListener('change', function () {
      let text = item.querySelector('span');
      if (text.classList.contains('red-text')) {
        text.classList.remove('red-text');
      } else {
        text.classList.add('red-text');  
      }
      
    });
  
  
    let arrayPosition = id;
    removeButton.addEventListener('click', function(){
      item.remove();
      removeItemFromStorage(arrayPosition);
      toggleEmptyListMessage();
    });
  };


function toggleEmptyListMessage() {
    if (items.length === 0) {
      emptyListMessage.classList.remove('hidden');
      emptyProtocol();
    } else {
      emptyListMessage.classList.add('hidden');
    }
  };

  newItemForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    let taskText = newItemTitle.value;
    addNewItemtoStorage(taskText);
    let id = getId();
    renderTask(taskText, id);
    toggleEmptyListMessage();
    newItemTitle.value = '';
  });