import React from 'react';
import { Mail, Play, ShieldCheck } from 'lucide-react';
import { buildMailto } from '../data/contact';

export const Hero: React.FC = () => {
  const mailtoHref = buildMailto(
    'Pedido de informação sobre os nossos serviços',
    'Olá, estive a ver o site da WebProLine e gostava de conversar sobre um projeto para o meu negócio.'
  );

  const handleScrollToSimulator = () => {
    document.getElementById('simulador')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32 bg-slate-950">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center opacity-30">
        <div className="h-[550px] w-[850px] rounded-full bg-cyan-900/20 blur-[130px]" />
        <div className="h-[400px] w-[600px] rounded-full bg-blue-900/15 blur-[150px] -translate-x-40" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div>
          <div className="max-w-4xl">
            <div className="mb-5 flex flex-wrap items-center gap-2 text-xs font-medium tracking-wider uppercase text-cyan-400">
              <span>Desenvolvimento web</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Braga e todo o país</span>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl font-display text-balance leading-[1.12]">
              Websites e soluções digitais pensados para o seu negócio.
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-slate-300 sm:text-xl font-normal leading-relaxed">
              Criamos websites, lojas online e plataformas de gestão para empresas de diferentes áreas. Conhecemos o negócio, percebemos o que precisa e desenvolvemos a solução consigo.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <button
                onClick={handleScrollToSimulator}
                className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-4 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/25 transition-all hover:brightness-110 active:scale-[0.98] cursor-pointer whitespace-nowrap"
              >
                <Play className="h-4 w-4 fill-slate-950 transition-transform group-hover:scale-110" />
                <span>Ver demonstração</span>
              </button>

              <a
                href={mailtoHref}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700/80 bg-slate-900/80 px-6 py-4 text-sm font-semibold text-slate-200 backdrop-blur-sm transition-all hover:border-slate-600 hover:bg-slate-800 hover:text-white active:scale-[0.98] cursor-pointer whitespace-nowrap"
              >
                <Mail className="h-4 w-4 text-cyan-400" />
                <span>Falar sobre um projeto</span>
              </a>
            </div>

            <div className="mt-10 border-t border-slate-800/80 pt-6">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-medium text-slate-400">
                <span className="flex items-center gap-1.5 text-slate-300"><ShieldCheck className="h-4 w-4 text-cyan-400" />Acompanhamento próximo</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span>Projetos para diferentes áreas</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span>Contacto direto</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
