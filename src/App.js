import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavigationBar from './components/Navbar';
import TaskListView from './pages/TaskListView';
import AddTaskView from './pages/AddTaskView';
import { getTasksFromDB, addTaskToDB, deleteTaskFromDB } from './api';

function App() {
  const [tasks, setTasks] = useState([]);

  // Load tasks from database on startup
  useEffect(() => {
    loadTasksFromDatabase();
  }, []);

  const loadTasksFromDatabase = async () => {
    const tasksFromDB = await getTasksFromDB();
    setTasks(tasksFromDB);
  };

  // Add task function - saves to database
  const handleAddTask = async (newTask) => {
    const success = await addTaskToDB(newTask);
    if (success) {
      // Reload tasks from database to get the latest data
      await loadTasksFromDatabase();
      return true;
    }
    return false;
  };

  // Delete task function - removes from database
  const handleDeleteTask = async (taskId) => {
    const success = await deleteTaskFromDB(taskId);
    if (success) {
      // Reload tasks from database to get the latest data
      await loadTasksFromDatabase();
      return true;
    }
    return false;
  };

  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <Container>
          <Routes>
            <Route 
              path="/" 
              element={<TaskListView tasks={tasks} deleteTask={handleDeleteTask} />} 
            />
            <Route 
              path="/add-task" 
              element={<AddTaskView addTask={handleAddTask} />} 
            />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;