import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={`px-6 py-3 text-lg font-semibold rounded-lg transition duration-300 
        bg-blue-600 text-white hover:bg-blue-700 active:scale-95 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
