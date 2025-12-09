import './App.css'
import "@fontsource/anybody/500.css";
import "@fontsource/anybody/600.css";
import { useState } from 'react'
import { Container } from './components/layouts/container'
import { ThemeProvider } from './contexts/ThemeContext'
import { Heading } from './components/ui/Heading'
import { Paragraph } from './components/ui/Paragraph'
import { Section } from './components/layouts/section'
import { Button } from './components/ui/Button'
import { ArrowDown, ArrowRight, ChartNoAxesColumnIncreasing, Check, CircleGauge, Grid2X2Check, ImageUpscale } from 'lucide-react'
import { Card } from './components/ui/card'
import creatorLogo from "./assets/zoho_creator.png";
import { CustomTabs } from './components/layouts/tabs'
import { CustomizedCRM } from './components/ui/customized-crm'
import { Header } from './components/layouts/header'

function App() {
  const [count, setCount] = useState(0)

  const problemas = [
  {
    titulo: "Silos de informação",
    descricao: "Cada unidade usa planilhas, CRMs ou sistemas diferentes."
  },
  {
    titulo: "Decisões lentas",
    descricao: "Sem dados em tempo real, gestores tomam decisões baseadas em 'achismos'."
  },
  {
    titulo: "Falta de padronização",
    descricao: "Operações variam muito entre franqueados, gerando inconsistência e retrabalho."
  },
  {
    titulo: "Baixa visibilidade",
    descricao: "Sem um painel unificado, a franqueadora não sabe como cada unidade está performando."
  },
  {
    titulo: "Risco financeiro",
    descricao: "Falhas nos processos operacionais e financeiros podem elevar custos e impactar a rede."
  },
  {
    titulo: "Crescimento limitado",
    descricao: "Sistemas legados não escalam bem e exigem tempo ou recursos altos para personalização."
  }
];


const casosDeUso = [

  {
    id: 1,
    title: "Franquias que querem padronizar processos entre franqueados",
    description:
      "Ideal para redes que precisam garantir consistência operacional em todas as unidades.",
    icon: <Grid2X2Check className='w-10 h-10 text-[#db324b]' />
  },
  {
    id: 2,
    title:
      "Franqueadoras que exigem visibilidade total para ações estratégicas",
    description:
      "Para quem precisa acompanhar performance, métricas e indicadores em tempo real.",
    icon: <ChartNoAxesColumnIncreasing className='w-10 h-10 text-[#db324b]' />
  },
  {
    id: 3,
    title:
      "Franqueados que querem acelerar vendas e melhorar o relacionamento com clientes",
    description:
      "Voltado para unidades que desejam impulsionar resultados e elevar a experiência do cliente.",
    icon: <CircleGauge className='w-10 h-10 text-[#db324b]'/>
  },
  {
    id: 4,
    title:
      "Redes em expansão que precisam de uma plataforma escalável sem refazer tudo",
    description:
      "Solução pensada para crescimento contínuo, sem custos extras de reestruturação.",
    icon: <ImageUpscale className='w-10 h-10 text-[#db324b]' />
  },
];



const zohoCreator = [
  {
    title: "Velocidade de entrega",
    description: "Protótipos ou novas funcionalidades podem ser criados em semanas, não meses."
  },
  {
    title: "Segurança robusta",
    description: "A base Zoho Creator garante confiabilidade e escalabilidade global."
  },
  {
    title: "Flexível e configurável",
    description: "Módulos podem ser adaptados a diferentes modelos de franquia — seja unidades pequenas ou grandes redes."
  }
]


const beneficios = [
  {
    title: "Tomada de decisão rápida",
    description:
      "Decisões baseadas em dados reais, não relatórios atrasados.",
  },
  {
    title: "Visão global da operação",
    description:
      "A franqueadora monitora a performance de todas as unidades, em tempo real.",
  },
  {
    title: "Redução de riscos",
    description:
      "Processos automáticos reduzem erros financeiros e operacionais.",
  },
  {
    title: "Crescimento escalável",
    description:
      "A tecnologia acompanha a expansão sem demandar grandes reescritas.",
  },
  {
    title: "Maior eficiência",
    description:
      "Menos retrabalho, menos planilhas manuais, menos custos com erros.",
  },
];

const solucaoKafnet = [
  {
    title: "Centralização completa",
    description:
      "Todas as informações da rede em um só lugar, desde operações até finanças e CRM.",
    
  },
  {
    title: "Integração de unidades",
    description:
      "Franqueadora e franqueados operam em um ecossistema integrado e padronizado.",
  },
  {
    title: "Automação inteligente",
    description:
      "Fluxos automatizados garantem que processos críticos sejam executados sem erro.",
  },
  {
    title: "Relatórios em tempo real",
    description:
      "Dashboards com indicadores acionáveis para decisões estratégicas.",
  },
  {
    title: "Alta escalabilidade",
    description:
      "A plataforma evolui conforme sua rede cresce, sem exigir reescrita de sistemas ou grandes esforços técnicos.",
    
  },
];


const objetivos = [
  { text: "Eliminar silos de informação" },
  { text: "Agilizar decisões" },
  { text: "Padronizar operações" },
  { text: "Aumentar a visibilidade da rede" },
  { text: "Escalar sem dores" },
];


  return (
   
    <ThemeProvider>
      <main>
        <Header/>
        <Section id='hero'>
          <Container display='grid' gridColumns='2' padding='py-[140px]' className="gap-x-2">
            <div className='text-left flex flex-col gap-2'>
              <Heading size='lg'>
                Lorem ipsum dolor sit amet.
              </Heading>
              <Paragraph size='md'>
              <strong>Transforme a operação da sua franquia com uma plataforma inteligente em low-code </strong> 
              Controle, padronização e visibilidade para crescer sem perder a agilidade.
              </Paragraph>
              <div className='flex items-center gap-4 mt-4 '>
                <Button className='self-start'>Solicitar demonstração</Button>
                <ArrowDown className='stroke-gray-400'/>
              </div>
            </div>
            <div className='w-'>  

            </div>
          </Container>  
        </Section>

        {/* O Problema */}
        <Section id="O Problema">
            <Container className="relative  gap-y-12">
                <div className='text-center flex flex-col gap-4'>
                  <Heading size='md'>
                    Desafios de franquias em desenvolvimento 
                  </Heading>
                  <Paragraph padding='lg:px-60'>
                    Franquias em expansão lidam com um dilema doloroso: quanto mais unidades você
      abre, mais processos se perdem. Isso pode significar:
                  </Paragraph>
                </div>
              <div className="relative mt-16">
                <div
                  className="
                    relative
                    grid 
            
                    grid-cols-1 
                    md:grid-cols-2 
                    lg:grid-cols-4 
                    gap-x-8
                    gap-y-6
                    justify-center
                    md:gap-0
                  "
                >
                  {problemas.map(({ titulo, descricao }, i) => (
                    <div className='flex flex-col md:flex-row items-center  '>
                    <Card
                      key={titulo}
                      title={titulo}
                      description={descricao}  
                      className={`
                        z-30
                        relative
                        border-[#db324b]
                        border-dashed
                        px-6 py-8
                        min-w-60
                        w-full
                        bg-gray-50
                        ${i === 4 || i === 5 ? 'col-end-2' : ''}
                        ${i % 2 !== 0 ? 'lg:self-end' : 'lg:self-start'} 
                        `}
                        />
                        {/* Logic for the Dashed SVGS starts here */}
                        {i % 2 === 0 ? 
                       <svg className={ `problema-dashed-line hidden md:block aspect-square drop-shadow-[0_0_6px_#db324b]
 ${i == 2 || i === 4 ? 'lg:self-center' : ''}`} xmlns="http://www.w3.org/2000/svg" width="240"  viewBox="20 50 220 230">
                        <path
                        className='flow-dash'
                        d="
                          M100 20
                          Q110 20, 110 50
                          L110 220
                          Q110 250, 140 250
                          L240 250

                          M110 50
                          L20 50
                        "
                          fill="none"
                          stroke="#db324b"
                          stroke-width="3"
                          stroke-dasharray="10 8"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    
                    

                    :

                    // Last element of the first row do not get a dashed line
                    i  === 3 ? "" :

                    i % 2 !== 0 && i !== problemas.length - 1 ?  
                    <svg className='hidden md:block lg:self-start' xmlns="http://www.w3.org/2000/svg" width="240" height="460"  viewBox="20 110 220 230">
                      <path 
                      className="flow-dash"
                      d="
                        M130 340
                        Q110 340, 110 310
                        L110 140
                        Q110 110, 130 110
                        L240 110
                        M110 310
                        L20 310
                      "
                        fill="none"
                        stroke="#db324b"
                        stroke-width="3"
                        stroke-dasharray="10 8"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    : i === problemas.length  
                    ?  
                    <svg className='hidden md:block' xmlns="http://www.w3.org/2000/svg" width="460" height="460" viewBox="20 110 220 230">
                      <path 
                      className="flow-dash"
                      d="
                        M130 340
                        Q110 340, 110 310
                        L110 140
                        Q110 110, 130 110
                        L240 110
                        M110 310
                        L20 310
                      "
                        fill="none"
                        stroke="#db324b"
                        stroke-width="3"
                        stroke-dasharray="10 8"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg> 
                    : ""
                    }

                    </div>
                  ))}
                </div>
              </div>
            </Container>

        </Section>

          {/* A Solução Kafnet */}
          <Section id="Solução">
            <Container display='grid' className='gap-y-12' >
                <div className='text-center flex flex-col gap-4'>
                    <Heading size='md'>
                      A Solução Kafnet
                    </Heading>
                    <Paragraph padding='lg:px-60'>
                   Apresentamos uma plataforma low-code, desenvolvida no Zoho Creator e projetada para redes de franquias que precisam crescer com padronização, inteligência e controle operacional.
                    </Paragraph>
                    <Paragraph className='text-[#db324b]' >O que entrega:</Paragraph>
                  </div>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-4'>

              {solucaoKafnet.map(({title, description}) => (
                <Card key={title} title={title} description={description} className='border-[#db324b] border-dashed p-8' />
                
                ))}

                <div className='flex flex-wrap justify-between p-8 pb-0'>

                    <Paragraph className='text-black'>Lorem ipsum dolor sit amet</Paragraph>
                   
                    <div className='flex flex-wrap align-center justify-between'>
                      <div className='solucoes-dot-grid w-1/8 flex flex-col justify-between  text-2xl p-6 rounded-xl'>
                      </div>
                      <div className='solucoes-dot-grid w-1/8 flex flex-col justify-between  text-2xl p-6 rounded-xl'>
                      </div>
                     <div className='solucoes-dot-grid w-1/8 flex flex-col justify-between  text-2xl p-6 rounded-xl'>
                      </div>
                       <div className='solucoes-dot-grid w-1/8 flex flex-col justify-between  text-2xl p-6 rounded-xl'>
                      </div>
                        <Button size='md' variant='secondary' className='justify-self-end self-end'>
                          Saiba mais
                        </Button> 
                    </div>
                  </div>
                </div>

            </Container>
        </Section>


        {/* Funcionalidades Principais */}
        <Section id='Funcionalidades'>
          <Container>
            <div>
              <Heading size='md'>Funcionalidades Principais</Heading>
              <div className='!color:black  my-12'>
                <CustomTabs />
              </div>
            </div>


          </Container>
        </Section>


        {/* Benefícios para Sua Franquia */}  
          <Section id='Benefícios'>
              <div className='text-center pb-12'>
                  <Heading size='md'>
                    Benefícios para Sua Franquia
                  </Heading>
                </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 relative">
              <div className="bg-[#db324b] p-[72px_0] text-center relative">

                <div className="sticky top-[82px] lg:top-[70px] pt-12 lg:pt-0 my-8 bg-[#db324b]">
                  <Heading size="md" className="text-white">
                    Benefício
                  </Heading>
                </div>

                <div className="flex flex-col gap-24 mt-6 lg:mt-24">
                  {beneficios.map(({ title }, i) => (
                    <div
                      key={i}
                      className="
                        text-2xl font-bold
                        flex gap-2
                        bg-gradient-to-r from-[#f8f8f8] via-white to-[#9b9b9b]
                        text-transparent bg-clip-text
                        min-h-[120px] flex items-center justify-center
                      "
                    >
                      <span>
                        
                        {title}
                      </span>
                      <ArrowRight className='text-white'/>
                    </div>
                  ))}
                </div>

              </div>
              
              <div className="bg-white border-[2.5px] border-[#db324b] border-dashed py-[72px] text-center">
                <div className="sticky top-[82px] lg:top-[70px] pt-12 lg:pt-0 my-8 bg-white">
                  <Heading size="md">Impacto para sua Rede</Heading>
                </div>

                <div className="flex flex-col gap-24 mt-6 lg:mt-24">
                  {beneficios.map(({ description }, i) => (
                    <div
                      key={i}
                      className="
                
                        text-xl font-semibold
                        min-h-[120px] flex items-center justify-center
                      "
                    >
                      {description}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Section>



        {/* Caso de Uso */}
         <Section id='Casos de Uso'>
          <Container>
            <div className='text-center pb-4 md:pb-12 mb-4'>
              <Heading size='md'>
                Casos de Uso
              </Heading>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2  gap-8'>
              {
                casosDeUso.map(({title, description, icon}) => (
                  <Card  title={title} description={description}  className='min-h-60 bg-gray-50 border-none p-8'>
                    <div className='flex items-center gap-4'>
                      {icon}
                     <div className="dot-grid w-full h-64 text-[#db324b]"></div>
                    </div>

                  </Card>
                ))
                
              }
            </div>
          </Container>
        
        </Section>

        {/* Zoho Creator */}
       <Section id='Low-Code'>
          <Container display="grid"  className='lg:grid-cols-[1fr_2fr] justify-between items-center lg:justify-items-end gap-y-6 lg:gap-y-12 '>
            <div className='flex justify-center lg:justify-self-start'>
              <img src={creatorLogo} alt='' /> 
            </div>
            <div>
              <div className='pb-12 text-center lg:text-end'>
                <Heading size='md'>Porque Zoho Creator?</Heading>
              </div>
              
              <div className='flex flex-wrap justify-center lg:justify-end gap-2'>
                {
                  zohoCreator.map(({title, description}, i) => (
                    <Card title={title} description={description} className={`max-w-[255px] min-h-[400px] flex flex-col justify-end px-4 py-6 ${i === 2 ? 'bg-[#db324b] text-white' : i == 0 ? 'bg-[#0974B0] text-white' : '' } ${i == 1 && 'gap-20'} ` }/>
                  ))
                }
              </div> 
          
            </div>
          </Container>
       </Section>
       {/* Próximos Passos */}
        <Section>
          <Container className='text-center lg:text-left'>
            <Heading size='md' className='mb-12'>Próximos passos</Heading>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 
            
            justify-evenly gap-8' >

            <div className='grid grid-flow-row gap-y-4 lg:justify-items-start items-center'>

              <div>
            
                <Paragraph><strong> Sua franquia pode evitar os erros comuns do crescimento desordenado. </strong> Agende agora
  uma demonstração da plataforma da Kafnet e descubra como nossa solução pode:</Paragraph>
              </div>
              <div className='border-[2px] border-[#db324b] border-dashed py-12 px-8 rounded-2xl'>
                <ul className='flex flex-col gap-3 text-xl items-start'>
                  {objetivos.map((objetivo) => (
                    <li className='flex items-center gap-2'>
                      <Check className='text-emerald-500'/>
                      {objetivo?.text}</li>
                  ))}
                </ul>
              </div>
              <Button size='md'>Solicitar demonstração</Button>
            </div>
            <div >
             <Card hasImage={true} /> 
            </div>
            </div>
          </Container>
        </Section>

      </main>
    </ThemeProvider>
  )
}

export default App
