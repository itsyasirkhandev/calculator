import { forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?: 'default' | 'number' | 'operation' | 'equals' | 'function' | 'memory';
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'default', size = 'md', children, ...props }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95 disabled:opacity-50 disabled:pointer-events-none';
    
    const variants = {
      default: 'bg-neutral-100 hover:bg-neutral-200 text-neutral-900 focus:ring-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-100 dark:focus:ring-neutral-600',
      number: 'bg-white hover:bg-neutral-50 text-neutral-900 border border-neutral-200 focus:ring-blue-300 shadow-sm hover:shadow-md dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-100 dark:border-neutral-700',
      operation: 'bg-blue-500 hover:bg-blue-600 text-white focus:ring-blue-300 shadow-md hover:shadow-lg dark:bg-blue-600 dark:hover:bg-blue-700',
      equals: 'bg-green-500 hover:bg-green-600 text-white focus:ring-green-300 shadow-md hover:shadow-lg dark:bg-green-600 dark:hover:bg-green-700',
      function: 'bg-purple-500 hover:bg-purple-600 text-white focus:ring-purple-300 shadow-md hover:shadow-lg dark:bg-purple-600 dark:hover:bg-purple-700',
      memory: 'bg-orange-500 hover:bg-orange-600 text-white focus:ring-orange-300 shadow-md hover:shadow-lg dark:bg-orange-600 dark:hover:bg-orange-700',
    };
    
    const sizes = {
      sm: 'h-10 px-3 text-sm',
      md: 'h-12 px-4 text-base',
      lg: 'h-16 px-6 text-lg',
    };

    const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

    return (
      <motion.button
        ref={ref}
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
