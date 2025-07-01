import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inventario from './components/Inventario/Inventario';
import CalculadoraEstadistica from './components/CalculadoraEstadistica/CalculadoraEstadistica';
import DatosInformativos from './components/DatosInformativos/DatosInformativos';
import Inicio from './components/Inicio/Inicio';

import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/inventario" element={<Inventario />} />
          <Route path="/estadistica" element={<CalculadoraEstadistica />} />
          <Route path="/datos" element={<DatosInformativos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
