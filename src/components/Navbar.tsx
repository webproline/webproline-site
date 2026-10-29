import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MessageSquareCode, Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Simulador', to: '/simulador' },
    { label: 'Diagnóstico', to: '/diagnostico' },
    { label: 'Soluções', to: '/solucoes' },
    { label: 'Sobre Nós', to: '/sobre' },
    { label: 'Resultados', to: '/resultados' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          aria-label="WebProLine — página inicial"
          className="flex items-center transition-opacity hover:opacity-90"
        >
          <img
            src="/logo_webproline_256.png"
            alt="WebProLine"
            width={56}
            height={56}
            className="h-14 w-14 rounded-full"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={`relative py-1 transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-cyan-400 after:transition-all ${
                isActive(link.to)
                  ? 'text-white after:w-full'
                  : 'text-slate-300 hover:text-white after:w-0 hover:after:w-full'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <Link
            to="/contacto"
            className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-950 transition-all hover:bg-cyan-400 active:scale-95 shadow-sm shadow-cyan-500/20 whitespace-nowrap cursor-pointer"
          >
            <MessageSquareCode className="h-4 w-4" />
            <span>Entrar em contacto</span>
            <ArrowUpRight className="h-3.5 w-3.5 opacity-70" />
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 text-slate-300 transition-colors hover:bg-slate-900 md:hidden cursor-pointer"
            aria-label="Abrir menu de navegação"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="border-b border-slate-800 bg-slate-950 px-4 py-6 md:hidden">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-medium transition-colors ${
                  isActive(link.to) ? 'text-cyan-400' : 'text-slate-200 hover:text-cyan-400'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                to="/contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-cyan-500 px-4 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-400 cursor-pointer"
              >
                <MessageSquareCode className="h-4 w-4" />
                <span>Entrar em contacto</span>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};