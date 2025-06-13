import React, { useState, useEffect } from 'react';
import './index.css';
import TaskCard from './components/TaskCard';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { getTasks, createTask } from './services/api';

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('all');
  
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

  useEffect(() => {
    fetchTasks();
  },[tasks]); 


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

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
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

      <div className="filter-buttons" style={{ marginBottom: '1rem' }}>
        <button 
          className={`btn ${filter === 'all' ? 'btn-active' : ''}`}
          onClick={() => handleFilterChange('all')}
        >
          All Tasks
        </button>
        <button 
          className={`btn ${filter === 'pending' ? 'btn-active' : ''}`}
          onClick={() => handleFilterChange('pending')}
        >
          Pending
        </button>
        <button 
          className={`btn ${filter === 'completed' ? 'btn-active' : ''}`}
          onClick={() => handleFilterChange('completed')}
        >
          Completed
        </button>
      </div>

      {/* INTERVIEW TASK 2: Replace this with TaskList component */}
      {/* The TaskList component should transform and render tasks based on filter */}
      <div className="placeholder-message" style={{
        padding: '2rem',
        textAlign: 'center',
        backgroundColor: '#fff3cd',
        border: '1px solid #ffeaa7',
        borderRadius: '8px',
        color: '#856404'
      }}>
        <h3>Task Display Not Implemented</h3>
        <p>Replace this placeholder with the TaskList component in Task 2</p>
        <p>Current filter: <strong>{filter}</strong></p>
        <p>Total tasks loaded: <strong>{tasks.length}</strong></p>
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