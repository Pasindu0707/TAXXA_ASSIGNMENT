'use client';

import React from 'react';
import { TodoItem } from './TodoItem';
import { useTodoStore } from '../store/todoStore';

export function TodoList() {
  const todos = useTodoStore((state) => state.todos);
  const clearCompleted = useTodoStore((state) => state.clearCompleted);
  const getStats = useTodoStore((state) => state.getStats);
  
  const { total, completed, pending } = getStats();

  if (todos.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        <p className="text-lg">No todos yet!</p>
        <p className="text-sm">Add your first todo to get started.</p>
      </div>
    );
  }

  const sortedTodos = [...todos].sort((a, b) => {
    const priorityOrder = { high: 3, medium: 2, low: 1 };
    const priorityDiff = priorityOrder[b.priority] - priorityOrder[a.priority];
    if (priorityDiff !== 0) return priorityDiff;
    if (a.completed !== b.completed) return a.completed ? 1 : -1;
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-600">
          {total} total • {pending} pending • {completed} completed
        </div>
        {completed > 0 && (
          <button
            onClick={clearCompleted}
            className="px-3 py-1.5 text-sm bg-gray-200 text-gray-900 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            Clear Completed
          </button>
        )}
      </div>
      
      <div className="space-y-2">
        {sortedTodos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
}
