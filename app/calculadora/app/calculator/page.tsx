'use client';

import { useState } from 'react';

export default function Calculator() {
  const [input, setInput] = useState('');

  const handleClick = (value: string) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => setInput('');
  const handleEqual = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput('Error');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-[320px]">
        <div className="text-right text-2xl mb-4 p-3 bg-gray-200 rounded">{input || '0'}</div>
        <div className="grid grid-cols-4 gap-3">
          {['7', '8', '9', '/',
            '4', '5', '6', '*',
            '1', '2', '3', '-',
            '0', '.', '=', '+'].map((item) =>
              <button
                key={item}
                onClick={item === '=' ? handleEqual : () => handleClick(item)}
                className="p-4 text-xl bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              >
                {item}
              </button>
          )}
          <button
            onClick={handleClear}
            className="col-span-4 p-4 text-xl bg-red-500 text-white rounded hover:bg-red-600 transition"
          >
            C
          </button>
        </div>
      </div>
    </div>
  );
}
