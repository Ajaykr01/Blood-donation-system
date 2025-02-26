import React from "react";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center bg-black bg-opacity-30 h-screen">
      <div className="w-12 h-12 border-4 border-b-red-500 rounded-full animate-spin"></div>
    </div>
  );
};

export default Spinner;
