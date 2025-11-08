import { HTMLAttributes } from 'react';
import { cn } from '@/utils/cn';

export interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'white' | 'gray';
}

export default function Spinner({
  size = 'md',
  color = 'primary',
  className,
  ...props
}: SpinnerProps) {
  const sizes = {
    sm: 'h-4 w-4 border-2',
    md: 'h-8 w-8 border-2',
    lg: 'h-12 w-12 border-3',
    xl: 'h-16 w-16 border-4',
  };

  const colors = {
    primary: 'border-blue-600 border-t-transparent',
    secondary: 'border-orange-600 border-t-transparent',
    white: 'border-white border-t-transparent',
    gray: 'border-gray-600 border-t-transparent',
  };

  return (
    <div
      className={cn(
        'inline-block animate-spin rounded-full',
        sizes[size],
        colors[color],
        className
      )}
      role="status"
      {...props}
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}
