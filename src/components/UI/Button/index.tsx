import React from 'react';
import { cn } from '@/shared/lib/css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  disabled = false,
  className,
  ...props
}) => {
  return (
    <button
      className={cn(
        // Outer button: bestia base
        'group relative inline-block cursor-pointer pointer-events-auto',
        'border-none bg-transparent p-0 mt-[50px]',
        'text-xs uppercase text-white',
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
      disabled={disabled}
      type="button"
      {...props}
    >
      {/* Animated background layer with ripple pseudo-elements */}
      <div
        className={cn(
          // Base: fill the button, clip the ripple
          'absolute inset-0 overflow-hidden bg-[#c9b16a]',
          // Scale up the whole bg on hover
          '[transition:transform_0.4s_cubic-bezier(0.1,0,0.3,1)]',
          'group-hover:scale-[1.2]',
          // ::before — circle ripple, starts at scale(0), expands on hover
          "before:content-[''] before:absolute before:bg-[#232b23]",
          'before:w-[110%] before:h-0 before:pb-[110%]',
          'before:top-1/2 before:left-1/2 before:rounded-full',
          'before:-translate-x-1/2 before:-translate-y-1/2 before:scale-0',
          'group-hover:before:[transition:transform_0.4s_cubic-bezier(0.1,0,0.3,1)]',
          'group-hover:before:scale-100',
          // ::after — fill overlay, fades in quickly after circle finishes
          "after:content-[''] after:absolute after:inset-0 after:bg-[#232b23]",
          'after:opacity-0 after:[transition:opacity_0.3s]',
          'group-hover:after:opacity-100',
          'group-hover:after:[transition-duration:0.01s]',
          'group-hover:after:[transition-delay:300ms]'
        )}
      />
      {/* Text sits above the bg, difference blend punches through */}
      <span className="relative block px-4 py-2 mix-blend-difference text-white">
        {children}
      </span>
    </button>
  );
};

export default Button;
