import {
    getStorageItems,
    emptyProtocol,
    removeItemFromStorage,
    addNewItemtoStorage,
    getId} from './dataStorage.js';

var taskTemplate = document.querySelector('#task-template').content;
var newItemTemplate = taskTemplate.querySelector('.todo-list-item');
var list = document.querySelector('.todo-list');
var items = list.children;
var emptyListMessage = document.querySelector('.empty-tasks');
var newItemForm = document.querySelector('.add-form');
var newItemTitle = newItemForm.querySelector('.add-form-input');

export function renderTasksFromStorage() {
    getStorageItems().forEach((item, index) => {
        renderTask(item, index);
      });
      for (var i = 0; i < items.length; i++) {
        addCheckHandler(items[i], i.toString(10));
      }
    toggleEmptyListMessage();    
}

export function renderTask(taskTitle, id) {
    if (taskTitle !== "") {
      var task = newItemTemplate.cloneNode(true);
      var taskDescription = task.querySelector('span');
      taskDescription.textContent = taskTitle;
      addCheckHandler(task, id);
      list.appendChild(task);   
    }
    return
};

function addCheckHandler(item, id) {
  
    var checkbox = item.querySelector('.todo-list-input');
    var removeButton = item.querySelector('.remove-button');
    
    checkbox.addEventListener('change', function () {
      var text = item.querySelector('span');
      if (text.classList.contains('red-text')) {
        text.classList.remove('red-text');
      } else {
        text.classList.add('red-text');  
      }
      
    });
  
  
    var arrayPosition = id;
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
    var taskText = newItemTitle.value;
    addNewItemtoStorage(taskText);
    var id = getId();
    renderTask(taskText, id);
    toggleEmptyListMessage();
    newItemTitle.value = '';
  });