import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="App-header">
      <h1>Tienda en Línea</h1>
      <nav className="nav-links">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/registro">Registro</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
