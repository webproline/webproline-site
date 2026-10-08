import React from 'react';
import { ArrowDown, Mail, Play, Sparkles, ShieldCheck, Zap, Calendar } from 'lucide-react';
import heroWorkspaceImg from '../assets/images/webproline_hero_workspace_1791468818225.jpg';
import { buildMailto } from '../data/contact';

export const Hero: React.FC = () => {
  const handleScrollToSimulator = () => {
    const el = document.getElementById('simulador');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const mailtoHref = buildMailto(
    'Pedido de avaliação gratuita',
    'Olá, estive a ver o site da WebProLine e gostava de receber uma avaliação gratuita para o meu negócio.'
  );

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32 bg-slate-950">
      {/* Subtle background glow effect (refined, non-slop) */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center opacity-30"
      >
        <div className="h-[550px] w-[850px] rounded-full bg-cyan-900/20 blur-[130px]" />
        <div className="h-[400px] w-[600px] rounded-full bg-blue-900/15 blur-[150px] -translate-x-40" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Main Hero Column */}
          <div className="lg:col-span-7">
            {/* Quiet text kicker with typographic dot (Anti-pill discipline) */}
            <div className="mb-5 flex flex-wrap items-center gap-2 text-xs font-medium tracking-wider uppercase text-cyan-400">
              <span>Engenharia de Software</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Desenvolvimento Web Sob Medida</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-emerald-400">Braga & Portugal</span>
            </div>

            {/* Headline with text-wrap: balance */}
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl font-display text-balance leading-[1.12]">
              Digitalizamos o seu negócio. Plataformas web, agendamento e automação que{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-emerald-400 bg-clip-text text-transparent">
                trabalham por si.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 max-w-2xl text-lg text-slate-300 sm:text-xl font-normal leading-relaxed">
              Engenharia de software e soluções digitais sob medida para negócios que querem crescer.
              Substitua cadernos e chamadas constantes por sistemas rápidos que os seus clientes adoram usar no telemóvel.
            </p>

            {/* CTAs */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <button
                onClick={handleScrollToSimulator}
                className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-4 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/25 transition-all hover:brightness-110 active:scale-[0.98] cursor-pointer whitespace-nowrap"
              >
                <Play className="h-4 w-4 fill-slate-950 transition-transform group-hover:scale-110" />
                <span>Experimentar Demonstração Interativa</span>
              </button>

              <a
                href={mailtoHref}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700/80 bg-slate-900/80 px-6 py-4 text-sm font-semibold text-slate-200 backdrop-blur-sm transition-all hover:border-slate-600 hover:bg-slate-800 hover:text-white active:scale-[0.98] cursor-pointer whitespace-nowrap"
              >
                <Mail className="h-4 w-4 text-cyan-400" />
                <span>Pedir avaliação gratuita</span>
              </a>
            </div>

            {/* Trust indicators - Zero Pill Discipline (unboxed text with ·) */}
            <div className="mt-10 pt-6 border-t border-slate-800/80">
              <div className="flex flex-wrap items-center gap-y-2 gap-x-3 text-xs text-slate-400 font-medium">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <ShieldCheck className="h-4 w-4 text-cyan-400" />
                  100% Personalizado
                </span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span>Sem apps para instalar</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span>Zero comissões por marcação</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span className="text-slate-300">Suporte Próximo em Braga & Online</span>
              </div>
            </div>
          </div>

          {/* Right Visual Carrier Column */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Architectural Studio Image Frame */}
              <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/90 shadow-2xl">
                <div className="aspect-[16/10] w-full overflow-hidden relative">
                  <img
                    src={heroWorkspaceImg}
                    alt="Estúdio de Engenharia de Software WebProLine em Braga"
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  
                  {/* Floating badge inside image */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-200 backdrop-blur-md bg-slate-950/80 p-3 rounded-lg border border-slate-800">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="font-medium text-white">Engenharia Web & Automação</span>
                    </div>
                    <span className="text-slate-400 text-[11px]">Braga, Portugal</span>
                  </div>
                </div>

                {/* Sub-card feature highlights */}
                <div className="p-5 space-y-3.5 bg-slate-900/95">
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      <Zap className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white">Carregamento Instantâneo & PWA</h3>
                      <p className="text-xs text-slate-400 mt-0.5">O cliente clica na Bio do Instagram e agenda em 30 segundos, sem logins chatos.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      <Calendar className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white">Sincronização com Google Calendar</h3>
                      <p className="text-xs text-slate-400 mt-0.5">Sem risco de marcações sobrepostas. O seu horário pessoal fica sempre respeitado.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
