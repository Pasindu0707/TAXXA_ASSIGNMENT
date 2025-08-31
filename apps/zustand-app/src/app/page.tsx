'use client';

import { TodoForm } from '../components/TodoForm';
import { TodoStats } from '../components/TodoStats';
import { TodoList } from '../components/TodoList';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Todo App - Zustand
          </h1>
          <p className="text-lg text-gray-600">
            State management using Zustand
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Add New Todo</h3>
            </div>
            <div>
              <TodoForm />
            </div>
          </div>

          <TodoStats />

          <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Your Todos</h3>
            </div>
            <div>
              <TodoList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
