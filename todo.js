const toDoList = [];

let toDo = prompt("What would you like to do?");

while (toDo == "") {
  if (toDo === "quit") break;
}
if (toDo === "new") {
  toDo = prompt("Enter new todo");
  toDoList.push(toDo);
} else if (toDo === "list") {
  console.log(toDoList);
} else if (toDo === "delete") {
  toDo = prompt("which todo would you like to delete?");
  toDo = toDoList.splice(toDo);
}
