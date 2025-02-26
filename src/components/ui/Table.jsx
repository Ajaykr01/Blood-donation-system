import React from "react";

export const Table = ({ children }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full border-collapse border border-gray-300">
        {children}
      </table>
    </div>
  );
};
