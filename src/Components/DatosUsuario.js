import React from 'react';

function DatosUsuario() {
  return (
    <div className="vertical-form">
      <div className="form-container">
        <label>
          Nombre:
          <input type="text" />
        </label>
        <label>
          Apellido:
          <input type="text" />
        </label>
        <label>
          Contraseña:
          <input type="password" />
        </label>
        <label>
          Fecha de nacimiento:
          <input type="date" />
        </label>
        <label>
          Email:
          <input type="email" />
        </label>
        <button type="submit" className="btn-enviar">Enviar</button>
      </div>
    </div>
  );
}

export default DatosUsuario;
