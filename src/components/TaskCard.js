import React from 'react';

// INTERVIEW TASK 2: Complete this TaskCard component
// Current: Only shows the task title
// Required: Display description, status, and due date
// Bonus: Add a delete button with confirmation

const TaskCard = ({ task, onUpdate }) => {
  const handleDelete = async () => {
    // TODO: Implement delete functionality
    // HINT: Add confirmation dialog before deleting
    // HINT: Use the deleteTask API function
    console.log('Delete functionality not implemented yet');
  };

  // INTERVIEW TASK 4: Add task completion toggle
  // Add a checkbox to toggle task status between 'pending' and 'completed'
  const handleStatusToggle = async () => {
    // TODO: Implement status toggle
    // HINT: Use the updateTask API function
    // HINT: Toggle between 'pending' and 'completed' status
    console.log('Status toggle functionality not implemented yet');
  };

  return (
    <div className="task-card">
      <h3>{task.title}</h3>
      
      {/* TODO: Display the task description */}
      
      {/* TODO: Display the task status with appropriate styling */}
      
      {/* TODO: Display the due date (format it nicely) */}
      
      {/* TODO: Add delete button with confirmation */}
      
      {/* TODO: Add status toggle checkbox */}
    </div>
  );
};

export default TaskCard;