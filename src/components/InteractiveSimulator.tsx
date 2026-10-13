import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Clock, 
  Calendar, 
  User, 
  ChevronRight, 
  ChevronLeft, 
  RotateCcw, 
  Smartphone, 
  Sparkles, 
  Send, 
  Share2, 
  MapPin, 
  ArrowRight,
  ShieldCheck,
  BellRing
} from 'lucide-react';
import { SIMULATOR_PRESETS } from '../data/mockData';
import { BusinessSector, SimulatorPreset, SimulatorService, SimulatorStaff } from '../types';

export const InteractiveSimulator: React.FC = () => {
  const [activeSector, setActiveSector] = useState<BusinessSector>('barbershop');
  const [step, setStep] = useState<number>(1);
  
  const currentPreset: SimulatorPreset = 
    SIMULATOR_PRESETS.find((p) => p.id === activeSector) || SIMULATOR_PRESETS[0];

  // Simulator flow state
  const [selectedService, setSelectedService] = useState<SimulatorService>(currentPreset.services[0]);
  const [selectedStaff, setSelectedStaff] = useState<SimulatorStaff>(currentPreset.staff[0]);
  const [selectedDateIndex, setSelectedDateIndex] = useState<number>(0);
  const [selectedTime, setSelectedTime] = useState<string>(currentPreset.availableSlots[1] || '11:00');
  const [clientName, setClientName] = useState<string>('João Silva');
  const [clientPhone, setClientPhone] = useState<string>('912 345 678');
  const [whatsappSentPreview, setWhatsappSentPreview] = useState<boolean>(false);

  // Generate date options (today, tomorrow, next day)
  const dateOptions = [
    { label: 'Hoje', date: 'Hoje, 8 Out' },
    { label: 'Amanhã', date: 'Amanhã, 9 Out' },
    { label: 'Sexta', date: 'Sex, 10 Out' },
    { label: 'Sábado', date: 'Sáb, 11 Out' },
  ];

  const handleSectorChange = (newSector: BusinessSector) => {
    setActiveSector(newSector);
    const found = SIMULATOR_PRESETS.find((p) => p.id === newSector) || SIMULATOR_PRESETS[0];
    setSelectedService(found.services[0]);
    setSelectedStaff(found.staff[0]);
    setSelectedTime(found.availableSlots[1] || '11:00');
    setStep(1);
    setWhatsappSentPreview(false);
  };

  const handleReset = () => {
    setStep(1);
    setWhatsappSentPreview(false);
  };

  const handlePreFillContact = (sectorName: string) => {
    const contactElem = document.getElementById('contacto');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
      // Dispatch custom event or let state propagate
      window.dispatchEvent(new CustomEvent('select-sector-contact', { detail: { sector: activeSector } }));
    }
  };

  return (
    <section id="simulador" className="relative py-20 lg:py-28 bg-slate-900/50 border-y border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="mb-3 flex items-center justify-center gap-2 text-xs font-semibold tracking-wider uppercase text-cyan-400">
            <span>Experiência Interativa</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Fluxo de Demonstração em Tempo Real</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display text-balance">
            Veja um exemplo de plataforma de marcações
          </h2>
        <p className="mt-3 text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed">
          O simulador mostra um exemplo de sistema de agendamento. 
          Se o seu negócio precisar de um site, uma loja online ou uma ferramenta interna, o processo é o mesmo: analisamos a necessidade e construímos à medida.
        </p>

          {/* Sector Switcher Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {SIMULATOR_PRESETS.map((preset) => {
              const isActive = preset.id === activeSector;
              return (
                <button
                  key={preset.id}
                  onClick={() => handleSectorChange(preset.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                      : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/60'
                  }`}
                >
                  <span>{preset.id === 'barbershop' ? '💈' : preset.id === 'clinic' ? '🩺' : '🍷'}</span>
                  <span>{preset.businessName}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Grid: Interactive Phone + Strategic Explanations */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Interactive Smartphone Mockup (Center/Left) */}
          <div className="lg:col-span-6 flex justify-center">
            {/* Phone outer bezel */}
            <div className="relative w-full max-w-[360px] rounded-[44px] p-3.5 bg-slate-950 border-4 border-slate-700 shadow-2xl shadow-cyan-950/40 ring-1 ring-slate-800">
              
              {/* Phone speaker & camera notch */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-4.5 bg-slate-900 rounded-full flex items-center justify-center z-30 border border-slate-800">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-950 mr-2 border border-slate-800/80" />
                <div className="w-8 h-1 bg-slate-800 rounded-full" />
              </div>

              {/* Phone screen container */}
              <div className="relative bg-slate-950 text-slate-100 rounded-[34px] overflow-hidden min-h-[580px] flex flex-col border border-slate-800/80">
                
                {/* Phone Status Bar */}
                <div className="pt-2 px-6 pb-2 flex justify-between items-center text-[10px] text-slate-400 font-mono tracking-tight select-none">
                  <span>09:41</span>
                  <div className="flex items-center gap-1.5">
                    <span>5G</span>
                    <div className="w-4 h-2 border border-slate-400 rounded-xs p-0.5 flex items-center">
                      <div className="w-full h-full bg-emerald-400" />
                    </div>
                  </div>
                </div>

                {/* In-app Business Header */}
                <div className="px-4 py-3 border-b border-slate-800/90 bg-slate-900/60 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-cyan-600 to-blue-500 flex items-center justify-center font-bold text-xs text-white">
                      {currentPreset.businessName.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white leading-tight font-display">
                        {currentPreset.businessName}
                      </h4>
                      <p className="text-[10px] text-slate-400 flex items-center gap-1">
                        <MapPin className="h-2.5 w-2.5 text-cyan-400" />
                        {currentPreset.address}
                      </p>
                    </div>
                  </div>
                  {step > 1 && (
                    <button
                      onClick={handleReset}
                      className="text-[11px] text-cyan-400 hover:text-cyan-300 flex items-center gap-1 cursor-pointer font-medium"
                    >
                      <RotateCcw className="h-3 w-3" />
                      <span>Início</span>
                    </button>
                  )}
                </div>

                {/* Step indicator bar */}
                <div className="px-4 pt-2.5 pb-1 flex items-center justify-between text-[11px] text-slate-400 border-b border-slate-800/40">
                  <span className="font-semibold text-slate-300">
                    {step === 1 && 'Passo 1: Selecione o Serviço'}
                    {step === 2 && 'Passo 2: Escolha o Especialista'}
                    {step === 3 && 'Passo 3: Data & Horário'}
                    {step === 4 && 'Passo 4: Seus Dados'}
                    {step === 5 && '✅ Agendamento Confirmado'}
                  </span>
                  <span className="font-mono text-[10px] text-cyan-400 font-bold">
                    {step}/4
                  </span>
                </div>

                {/* Interactive Screen Content Body */}
                <div className="flex-1 p-3.5 overflow-y-auto space-y-2.5">

                  {/* STEP 1: CHOOSE SERVICE */}
                  {step === 1 && (
                    <div className="space-y-2">
                      <div className="text-[11px] text-slate-400 mb-2">
                        Toque num dos serviços abaixo para testar:
                      </div>
                      {currentPreset.services.map((srv) => {
                        const isSelected = selectedService.id === srv.id;
                        return (
                          <div
                            key={srv.id}
                            onClick={() => setSelectedService(srv)}
                            className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                              isSelected
                                ? 'bg-cyan-950/40 border-cyan-500 shadow-sm'
                                : 'bg-slate-900/60 border-slate-800/80 hover:border-slate-700'
                            }`}
                          >
                            <div className="flex items-start justify-between">
                              <div>
                                <div className="flex items-center gap-1.5">
                                  <span className="text-xs font-semibold text-white">
                                    {srv.name}
                                  </span>
                                  {srv.popular && (
                                    <span className="text-[9px] bg-cyan-500/20 text-cyan-300 px-1.5 py-0.2 rounded font-medium">
                                      Popular
                                    </span>
                                  )}
                                </div>
                                <p className="text-[10px] text-slate-400 mt-1 line-clamp-2">
                                  {srv.description}
                                </p>
                              </div>
                              <div className="text-right shrink-0 ml-2">
                                <span className="text-xs font-bold text-emerald-400 font-mono">
                                  {srv.price}
                                </span>
                                <span className="block text-[10px] text-slate-400 flex items-center justify-end gap-1 mt-0.5">
                                  <Clock className="h-2.5 w-2.5" /> {srv.duration}
                                </span>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* STEP 2: CHOOSE STAFF */}
                  {step === 2 && (
                    <div className="space-y-2">
                      <div className="text-[11px] text-slate-400 mb-2">
                        Com quem prefere ser atendido?
                      </div>
                      {currentPreset.staff.map((st) => {
                        const isSelected = selectedStaff.id === st.id;
                        return (
                          <div
                            key={st.id}
                            onClick={() => setSelectedStaff(st)}
                            className={`p-3 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                              isSelected
                                ? 'bg-cyan-950/40 border-cyan-500'
                                : 'bg-slate-900/60 border-slate-800/80 hover:border-slate-700'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <div className="h-9 w-9 rounded-full bg-slate-800 flex items-center justify-center font-bold text-xs text-cyan-300 border border-slate-700">
                                {st.initials}
                              </div>
                              <div>
                                <h5 className="text-xs font-semibold text-white">{st.name}</h5>
                                <p className="text-[10px] text-slate-400">{st.role}</p>
                                <span className="text-[9px] text-amber-400 font-mono">★ {st.rating}</span>
                              </div>
                            </div>
                            <div className={`h-4 w-4 rounded-full border flex items-center justify-center ${
                              isSelected ? 'border-cyan-400 bg-cyan-400' : 'border-slate-700'
                            }`}>
                              {isSelected && <div className="h-1.5 w-1.5 rounded-full bg-slate-950" />}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* STEP 3: DATE & TIME */}
                  {step === 3 && (
                    <div className="space-y-3">
                      <div>
                        <span className="text-[11px] font-medium text-slate-300 block mb-1.5">
                          Escolha o dia:
                        </span>
                        <div className="grid grid-cols-4 gap-1.5">
                          {dateOptions.map((opt, idx) => (
                            <button
                              key={opt.date}
                              onClick={() => setSelectedDateIndex(idx)}
                              className={`p-2 rounded-lg text-center cursor-pointer transition-all border ${
                                selectedDateIndex === idx
                                  ? 'bg-cyan-500 text-slate-950 font-bold border-cyan-400 shadow-sm'
                                  : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                              }`}
                            >
                              <span className="block text-[10px] leading-tight opacity-80">{opt.label}</span>
                              <span className="block text-[11px] font-semibold mt-0.5">{opt.date.split(',')[1]}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <span className="text-[11px] font-medium text-slate-300 block mb-1.5">
                          Horários livres para {selectedStaff.name.split(' ')[0]}:
                        </span>
                        <div className="grid grid-cols-3 gap-2">
                          {currentPreset.availableSlots.map((slot) => {
                            const isSlotActive = selectedTime === slot;
                            return (
                              <button
                                key={slot}
                                onClick={() => setSelectedTime(slot)}
                                className={`py-2 px-1 text-center rounded-lg text-xs font-mono font-medium border cursor-pointer transition-all ${
                                  isSlotActive
                                    ? 'bg-emerald-500 text-slate-950 font-bold border-emerald-400'
                                    : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                                }`}
                              >
                                {slot}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <div className="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800 text-[10px] text-slate-400">
                        <span className="text-cyan-400 font-medium">Serviço:</span> {selectedService.name} ({selectedService.duration})
                      </div>
                    </div>
                  )}

                  {/* STEP 4: CONTACT & DETAILS */}
                  {step === 4 && (
                    <div className="space-y-3">
                      <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800 space-y-1.5 text-[11px]">
                        <div className="flex justify-between">
                          <span className="text-slate-400">Serviço:</span>
                          <span className="font-semibold text-white">{selectedService.name}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Com:</span>
                          <span className="text-slate-200">{selectedStaff.name}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Data e Hora:</span>
                          <span className="font-mono text-cyan-400">{dateOptions[selectedDateIndex].date} às {selectedTime}</span>
                        </div>
                        <div className="flex justify-between pt-1 border-t border-slate-800 font-bold">
                          <span className="text-slate-300">Total a pagar no local:</span>
                          <span className="text-emerald-400">{selectedService.price}</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div>
                          <label className="block text-[10px] text-slate-400 mb-1">O seu nome</label>
                          <input
                            type="text"
                            value={clientName}
                            onChange={(e) => setClientName(e.target.value)}
                            className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-cyan-500"
                            placeholder="Ex: Pedro Lima"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] text-slate-400 mb-1">Telemóvel (para confirmação WhatsApp)</label>
                          <input
                            type="tel"
                            value={clientPhone}
                            onChange={(e) => setClientPhone(e.target.value)}
                            className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-cyan-500"
                            placeholder="Ex: 912 345 678"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* STEP 5: CONFIRMATION & WHATSAPP NOTIFICATION PREVIEW */}
                  {step === 5 && (
                    <div className="space-y-3 text-center py-2">
                      <div className="h-12 w-12 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                        <CheckCircle2 className="h-6 w-6" />
                      </div>
                      
                      <div>
                        <h5 className="text-sm font-bold text-white font-display">
                          Marcação Confirmada!
                        </h5>
                        <p className="text-[10px] text-slate-400 mt-0.5">
                          Código de Reserva: <span className="font-mono text-cyan-400 font-semibold">#WPL-9821</span>
                        </p>
                      </div>

                      {/* Mocked WhatsApp Notification Bubble */}
                      <div className="bg-emerald-950/40 border border-emerald-800/60 rounded-xl p-3 text-left relative overflow-hidden shadow-sm">
                        <div className="flex items-center gap-1.5 text-[10px] font-semibold text-emerald-400 mb-1.5">
                          <BellRing className="h-3 w-3" />
                          <span>Mensagem Automática WhatsApp Enviada</span>
                        </div>
                        <p className="text-[10px] text-slate-200 leading-relaxed font-sans">
                          &quot;Olá <strong className="text-white">{clientName || 'Cliente'}</strong>! A sua marcação para <strong className="text-white">{selectedService.name}</strong> com <strong className="text-white">{selectedStaff.name}</strong> está confirmada para <strong className="text-emerald-300">{dateOptions[selectedDateIndex].date} às {selectedTime}</strong> em {currentPreset.businessName}. Clique aqui caso precise reagendar.&quot;
                        </p>
                      </div>

                      <div className="pt-1">
                        <button
                          onClick={handleReset}
                          className="w-full py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 font-medium transition-colors cursor-pointer"
                        >
                          Simular Outro Cenário
                        </button>
                      </div>
                    </div>
                  )}

                </div>

                {/* Bottom Action Footer inside Phone */}
                <div className="p-3 border-t border-slate-800/90 bg-slate-900/90 flex items-center justify-between gap-2">
                  {step > 1 && step < 5 ? (
                    <button
                      onClick={() => setStep(step - 1)}
                      className="px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium cursor-pointer transition-colors"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                  ) : null}

                  {step < 4 && (
                    <button
                      onClick={() => setStep(step + 1)}
                      className="flex-1 py-2.5 px-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-semibold text-xs flex items-center justify-center gap-1.5 hover:brightness-110 active:scale-98 transition-all cursor-pointer"
                    >
                      <span>Avançar</span>
                      <ChevronRight className="h-3.5 w-3.5" />
                    </button>
                  )}

                  {step === 4 && (
                    <button
                      onClick={() => setStep(5)}
                      className="flex-1 py-2.5 px-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 transition-all active:scale-98 cursor-pointer shadow-md shadow-emerald-500/20"
                    >
                      <span>Confirmar Agendamento</span>
                      <CheckCircle2 className="h-3.5 w-3.5" />
                    </button>
                  )}

                  {step === 5 && (
                    <button
                      onClick={() => handlePreFillContact(currentPreset.businessName)}
                      className="flex-1 py-2 px-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                    >
                      <span>Quero isto no meu Negócio</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  )}
                </div>

              </div>
            </div>
          </div>

          {/* Strategic Explanations & Business Value (Right Column) */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-2">
                <span>Por Que Esta Solução Vence</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-display text-balance">
                O cliente agenda em 30 segundos. Você não interrompe o trabalho.
              </h3>
              <p className="mt-3 text-slate-300 text-base leading-relaxed">
                Esqueça os sistemas antigos que obrigavam o cliente a descarregar uma app pesada de 100MB da App Store ou a preencher formulários com passwords que ninguém se lembra.
              </p>
            </div>

            {/* 3 Practical Highlights */}
            <div className="space-y-4">
              <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-sm">
                <div className="flex items-start gap-3.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <Smartphone className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white">
                      Acesso Instantâneo no Link do Instagram ou Google
                    </h4>
                    <p className="text-sm text-slate-400 mt-1 leading-relaxed">
                      O cliente abre no navegador do telemóvel num piscar de olhos. Carrega em menos de 0.8 segundos e adapta-se a qualquer ecrã com a identidade visual da sua marca.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-sm">
                <div className="flex items-start gap-3.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <Send className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white">
                      Lembretes Automáticos por WhatsApp & SMS
                    </h4>
                    <p className="text-sm text-slate-400 mt-1 leading-relaxed">
                      Mais de 90% das faltas (no-shows) acontecem por esquecimento. O sistema avisa o cliente automaticamente com opção de confirmação ou reagendamento sem lhe roubar tempo.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-sm">
                <div className="flex items-start gap-3.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white">
                      Zero Comissões por Cliente ou Taxas Mensais Ocultas
                    </h4>
                    <p className="text-sm text-slate-400 mt-1 leading-relaxed">
                      As plataformas de marketplace cobram mensalidades por funcionário e comissões sobre os seus próprios clientes. A WebProLine constrói uma solução proprietária que é sua.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick action block */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={() => handlePreFillContact(currentPreset.businessName)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition-all shadow-md shadow-cyan-500/20 cursor-pointer"
              >
                <span>Pedir Sistema Semelhante para o meu Negócio</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <span className="text-xs text-slate-400 font-medium">
                Sem compromisso · Proposta em 24h
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
