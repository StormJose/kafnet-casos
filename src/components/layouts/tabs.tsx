import * as Tabs from "@radix-ui/react-tabs";
import { motion } from "framer-motion";
import { CustomizedCRM } from "../ui/customized-crm";
import { StrategicReports } from "../ui/strategic-reports";
import { AutomationProcesses } from "../ui/automation.processes";
import { FranchiseGovernance } from "../ui/franchise-governance";

interface EachTab {
  title: string;
  description: string;
  content: React.ReactNode;
}



export function CustomTabs() {

  const funcionalidadesPrincipais = [ { title: "CRM Personalizado", description: "Pipeline customizado para sua rede, com visibilidade da jornada de cada unidade.", content: <CustomizedCRM/> }, { title: "Relatórios Estratégicos", description: "Dashboards baseados em KPIs da rede, com métricas por unidade, por região ou global.", content: <StrategicReports/> }, { title: "Automação de Processos", description: "Workflows configuráveis para operações, gestão financeira, conformidade, check-lists e muito mais.", content: <AutomationProcesses/> }, { title: "Governança de Franquia", description: "Padronização operacional para garantir consistência entre franqueados.", content: <FranchiseGovernance/> } ]

  return (
    <Tabs.Root
        defaultValue={funcionalidadesPrincipais[0].title}
      className="w-full grid lg:grid-cols-2 gap-x-24"
    >
      <div className="flex flex-col gap-1 lg:gap-16 min-w-0">
        <Tabs.List className="flex gap-2 border-b overflow-x-auto scrollbar-hide whitespace-nowrap">
          {funcionalidadesPrincipais.map((tab) => (
            <Tabs.Trigger
              key={tab.title}
              value={tab.title}
              className="
                   px-3 py-2 text-md
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
            <Tabs.Content key={tab.title} value={tab.title} className="py-4">
           
                {tab.description}
            
            </Tabs.Content>
          ))}
        </div>
      </div>

      <div className="min-h-[50vh]">
        {funcionalidadesPrincipais.map((tab) => (
          <Tabs.Content key={tab.title} value={tab.title} className="py-4">
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