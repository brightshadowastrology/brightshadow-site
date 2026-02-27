import React from 'react';
import { cn } from '@/shared/lib/css';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
}

interface SectionBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

interface SectionBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

interface SectionContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  divided?: boolean;
}

const SectionBackground: React.FC<SectionBackgroundProps> = ({ children, className, ...props }) => (
  <div
    className={cn(
      'h-[130vh] absolute z-[1] w-full',
      'max-md:h-screen',
      className
    )}
    {...props}
  >
    {children}
  </div>
);

const SectionBody: React.FC<SectionBodyProps> = ({ children, className, ...props }) => (
  <div className={cn('h-fit', className)} {...props}>
    {children}
  </div>
);

const SectionContent: React.FC<SectionContentProps> = ({ children, className, divided, ...props }) => (
  <div
    className={cn(
      // Base
      'mx-auto mt-[100px] mb-[100px] p-[100px] w-4/5 flex flex-col justify-center',
      // Divided modifier: switch to row layout
      divided && 'flex-row justify-between',
      // Mobile overrides
      'max-md:w-full max-md:p-5 max-md:min-h-screen',
      'max-md:flex-col max-md:justify-center max-md:items-center',
      'max-md:mt-[50px] max-md:mb-[50px]',
      'max-md:[&_h1]:text-center max-md:[&_h2]:text-center',
      className
    )}
    {...props}
  >
    {children}
  </div>
);

const Section: React.FC<SectionProps> & {
  Background: typeof SectionBackground;
  Body: typeof SectionBody;
  Content: typeof SectionContent;
} = ({ children, className, ...props }) => (
  <section
    className={cn(
      'flex flex-col items-center justify-start w-full min-h-[130vh] h-fit',
      className
    )}
    {...props}
  >
    {children}
  </section>
);

Section.Background = SectionBackground;
Section.Body = SectionBody;
Section.Content = SectionContent;

export default Section;
