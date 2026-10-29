/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/Home';
import { SimuladorPage } from './pages/Simulador';
import { DiagnosticoPage } from './pages/Diagnostico';
import { SolucoesPage } from './pages/Solucoes';
import { SobrePage } from './pages/Sobre';
import { ResultadosPage } from './pages/Resultados';
import { ContactoPage } from './pages/Contacto';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-cyan-500/20 selection:text-cyan-300">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/simulador" element={<SimuladorPage />} />
            <Route path="/diagnostico" element={<DiagnosticoPage />} />
            <Route path="/solucoes" element={<SolucoesPage />} />
            <Route path="/sobre" element={<SobrePage />} />
            <Route path="/resultados" element={<ResultadosPage />} />
            <Route path="/contacto" element={<ContactoPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}