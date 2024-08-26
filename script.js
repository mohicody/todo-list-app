document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
    }
});

function addTask(taskText) {
    const taskList = document.getElementById('taskList');
    const taskItem = document.createElement('li');

    taskItem.textContent = taskText;

    // Add delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(taskItem);
    });

    // Add complete toggle
    taskItem.addEventListener('click', function() {
        taskItem.classList.toggle('completed');
    });

    taskItem.appendChild(deleteBtn);
    taskList.appendChild(taskItem);
}
