import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import NavigationBar from './components/Navbar';
import AddTaskView from './pages/AddTaskView';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);