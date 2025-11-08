import { InputHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/utils/cn';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  helperText?: string;
  error?: string;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, helperText, error, id, ...props }, ref) => {
    const checkboxId = id || label?.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            ref={ref}
            id={checkboxId}
            type="checkbox"
            className={cn(
              'h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-600 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed',
              error && 'border-red-500',
              className
            )}
            {...props}
          />
        </div>

        {(label || helperText || error) && (
          <div className="ml-3 text-sm">
            {label && (
              <label
                htmlFor={checkboxId}
                className="font-medium text-gray-700 cursor-pointer"
              >
                {label}
                {props.required && <span className="text-red-500 ml-1">*</span>}
              </label>
            )}
            {helperText && !error && (
              <p className="text-gray-500">{helperText}</p>
            )}
            {error && (
              <p className="text-red-600" role="alert">
                {error}
              </p>
            )}
          </div>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
