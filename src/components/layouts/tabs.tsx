import * as Tabs from "@radix-ui/react-tabs";
import { CustomizedCRM } from "../ui/customized-crm";
import { StrategicReports } from "../ui/strategic-reports";
import { AutomationProcesses } from "../ui/automation.processes";
import { FranchiseGovernance } from "../ui/franchise-governance";

interface EachTab {
  value: string;
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: EachTab[];
  defaultValue?: string;
}

const funcionalidadesPrincipais = [
  {
    title: "CRM Personalizado",
    description: "Pipeline customizado para sua rede, com visibilidade da jornada de cada unidade.",
    content: <CustomizedCRM/>
    
  },
  {
    title: "Relatórios Estratégicos",
    description: "Dashboards baseados em KPIs da rede, com métricas por unidade, por região ou global.",
    content: <StrategicReports/>
  },
  {
    title: "Automação de Processos",
    description: "Workflows configuráveis para operações, gestão financeira, conformidade, check-lists e muito mais.",
    content: <AutomationProcesses/>
  },
  {
    title: "Governança de Franquia",
    description: "Padronização operacional para garantir consistência entre franqueados.",
    content: <FranchiseGovernance/>
  }
]


export function CustomTabs({
  tabs = funcionalidadesPrincipais,
  defaultValue,
}: TabsProps) {
  return (
    <Tabs.Root
      defaultValue={defaultValue ?? tabs[0]?.title}
      className="w-full grid grid-cols-2 gap-x-24"
    >
    <div className="flex flex-col gap-16">

      <Tabs.List className="flex gap-2 border-b">
        {tabs.map((tab) => (
            <Tabs.Trigger
            key={tab.title}
            value={tab.title}
            className="
                px-3 py-2 text-md
            data-[state=active]:text-black
              data-[state=active]:font-semibold
              data-[state=active]:border-b
              data-[state=active]:border-[#db324b]
              text-left
              cursor-pointer
            "
            >
            {tab.title}
          </Tabs.Trigger>
        ))}
      </Tabs.List>

        <div>
           {tabs.map((tab) => (
               <Tabs.Content
                key={tab.title}
                value={tab.title}
                className="py-4"
                >
                {tab.description}
                </Tabs.Content>
            ))}
        </div>
    </div>

    <div>
           <div>
           {tabs.map((tab) => (
               <Tabs.Content
                key={tab.title}
                value={tab.title}
                className="py-4"
                >
                {/* <CustomizedCRM/> */}
                {tab.content}
                </Tabs.Content>
            ))}
        </div>
    </div>
    </Tabs.Root>
  );
}
