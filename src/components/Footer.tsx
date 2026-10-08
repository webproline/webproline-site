import React from 'react';
import { ArrowUp, Mail, MapPin, Instagram } from 'lucide-react';
import { COMPANY_EMAIL, INSTAGRAM_HANDLE, INSTAGRAM_URL } from '../data/contact';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-12 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-800/80">
          
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-3">
            <a href="#" aria-label="WebProLine — página inicial" className="inline-block">
              <img
                src="/logo_webproline_256.png"
                alt="WebProLine"
                width={64}
                height={64}
                className="h-16 w-16 rounded-full"
              />
            </a>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Engenharia de software e plataformas digitais sob medida para negócios locais e PMEs. Desenvolvido em Braga, Portugal.
            </p>
            <div className="flex items-center gap-3 text-xs text-slate-400 pt-1">
              <span className="flex items-center gap-1">
                <MapPin className="h-3 w-3 text-cyan-400" />
                Braga, Portugal
              </span>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <a 
                href={`mailto:${COMPANY_EMAIL}`}
                className="hover:text-white transition-colors"
              >
                {COMPANY_EMAIL}
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#simulador" className="hover:text-cyan-400 transition-colors">
                  Simulador de Agendamento
                </a>
              </li>
              <li>
                <a href="#diagnostico" className="hover:text-cyan-400 transition-colors">
                  Calculadora de Poupança
                </a>
              </li>
              <li>
                <a href="#solucoes" className="hover:text-cyan-400 transition-colors">
                  Soluções & Serviços
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-cyan-400 transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#resultados" className="hover:text-cyan-400 transition-colors">
                  Casos de Sucesso
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Actions */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Contacto Rápido
            </h4>
            <div className="space-y-2 text-xs">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium"
              >
                <Instagram className="h-3.5 w-3.5" />
                <span>{INSTAGRAM_HANDLE}</span>
              </a>
              <a
                href={`mailto:${COMPANY_EMAIL}`}
                className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium"
              >
                <Mail className="h-3.5 w-3.5" />
                <span>Enviar email</span>
              </a>
              <p className="text-[11px] text-slate-500">
                Atendimento presencial no distrito de Braga e digital em todo o país.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} WebProLine · Todos os direitos reservados.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-slate-300 transition-colors cursor-pointer"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
