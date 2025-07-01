import React, { useState } from 'react';

const Producto = ({ id, nombre, cantidad, precio, actualizarProducto, eliminarProducto }) => {
  const [editando, setEditando] = useState(false);
  const [nuevoNombre, setNuevoNombre] = useState(nombre);
  const [nuevaCantidad, setNuevaCantidad] = useState(cantidad);
  const [nuevoPrecio, setNuevoPrecio] = useState(precio);

  const guardarCambios = () => {
    if (nuevoNombre.trim() === '') {
      alert("El nombre no puede estar vacío.");
      return;
    }
    if (parseFloat(nuevaCantidad) <= 0) {
      alert("La cantidad debe ser mayor a 0.");
      return;
    }
    if (parseFloat(nuevoPrecio) <= 0) {
      alert("El precio debe ser mayor a 0.");
      return;
    }
    actualizarProducto(id, nuevoNombre, nuevaCantidad, nuevoPrecio);
    setEditando(false);
  };

  return (
    <tr>
      <td>{id}</td>
      <td>
        {editando ? (
          <input value={nuevoNombre} onChange={(e) => setNuevoNombre(e.target.value)} />
        ) : (
          nombre
        )}
      </td>
      <td>
        {editando ? (
          <input
            type="number"
            value={nuevaCantidad}
            min="0"
            onChange={(e) => setNuevaCantidad(e.target.value)}
          />
        ) : (
          cantidad
        )}
      </td>
      <td>
        {editando ? (
          <input
            type="number"
            value={nuevoPrecio}
            min="0"
            onChange={(e) => setNuevoPrecio(e.target.value)}
          />
        ) : (
          `$${precio}`
        )}
      </td>
      <td>
        {editando ? (
          <>
            <button onClick={guardarCambios}>Guardar</button>
            <button onClick={() => setEditando(false)}>Cancelar</button>
          </>
        ) : (
          <>
            <button onClick={() => setEditando(true)}>Editar</button>
            <button onClick={() => eliminarProducto(id)}>Eliminar</button>
          </>
        )}
      </td>
    </tr>
  );
};

export default Producto;
