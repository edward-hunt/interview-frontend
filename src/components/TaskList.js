import React from 'react';
import TaskCard from './TaskCard';

// INTERVIEW TASK 2: Implement TaskList component with data transformation
// This component should:
// 1. Take tasks array and filter props
// 2. Transform/filter the tasks based on the filter prop
// 3. Group tasks by status or priority (your choice)
// 4. Render them in an organized way

const TaskList = ({ tasks, filter, onUpdate }) => {
  // TODO: Implement filtering logic
  // HINT: Filter tasks based on the filter prop ('all', 'pending', 'completed')
  
  // TODO: Transform the array - examples:
  // Option A: Group by status and render sections
  // Option B: Sort by due date or priority
  // Option C: Create summary statistics and render with tasks
  
  // Placeholder implementation - replace this!
  return (
    <div className="task-list">
      <div style={{
        padding: '1rem',
        backgroundColor: '#f8f9fa',
        border: '1px dashed #6c757d',
        borderRadius: '8px',
        textAlign: 'center'
      }}>
        <h3>TaskList Component - Not Implemented</h3>
        <p>Tasks to display: {tasks.length}</p>
        <p>Current filter: {filter}</p>
        <p>Implement filtering and transformation logic here!</p>
      </div>
    </div>
  );
};

export default TaskList;