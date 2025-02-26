import React from "react";

export const Button = ({ children, className, onClick }) => {
  return (
    <button
      className={`px-4 py-2 rounded-lg text-white font-medium ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
