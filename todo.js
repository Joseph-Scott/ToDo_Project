/* THIS WAS MY OWN ATTEMPT AT A TODO LIST */

// let toDo = prompt("What would you like to do?");

// const toDoList = [""];

// while (toDo !== "quit") {
//   if (toDo === "new") {
//     toDo = prompt("Enter new todo");
//     toDoList.push(toDo);
//   } else if (toDo === "list") {
//     console.log(toDoList);
//   } else if (toDo === "delete") {
//     toDo = prompt("which todo would you like to delete?");
//     toDo = toDoList.splice(toDo);
//   }
// }

// if (toDo === "quit") {
//   break;
//   console.log("GOODBYE!");
// }

/* SOLUTION */

let input = prompt("What would you like to do?");

const todos = [""];

while (input !== "quit") {
  if (input === "list") {
    console.log("------------------");
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i}: ${todos[i]}`);
    }
    console.log("------------------");
  } else if (input === "new") {
    const newToDo = prompt("Okay, what is the new todo?");
    todos.push(newToDo);
    console.log(`${newToDo} add to the list!`);
  } else if (input === "delete") {
    const index = parseInt(prompt("Okay, enter an index to delete:"));
    const deleted = todos.splice(index, 1);
    console.log(`Okay, deleted ${deleted[0]}`);
  }
  input = prompt("What would you like to do?");
}
console.log("OKAY, QUIT THE APP");
