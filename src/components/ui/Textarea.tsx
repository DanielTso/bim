import { TextareaHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/utils/cn';
import type { InputVariant } from '@/types/components';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  variant?: InputVariant;
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      label,
      error,
      helperText,
      variant = 'default',
      resize = 'vertical',
      id,
      ...props
    },
    ref
  ) => {
    const textareaId = id || label?.toLowerCase().replace(/\s+/g, '-');

    const baseStyles = 'block w-full rounded-lg border bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed px-4 py-2 text-base';

    const variants = {
      default: 'border-gray-300 focus:border-blue-600 focus:ring-blue-600',
      error: 'border-red-500 focus:border-red-600 focus:ring-red-600',
      success: 'border-green-500 focus:border-green-600 focus:ring-green-600',
    };

    const resizeStyles = {
      none: 'resize-none',
      vertical: 'resize-y',
      horizontal: 'resize-x',
      both: 'resize',
    };

    const currentVariant = error ? 'error' : variant;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={textareaId}
            className="block text-sm font-medium text-gray-700 mb-1.5"
          >
            {label}
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}

        <textarea
          ref={ref}
          id={textareaId}
          className={cn(
            baseStyles,
            variants[currentVariant],
            resizeStyles[resize],
            className
          )}
          {...props}
        />

        {error && (
          <p className="mt-1.5 text-sm text-red-600" role="alert">
            {error}
          </p>
        )}

        {helperText && !error && (
          <p className="mt-1.5 text-sm text-gray-500">{helperText}</p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export default Textarea;
