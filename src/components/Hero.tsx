import React from 'react';
import { Mail, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { buildMailto } from '../data/contact';

export const Hero: React.FC = () => {
  const mailtoHref = buildMailto(
    'Pedido de informação sobre os nossos serviços',
    'Olá, estive a ver o site da WebProLine e gostava de conversar sobre um projeto para o meu negócio.'
  );

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32 bg-slate-950">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center opacity-30">
        <div className="h-[550px] w-[850px] rounded-full bg-cyan-900/20 blur-[130px]" />
        <div className="h-[400px] w-[600px] rounded-full bg-blue-900/15 blur-[150px] -translate-x-40" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div>
          <div className="mx-auto max-w-4xl">
            <div className="mb-5 flex flex-wrap items-center gap-2 text-xs font-medium tracking-wider uppercase text-cyan-400">
              <span>Desenvolvimento web</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Braga e todo o país</span>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl font-display text-balance leading-[1.12]">
              Websites, lojas online e plataformas para a sua empresa.
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-slate-300 sm:text-xl font-normal leading-relaxed">
              Desenvolvemos projetos web para empresas de diferentes áreas. Primeiro, conversamos sobre o que precisa; depois, definimos consigo uma solução adequada ao seu negócio.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                to="/simulador"
                onClick={() => window.scrollTo(0, 0)}
                className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-4 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/25 transition-all hover:brightness-110 active:scale-[0.98] cursor-pointer whitespace-nowrap"
              >
                <Play className="h-4 w-4 fill-slate-950 transition-transform group-hover:scale-110" />
                <span>Ver demonstração</span>
              </Link>

              <a
                href={mailtoHref}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700/80 bg-slate-900/80 px-6 py-4 text-sm font-semibold text-slate-200 backdrop-blur-sm transition-all hover:border-slate-600 hover:bg-slate-800 hover:text-white active:scale-[0.98] cursor-pointer whitespace-nowrap"
              >
                <Mail className="h-4 w-4 text-cyan-400" />
                <span>Falar sobre um projeto</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
