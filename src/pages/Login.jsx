// src/components/Login.jsx
import { useState } from 'react';
import { loginUserService } from '../services/authService';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUserService({ username, password });
      console.log('Login exitoso:', response.data);
      // Aquí podrías redirigir a otra página de la aplicación si el login es exitoso
    } catch (error) {
      setError('Credenciales inválidas. Por favor, inténtalo de nuevo.');
      console.error('Error en el login:', error);
    }
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Nombre de Usuario:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label>
          Contraseña:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default Login;
