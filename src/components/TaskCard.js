import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';

const TaskCard = ({ task, onDelete }) => {
  const getPriorityVariant = (priority) => {
    switch (priority) {
      case 'High': return 'danger';
      case 'Medium': return 'warning';
      case 'Low': return 'success';
      default: return 'secondary';
    }
  };

  return (
    <Card className="h-100">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-start mb-2">
          <Card.Title className="flex-grow-1 me-2">
            {task.title}
          </Card.Title>
          <Badge bg={getPriorityVariant(task.priority)}>
            {task.priority}
          </Badge>
        </div>
        <Card.Text className="text-muted">
          {task.description}
        </Card.Text>
        <small className="text-muted">
          Created: {task.createdAt}
        </small>
      </Card.Body>
      <Card.Footer className="bg-transparent">
        <Button 
          variant="outline-danger" 
          size="sm"
          onClick={() => onDelete(task.id)}
        >
          Done
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default TaskCard;