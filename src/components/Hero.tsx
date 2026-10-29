import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CalendarDays, Check, Mail } from 'lucide-react';
import heroWorkspaceImg from '../assets/images/webproline_hero_workspace_1791468818225.jpg';

export const Hero: React.FC = () => (
  <section className="relative overflow-hidden bg-slate-950 py-16 md:py-24 lg:py-28">
    <div aria-hidden="true" className="pointer-events-none absolute -right-40 top-0 h-[34rem] w-[34rem] rounded-full bg-cyan-900/15 blur-[120px]" />
    <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8">
      <div className="lg:col-span-7">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">WebProLine · Braga, Portugal</p>
        <h1 className="max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
          Uma forma mais simples de gerir as marcações da sua barbearia.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
          Estamos a desenvolver uma plataforma de agendamento pensada para barbeiros. Queremos conhecer a rotina de quem está na cadeira todos os dias e criar uma ferramenta que faça sentido na prática.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link to="/contacto" className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-500 px-5 py-3.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-400">
            Quero saber mais <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/simulador" className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 px-5 py-3.5 text-sm font-semibold text-slate-200 transition-colors hover:border-slate-500 hover:bg-slate-900">
            Ver demonstração
          </Link>
        </div>
        <div className="mt-8 flex items-start gap-3 border-t border-slate-800 pt-6 text-sm text-slate-400">
          <CalendarDays className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" />
          <p><span className="font-medium text-slate-200">Em desenvolvimento.</span> Procuro barbeiros interessados em acompanhar o projeto e partilhar o que precisam.</p>
        </div>
      </div>

      <div className="lg:col-span-5">
        <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl shadow-black/30">
          <img src={heroWorkspaceImg} alt="Espaço de trabalho da WebProLine" className="aspect-[16/10] w-full object-cover" />
          <div className="space-y-4 p-6 sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">A ideia, em poucas palavras</p>
            <h2 className="text-xl font-semibold text-white">O cliente marca. O barbeiro acompanha a agenda.</h2>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex gap-2.5"><Check className="h-4 w-4 shrink-0 text-cyan-400" />Uma experiência simples no telemóvel</li>
              <li className="flex gap-2.5"><Check className="h-4 w-4 shrink-0 text-cyan-400" />Horários e serviços organizados num só lugar</li>
              <li className="flex gap-2.5"><Check className="h-4 w-4 shrink-0 text-cyan-400" />Desenvolvimento acompanhado por profissionais do setor</li>
            </ul>
            <Link to="/contacto" className="inline-flex items-center gap-2 pt-1 text-sm font-semibold text-cyan-400 hover:text-cyan-300">Falar sobre o projeto <Mail className="h-4 w-4" /></Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);
