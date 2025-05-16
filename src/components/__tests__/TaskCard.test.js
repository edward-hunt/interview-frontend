import React from 'react';
import { render, screen } from '@testing-library/react';
import TaskCard from '../TaskCard';

const mockTask = {
  _id: '1',
  title: 'Test Task',
  description: 'Test Description',
  status: 'pending',
  dueDate: '2024-12-31',
  assignedTo: 'John Doe'
};

test('renders task title', () => {
  render(<TaskCard task={mockTask} onUpdate={() => {}} />);
  expect(screen.getByText('Test Task')).toBeInTheDocument();
});

test('renders task card with proper class', () => {
  render(<TaskCard task={mockTask} onUpdate={() => {}} />);
  const taskCard = screen.getByText('Test Task').closest('.task-card');
  expect(taskCard).toBeInTheDocument();
});