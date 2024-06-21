import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`navbar-container ${isOpen ? 'menu-open' : ''}`}>
      <div className="navbar-header">
        <div className="navbar-toggle" onClick={toggleMenu}>
          <div className={`hamburger ${isOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="navbar-title">
          <h1>Meu Aplicativo</h1>
        </div>
      </div>
      <div className={`menu-container ${isOpen ? 'open' : ''}`}>
        <nav className="navbar">
          <ul>
            <li><Link to="/" onClick={toggleMenu}>Bem-vindo</Link></li>
            <li><Link to="/perfil" onClick={toggleMenu}>Perfil</Link></li>
            <li><Link to="/historico" onClick={toggleMenu}>Histórico</Link></li>
            <li><Link to="/agendamento" onClick={toggleMenu}>Agendamento</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
