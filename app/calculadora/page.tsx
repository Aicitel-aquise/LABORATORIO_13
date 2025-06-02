'use client';

import { useState } from 'react';

export default function Calculadora() {
  const [input, setInput] = useState('');

  const agregar = (valor: string) => {
    setInput(input + valor);
  };

  const calcular = () => {
    try {
      // Cambiamos símbolos a operadores JS válidos
      const resultado = eval(input.replace(/×/g, '*').replace(/÷/g, '/'));
      setInput(resultado.toString());
    } catch {
      setInput('Error');
    }
  };
  const limpiar = () => {
    setInput('');
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-[300px]">
        <div className="mb-4 text-right text-2xl bg-gray-200 p-2 rounded h-12">
          {input || '0'}
        </div>
        <div className="grid grid-cols-4 gap-2">
          {['7', '8', '9', '÷', '4', '5', '6', '×', '1', '2', '3', '-', '0', 'C', '=', '+'].map((btn) => (
            <button
              key={btn}
              className="bg-blue-100 hover:bg-blue-200 text-xl p-4 rounded"
              onClick={() =>
                btn === '=' ? calcular() : btn === 'C' ? limpiar() : agregar(btn)
              }
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}