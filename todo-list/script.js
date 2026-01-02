const input = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

// --- 1. Load data as soon as the script runs ---
window.onload = loadData;

function addTask(e) {
    if (e) e.preventDefault();
    
    const taskValue = input.value;
    if (taskValue === "") {
        alert("Enter some task");
        return;
    }

    createTaskElement(taskValue, false);
    input.value = "";
    saveData(); // Save after adding
}

// Helper function to create the HTML row
function createTaskElement(text, isCompleted) {
    const li = document.createElement('li');
    if (isCompleted) li.classList.add('complete');

    li.innerHTML = `
        <span>${text}</span>
        <div class="actions">
            <button class="doneBtn">Done</button>
            <button class="deleteBtn">Delete</button>
        </div>
    `;

    const doneBtn = li.querySelector('.doneBtn');
    const deleteBtn = li.querySelector('.deleteBtn');

    doneBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        li.classList.toggle('complete');
        saveData(); // Save after toggling done
    });

    deleteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        li.remove();
        saveData(); // Save after deleting
    });

    todoList.appendChild(li);
}

// --- 2. Save function ---
function saveData() {
    const tasks = [];
    document.querySelectorAll('#todoList li').forEach(li => {
        tasks.push({
            text: li.querySelector('span').innerText,
            completed: li.classList.contains('complete')
        });
    });
    localStorage.setItem("myTodoList", JSON.stringify(tasks));
}

// --- 3. Load function ---
function loadData() {
    const savedTasks = JSON.parse(localStorage.getItem("myTodoList"));
    if (savedTasks) {
        savedTasks.forEach(task => {
            createTaskElement(task.text, task.completed);
        });
    }
}

addBtn.addEventListener('click', addTask);

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask(e);
    }
});