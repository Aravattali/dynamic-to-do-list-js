// Setup Event Listener for Page Load
document.addEventListener('DOMContentLoaded', () => {

    // Select DOM Elements
    const addButton = document.getElementById('add-task-btn'); // Add Task button
    const taskInput = document.getElementById('task-input'); // Task input field
    const taskList = document.getElementById('task-list'); // Task list container

    // Create the addTask Function
    function addTask() {
        const taskText = taskInput.value.trim(); // Get and trim the value from task input field

        // Check if taskText is not empty
        if (taskText !== "") {
            // Task Creation and Removal
            // Create a new <li> element for the task
            const taskItem = document.createElement('li');
            taskItem.textContent = taskText;

            // Create a remove button for the task
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.classList.add('remove-btn');

            // Attach an event listener to the remove button to remove the task when clicked
            removeButton.addEventListener('click', () => {
                taskItem.remove(); // Remove the task <li> from the task list
            });

            // Append the remove button to the <li> element
            taskItem.appendChild(removeButton);

            // Append the <li> element to the task list
            taskList.appendChild(taskItem);

            // Clear the input field after adding the task
            taskInput.value = '';
        } else {
            // Alert user if task input is empty
            alert('Please enter a task.');
        }
    }

    // Attach Event Listeners

    // Event listener for the "Add Task" button
    addButton.addEventListener('click', addTask);

    // Event listener for pressing the "Enter" key
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask(); // Call addTask function when "Enter" key is pressed
        }
    });
});