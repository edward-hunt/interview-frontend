import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor for logging (helpful for debugging during interview)
api.interceptors.request.use(
  (config) => {
    console.log(`🚀 API Request: ${config.method?.toUpperCase()} ${config.url}`);
    return config;
  },
  (error) => {
    console.error('❌ Request Error:', error);
    return Promise.reject(error);
  }
);

// Add response interceptor for error handling
api.interceptors.response.use(
  (response) => {
    console.log(`✅ API Response: ${response.config.method?.toUpperCase()} ${response.config.url}`, response.status);
    return response;
  },
  (error) => {
    console.error('❌ Response Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

// Task API endpoints
export const getTasks = () => api.get('/tasks');

export const createTask = (taskData) => api.post('/tasks', taskData);

export const updateTask = (id, taskData) => api.put(`/tasks/${id}`, taskData);

export const deleteTask = (id) => api.delete(`/tasks/${id}`);

// User API endpoints
export const getUsers = () => api.get('/users');

export const createUser = (userData) => api.post('/users', userData);

export default api;