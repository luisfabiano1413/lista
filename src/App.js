import React, { useState } from 'react';
import Formulario from './components/Formulario';
import Lista from './components/Lista';

function App() {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (tarea) => {
    setTareas([...tareas, tarea]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Gestor de Tareas</h1>
      <Formulario onAgregarTarea={agregarTarea} />
      <Lista tareas={tareas} />
    </div>
  );
}

export default App;
