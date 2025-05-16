import React, { useState, useEffect } from 'react';
import './index.css';
import TaskCard from './components/TaskCard';
import TaskForm from './components/TaskForm';
import { getTasks, createTask } from './services/api';

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const response = await getTasks();
      setTasks(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch tasks. Make sure the backend is running.');
      console.error('Error fetching tasks:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateTask = async (taskData) => {
    try {
      const response = await createTask(taskData);
      setTasks([...tasks, response.data]);
      return true;
    } catch (err) {
      console.error('Error creating task:', err);
      return false;
    }
  };

  if (loading) {
    return (
      <div className="container">
        <div className="header">
          <h1>Loading...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="header">
        <h1>Task Management System</h1>
        <p>Interview Coding Challenge</p>
      </div>

      {error && (
        <div style={{ 
          backgroundColor: '#f8d7da', 
          color: '#721c24', 
          padding: '1rem', 
          borderRadius: '4px', 
          marginBottom: '1rem' 
        }}>
          {error}
        </div>
      )}

      <TaskForm onSubmit={handleCreateTask} />

      <div className="task-grid">
        {tasks.map(task => (
          <TaskCard 
            key={task._id} 
            task={task} 
            onUpdate={fetchTasks}
          />
        ))}
      </div>

      {tasks.length === 0 && !loading && (
        <div style={{ textAlign: 'center', color: '#666' }}>
          No tasks found. Create your first task above!
        </div>
      )}
    </div>
  );
}

export default App;