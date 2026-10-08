import React, { useState } from 'react';
import { MessageSquareCode, Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Simulador', href: '#simulador' },
    { label: 'Diagnóstico', href: '#diagnostico' },
    { label: 'Soluções', href: '#solucoes' },
    { label: 'Sobre a Bruna', href: '#sobre' },
    { label: 'Resultados', href: '#resultados' },
  ];

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Olá Bruna, estive a ver o site da WebProLine e gostaria de falar sobre um projeto para o meu negócio.');
    window.open(`https://wa.me/351912345678?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#" 
          className="group flex items-center gap-2 text-xl font-bold tracking-tight text-white transition-opacity hover:opacity-90 font-display"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 text-slate-950 font-extrabold text-sm shadow-sm">
            W
          </span>
          <span className="tracking-tight">
            WebProLine<span className="text-cyan-400">.pt</span>
          </span>
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative py-1 text-slate-300 transition-colors hover:text-white after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-cyan-400 after:transition-all hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleWhatsAppClick}
            className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-950 transition-all hover:bg-cyan-400 active:scale-95 shadow-sm shadow-cyan-500/20 whitespace-nowrap cursor-pointer"
          >
            <MessageSquareCode className="h-4 w-4" />
            <span>Entrar em contacto</span>
            <ArrowUpRight className="h-3.5 w-3.5 opacity-70" />
          </button>

          {/* Mobile hamburger toggle */}
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

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-slate-800 bg-slate-950 px-4 py-6 md:hidden">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-200 transition-colors hover:text-cyan-400"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleWhatsAppClick();
                }}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-cyan-500 px-4 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-400 cursor-pointer"
              >
                <MessageSquareCode className="h-4 w-4" />
                <span>Entrar em contacto</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
