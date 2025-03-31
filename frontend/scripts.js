var taskInput = document.getElementById("InputTarefa");
var addButton = document.getElementsByTagName("button")[0];
var incompleteTasksHolder = document.getElementById("ListaFazer");
var completedTasksHolder = document.getElementById("ListaFeita");

var createNewTaskElement = function(taskString) {
  var listItem = document.createElement("li");

  var checkBox = document.createElement("input"); 

  var label = document.createElement("label");

  var editInput = document.createElement("input");
  var editButton = document.createElement("button");
  var deleteButton = document.createElement("button");
  
  
  checkBox.type = "checkbox";
  editInput.type = "text";
  
  editButton.innerText = "Edit";
  editButton.className = "edit";
  deleteButton.innerText = "Delete";
  deleteButton.className = "delete";
  
  label.innerText = taskString;
  

  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);

  return listItem;
}

var addTask = function() {
    console.log("Add task...");
    var listItem = createNewTaskElement(taskInput.value);
    incompleteTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);  
    
    taskInput.value = "";   
  }
  
  var editTask = function() {
    console.log("Edit Task...");
    
    var listItem = this.parentNode;
    
    var editInput = listItem.querySelector("input[type=text]")
    var label = listItem.querySelector("label");
    
    var containsClass = listItem.classList.contains("editMode");
    if(containsClass) {
      label.innerText = editInput.value;
    } else {
      editInput.value = label.innerText;
    }
    
    listItem.classList.toggle("editMode");
   
  }