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
      title: 'Sistemas de Agendamento Inteligente',
      subtitle: 'Barbearias, Clínicas de Saúde, Cabeleireiros e Terapeutas',
      summary: 'Diga adeus às interrupções a meio do trabalho e aos esquecimentos dos clientes com um fluxo de marcação rápido na web.',
      highlight: '92% de redução em faltas com lembretes automáticos no WhatsApp',
      features: [
        'Acesso direto via link da Bio do Instagram, Facebook e Google Meu Negócio',
        'Sem comissões por cliente ou mensalidades por cada funcionário da equipa',
        'Sincronização bidirecional em tempo real com o Google Calendar',
        'Gestão de horários de múltiplos colaboradores, serviços com durações e preços distintos',
      ],
      tech: 'Web App PWA · WhatsApp API · Google Calendar Sync',
      icon: CalendarCheck,
      color: 'from-cyan-500/10 to-blue-500/10 border-cyan-500/30 text-cyan-400',
    },
    {
      id: 'ecommerce',
      number: '02',
      title: 'E-commerce & Lojas Online',
      subtitle: 'Comércio Local, Garrafeiras, Vestuário e Fabricantes',
      summary: 'Lojas online rápidas que carregam em menos de 0.8s, preparadas para vender em Portugal com pagamentos sem fricção.',
      highlight: 'Checkout simplificado com MB WAY e Multibanco em 1 clique',
      features: [
        'Integração nativa com MB WAY, Referência Multibanco e Cartão via Stripe / Easypay',
        'Painel intuitivo para gerir stock, produtos e encomendas sem complicações',
        'Velocidade extrema e SEO local para aparecer nos primeiros lugares de Braga e Portugal',
        'Opções para WooCommerce / WordPress otimizado ou plataforma sob medida ultra-leve',
      ],
      tech: 'Next.js / WordPress WooCommerce · Gateways PT · SEO Local',
      icon: ShoppingBag,
      color: 'from-emerald-500/10 to-teal-500/10 border-emerald-500/30 text-emerald-400',
    },
    {
      id: 'internas',
      number: '03',
      title: 'Plataformas Internas & Eliminação de Excel',
      subtitle: 'Indústrias, Oficinas, Logística e Pequenas & Médias Empresas',
      summary: 'Transforme folhas de cálculo dispersas e blocos de notas num sistema web único, acessível em qualquer computador, tablet ou telemóvel.',
      highlight: 'Eliminação total de papel e redução de erros operacionais',
      features: [
        'Registo de ordens de fabrico, reparações, manutenções ou entregas em tempo real',
        'Histórico organizado de clientes, tarefas pendentes e prazos de entrega',
        'Relatórios de desempenho e exportação instantânea para PDF ou Excel com 1 clique',
        'Acessos diferenciados com permissões por função (admin, operador, motorista)',
      ],
      tech: 'Bases de Dados Relacionais · Interfaces Touch para Fábrica · Backups Diários',
      icon: TableProperties,
      color: 'from-blue-500/10 to-indigo-500/10 border-blue-500/30 text-blue-400',
    },
    {
      id: 'automacao-ia',
      number: '04',
      title: 'Automações & Assistentes de Atendimento com IA',
      subtitle: 'Atendimento Rápido 24/7 sem Deixar Clientes à Espera',
      summary: 'Assistentes inteligentes no WhatsApp e Web que tiram dúvidas frequentes, qualificam pedidos e direcionam orçamentos enquanto descansa.',
      highlight: 'Zero mensagens esquecidas fora do horário de expediente',
      features: [
        'Respostas imediatas a preços, horários de funcionamento, localização e serviços',
        'Qualificação de pedidos de orçamento com recolha prévia de requisitos',
        'Integração com o seu CRM ou folha de gestão para registar novas oportunidades',
        'Transição suave para atendimento humano sempre que o caso exigir atenção pessoal',
      ],
      tech: 'Inteligência Artificial Personalizada · WhatsApp Cloud · Webhooks',
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
            <span>Soluções Especializadas</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Engenharia Focada em Retorno</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display text-balance">
            Tecnologia prática concebida para fazer o seu negócio faturar mais
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Não criamos sites genéricos que ficam parados na internet. Desenvolvemos ferramentas funcionais que resolvem dores reais de quem trabalha todos os dias.
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

                {/* Footer of Card: Tech stack + CTA */}
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
