import React, { useState } from 'react';
import { 
  Calculator, 
  Sparkles, 
  CheckCircle, 
  Clock, 
  TrendingUp, 
  ArrowRight, 
  Scissors, 
  Stethoscope, 
  ShoppingBag, 
  Utensils, 
  Factory 
} from 'lucide-react';
import { SECTOR_DIAGNOSTICS } from '../data/mockData';
import { BusinessSector, SectorDiagnostic } from '../types';

export const NeedsCalculator: React.FC = () => {
  const [selectedSector, setSelectedSector] = useState<BusinessSector>('barbershop');
  const [weeklyHoursLost, setWeeklyHoursLost] = useState<number>(6);
  const [weeklyAppointments, setWeeklyAppointments] = useState<number>(65);

  const diagnostic: SectorDiagnostic = 
    SECTOR_DIAGNOSTICS.find((s) => s.id === selectedSector) || SECTOR_DIAGNOSTICS[0];

  // Show the user's own inputs; do not present unsupported savings projections.

  const getSectorIcon = (id: BusinessSector) => {
    switch (id) {
      case 'barbershop':
        return <Scissors className="h-4 w-4" />;
      case 'clinic':
        return <Stethoscope className="h-4 w-4" />;
      case 'retail':
        return <ShoppingBag className="h-4 w-4" />;
      case 'restaurant':
        return <Utensils className="h-4 w-4" />;
      case 'industry_sme':
        return <Factory className="h-4 w-4" />;
    }
  };

  const handleSelectSolution = () => {
    const contactElem = document.getElementById('contacto');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
      window.dispatchEvent(new CustomEvent('select-sector-contact', { 
        detail: { 
          sector: selectedSector, 
          solutionTitle: diagnostic.recommendedSolution 
        } 
      }));
    }
  };

  return (
    <section id="diagnostico" className="py-20 lg:py-28 bg-slate-950 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="mb-3 flex items-center justify-center gap-2 text-xs font-semibold tracking-wider uppercase text-cyan-400">
            <Calculator className="h-3.5 w-3.5" />
            <span>Uma primeira reflexão</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display text-balance">
            Onde perde mais tempo na gestão?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Indique o tempo que dedica a tarefas administrativas e o volume de atendimentos. Não calculamos poupanças presumidas: usamos estas respostas para iniciar uma conversa sobre o que pode ser melhorado.
          </p>
        </div>

        {/* Sector Picker Buttons (Interactive Filter Control) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 max-w-5xl mx-auto mb-12">
          {SECTOR_DIAGNOSTICS.map((sec) => {
            const isSelected = sec.id === selectedSector;
            return (
              <button
                key={sec.id}
                onClick={() => setSelectedSector(sec.id)}
                className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-cyan-950/60 border-cyan-400 ring-1 ring-cyan-400 shadow-md shadow-cyan-950/50'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900 text-slate-400'
                }`}
              >
                <div className={`p-2 rounded-lg w-fit mb-2 ${
                  isSelected ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-slate-300'
                }`}>
                  {getSectorIcon(sec.id)}
                </div>
                <div>
                  <h4 className={`text-xs font-bold leading-snug ${
                    isSelected ? 'text-white' : 'text-slate-300'
                  }`}>
                    {sec.title.split(',')[0]}
                  </h4>
                  <span className="text-[10px] text-slate-400 block mt-0.5">
                    {sec.id === 'industry_sme' ? 'Processos' : 'Solução Web'}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Interactive Calculator Workspace */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Sliders & User Input (Left Column) */}
          <div className="lg:col-span-5 p-6 rounded-2xl border border-slate-800 bg-slate-900/70 space-y-6">
            <h3 className="text-base font-bold text-white font-display">
              Ajuste a realidade do seu negócio:
            </h3>

            {/* Slider 1: Hours spent manually */}
            <div>
              <div className="flex justify-between items-center mb-2 text-sm">
              <span className="text-slate-300 font-medium">Horas por semana em chamadas e gestão:</span>
                <span className="font-mono text-cyan-400 font-bold text-base tabular-nums">
                  {weeklyHoursLost} h
                </span>
              </div>
              <input
                type="range"
                min="2"
                max="25"
                step="1"
                value={weeklyHoursLost}
                onChange={(e) => setWeeklyHoursLost(Number(e.target.value))}
                className="w-full accent-cyan-400 bg-slate-800 h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
                <span>2 h/sem (pouco)</span>
                <span>12 h/sem</span>
                <span>25 h/sem (crítico)</span>
              </div>
            </div>

            {/* Slider 2: Weekly clients/volume */}
            <div>
              <div className="flex justify-between items-center mb-2 text-sm">
              <span className="text-slate-300 font-medium">Atendimentos por semana:</span>
                <span className="font-mono text-emerald-400 font-bold text-base tabular-nums">
                  {weeklyAppointments}
                </span>
              </div>
              <input
                type="range"
                min="15"
                max="250"
                step="5"
                value={weeklyAppointments}
                onChange={(e) => setWeeklyAppointments(Number(e.target.value))}
                className="w-full accent-emerald-400 bg-slate-800 h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
                <span>15 clientes</span>
                <span>120 clientes</span>
                <span>250+ clientes</span>
              </div>
            </div>

            {/* Instant Calculated Impact Cards */}
          <div className="pt-2 border-t border-slate-800 space-y-3">
            <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                  <Clock className="h-4 w-4" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">Tempo dedicado atualmente</span>
                  <span className="text-sm font-semibold text-slate-200">Segundo a sua estimativa</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-xl font-extrabold text-cyan-400 font-mono tabular-nums">
                  {weeklyHoursLost} h
                </span>
                <span className="block text-[10px] text-slate-400">por semana</span>
              </div>
            </div>

            <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                  <TrendingUp className="h-4 w-4" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">Volume de atendimentos</span>
                  <span className="text-sm font-semibold text-slate-200">Segundo a sua estimativa</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-xl font-extrabold text-emerald-400 font-mono tabular-nums">
                  {weeklyAppointments}
                </span>
                <span className="block text-[10px] text-slate-400">por semana</span>
              </div>
            </div>

            {/* Aviso claro */}
            <div className="p-3 rounded-xl bg-amber-950/40 border border-amber-800/50 text-xs text-amber-200/90 leading-relaxed">
              Estes valores são as respostas que indicou, não previsões de poupança ou resultados.
            </div>
        </div>

          </div>

          {/* Solution Recommendation & Blueprint (Right Column) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl border border-cyan-900/50 bg-gradient-to-br from-slate-900 to-slate-950 space-y-6 shadow-xl">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-2">
                <span>Possível área de trabalho</span>
              </div>
              <h3 className="text-2xl font-bold text-white font-display">
                {diagnostic.recommendedSolution}
              </h3>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                {diagnostic.subtitle}
              </p>
            </div>

            {/* Key Benefits List */}
            <div>
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                Pontos a explorar:
              </h4>
              <ul className="space-y-2.5">
                {diagnostic.keyBenefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate-200">
                    <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="border-t border-slate-800/80 pt-4 text-xs leading-relaxed text-slate-400">
              As necessidades e funcionalidades variam de negócio para negócio. A solução só fica definida depois de percebermos como trabalha a sua equipa.
            </p>

            {/* Action button */}
            <div className="pt-2">
              <button
                onClick={handleSelectSolution}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-4 text-sm font-bold text-slate-950 shadow-md shadow-cyan-500/20 transition-all hover:brightness-110 active:scale-[0.99] cursor-pointer"
              >
                <span>Conversar sobre esta necessidade</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
