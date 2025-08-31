import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { Todo, TodoStore } from '../types/todo';

export const useTodoStore = create<TodoStore>()(
  devtools(
    (set, get) => ({
      todos: [],
      
      addTodo: (text: string, priority: Todo['priority']) => {
        const newTodo: Todo = {
          id: Date.now().toString(),
          text,
          completed: false,
          createdAt: new Date(),
          priority
        };
        
        set(
          (state) => ({ todos: [...state.todos, newTodo] }),
          false,
          'addTodo'
        );
      },
      
      toggleTodo: (id: string) => {
        set(
          (state) => ({
            todos: state.todos.map(todo =>
              todo.id === id
                ? { ...todo, completed: !todo.completed }
                : todo
            )
          }),
          false,
          'toggleTodo'
        );
      },
      
      deleteTodo: (id: string) => {
        set(
          (state) => ({
            todos: state.todos.filter(todo => todo.id !== id)
          }),
          false,
          'deleteTodo'
        );
      },
      
      updateTodo: (id: string, updates: Partial<Omit<Todo, 'id' | 'createdAt'>>) => {
        set(
          (state) => ({
            todos: state.todos.map(todo =>
              todo.id === id
                ? { ...todo, ...updates }
                : todo
            )
          }),
          false,
          'updateTodo'
        );
      },
      
      clearCompleted: () => {
        set(
          (state) => ({
            todos: state.todos.filter(todo => !todo.completed)
          }),
          false,
          'clearCompleted'
        );
      },
      
      getStats: () => {
        const state = get();
        const total = state.todos.length;
        const completed = state.todos.filter(todo => todo.completed).length;
        const pending = total - completed;
        return { total, completed, pending };
      }
    }),
    {
      name: 'todo-store',
      enabled: process.env.NODE_ENV === 'development'
    }
  )
);
