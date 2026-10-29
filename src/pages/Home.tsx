import React from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import {
  Globe,
  ShoppingBag,
  LayoutDashboard,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

const highlights = [
  {
    icon: Globe,
    title: 'Websites profissionais',
    description:
      'Sites de apresentação e institucionais, com informação clara sobre os seus serviços e formas de contacto.',
    to: '/solucoes',
    label: 'Ver soluções',
  },
  {
    icon: ShoppingBag,
    title: 'Lojas online',
    description:
      'Lojas online para apresentar produtos e receber encomendas. As funcionalidades dependem do que precisa de vender e gerir.',
    to: '/resultados',
    label: 'Ver exemplos',
  },
  {
    icon: LayoutDashboard,
    title: 'Plataformas à medida',
    description:
      'Plataformas de agendamento e ferramentas internas para organizar tarefas, informação e processos do negócio.',
    to: '/simulador',
    label: 'Ver demonstração',
  },
];

export const HomePage: React.FC = () => {
  return (
    <>
      <Hero />

      {/* Destaques */}
      <section className="py-16 lg:py-24 border-t border-slate-800/80 bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold tracking-wider uppercase text-cyan-400 mb-3">
              O que fazemos
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-display text-balance">
              Desenvolvimento web para diferentes negócios
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base">
              Desde websites e lojas online a plataformas de agendamento e gestão, desenvolvemos soluções adequadas ao contexto de cada empresa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/50 p-6 hover:border-slate-700 transition-colors"
                >
                  <div className="h-10 w-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-white font-display mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed flex-1 mb-5">
                    {item.description}
                  </p>
                  <Link
                    to={item.to}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    {item.label}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16 lg:py-20 border-t border-slate-800/80 bg-slate-900/40">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-display text-balance">
            Tem um projeto em mente?
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Precisa de um website, uma loja online ou uma ferramenta para simplificar o trabalho da sua equipa? Conte-nos o que tem em mente.
          </p>

          <ul className="mt-6 mx-auto w-fit flex flex-col items-start gap-3 text-xs text-slate-400 text-left">
            <li className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
              Conversa inicial para perceber as suas necessidades
            </li>
            <li className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
              Proposta com âmbito definido
            </li>
            <li className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
              Acompanhamento direto durante o projeto
            </li>
          </ul>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-6 py-3.5 text-sm font-bold text-slate-950 hover:bg-cyan-400 transition-colors shadow-md shadow-cyan-500/20"
            >
              Falar sobre o seu projeto
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/resultados"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/60 px-6 py-3.5 text-sm font-semibold text-slate-200 hover:border-slate-600 hover:text-white transition-colors"
            >
              Ver projetos
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
