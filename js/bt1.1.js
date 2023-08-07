let todos = [];
let input = document.getElementById("input");
let button = document.getElementById("button");
let list = document.getElementById("list");

button.addEventListener("click", function () {
    let todo = input.value;
    if (todo) {
        todos.push(todo);
        input.value = "";
        renderList();
    }
});

function renderList() {
    list.innerHTML = "";
    for (let i = 0; i < todos.length; i++) {
        let li = document.createElement("li");
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Xóa";
        deleteButton.addEventListener("click", function () {
            todos.splice(i, 1);
            renderList();
        });
        let editButton = document.createElement("button");
        editButton.textContent = "Sửa";
        editButton.addEventListener("click", function () {
            let newTodo = input.value;
            if (newTodo) {
                todos[i] = newTodo;
                input.value = "";
                renderList();
            }
        });
        li.textContent = todos[i];
        li.appendChild(deleteButton);
        li.appendChild(editButton);
        list.appendChild(li);
    }
}
