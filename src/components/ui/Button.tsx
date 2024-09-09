import React from 'react';
import { Button } from "@headlessui/react";
import { clsx } from 'clsx';

interface ButtonProps {
    children: React.ReactNode,
    fullWidth?: boolean,
    variant?: 'primary' | 'secondary' | 'destructive',
    disabled?: boolean,
    ariaLabel?: string,
    onClick?: () => void,
    type?: 'button' | 'submit' | 'reset',
}

const variantStyles = {
    primary: 'bg-primary-1 text-white hover:bg-primary-2 focus:ring-primary-1',
    secondary: 'bg-secondary-1 text-primary-1 hover:bg-secondary-2 focus:ring-primary-1',
    destructive: 'bg-destructive-1 text-white hover:bg-destructive-2 focus:ring-destructive-1',
};

export const BaseButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    children, 
    fullWidth = false, 
    variant = 'primary', 
    disabled = false,
    ariaLabel,
    onClick,
    type = 'button',
    ...props 
  }, ref) => {
    return (
      <Button 
        ref={ref}
        className={clsx(
          "text-center gap-2 h-10 rounded-20 text-13 font-bold",
          "transition-colors duration-200",
          "focus:outline-none focus:ring-2 focus:ring-offset-2",
          variantStyles[variant],
          fullWidth ? 'w-full' : 'w-174',
          disabled && 'opacity-50 cursor-not-allowed'
        )}
        disabled={disabled}
        aria-label={ariaLabel}
        onClick={onClick}
        type={type}
        {...props}
      >
        {children}
      </Button>
    );
  }
);

BaseButton.displayName = 'BaseButton';


