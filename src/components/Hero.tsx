import React from 'react';
import { ArrowRight, Mail, Play, ShieldCheck, Zap, Calendar } from 'lucide-react';
import heroWorkspaceImg from '../assets/images/webproline_hero_workspace_1791468818225.jpg';
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
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
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

          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/90 shadow-2xl">
                <div className="aspect-[16/10] w-full overflow-hidden relative">
                  <img
                    src={heroWorkspaceImg}
                    alt="Espaço de trabalho da WebProLine em Braga"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-lg border border-slate-800 bg-slate-950/80 p-3 text-xs text-slate-200 backdrop-blur-md">
                    <span className="font-medium text-white">WebProLine</span>
                    <span className="text-[11px] text-slate-400">Braga, Portugal</span>
                  </div>
                </div>

                <div className="space-y-3.5 bg-slate-900/95 p-5">
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-cyan-500/20 bg-cyan-500/10 text-cyan-400"><Zap className="h-4 w-4" /></div>
                    <div>
                      <h2 className="text-sm font-semibold text-white">Soluções para o dia a dia</h2>
                      <p className="mt-0.5 text-xs text-slate-400">Websites, lojas online e ferramentas de gestão, ajustados ao que cada negócio precisa.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-emerald-500/20 bg-emerald-500/10 text-emerald-400"><Calendar className="h-4 w-4" /></div>
                    <div>
                      <h2 className="text-sm font-semibold text-white">Um exemplo: marcações online</h2>
                      <p className="mt-0.5 text-xs text-slate-400">Explore uma demonstração de uma plataforma pensada para serviços com marcação.</p>
                    </div>
                  </div>
                  <a href="#simulador" onClick={handleScrollToSimulator} className="inline-flex items-center gap-1.5 pt-1 text-xs font-semibold text-cyan-400 hover:text-cyan-300">
                    Explorar demonstração <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
