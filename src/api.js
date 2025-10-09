const API_URL = 'http://localhost:5000/api';

// Get all tasks from database
export const getTasksFromDB = async () => {
  try {
    const response = await fetch(`${API_URL}/tasks`);
    if (response.ok) {
      const tasks = await response.json();
      return tasks.map(task => ({
        id: task.id.toString(),
        title: task.title,
        description: task.description,
        priority: task.priority,
        createdAt: new Date(task.created_at).toLocaleDateString()
      }));
    }
  } catch (error) {
    console.error('Failed to load tasks from database:', error);
  }
  return [];
};

// Add task to database
export const addTaskToDB = async (task) => {
  try {
    const response = await fetch(`${API_URL}/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    });
    return response.ok;
  } catch (error) {
    console.error('Failed to add task to database:', error);
    return false;
  }
};

// Delete task from database
export const deleteTaskFromDB = async (taskId) => {
  try {
    const response = await fetch(`${API_URL}/tasks/${taskId}`, {
      method: 'DELETE',
    });
    return response.ok;
  } catch (error) {
    console.error('Failed to delete task from database:', error);
    return false;
  }
};