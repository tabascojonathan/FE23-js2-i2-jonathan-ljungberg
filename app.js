// app.js
import * as Firebase from './firebase.js';
import * as UI from './ui.js';

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('addTask').addEventListener('click', async () => {
        const taskDescription = document.getElementById('taskDescription').value;
        const taskCategory = document.getElementById('taskCategory').value;
        
        await Firebase.addTask({
            task: taskDescription,
            category: taskCategory,
            status: 'to do',
            assigned: 'none'
        });
        initApp(); // Uppdaterar tasks utan att lägga till nya eventlyssnare
    });

    initApp();
});

async function initApp() {
    try {
        const tasks = await Firebase.fetchTasks();
        UI.displayTasks(tasks, assignTask, updateTaskStatus, removeTask);
    } catch (error) {
        console.error('Error initializing app:', error);
    }
}

function assignTask(id) {
    const person = prompt("Vem vill du tilldela denna uppgift till?");
    if (person) {
        Firebase.updateTask(id, { assigned: person, status: 'in progress' }).then(() => initApp());
    }
}

function updateTaskStatus(id, status) {
    Firebase.updateTask(id, { status }).then(() => initApp());
}

function removeTask(id) {
    Firebase.removeTask(id).then(() => initApp());
}
