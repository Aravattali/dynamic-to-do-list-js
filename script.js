// Wait for the DOM content to fully load before executing the script
document.addEventListener('DOMContentLoaded', () => {
    // Load tasks from Local Storage
    loadTasks();

    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' prevents saving again to Local Storage
    }

    // Function to add a new task
    function addTask(taskText, save = true) {
        if (taskText.trim() === "") {
            alert("Please enter a task.");
            return;
        }

        // Create new list item
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create Remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-btn');

        // Add event listener to the Remove button
        removeButton.addEventListener('click', () => {
            // Remove task from DOM
            taskList.removeChild(li);

            // Remove task from Local Storage
            removeTaskFromLocalStorage(taskText);
        });

        // Append Remove button to list item
        li.appendChild(removeButton);

        // Append list item to task list
        taskList.appendChild(li);

        // Save task to Local Storage if 'save' is true
        if (save) {
            saveTaskToLocalStorage(taskText);
        }

        // Clear the input field
        taskInput.value = '';
    }

    // Function to save task to Local Storage
    function saveTaskToLocalStorage(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }

    // Function to remove task from Local Storage
    function removeTaskFromLocalStorage(taskText) {
        let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks = storedTasks.filter(task => task !== taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }

    // Event listener for "Add Task" button
    addButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        addTask(taskText);
    });

    // Event listener for "Enter" key to add task
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') { // Corrected event.key usage
            const taskText = taskInput.value.trim();
            addTask(taskText);
        }
    });
});