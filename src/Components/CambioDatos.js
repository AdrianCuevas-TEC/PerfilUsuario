import React, { useState } from 'react';
import IconoUsuario from '../IconoUsuario.png';

const CambioDatos = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    birthdate: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    };

  return (
    <div className="login-form-container">
      <h1>Datos del usuario</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="photo" className="lexend">Foto del usuario:</label>
          <div className="photo-container">
            <label htmlFor="photoUpload" className="photo-label">
              <img src={IconoUsuario} alt="Icono Usuario" className="user-icon" />
            </label>
            <input type="file" id="photoUpload" accept="image/*" className="photo-input" />
          </div>
        </div>
        
        <div className="form-group">
          <div className="form-inline">
            <div className="form-group">
              <label htmlFor="name" className="lexend">Nombre:</label>
              <input type="text" id="name" name="name" className="form-input" value={formData.name} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="lastName" className="lexend">Apellido:</label>
              <input type="text" id="lastName" name="lastName" className="form-input" value={formData.lastName} onChange={handleChange} />
            </div>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="birthdate" className="lexend">Fecha de Nacimiento:</label>
          <input type="date" id="birthdate" name="birthdate" className="form-input" value={formData.birthdate} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="lexend">Email:</label>
          <input type="email" id="email" name="email" className="form-input" value={formData.email} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="password" className="lexend">Nueva Contraseña:</label>
          <input type="password" id="password" name="password" className="form-input" value={formData.password} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword" className="lexend">Confirmar Contraseña:</label>
          <input type="password" id="confirmPassword" name="confirmPassword" className="form-input" value={formData.confirmPassword} onChange={handleChange} />
        </div>

        <button type="submit" className="lexend">Actualizar Datos</button>
      </form>
    </div>
  );
};

export default CambioDatos;
