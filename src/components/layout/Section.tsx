import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/utils/cn';

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  background?: 'white' | 'gray' | 'primary' | 'transparent';
}

const Section = forwardRef<HTMLElement, SectionProps>(
  (
    {
      className,
      padding = 'lg',
      background = 'transparent',
      children,
      ...props
    },
    ref
  ) => {
    const paddings = {
      none: '',
      sm: 'py-8',
      md: 'py-12',
      lg: 'py-16',
      xl: 'py-24',
    };

    const backgrounds = {
      white: 'bg-white',
      gray: 'bg-gray-50',
      primary: 'bg-blue-600 text-white',
      transparent: '',
    };

    return (
      <section
        ref={ref}
        className={cn(
          paddings[padding],
          backgrounds[background],
          className
        )}
        {...props}
      >
        {children}
      </section>
    );
  }
);

Section.displayName = 'Section';

export default Section;
