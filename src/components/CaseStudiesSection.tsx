import React from 'react';
import { MapPin, ExternalLink } from 'lucide-react';
import { CASE_STUDIES } from '../data/mockData';

export const CaseStudiesSection: React.FC = () => {
  return (
    <section id="resultados" className="py-20 lg:py-28 bg-slate-900/60 relative border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="mb-3 flex items-center justify-center gap-2 text-xs font-semibold tracking-wider uppercase text-cyan-400">
            <span>Trabalhos Realizados</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Projetos Reais</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display text-balance">
            Sites, lojas online e plataformas feitas à medida
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Alguns dos projetos desenvolvidos para empresas em Braga e na região do Minho.
          </p>
        </div>

        {/* Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CASE_STUDIES.map((cs, idx) => (
            <div
              key={idx}
              className="flex flex-col rounded-2xl border border-slate-800 bg-slate-950/80 overflow-hidden transition-all hover:border-slate-700 hover:shadow-xl"
            >
              {/* Image (se existir) */}
              {cs.image && (
                <div className="relative w-full aspect-[16/10] bg-slate-950 overflow-hidden flex items-start justify-center">
              <img
                src={cs.image}
                alt={cs.title}
                className="w-full h-full object-contain object-top"
                loading="lazy"
              />
            </div>
              )}

              <div className="flex flex-col flex-1 p-6 sm:p-7">
                {/* Header: Location & Category */}
                <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                  <span className="flex items-center gap-1 text-cyan-400 font-medium">
                    <MapPin className="h-3 w-3" />
                    {cs.city}
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-slate-800 text-slate-300">
                    {cs.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white font-display mb-1">
                  {cs.title}
                </h3>

                {/* Metric */}
                <div className="mb-4">
                  <span className="block text-sm font-semibold text-emerald-400">
                    {cs.metric}
                  </span>
                  <span className="block text-xs text-slate-400 mt-0.5">
                    {cs.submetric}
                  </span>
                </div>

                {/* Challenge & Solution */}
                <div className="space-y-3 mb-5 text-xs text-slate-300 leading-relaxed flex-1">
                  <div>
                    <strong className="text-slate-400 block mb-0.5">O Desafio:</strong>
                    <p>{cs.challenge}</p>
                  </div>
                  <div>
                    <strong className="text-cyan-400 block mb-0.5">A Solução:</strong>
                    <p>{cs.solution}</p>
                  </div>
                </div>

                {/* Quote (só se existir) */}
                {cs.quote && (
                  <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs italic text-slate-200 leading-relaxed mb-5">
                    &quot;{cs.quote}&quot;
                    {cs.author && (
                      <div className="mt-2 not-italic text-[11px] text-slate-400">
                        — {cs.author}
                        {cs.role && <span className="block">{cs.role}</span>}
                      </div>
                    )}
                  </div>
                )}

                {/* Link (só se existir) */}
                {cs.link && (
                  <a
                    href={cs.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors mt-auto"
                  >
                    Ver site
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
