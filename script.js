document.addEventListener('DOMContentLoaded', () => {
    // Load tasks from Local Storage when the page loads
    loadTasks();

    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Event listener for adding tasks when the button is clicked
    addButton.addEventListener('click', () => {
        addTask(taskInput.value);
    });

    // Event listener for adding tasks when the "Enter" key is pressed
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask(taskInput.value);
        }
    });
});

// Function to load tasks from Local Storage
function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]'); // Get stored tasks, default to an empty array if not found
    storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' means don't save again to Local Storage
}

// Function to add a task to the list
function addTask(taskText, save = true) {
    // Trim the task input to remove leading/trailing whitespace
    taskText = taskText.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    // Create a new list item for the task
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create a remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = "Remove";
    removeButton.classList.add('remove-btn');

    // Remove task from DOM and Local Storage when the remove button is clicked
    removeButton.addEventListener('click', () => {
        li.remove();
        removeTaskFromStorage(taskText); // Remove the task from Local Storage
    });

    // Append the remove button to the list item and the list item to the task list
    li.appendChild(removeButton);
    document.getElementById('task-list').appendChild(li);

    // Save task to Local Storage
    if (save) {
        saveTaskToLocalStorage(taskText);
    }

    // Clear the input field
    document.getElementById('task-input').value = '';
}

// Function to save a task to Local Storage
function saveTaskToLocalStorage(taskText) {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.push(taskText); // Add the new task to the array
    localStorage.setItem('tasks', JSON.stringify(storedTasks)); // Save the updated array to Local Storage
}

// Function to remove a task from Local Storage
function removeTaskFromStorage(taskText) {
    let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks = storedTasks.filter(task => task !== taskText); // Remove the task from the array
    localStorage.setItem('tasks', JSON.stringify(storedTasks)); // Update Local Storage with the new array
}