import * as Tabs from "@radix-ui/react-tabs";
import { motion } from "framer-motion";
import { CustomizedCRM } from "../ui/customized-crm";
import { StrategicReports } from "../ui/strategic-reports";
import { AutomationProcesses } from "../ui/automation.processes";
import { FranchiseGovernance } from "../ui/franchise-governance";
import { Calendar } from "../ui/calendar";
import { WhatsAppCrmIntegration } from "../ui/whatsapp-integration";
import { LegacyApiIntegration } from "../ui/api-integration";

interface EachTab {
  title: string;
  description: string;
  content: React.ReactNode;
}



export function CustomTabs() {

  const funcionalidadesPrincipais = [ 
    { title: "CRM Personalizado", description: "Pipeline construído especificamente para a rotina de franquias, permitindo acompanhar cada etapa da jornada do franqueado e do cliente. A franqueadora ganha visibilidade total das unidades, enquanto cada franqueado opera com clareza sobre oportunidades, follow-ups e prioridades diárias.", content: <CustomizedCRM/> }, 
    { title: "Relatórios Estratégicos", description: " Dashboards inteligentes baseados nos KPIs da rede, com visão por unidade, região ou panorama geral. Você enxerga gargalos, desempenho comparativo e tendências da operação em tempo real sem depender de planilhas ou relatórios manuais.", content: <StrategicReports/> }, 
    { title: "Automação de Processos", description: "Workflows configuráveis que eliminam retrabalho e reduzem falhas humanas. Perfeitos para operações, conformidade, check-lists, onboarding de franqueados, auditorias internas e muito mais. Seu time foca no estratégico enquanto o sistema cuida do operacional.", content: <AutomationProcesses/> }, 
    { title: "Governança de Franquia", description: "Padronização operacional criada para manter consistência entre unidades, independentemente do ritmo de crescimento. Procedimentos, fluxos e controles ficam organizados, garantindo que cada franqueado execute a experiência da marca do jeito certo sempre.", content: <FranchiseGovernance/> } ,
    { title: "Integração com WhatsApp", description: "Comunicação centralizada: mensagens, atendimentos, follow-ups e interações ficam conectados ao sistema. A rede ganha rastreabilidade, histórico unificado e mais velocidade nas operações de suporte, vendas e atendimento.", content: <WhatsAppCrmIntegration/> },
    { title: "Calendário Integrado", description: "Agendamentos, prazos, tarefas e rotinas da rede em um único calendário compartilhado. A franqueadora acompanha compromissos importantes, auditorias, reuniões e metas; os franqueados visualizam suas demandas diárias com clareza e organização.", content: <Calendar/> },
    { title: "Integração com APIs Legadas", description: "Estabeleça comunicação com ERPs, CRMs e SAP. Franquias diferentes podem integrar plataformas específicas de acordo com sua necessidade de negócio.", content: <LegacyApiIntegration/>}
  ]

  return (
    <Tabs.Root
        defaultValue={funcionalidadesPrincipais[0].title}
      className="w-full grid grid-cols-1 gap-x-24 text-center"
    >
      <div className="flex flex-col gap-1 lg:gap-16 min-w-0 justify-center">
        <Tabs.List className="flex gap-2 border-b overflow-x-auto scrollbar-hide whitespace-nowrap">
          {funcionalidadesPrincipais.map((tab) => (
            <Tabs.Trigger
              key={tab.title}
              value={tab.title}
              className="
                   px-3 py-2 text-lg
                  data-[state=active]:text-black
                  data-[state=active]:font-semibold
                  data-[state=active]:border-b
                  data-[state=active]:border-[#db324b]
                  text-left cursor-pointer
                  "
            >
              {tab.title}
            </Tabs.Trigger>
          ))}
        </Tabs.List>

        <div className="min-w-0">
          {funcionalidadesPrincipais.map((tab) => (
            <Tabs.Content key={tab.title} value={tab.title} className="text-lg text-center py-4 px-4">
           
                {tab.description}
            
            </Tabs.Content>
          ))}
        </div>
      </div>

      <div className="min-h-[50vh] text-center">
        {funcionalidadesPrincipais.map((tab) => (
          <Tabs.Content key={tab.title} value={tab.title} className="py-4 ">
            <motion.div
              key={tab.title + "-content"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              {tab.content}
            </motion.div>
          </Tabs.Content>
        ))}
      </div>
    </Tabs.Root>
  );
}