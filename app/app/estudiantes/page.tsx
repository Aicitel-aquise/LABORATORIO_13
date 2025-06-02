'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface Estudiante {
  id: number;
  nombre: string;
  correo: string;
}

export default function Estudiantes() {
  const [estudiantes, setEstudiantes] = useState<Estudiante[]>([]);

  useEffect(() => {
    const cargarEstudiantes = async () => {
      const res = await fetch('/api/estudiantes');
      const data = await res.json();
      setEstudiantes(data);
    };
    cargarEstudiantes();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Lista de Estudiantes</h1>
      <ul className="space-y-4">
        {estudiantes.map((e) => (
          <li key={e.id} className="border p-4 rounded shadow">
            <div className="font-semibold">{e.nombre}</div>
            <div className="text-gray-600">{e.correo}</div>
            <div className="flex gap-4 mt-2">
              <Link href={`/estudiantes/${e.id}/editar`}
                className="text-green-500"
              >
                Editar
              </Link>
              <button
                onClick={async () => {
                  await fetch(`/api/estudiantes/${e.id}`, {
                    method: 'DELETE',
                  });
                  setEstudiantes(estudiantes.filter((est) => est.id !== e.id));
                }}
                className="text-red-500"
              >
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}