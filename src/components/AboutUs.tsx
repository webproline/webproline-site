import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Mail, 
  Instagram, 
  CheckCircle2, 
  Coffee
} from 'lucide-react';
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from '../data/contact';

export const AboutUs: React.FC = () => {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-slate-950 relative border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md">
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
                    Desenvolvimento web em Braga
                  </p>
                </div>
              </div>

              <div className="mt-4 p-4 rounded-xl border border-slate-800 bg-slate-900/60 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-slate-300">
                  <Coffee className="h-4 w-4 text-amber-400" />
                  <span>Reuniões presenciais em Braga ou online</span>
                </div>
                <span className="text-cyan-400 font-medium">{INSTAGRAM_HANDLE}</span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-cyan-400 mb-2">
                <span>Sobre a WebProLine</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white font-display text-balance">
                Tecnologia feita com atenção a quem a vai usar
              </h2>
            </div>

            <p className="text-base text-slate-300 leading-relaxed">
              A <strong>WebProLine</strong> é um projeto de desenvolvimento web sediado em Braga. Estamos a criar uma plataforma de agendamento para barbearias e queremos que os profissionais do setor participem na definição do que é realmente útil.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
                  <span className="text-slate-200 font-semibold text-xs block mb-1">O ponto de partida</span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Cada barbearia tem a sua forma de organizar serviços, horários e equipa. Uma ferramenta deve respeitar essa rotina.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-800/40">
                  <span className="text-cyan-400 font-semibold text-xs block mb-1">Como estamos a trabalhar</span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Estamos a falar com barbeiros enquanto desenvolvemos a plataforma. O produto está em desenvolvimento e as funcionalidades serão apresentadas com clareza.
                </p>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                A forma de trabalhar:
              </h4>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                    <h5 className="text-sm font-semibold text-white">Âmbito claro</h5>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Antes de avançar com um projeto, definimos em conjunto o que será feito e as condições de utilização.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                    <h5 className="text-sm font-semibold text-white">Conversa direta</h5>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Falamos sobre as necessidades do negócio sem complicar com termos técnicos desnecessários.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                    <h5 className="text-sm font-semibold text-white">Contacto próximo</h5>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Estamos em Braga e disponíveis para conversar presencialmente na região ou online.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to="/contacto"
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-6 py-3.5 text-xs sm:text-sm transition-all shadow-md shadow-cyan-500/20 cursor-pointer"
              >
                <Mail className="h-4 w-4" />
                <span>Pedir proposta</span>
              </Link>

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
