import * as Switch from "@radix-ui/react-switch";
import { useState } from "react";

export function FranchiseGovernance() {
  const [isOn, setIsOn] = useState(false);

  const inconsistentTopics = [
    "Operações diferentes",
    "Falta de padrão",
    "Processos inconsistentes",
    "Comunicação desalinhada",
    "Qualidade irregular",
  ];


  const consistentTopics = [
    'Compliance e Conformidade Garantidos',
    'Padronização de Atendimento',
    'Qualidade Consistente de Produtos e Serviços',
    'Indicadores de Desempenho (KPIs) Centralizados',
    'Auditoria Operacional Sistemática'
  ]

  return (
    <div className="flex flex-col items-center gap-24 p-6 w-full">

      {/* ---------- SWITCH ---------- */}
      <div className="flex items-center gap-3">
        <span className="text-sm font-medium text-gray-500">
          Inconsistente
        </span>

        <Switch.Root
          checked={isOn}
          onCheckedChange={setIsOn}
          className="
            w-14 h-7 bg-gray-300 rounded-full relative 
            data-[state=checked]:bg-[#db324b]
            transition-colors cursor-pointer
          "
        >
          <Switch.Thumb
            className="
              block w-6 h-6 bg-white rounded-full shadow 
              translate-x-1 transition-transform 
              data-[state=checked]:translate-x-7
            "
          />
        </Switch.Root>

        <span className="text-sm font-medium text-emerald-500">
          Consistente
        </span>
      </div>

      {/* ---------- CONTENT AREA ---------- */}
      <div className="relative w-full h-64 rounded-xl bg-white overflow-hidden p-6">
        {/* BEFORE (CHAOTIC) */}
        {!isOn && (
          <div className="absolute inset-0 transition-opacity duration-300 flex items-center justify-center">
            <div className="relative w-full h-full">
              {inconsistentTopics.map((t, i) => (
                <div
                  key={t}
                  className="
                    absolute bg-gray-100 text-gray-700 px-3 py-1 rounded shadow 
                    text-xs font-medium transition-all duration-500
                  "
                  style={{
                    top: `${20 + i * 12}%`,
                    left: `${10 + (i % 2) * 40}%`,
                    transform: `rotate(${(i % 3) * 8 - 8}deg) translateY(${i % 2 === 0 ? "-12px" : "8px"})`,
                  }}
                >
                  {t}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* AFTER (ORGANIZED) */}
        {isOn && (
          <div className="absolute inset-0 transition-opacity duration-300 flex items-center justify-center">
            <ul className="flex flex-col gap-3">
              {consistentTopics.map((t) => (  
                <li
                  key={t}
                  className="
                    px-4 py-2 border-emerald-500/10 border border-emerald-500/30 
                    rounded-md text-gray-500 text-sm font-semibold shadow-sm 
                    transition-all duration-500
                  "
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
