"use client";

import React, { useState } from "react";

interface DropdownProps {
  options: string[];
  label?: string;
  onValueChange: (value: string) => void; // Callback function prop
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  label,
  onValueChange,
}) => {
  const [selectedValue, setSelectedValue] = useState<string>(options[0] || "");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
    onValueChange(event.target.value); // Call the callback function with the new value
  };

  return (
    <div className="w-full max-w-xs mx-auto mt-6">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <select
        className="mt-1 block w-full p-3 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        value={selectedValue}
        onChange={handleChange}
      >
        {options.map((option, index) => (
          <option className="" key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
