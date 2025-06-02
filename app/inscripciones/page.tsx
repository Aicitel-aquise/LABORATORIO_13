'use client';

import { useEffect, useState } from 'react';

interface Inscripcion {
  id: number;
  estudiante: {
    nombre: string;
  };
  curso: {
    nombreCurso: string;
  };
}

export default function ListaInscripciones() {
  const [inscripciones, setInscripciones] = useState<Inscripcion[]>([]);

  useEffect(() => {
    const cargar = async () => {
      const res = await fetch('/api/inscripciones');
      const data = await res.json();
      setInscripciones(data);
    };

    cargar();
  }, []);

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Lista de Inscripciones</h1>
      <ul className="space-y-4">
        {inscripciones.map((i) => (
          <li key={i.id} className="border p-4 rounded shadow">
            <div><strong>Estudiante:</strong> {i.estudiante.nombre}</div>
            <div><strong>Curso:</strong> {i.curso.nombreCurso}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}