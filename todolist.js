function addTask() {
  let input = document.getElementById("taskInput");
  let taskText = input.value.trim();

  if (taskText === "") return alert("Enter a task!");

  let li = document.createElement("li");
  li.innerHTML = `
    ${taskText}
    <button class="delete-btn" onclick="deleteTask(this)">X</button>
  `;

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}

function deleteTask(btn) {
  btn.parentElement.remove();
}
