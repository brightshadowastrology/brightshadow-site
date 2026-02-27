import React from 'react';
import { cn } from '@/shared/lib/css';

interface DetailsProps extends React.HTMLAttributes<HTMLDetailsElement> {
  children?: React.ReactNode;
  className?: string;
}

interface SummaryProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
}

interface ButtonRowProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

const Summary: React.FC<SummaryProps> = ({ children, className, ...props }) => (
  <summary
    role="button"
    className={cn('bg-black/30 border-none', className)}
    {...props}
  >
    {children}
  </summary>
);

const ButtonRow: React.FC<ButtonRowProps> = ({ children, className, ...props }) => (
  <div
    className={cn('w-full flex my-5 justify-end', className)}
    {...props}
  >
    {children}
  </div>
);

const Details: React.FC<DetailsProps> & {
  Summary: typeof Summary;
  ButtonRow: typeof ButtonRow;
} = ({ children, className, ...props }) => (
  <details className={cn(className)} {...props}>
    {children}
  </details>
);

Details.Summary = Summary;
Details.ButtonRow = ButtonRow;

export default Details;
