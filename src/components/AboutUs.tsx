import React from 'react';
import { 
  MapPin, 
  Mail, 
  Instagram, 
  CheckCircle2, 
  Coffee
} from 'lucide-react';
import { COMPANY_EMAIL, INSTAGRAM_HANDLE, INSTAGRAM_URL, buildMailto } from '../data/contact';

export const AboutUs: React.FC = () => {
  const mailtoHref = buildMailto(
    'Gostava de falar sobre um projeto',
    'Olá, li a apresentação no site da WebProLine e gostava de trocar ideias sobre um projeto.'
  );

  return (
    <section id="sobre" className="py-20 lg:py-28 bg-slate-950 relative border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Brand & Trust Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              {/* Brand Frame */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl">
                <div className="flex items-center justify-center bg-slate-950 p-10">
                  <img
                    src="/logo_webproline_512.png"
                    alt="Logo WebProLine"
                    width={320}
                    height={320}
                    className="w-full max-w-[320px] aspect-square rounded-full"
                  />
                </div>

                <div className="border-t border-slate-800 p-6">
                  <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 mb-1">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>Braga, Minho · Portugal</span>
                  </div>
                  <h3 className="text-xl font-bold text-white font-display">
                    WebProLine
                  </h3>
                  <p className="text-xs text-slate-300">
                    Engenharia de software e plataformas web sob medida
                  </p>
                </div>
              </div>

              {/* Trust Badge below */}
              <div className="mt-4 p-4 rounded-xl border border-slate-800 bg-slate-900/60 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-slate-300">
                  <Coffee className="h-4 w-4 text-amber-400" />
                  <span>Reuniões presenciais em Braga ou online</span>
                </div>
                <span className="text-cyan-400 font-medium">{INSTAGRAM_HANDLE}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-cyan-400 mb-2">
                <span>Quem Está Por Trás</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span>Engenharia com Rosto Humano</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white font-display text-balance">
                Rigor técnico de engenharia aliado à realidade prática do comércio e serviços
              </h2>
            </div>

            <p className="text-base text-slate-300 leading-relaxed">
              Somos a <strong>WebProLine</strong>. Ao longo do nosso percurso em engenharia de software, percebemos que a grande maioria dos negócios locais — desde a barbearia na esquina à clínica médica ou à fábrica de produção — ficava presa entre duas más escolhas:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
                <span className="text-rose-400 font-semibold text-xs block mb-1">❌ O Problema Habitual</span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Plataformas de marketplace genéricas que cobram comissões por cada cliente marcado, ou sites em templates lentos que quebram com a primeira atualização.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-800/40">
                <span className="text-cyan-400 font-semibold text-xs block mb-1">✅ A Abordagem WebProLine</span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Sistemas proprietários, leves e rápidos. Sem intermediários, sem comissões abusivas e feitos à medida da rotina real do seu negócio.
                </p>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Os nossos compromissos em cada projeto:
              </h4>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-sm font-semibold text-white">Zero jargão incompreensível</h5>
                  <p className="text-xs text-slate-400 mt-0.5">Explicamos o funcionamento em termos claros de negócio: quanto tempo poupa e quanto passa a faturar.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-sm font-semibold text-white">Código limpo e autonomia total</h5>
                  <p className="text-xs text-slate-400 mt-0.5">A plataforma é sua. Não fica refém de contratos de fidelização perpétuos.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-sm font-semibold text-white">Acompanhamento próximo & formação</h5>
                  <p className="text-xs text-slate-400 mt-0.5">Ensinamos pessoalmente a sua equipa a tirar partido do sistema em menos de 15 minutos.</p>
                </div>
              </div>
            </div>

            {/* Quick actions */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={mailtoHref}
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-6 py-3.5 text-xs sm:text-sm transition-all shadow-md shadow-cyan-500/20 cursor-pointer"
              >
                <Mail className="h-4 w-4" />
                <span>Falar Connosco por Email</span>
              </a>

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                <Instagram className="h-4 w-4 text-cyan-400" />
                <span>{INSTAGRAM_HANDLE}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
