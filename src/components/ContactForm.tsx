import React, { useState, useEffect } from 'react';
import { 
  Send, 
  CheckCircle2, 
  MapPin, 
  Mail, 
  Instagram,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { COMPANY_EMAIL, INSTAGRAM_HANDLE, INSTAGRAM_URL, buildMailto } from '../data/contact';

export const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [businessType, setBusinessType] = useState('barbershop');
  const [goal, setGoal] = useState('agendamento');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [validationError, setValidationError] = useState('');

  // Listen for auto-fill events from simulator or calculator
  useEffect(() => {
    const handleAutoFill = (e: any) => {
      if (e.detail?.sector) {
        setBusinessType(e.detail.sector);
      }
      if (e.detail?.solutionTitle) {
        setNotes((prev) => 
          prev ? `${prev} · Interesse em: ${e.detail.solutionTitle}` : `Interesse em: ${e.detail.solutionTitle}`
        );
      }
    };

    window.addEventListener('select-sector-contact', handleAutoFill);
    return () => window.removeEventListener('select-sector-contact', handleAutoFill);
  }, []);

  const businessOptions = [
    { value: 'barbershop', label: 'Barbearia / Salão / Estética' },
    { value: 'clinic', label: 'Clínica / Saúde / Consultório' },
    { value: 'restaurant', label: 'Restaurante / Café / Hospitalidade' },
    { value: 'retail', label: 'Comércio Local / Loja Online' },
    { value: 'industry_sme', label: 'Indústria / Oficinas / PME' },
    { value: 'other', label: 'Outro tipo de negócio' },
  ];

  const goalOptions = [
    { value: 'agendamento', label: 'Plataforma de agendamento para barbearias' },
    { value: 'site_loja', label: 'Website Moderno / Loja Online com Pagamentos' },
    { value: 'eliminar_excel', label: 'Plataforma Interna (Eliminar Excel e Papel)' },
    { value: 'automacao_ia', label: 'Automação de Atendimento com IA' },
    { value: 'consultoria', label: 'Conversar sobre uma necessidade' },
  ];

  const buildMessageBody = () => {
    const businessLabel = businessOptions.find(b => b.value === businessType)?.label || businessType;
    const goalLabel = goalOptions.find(g => g.value === goal)?.label || goal;
    
    let text = `Olá!\n\nChamo-me *${name || 'um visitante do site'}* e tenho um negócio no ramo de *${businessLabel}*.\n\n*O que procuro melhorar:* ${goalLabel}.`;
    
    if (contact) {
      text += `\n*O meu contacto:* ${contact}`;
    }
    if (notes) {
      text += `\n*Detalhes adicionais:* ${notes}`;
    }
    
    text += `\n\nVi as soluções da WebProLine e gostaria de receber uma proposta/avaliação.`;
    return text;
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setValidationError('Por favor, indique o seu nome para podermos responder.');
      return;
    }
    if (!contact.trim()) {
      setValidationError('Por favor, indique um email ou Instagram para lhe respondermos.');
      return;
    }
    setValidationError('');
    window.location.href = buildMailto(`Contacto de ${name.trim()} — WebProLine`, buildMessageBody());
    setIsSubmitted(true);
  };

  return (
    <section id="contacto" className="py-20 lg:py-28 bg-slate-950 relative border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Contacts & Reassurance */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="mb-3 flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-cyan-400">
                <span>Contacto</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white font-display text-balance">
                Vamos conversar sobre o seu negócio?
              </h2>
              <p className="mt-4 text-base text-slate-300 leading-relaxed">
                Tem interesse na plataforma para barbearias ou noutro projeto web? Conte-nos um pouco sobre o que precisa. A mensagem será preparada no seu programa de email.
              </p>
            </div>

            {/* Visual Contact Cards */}
            <div className="space-y-4">
              <a 
                href={INSTAGRAM_URL}
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-start gap-4 p-4 rounded-xl border border-slate-800 bg-slate-900/60 hover:border-cyan-500/50 hover:bg-slate-900 transition-all cursor-pointer"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:scale-105 transition-transform">
                  <Instagram className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                    Instagram
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">{INSTAGRAM_HANDLE}</p>
                  <span className="text-xs font-mono text-cyan-400 font-semibold mt-1 inline-block">
                    Enviar mensagem no Instagram &rarr;
                  </span>
                </div>
              </a>

              <a 
                href={`mailto:${COMPANY_EMAIL}`}
                className="group flex items-start gap-4 p-4 rounded-xl border border-slate-800 bg-slate-900/60 hover:border-cyan-500/50 hover:bg-slate-900 transition-all cursor-pointer"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:scale-105 transition-transform">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                    Email Direto
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">{COMPANY_EMAIL}</p>
                  <span className="text-xs font-mono text-cyan-400 font-semibold mt-1 inline-block">
                    Enviar email &rarr;
                  </span>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 rounded-xl border border-slate-800 bg-slate-900/60">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    Localização & Presença
                  </h4>
                  <p className="text-xs text-slate-300 mt-0.5">Braga, Minho · Portugal</p>
                  <span className="text-xs text-slate-400 mt-1 block">
                    Atendimento presencial no Minho e digital em todo o país
                  </span>
                </div>
              </div>
            </div>

            {/* Guarantee note */}
            <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
              <span>Os dados preenchidos não são enviados automaticamente. A mensagem só segue quando a enviar no seu programa de email.</span>
            </div>
          </div>

          {/* Right Column: Clean Pre-filled Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 sm:p-8 shadow-2xl backdrop-blur-sm">
              
              {isSubmitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="h-14 w-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-display">
                    Email preparado
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Obrigado pelo interesse, <strong>{name}</strong>! Se a sua aplicação de email abriu com a mensagem pronta, basta enviá-la. Responderemos o mais brevemente possível.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-xs text-cyan-400 hover:text-cyan-300 font-medium underline cursor-pointer"
                    >
                      Enviar outra mensagem ou alterar dados
                    </button>
                  </div>
                </div>
              ) : (
                <form className="space-y-5" onSubmit={handleSendEmail}>
                  <div>
                      <h3 className="text-xl font-bold text-white font-display">
                      Envie-nos uma mensagem
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Ao continuar, abrimos o seu programa de email com os detalhes que indicar.
                    </p>
                  </div>

                  {validationError && (
                    <div className="p-3 rounded-lg bg-rose-950/60 border border-rose-800 text-xs text-rose-300 flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      <span>{validationError}</span>
                    </div>
                  )}

                  {/* Name field */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      O seu Nome *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ex: Gonçalo Marques"
                      className="w-full rounded-xl border border-slate-700/80 bg-slate-950 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Contact field */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Email ou Instagram de Contacto
                    </label>
                    <input
                      type="text"
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      placeholder="Ex: exemplo@empresa.pt ou @onossonegocio"
                      className="w-full rounded-xl border border-slate-700/80 bg-slate-950 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Business Sector */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Tipo de Negócio
                    </label>
                    <select
                      value={businessType}
                      onChange={(e) => setBusinessType(e.target.value)}
                      className="w-full rounded-xl border border-slate-700/80 bg-slate-950 px-4 py-3 text-sm text-white focus:border-cyan-400 focus:outline-none transition-colors"
                    >
                      {businessOptions.map((opt) => (
                        <option key={opt.value} value={opt.value} className="bg-slate-900 text-white">
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Goal / What to improve */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      O que procura melhorar prioritariamente?
                    </label>
                    <select
                      value={goal}
                      onChange={(e) => setGoal(e.target.value)}
                      className="w-full rounded-xl border border-slate-700/80 bg-slate-950 px-4 py-3 text-sm text-white focus:border-cyan-400 focus:outline-none transition-colors"
                    >
                      {goalOptions.map((opt) => (
                        <option key={opt.value} value={opt.value} className="bg-slate-900 text-white">
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Notes / Free text */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Detalhes adicionais (opcional)
                    </label>
                    <textarea
                      rows={2}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Ex: Tenho 3 barbeiros e queremos parar de usar papel..."
                      className="w-full rounded-xl border border-slate-700/80 bg-slate-950 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit actions */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3.5 text-sm font-bold text-slate-950 shadow-md shadow-cyan-500/20 hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap"
                    >
                      <Send className="h-4 w-4" />
                      <span>Enviar por Email</span>
                    </button>

                    <a
                      href={INSTAGRAM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800 px-5 py-3.5 text-sm font-semibold text-slate-200 hover:bg-slate-700 hover:text-white active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap"
                    >
                      <Instagram className="h-4 w-4 text-cyan-400" />
                      <span>Falar no Instagram</span>
                    </a>
                  </div>

                  <p className="text-[11px] text-slate-400 text-center pt-1">
                    Ao clicar em Enviar por Email, abre a sua aplicação de email com a mensagem já redigida.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
