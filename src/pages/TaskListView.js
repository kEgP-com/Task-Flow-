import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import TaskCard from '../components/TaskCard';

const TaskListView = ({ tasks, deleteTask }) => {
  const navigate = useNavigate();

  if (tasks.length === 0) {
    return (
      <div className="text-center py-5">
        <h2>No Tasks Yet</h2>
        <p className="text-muted">Get started by adding your first task!</p>
        <Button 
          variant="primary" 
          onClick={() => navigate('/add-task')}
        >
          Add Your First Task
        </Button>
      </div>
    );
  }

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Task List</h2>
        <Button 
          variant="primary" 
          onClick={() => navigate('/add-task')}
        >
          + Add New Task
        </Button>
      </div>
      
      <Row>
        {tasks.map((task) => (
          <Col key={task.id} md={6} lg={4} className="mb-3">
            <TaskCard task={task} onDelete={deleteTask} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default TaskListView;
