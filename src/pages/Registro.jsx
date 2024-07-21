
const Registro = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar el formulario
  };

  return (
    <div>
      <h2>Registro de Nuevo Usuario</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre de Usuario:
          <input type="text" />
        </label>
        <label>
          Contraseña:
          <input type="password" />
        </label>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Registro;
