import React from "react";

const InputType = ({
  labelText,
  labelFor,
  inputType,
  value,
  onChange,
  name,
}) => {
  return (
    <>
      <div className="mb-4">
        <label
          htmlFor={labelFor}
          className="block text-sm font-medium text-gray-700"
        >
          {labelText}
        </label>
        <input
          type={inputType}
          className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-500 focus:outline-none focus:border-red-500 text-gray-700"
          required
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default InputType;
