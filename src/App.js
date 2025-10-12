import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import components and pages
import NavigationBar from './components/Navbar';
import TaskListView from './pages/TaskListView';
import AddTaskView from './pages/AddTaskView';

function App() {
  // Global state for tasks
  const [tasks, setTasks] = useState([]);

  // Add task function
  const addTask = (newTask) => {
    const task = {
      id: Date.now().toString(),
      title: newTask.title,
      description: newTask.description,
      priority: newTask.priority,
      createdAt: new Date().toLocaleDateString()
    };
    setTasks([...tasks, task]);
  };

  // Delete task function
  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <Router>
      <div className="App">
        {/* Navigation Bar Component */}
        <NavigationBar />

        {/* Main Content */}
        <Container>
          <Routes>
            <Route 
              path="/" 
              element={
                <TaskListView 
                  tasks={tasks} 
                  deleteTask={deleteTask} 
                />
              } 
            />
            <Route 
              path="/add-task" 
              element={
                <AddTaskView 
                  addTask={addTask} 
                />
              } 
            />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;
