import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={`px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg transition duration-300 hover:bg-blue-700 active:scale-95 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
