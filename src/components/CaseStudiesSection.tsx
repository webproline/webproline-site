import React from 'react';
import { Quote, TrendingUp, CheckCircle, MapPin, Building2 } from 'lucide-react';
import { CASE_STUDIES } from '../data/mockData';

export const CaseStudiesSection: React.FC = () => {
  return (
    <section id="resultados" className="py-20 lg:py-28 bg-slate-900/60 relative border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="mb-3 flex items-center justify-center gap-2 text-xs font-semibold tracking-wider uppercase text-cyan-400">
            <span>Resultados Comprovados</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Impacto em Negócios Reais</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display text-balance">
            Menos tempo perdido ao telemóvel. Mais faturação em caixa.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Veja como empresas de Braga e da região do Minho transformaram as suas rotinas diárias com as soluções da WebProLine.
          </p>
        </div>

        {/* 3 Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CASE_STUDIES.map((cs, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-950/80 p-6 sm:p-7 transition-all hover:border-slate-700 hover:shadow-xl"
            >
              <div>
                {/* Header: Location & Category */}
                <div className="flex items-center justify-between text-xs text-slate-400 mb-4 pb-3 border-b border-slate-800/80">
                  <span className="flex items-center gap-1 text-cyan-400 font-medium">
                    <MapPin className="h-3 w-3" />
                    {cs.city}
                  </span>
                  <span>{cs.category}</span>
                </div>

                {/* Marquee Primary Metric (Large, tabular-nums) */}
                <div className="mb-4">
                  <span className="block text-2xl font-extrabold text-emerald-400 font-mono tracking-tight tabular-nums">
                    {cs.metric}
                  </span>
                  <span className="block text-xs text-slate-300 font-medium mt-0.5">
                    {cs.submetric}
                  </span>
                </div>

                {/* Challenge & Solution */}
                <div className="space-y-3 mb-6 text-xs text-slate-300 leading-relaxed">
                  <div>
                    <strong className="text-slate-400 block mb-0.5">O Desafio:</strong>
                    <p>{cs.challenge}</p>
                  </div>
                  <div>
                    <strong className="text-cyan-400 block mb-0.5">A Solução WebProLine:</strong>
                    <p>{cs.solution}</p>
                  </div>
                </div>

                {/* Quote */}
                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs italic text-slate-200 leading-relaxed mb-6">
                  &quot;{cs.quote}&quot;
                </div>
              </div>

              {/* Author attribution */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-white">{cs.author}</h4>
                  <p className="text-[11px] text-slate-400">{cs.role}</p>
                </div>
                <div className="h-8 w-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 text-xs font-bold">
                  {cs.author.charAt(0)}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
