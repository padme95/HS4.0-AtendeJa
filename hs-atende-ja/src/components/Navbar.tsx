import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Bem-vindo</Link></li>
        <li><Link to="/perfil">Perfil</Link></li>
        <li><Link to="/historico">Histórico</Link></li>
        <li><Link to="/agendamento">Agendamento</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
