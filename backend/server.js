import express from 'express';
import cors from 'cors';
import mysql from 'mysql2/promise';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const dbConfig = {
  host: 'mysql-db',
  user: 'taskflow_user',
  password: 'taskflow_pass',
  database: 'taskflow_db',
  port: 3306
};

// Get all tasks
app.get('/api/tasks', async (req, res) => {
  try {
    const connection = await mysql.createConnection(dbConfig);
    const [rows] = await connection.execute('SELECT * FROM tasks ORDER BY created_at DESC');
    await connection.end();
    res.json(rows);
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ error: 'Failed to fetch tasks' });
  }
});

// Add new task
app.post('/api/tasks', async (req, res) => {
  try {
    const { title, description, priority } = req.body;
    const connection = await mysql.createConnection(dbConfig);
    const [result] = await connection.execute(
      'INSERT INTO tasks (title, description, priority) VALUES (?, ?, ?)',
      [title, description, priority]
    );
    await connection.end();
    res.json({ id: result.insertId, message: 'Task added successfully' });
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ error: 'Failed to add task' });
  }
});

// Delete task
app.delete('/api/tasks/:id', async (req, res) => {
  try {
    const taskId = req.params.id;
    const connection = await mysql.createConnection(dbConfig);
    const [result] = await connection.execute('DELETE FROM tasks WHERE id = ?', [taskId]);
    await connection.end();
    
    if (result.affectedRows > 0) {
      res.json({ message: 'Task deleted successfully' });
    } else {
      res.status(404).json({ error: 'Task not found' });
    }
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ error: 'Failed to delete task' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});