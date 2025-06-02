'use client';

import { useState } from 'react';

export default function IMCPage() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularIMC = () => {
    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura);

    if (isNaN(pesoNum) || isNaN(alturaNum) || alturaNum === 0) {
      setResultado('Por favor, ingresa valores válidos.');
      return;
    }

    const imc = pesoNum / (alturaNum * alturaNum);
    setResultado(`Tu IMC es ${imc.toFixed(2)}`);
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Calculadora de IMC</h1>

      <div style={{ marginBottom: '1rem' }}>
        <label>Peso (kg): </label>
        <input
          type="number"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label>Altura (m): </label>
        <input
          type="number"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />
      </div>

      <button onClick={calcularIMC}>Calcular IMC</button>

      {resultado && (
        <p style={{ marginTop: '1rem', fontWeight: 'bold' }}>{resultado}</p>
      )}
    </div>
  );
}