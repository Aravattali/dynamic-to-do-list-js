// Wait for the DOM content to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn'); // The "Add Task" button
    const taskInput = document.getElementById('task-input'); // Input field for new tasks
    const taskList = document.getElementById('task-list'); // Unordered list for tasks

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get the input value and trim extra spaces

        // If taskText is not empty, add the task to the list
        if (taskText !== "") {
            // Create a new <li> element for the task
            const taskItem = document.createElement('li');
            taskItem.textContent = taskText;

            // Create a new remove button for the task
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.classList.add('remove-btn');

            // Event listener to remove the task when the button is clicked
            removeButton.addEventListener('click', () => {
                taskItem.remove(); // Remove the <li> from taskList
            });

            // Append the remove button to the <li>
            taskItem.appendChild(removeButton);

            // Append the <li> to the task list
            taskList.appendChild(taskItem);

            // Clear the input field after adding the task
            taskInput.value = '';
        } else {
            // If the input is empty, alert the user
            alert('Please enter a task.');
        }
    }

    // Event listener for the "Add Task" button
    addButton.addEventListener('click', addTask);

    // Event listener for the "Enter" key to add a task
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask(); // Call addTask if "Enter" key is pressed
        }
    });
});