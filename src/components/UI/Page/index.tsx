import React from 'react';
import { cn } from '@/shared/lib/css';

interface PageProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

const Page: React.FC<PageProps> = ({ children, className, ...props }) => (
  <div
    className={cn('min-h-[130vh] max-md:min-h-screen', className)}
    {...props}
  >
    {children}
  </div>
);

export default Page;
