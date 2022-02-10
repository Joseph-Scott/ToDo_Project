const toDoList = [];

let toDo = prompt("What would you like to do?");

while (toDo == "") {
  if (toDo === "quit") break;
  if (toDo === "new") {
    toDo = prompt("Enter new todo");
  } else if (toDo === "list") {
  } else if (toDo === "delete") {
  }
}
