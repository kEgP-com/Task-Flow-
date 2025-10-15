import React, { useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AddTaskView = ({ addTask }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: 'Medium'
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.title.trim()) {
      setShowAlert(true);
      return;
    }

    addTask(formData);
    // Reset form
    setFormData({
      title: '',
      description: '',
      priority: 'Medium'
    });
    setShowAlert(false);
    
    // Navigate back to home
    navigate('/');
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8 col-lg-6">
        <Card>
          <Card.Header>
            <h3 className="mb-0">Add New Task</h3>
          </Card.Header>
          <Card.Body>
            {showAlert && (
              <Alert variant="danger" className="mb-3">
                Please enter a task title!
              </Alert>
            )}
            
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Task Title *</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Enter task title"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Enter task description (optional)"
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Priority</Form.Label>
                <Form.Select
                  name="priority"
                  value={formData.priority}
                  onChange={handleChange}
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </Form.Select>
              </Form.Group>

              <div className="d-flex gap-2">
                <Button 
                  variant="primary" 
                  type="submit"
                  className="flex-fill"
                >
                  Add Task
                </Button>
                <Button 
                  variant="outline-secondary" 
                  onClick={() => navigate('/')}
                >
                  Cancel
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default AddTaskView;