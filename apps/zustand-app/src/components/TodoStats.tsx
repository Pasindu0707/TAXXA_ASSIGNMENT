'use client';

import React from 'react';
import { useTodoStore } from '../store/todoStore';

export function TodoStats() {
  const todos = useTodoStore((state) => state.todos);
  const total = todos.length;
  const completed = todos.filter(todo => todo.completed).length;
  const pending = total - completed;
  const completionRate = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
        <div className="mb-4">
          <h3 className="text-sm font-medium text-gray-500">Total Todos</h3>
        </div>
        <div>
          <div className="text-2xl font-bold text-gray-900">{total}</div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
        <div className="mb-4">
          <h3 className="text-sm font-medium text-gray-500">Pending</h3>
        </div>
        <div>
          <div className="text-2xl font-bold text-yellow-600">{pending}</div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
        <div className="mb-4">
          <h3 className="text-sm font-medium text-gray-500">Completed</h3>
        </div>
        <div>
          <div className="text-2xl font-bold text-green-600">{completed}</div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
        <div className="mb-4">
          <h3 className="text-sm font-medium text-gray-500">Completion Rate</h3>
        </div>
        <div>
          <div className="text-2xl font-bold text-blue-600">{completionRate}%</div>
        </div>
      </div>
    </div>
  );
}
