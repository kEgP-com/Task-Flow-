import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavigationBar from './components/Navbar';
import TaskListView from './pages/TaskListView';
import AddTaskView from './pages/AddTaskView';

// Ramos
function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);


  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);


  const handleAddTask = (newTask) => {
    const taskWithId = { ...newTask, id: Date.now() }; 
    setTasks([...tasks, taskWithId]);
    return true;
  };


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
