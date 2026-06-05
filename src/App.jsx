import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import SolutionDetail from './pages/SolutionDetail';
import Contacto from './pages/Contacto';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("App crashed:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 text-slate-900 p-4">
          <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-xl text-center">
            <h1 className="text-2xl font-bold text-red-600 mb-4">Algo salió mal</h1>
            <p className="text-slate-600 mb-6">Hubo un error al cargar la aplicación. Por favor, intenta recargar la página.</p>
            <button 
              onClick={() => window.location.reload()} 
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-md transition-colors"
            >
              Recargar Página
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function AppContent() {
  return (
    <div className="min-h-screen font-sans bg-white text-slate-900 selection:bg-orange-500 selection:text-white flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions/:id" element={<SolutionDetail />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ErrorBoundary>
  );
}