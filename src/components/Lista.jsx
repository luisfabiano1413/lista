import React from 'react';

function Lista({ tareas }) {
  return (
    <div className="max-w-2xl mx-auto px-4">
      <h2 className="text-2xl font-bold text-center text-purple-700 mb-6">📋 Tareas Pendientes</h2>
      <ul className="space-y-4">
        {tareas.map((tarea, index) => (
          <li
            key={index}
            className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-purple-400 p-4 rounded-xl shadow-md transition hover:shadow-lg"
          >
            <p className="text-blue-900 font-semibold mb-1">
              🎯 <span className="text-gray-800">Responsable:</span> {tarea.nombre}
            </p>
            <p className="text-purple-800">
              📝 <span className="text-gray-800">Descripción:</span> {tarea.descripcion}
            </p>
            {tarea.fecha && (
              <p className="text-sm text-gray-600 mt-1">
                ⏰ <span className="font-medium">Registrado:</span> {tarea.fecha}
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Lista;
