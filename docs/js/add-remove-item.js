 let add = document.getElementById('addItem');
 let remove = document.getElementById('removeItem');
 
 add.addEventListener("click", addItem);
 remove.addEventListener("click", removeItem);

 function addItem() {
     alert("add Item");
 }

 function removeItem() {
     alert("remove Item");
 }