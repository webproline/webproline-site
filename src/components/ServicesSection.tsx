import React, { useState } from 'react';
import { 
  CalendarCheck, 
  ShoppingBag, 
  TableProperties, 
  Bot, 
  ArrowUpRight, 
  Check, 
  ShieldCheck, 
  Zap, 
  Sparkles,
  Smartphone,
  CreditCard,
  FileSpreadsheet
} from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const services = [
    {
      id: 'agendamento',
      number: '01',
      title: 'Plataformas de agendamento',
      subtitle: 'Barbearias, salões e outros serviços com marcação',
      summary: 'Um exemplo de plataforma digital para consultar serviços e horários e fazer marcações online. A demonstração mostra um possível percurso do cliente.',
      highlight: 'Cada negócio tem horários, serviços e formas de trabalhar diferentes.',
      features: [
        'Serviços e horários apresentados de forma clara',
        'Percurso de marcação acessível através de um link',
        'Possibilidade de adaptar o fluxo a diferentes equipas',
        'Funcionalidades definidas conforme as necessidades do projeto',
      ],
      tech: 'Demonstração interativa',
      icon: CalendarCheck,
      color: 'from-cyan-500/10 to-blue-500/10 border-cyan-500/30 text-cyan-400',
    },
    {
      id: 'ecommerce',
      number: '02',
      title: 'Lojas online',
      subtitle: 'Comércio Local, Garrafeiras, Vestuário e Fabricantes',
      summary: 'Lojas online com catálogo, páginas de produto e um percurso de compra adequado ao negócio.',
      highlight: 'As funcionalidades e integrações são definidas conforme o projeto.',
      features: [
        'Opções de pagamento escolhidas de acordo com as necessidades do negócio',
        'Painel intuitivo para gerir stock, produtos e encomendas sem complicações',
        'Estrutura preparada para uma boa experiência em computador e telemóvel',
        'Opções para WooCommerce / WordPress otimizado ou plataforma sob medida ultra-leve',
      ],
      tech: 'Catálogo · Encomendas · Pagamentos',
      icon: ShoppingBag,
      color: 'from-emerald-500/10 to-teal-500/10 border-emerald-500/30 text-emerald-400',
    },
    {
      id: 'internas',
      number: '03',
      title: 'Ferramentas internas',
      subtitle: 'Indústrias, Oficinas, Logística e Pequenas & Médias Empresas',
      summary: 'Ferramentas web para organizar informação e tarefas que hoje passam por folhas de cálculo ou processos manuais.',
      highlight: 'Começamos por perceber como a equipa trabalha e o que vale a pena simplificar.',
      features: [
        'Registo de ordens de fabrico, reparações, manutenções ou entregas em tempo real',
        'Histórico organizado de clientes, tarefas pendentes e prazos de entrega',
        'Relatórios e exportação de dados, quando necessário',
        'Acessos diferenciados com permissões por função (admin, operador, motorista)',
      ],
      tech: 'Ferramentas para a equipa',
      icon: TableProperties,
      color: 'from-blue-500/10 to-indigo-500/10 border-blue-500/30 text-blue-400',
    },
    {
      id: 'automacao-ia',
      number: '04',
      title: 'Integrações e automações',
      subtitle: 'Tarefas repetitivas e processos digitais',
      summary: 'Identificamos tarefas que podem ser simplificadas com integrações entre ferramentas e processos digitais adequados ao negócio.',
      highlight: 'Primeiro percebemos o processo; depois propomos uma solução.',
      features: [
        'Ligação entre ferramentas que já utiliza',
        'Redução de tarefas manuais repetitivas',
        'Organização de pedidos e informação',
        'Âmbito definido caso a caso',
      ],
      tech: 'Integrações · Processos digitais',
      icon: Bot,
      color: 'from-purple-500/10 to-pink-500/10 border-purple-500/30 text-purple-400',
    },
  ];

  const handleRequestService = (serviceTitle: string) => {
    const contactElem = document.getElementById('contacto');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
      window.dispatchEvent(new CustomEvent('select-sector-contact', { 
        detail: { solutionTitle: serviceTitle } 
      }));
    }
  };

  return (
    <section id="solucoes" className="py-20 lg:py-28 bg-slate-900/40 relative border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="mb-3 flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-cyan-400">
            <span>Serviços</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display text-balance">
            Soluções digitais para necessidades concretas
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Trabalhamos com empresas de diferentes áreas. Antes de começar, conversamos sobre o negócio e definimos o âmbito e as funcionalidades do projeto.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.id}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-950/80 p-6 sm:p-8 transition-all hover:border-slate-700 hover:shadow-xl hover:shadow-cyan-950/20"
              >
                <div>
                  {/* Card Header: Editorial Number + Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-sm font-bold text-cyan-400 tracking-wider">
                      {svc.number}.
                    </span>
                    <div className={`p-3 rounded-xl border ${svc.color}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-display group-hover:text-cyan-300 transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-xs font-medium text-slate-400 mt-1 mb-3">
                    {svc.subtitle}
                  </p>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {svc.summary}
                  </p>

                  {/* Highlight pill-less statement */}
                  <div className="mb-6 p-3 rounded-lg bg-slate-900 border-l-2 border-cyan-400 text-xs font-semibold text-slate-200">
                    💡 {svc.highlight}
                  </div>

                  {/* Feature checklist */}
                  <ul className="space-y-2.5 mb-6">
                    {svc.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                  {/* Card footer and CTA */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-400 truncate max-w-[220px]">
                    {svc.tech}
                  </span>

                  <button
                    onClick={() => handleRequestService(svc.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
                  >
                    <span>Pedir Informações</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
