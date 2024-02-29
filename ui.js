// ui.js
export const displayTasks = (tasks, assignTaskCallback, updateTaskStatusCallback, removeTaskCallback) => {
    // Töm befintliga kolumner
    const todoColumn = document.getElementById('todo');
    const inProgressColumn = document.getElementById('inProgress');
    const doneColumn = document.getElementById('done');

    todoColumn.innerHTML = '<h2>To Do</h2>';
    inProgressColumn.innerHTML = '<h2>In Progress</h2>';
    doneColumn.innerHTML = '<h2>Done</h2>';

    Object.entries(tasks).forEach(([id, task]) => {
        const taskElement = document.createElement('div');
        taskElement.classList.add('task', task.category.replace(' ', '-'));
        taskElement.textContent = task.task + (task.assigned !== 'none' ? ` (Tilldelad: ${task.assigned})` : '');

        const actionBtn = document.createElement('button');
        if (task.status === 'to do') {
            actionBtn.textContent = 'Assign >>';
            actionBtn.onclick = () => assignTaskCallback(id);
        } else if (task.status === 'in progress') {
            actionBtn.textContent = 'Done >>';
            actionBtn.onclick = () => updateTaskStatusCallback(id, 'done');
        } else if (task.status === 'done') {
            actionBtn.textContent = 'Remove X';
            actionBtn.onclick = () => removeTaskCallback(id);
        }
        taskElement.appendChild(actionBtn);

        if (task.status === 'to do') {
            todoColumn.appendChild(taskElement);
        } else if (task.status === 'in progress') {
            inProgressColumn.appendChild(taskElement);
        } else {
            doneColumn.appendChild(taskElement);
        }
    });
};
