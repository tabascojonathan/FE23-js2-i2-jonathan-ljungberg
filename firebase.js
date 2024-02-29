export const fetchTasks = async () => {
    const response = await fetch('https://scrum-board-4eb67-default-rtdb.europe-west1.firebasedatabase.app/tasks.json');
    if (!response.ok) throw new Error('Failed to fetch tasks');
    return response.json();
};

export const addTask = async (taskData) => {
    const response = await fetch('https://scrum-board-4eb67-default-rtdb.europe-west1.firebasedatabase.app/tasks.json', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(taskData)
    });
    if (!response.ok) throw new Error('Failed to add task');
    return response.json();
};

export const updateTask = async (id, updates) => {
    const response = await fetch(`https://scrum-board-4eb67-default-rtdb.europe-west1.firebasedatabase.app/tasks/${id}.json`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updates)
    });
    if (!response.ok) throw new Error('Failed to update task');
    return response.json();
};

export const removeTask = async (id) => {
    const response = await fetch(`https://scrum-board-4eb67-default-rtdb.europe-west1.firebasedatabase.app/tasks/${id}.json`, {
        method: 'DELETE'
    });
    if (!response.ok) throw new Error('Failed to remove task');
    return response.json();
};
