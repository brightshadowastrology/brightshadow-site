import React from 'react';
import { cn } from '@/shared/lib/css';

interface ArticleProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
}

const Article: React.FC<ArticleProps> = ({ children, className, ...props }) => (
  <article
    className={cn(
      'flex justify-between text-center bg-[#626662]',
      '[&_span]:leading-[3]',
      className
    )}
    {...props}
  >
    {children}
  </article>
);

export default Article;
