import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Perfil from './pages/Perfil';
import Historico from './pages/Historico';
import Agendamento from './pages/Agendamento';
import Login from './pages/Login';
import BemVindo from './pages/BemVindo';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<BemVindo />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/historico" element={<Historico />} />
          <Route path="/agendamento" element={<Agendamento />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
