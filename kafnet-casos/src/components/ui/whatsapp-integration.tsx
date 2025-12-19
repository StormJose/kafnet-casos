import { MessageCircle, Database, ArrowRight, Zap } from "lucide-react"
import { Card } from "./card"


export function WhatsAppCrmIntegration() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-4xl">

        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-6">
          {/* WhatsApp Side */}
          <Card className="relative flex h-56 w-56 flex-col items-center justify-center gap-4 border-2 bg-card transition-all hover:scale-105 hover:border-primary  md:h-64 md:w-64">
      
            <div className="rounded-2xl bg-[#25D366] p-6">
              <MessageCircle className="h-16 w-16 text-white" strokeWidth={1.5} />
            </div>
       
          </Card>

          {/* Connection Flow */}
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-2">
              <div className="h-1 w-12 animate-pulse bg-primary md:w-20" />
              <ArrowRight className="h-6 w-6 text-primary" />
              <div className="h-1 w-12 animate-pulse bg-primary md:w-20" />
            </div>
            <div className="flex items-center gap-1 rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-primary">
              <Zap className="h-3 w-3" />
              <span className="font-md">Sincronização em tempo real</span>
            </div>
            <div className="flex flex-col gap-1 text-center text-muted-foreground">
              <p className="text-md">• Sincronização de contatos</p>
              <p className="text-md">• Histórico de mensagens</p>
              <p className="text-md">• Workflows automatizados</p>
            </div>
          </div>

          {/* CRM Side */}
        <div className="flex flex-col justify-center gap-4 border-[1.55px] h-56 w-56 md:w-64 md:h-64 rounded-xl">

            <div className="self-center ">

            <Database className="h-16 w-16 text-primary-foreground text-center" strokeWidth={1.5} />
            </div>
         
            <div className="text-center">
              <h3 className="text-xl font-semibold">CRM</h3>
              <p className="text-sm text-muted-foreground">Dados de Clientes</p>
            </div>
        </div>
      
        </div>

      </div>
    </div>
  )
}
