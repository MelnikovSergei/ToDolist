let storageItems = [];
let itemsAttribute = {
    isDone: false,
    title: ""
}

export function initialStorage(){

    var stored = localStorage.getItem('items');

    if (stored){
    var drawItemsArray = JSON.parse(stored);
    storageItems = drawItemsArray.filter(n => n);
    localStorage.setItem('items', JSON.stringify(storageItems));
    }
}

export function emptyProtocol() {
    storageItems = [];
    localStorage.setItem('items', JSON.stringify(storageItems));
}

export function removeItemFromStorage(arrayPosition) {
    storageItems[arrayPosition] = ""; 
    localStorage.setItem('items', JSON.stringify(storageItems));
}

export function addNewItemtoStorage(taskText) {
    storageItems.push(taskText);
    localStorage.setItem('items', JSON.stringify(storageItems));
}

export function getId() {
    return (JSON.parse(localStorage.getItem('items'))).length - 1;
}

export function getstorageItems() {
    return storageItems;
}