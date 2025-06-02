'use client';

import { useState } from "react";

interface Estudiante {
  id: number;
  nombre: string;
  edad: number;
  carrera: string;
}

export default function EstudiantesPage() {
  const [estudiantes, setEstudiantes] = useState<Estudiante[]>([]);
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [carrera, setCarrera] = useState('');
  const [editandoId, setEditandoId] = useState<number | null>(null);

  const agregarEstudiante = () => {
    if (!nombre || !edad || !carrera) return;

    const nuevoEstudiante: Estudiante = {
      id: Date.now(),
      nombre,
      edad: parseInt(edad),
      carrera,
    };

    setEstudiantes([...estudiantes, nuevoEstudiante]);
    limpiarCampos();
  };

  const eliminarEstudiante = (id: number) => {
    setEstudiantes(estudiantes.filter(est => est.id !== id));
  };

  const iniciarEdicion = (est: Estudiante) => {
    setEditandoId(est.id);
    setNombre(est.nombre);
    setEdad(est.edad.toString());
    setCarrera(est.carrera);
  };

  const actualizarEstudiante = () => {
    setEstudiantes(estudiantes.map(est =>
      est.id === editandoId ? { ...est, nombre, edad: parseInt(edad), carrera } : est
    ));
    setEditandoId(null);
    limpiarCampos();
  };

  const limpiarCampos = () => {
    setNombre('');
    setEdad('');
    setCarrera('');
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">CRUD de Estudiantes</h1>

      <input
        className="border p-2 mb-2 w-full"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        className="border p-2 mb-2 w-full"
        type="number"
        placeholder="Edad"
        value={edad}
        onChange={(e) => setEdad(e.target.value)}
      />
      <input
        className="border p-2 mb-4 w-full"
        placeholder="Carrera"
        value={carrera}
        onChange={(e) => setCarrera(e.target.value)}
      />

      {editandoId ? (
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={actualizarEstudiante}>
          Actualizar
        </button>
      ) : (
        <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={agregarEstudiante}>
          Agregar
        </button>
      )}

      <ul className="mt-6 space-y-2">
        {estudiantes.map(est => (
          <li key={est.id} className="border p-3 rounded flex justify-between items-center">
            <div>
              <p><strong>Nombre:</strong> {est.nombre}</p>
              <p><strong>Edad:</strong> {est.edad}</p>
              <p><strong>Carrera:</strong> {est.carrera}</p>
            </div>
            <div className="space-x-2">
              <button className="bg-yellow-400 px-2 py-1 rounded" onClick={() => iniciarEdicion(est)}>Editar</button>
              <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => eliminarEstudiante(est.id)}>Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}