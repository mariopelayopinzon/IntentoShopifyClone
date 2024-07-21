// src/App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/styles.css';
import Home from './pages/Home';
import Cart from './components/Cart';
import Registro from './pages/Registro';
import Login from './pages/Login';


const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/cart" component={Cart} />
          <Route path="/registro" component={Registro} />
          <Route path="/login" component={Login} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
