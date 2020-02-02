import {
  initialStorage,
  emptyProtocol,
  removeItemFromStorage,
  addNewItemtoStorage,
  getId,
  getstorageItems} from './dataStorage.js';

var list = document.querySelector('.todo-list');
var items = list.children;
var emptyListMessage = document.querySelector('.empty-tasks');
var newItemForm = document.querySelector('.add-form');
var newItemTitle = newItemForm.querySelector('.add-form-input');
var taskTemplate = document.querySelector('#task-template').content;
var newItemTemplate = taskTemplate.querySelector('.todo-list-item');

initialStorage();

var doMaker = function (taskTitle, id) {
  if (taskTitle !== "") {
    var task = newItemTemplate.cloneNode(true);
    var taskDescription = task.querySelector('span');
    taskDescription.textContent = taskTitle;
    addCheckHandler(task, id);
    list.appendChild(task);   
  }
  return
};

var toggleEmptyListMessage = function () {
  if (items.length === 0) {
    emptyListMessage.classList.remove('hidden');
    emptyProtocol();
  } else {
    emptyListMessage.classList.add('hidden');
  }
};

var addCheckHandler = function (item, id) {
  
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
    console.log(arrayPosition);
    item.remove();
    removeItemFromStorage(arrayPosition);
    toggleEmptyListMessage();
  });
};

for (var i = 0; i < items.length; i++) {
  addCheckHandler(items[i], i.toString(10));
}

getstorageItems().forEach((item, index) => {
  doMaker(item, index);
});
toggleEmptyListMessage();

newItemForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  var taskText = newItemTitle.value;
  addNewItemtoStorage(taskText);
  var id = getId();
  doMaker(taskText, id);
  toggleEmptyListMessage();
  newItemTitle.value = '';
});
