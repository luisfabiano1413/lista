import React, { useState } from 'react';

function Formulario({ onAgregarTarea }) {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [intentoEnvio, setIntentoEnvio] = useState(false);

  const manejarSubmit = (e) => {
    e.preventDefault();
    setIntentoEnvio(true);

    if (nombre.trim() && descripcion.trim()) {
      onAgregarTarea({
        nombre,
        descripcion,
        fecha: new Date().toLocaleString(), // agrega fecha
      });
      setNombre('');
      setDescripcion('');
      setIntentoEnvio(false);
    }
  };

  return (
    <form
      onSubmit={manejarSubmit}
      className="bg-gradient-to-br from-blue-100 to-purple-100 p-6 rounded-2xl shadow-xl max-w-md mx-auto mb-10 border border-blue-200"
    >
      <h2 className="text-2xl font-bold text-purple-700 mb-6 text-center">🆕 Nueva Tarea</h2>

      <div className="mb-4">
        <label className="block text-sm font-semibold text-blue-800 mb-1">
          Nombre del responsable
        </label>
        <input
          type="text"
          placeholder="Ej: Luis Fabiano"
          className={`w-full border-2 rounded-lg px-3 py-2 focus:outline-none transition ${
            intentoEnvio && !nombre.trim()
              ? 'border-red-400 focus:ring-red-300'
              : 'border-blue-300 focus:ring-blue-400'
          }`}
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm font-semibold text-blue-800 mb-1">
          Descripción de la tarea
        </label>
        <input
          type="text"
          placeholder="Ej: Crear diseño de la app"
          className={`w-full border-2 rounded-lg px-3 py-2 focus:outline-none transition ${
            intentoEnvio && !descripcion.trim()
              ? 'border-red-400 focus:ring-red-300'
              : 'border-purple-300 focus:ring-purple-400'
          }`}
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          required
        />
      </div>

      <button
        type="submit"
        className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold px-5 py-2 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all shadow-md w-full"
      >
        💾 Agregar Tarea
      </button>
    </form>
  );
}

export default Formulario;

