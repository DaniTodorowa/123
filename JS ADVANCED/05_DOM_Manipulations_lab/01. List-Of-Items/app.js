function addItem() {
   let inputElement = document.getElementById('newItemText');
   let liElement = document.createElement('li');
   liElement.innerHTML = inputElement.value;
   inputElement.value = "";
   let itemsListElements = document.getElementById('items');
   itemsListElements.appendChild(liElement);


}

// function addItem() {
//    let inputEl = document.getElementById('newItemText');
//    let newLiEl = document.createElement('li');
//    newLiEl.innerHTML = inputEl.value;
//    inputEl.value ="";
//    let itemsLiAll = document.getElementById('items');
//    itemsLiAll.appendChild(newLiEl);
//
// }


