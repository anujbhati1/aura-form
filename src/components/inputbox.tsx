import React from 'react';

interface InputBoxProps {
  label: string;
}

function InputBox({ label }: InputBoxProps) {
  return (
    <div className="relative mb-4">
      <label htmlFor="email" className="leading-7 text-sm text-gray-600">
        {label}
      </label>
      <input
        type="email"
        id="email"
        name="email"
        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      />
    </div>
  );
}

export default InputBox;
