"use client"

import { useEffect, useState } from "react"
import { Card } from "./card"
import { Database, Server, Zap, ArrowRight, CheckCircle2 } from "lucide-react"

export function LegacyApiIntegration() {
  const [activeFlow, setActiveFlow] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFlow((prev) => (prev + 1) % 3)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <div className="text-center mb-12">

      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
    
        <Card className="p-6 relative overflow-hidden bg-card border-2 border-primary/30 bg-white">
          <div className="absolute inset-0 bg-primary/5" />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-lg bg-primary/20">
                <Server className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-card-foreground">Sistema Externo Moderno</h3>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>REST API v2.0</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>GraphQL</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Webhooks</span>
              </div>
            </div>
          </div>
      
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)`,
              backgroundSize: "20px 20px",
            }}
          />
        </Card>

        <div className="relative flex flex-col items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <div className="w-full h-px bg-border" />
          </div>

          <Card className="relative  z-10 p-6 bg-muted border-2 border-accent bg-white">
            <div className="flex flex-col items-center gap-4">
              <div className="p-4 rounded-full bg-accent/20 animate-pulse">
                <Zap className="w-8 h-8 text-accent" />
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-1 text-card-foreground">Camada de Integração Kafnet</h3>
              </div>

              <div className="flex gap-2 mt-2">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full transition-all ${
                      activeFlow === i ? "bg-accent scale-125" : "bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </Card>

        <div className="hidden md:block absolute left-0 right-0 top-1/2 -translate-y-1/2">
            <div className="flex items-center justify-between">
              <ArrowRight className="w-5 h-5 text-accent animate-pulse -translate-x-24" />
              {/* <ArrowRight className="w-5 h-5 text-accent animate-pulse translate-x-24" /> */}
            </div>
          </div>
        </div>

        <Card className="p-6 relative overflow-hidden bg-card border-2 border-secondary/30 bg-white">
          <div className="absolute inset-0 bg-secondary/5" />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-lg bg-secondary/20">
                <Database className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-semibold text-card-foreground">APIs Legadas</h3>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-secondary" /> 
                <span>SOAP Services</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-secondary" />
                <span>XML-RPC</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-secondary" />
                <span>Custom Protocols</span>
              </div>
            </div>
          </div>
          {/* Circuit pattern overlay */}
          <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle
                cx="50"
                cy="50"
                r="30"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-secondary stroke-[#db324b]"
              />
              <circle cx="50" cy="50" r="5" fill="currentColor" className="text-secondary" />
              <line x1="50" y1="20" x2="50" y2="35" stroke="currentColor" strokeWidth="2" className="text-secondary" />
              <line x1="50" y1="65" x2="50" y2="80" stroke="currentColor" strokeWidth="2" className="text-secondary" />
            </svg>
          </div>
        </Card>
      </div>


      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
        <div className="p-4">
          <h4 className="font-semibold mb-1 text-card-foreground">Mapeamento de Dados </h4>
          <p className="text-sm text-muted-foreground">Facilitação na comunicação de formatos de dados diferentes.</p>
        </div>
        <div className="p-4">
          <h4 className="font-semibold mb-1 text-card-foreground">Sincronização em Tempo Real</h4>
          <p className="text-sm text-muted-foreground">Fluxo de dados bidirecional com latência mínima</p>
        </div>
        <div className="p-4">
          <h4 className="font-semibold mb-1 text-card-foreground">Zero Modificação</h4>
          <p className="text-sm text-muted-foreground">Integre sem modificar conectores externos</p>
        </div>
      </div>
    </div>
  )
}
