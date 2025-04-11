import React from "react";

const LinkExpired = () => {
  return (
    <div
      className="h-[90vh] flex items-center justify-center bg-no-repeat bg-center px-4"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/premium-vector/error-404-concept-design-landing-page_108061-65.jpg?ga=GA1.1.1875339788.1744225049&semt=ais_hybrid&w=740')",
      }}
    >
      <div className=" mt-40 ml-36">
        <p className="text-[12px] font-bold text-red-600 pr-20">
          The password reset link is either invalid or has expired.
        </p>
      </div>
    </div>
  );
};

export default LinkExpired;
