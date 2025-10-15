import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavigationBar from './components/Navbar';
import TaskListView from './pages/TaskListView';
import AddTaskView from './pages/AddTaskView';

function App() {
  const [tasks, setTasks] = useState([]);

  // Load tasks from localStorage when app starts
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Add task function
  const handleAddTask = (newTask) => {
    const taskWithId = { ...newTask, id: Date.now() }; // Add a unique id
    setTasks([...tasks, taskWithId]);
    return true;
  };

  // Delete task function
  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    return true;
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