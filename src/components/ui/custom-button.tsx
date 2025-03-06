
import React from 'react';
import { Button as ShadcnButton, ButtonProps as ShadcnButtonProps } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

interface CustomButtonProps extends ShadcnButtonProps {
  isLoading?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({ 
  children, 
  isLoading = false, 
  disabled,
  ...props 
}) => {
  return (
    <ShadcnButton
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </ShadcnButton>
  );
};

export { CustomButton as Button };
