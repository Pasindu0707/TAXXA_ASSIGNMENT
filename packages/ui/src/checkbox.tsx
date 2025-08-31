import React from 'react';

interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  error?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className="flex items-center">
        <input
          ref={ref}
          type="checkbox"
          className={`
            h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded
            ${error ? 'border-red-500' : ''}
            ${className}
          `}
          {...props}
        />
        {label && (
          <label className="ml-2 block text-sm text-gray-900">
            {label}
          </label>
        )}
        {error && (
          <p className="ml-2 text-sm text-red-600">{error}</p>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';
