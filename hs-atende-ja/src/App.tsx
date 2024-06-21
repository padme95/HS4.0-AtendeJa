import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import BemVindo from './pages/BemVindo';
import Perfil from './pages/Perfil';
import Historico from './pages/Historico';
import Agendamento from './pages/Agendamento';
import Login from './pages/Login';
import './App.css';

const App: React.FC = () => {
  const isLoggedIn = !!localStorage.getItem('token');

  return (
    <Router>
      <div>
        {isLoggedIn && <Navbar />}
        <div className="content">
          <Routes>
            {!isLoggedIn && <Route path="/" element={<Login />} />}
            {isLoggedIn && <Route path="/" element={<BemVindo />} />}
            {isLoggedIn && <Route path="/perfil" element={<Perfil />} />}
            {isLoggedIn && <Route path="/historico" element={<Historico />} />}
            {isLoggedIn && <Route path="/agendamento" element={<Agendamento />} />}
            {!isLoggedIn && <Route path="*" element={<Login />} />}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
