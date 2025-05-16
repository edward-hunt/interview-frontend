import React from 'react';

// INTERVIEW TASK 3: Complete this TaskCard component
// Current: Only shows the task title
// Required: Display description, status, and due date with good formatting
// Bonus: Add a delete button with confirmation

const TaskCard = ({ task, onUpdate }) => {
  const handleDelete = async () => {
    // TODO: Implement delete functionality
    console.log('Delete functionality not implemented yet');
  };

  // INTERVIEW TASK 4: Add task completion toggle
  // Add a checkbox to toggle task status between 'pending' and 'completed'
  const handleStatusToggle = async () => {
    // TODO: Implement status toggle
    console.log('Status toggle functionality not implemented yet');
  };

  // Helper function to format date (you can improve this)
  const formatDate = (dateString) => {
    if (!dateString) return 'No due date';
    return new Date(dateString).toLocaleDateString();
  };

  return (
    <div className="task-card">
      <h3>{task.title}</h3>
      
      {/* TODO: Display the task description */}
      
      {/* TODO: Display the task status with appropriate styling */}
      {/* HINT: Use CSS classes like .status-pending, .status-completed, etc. */}
      
      {/* TODO: Display the due date using formatDate function */}
      
      {/* TODO: Display assigned user if available */}
      
      {/* TODO: Add delete button with confirmation */}
      
      {/* TODO: Add status toggle checkbox */}
    </div>
  );
};

export default TaskCard;