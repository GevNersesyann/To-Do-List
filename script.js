document.getElementById("add").addEventListener("click", addToDo);
document
  .getElementById("todo-input")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addToDo();
    }
  });

function addToDo() {
  const ul = document.getElementById("todo-list");
  const inputText = document.getElementById("todo-input").value.trim();

  if (inputText === "") {
    alert("Please enter a valid task!");
    return;
  }

  const li = document.createElement("li");
  const p = document.createElement("p");
  const removeButton = document.createElement("button");

  p.textContent = inputText;

  li.appendChild(p);
  li.appendChild(removeButton);
  ul.appendChild(li);

  removeButton.textContent = "Remove";
  removeButton.addEventListener("click", function () {
    ul.removeChild(li);
  });

  li.addEventListener("click", function () {
    p.classList.toggle("completed");
  });

  document.getElementById("todo-input").value = "";
}
