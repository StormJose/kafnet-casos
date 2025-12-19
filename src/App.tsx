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
import { ArrowDown, ArrowRight, ChartNoAxesColumnIncreasing, Check, CircleGauge, Grid2X2Check, ImageUpscale, Play, Star } from 'lucide-react'
import { Card } from './components/ui/card'
// import creatorLogo from "./assets/zoho_creator.png";
import kafnetLogo from "./assets/kafnet-logo-filled.png"
import { CustomTabs } from './components/layouts/tabs'
import { CustomizedCRM } from './components/ui/customized-crm'
import { Header } from './components/layouts/header'
import { Footer } from './components/layouts/footer';
import proximosPassos from "./assets/proximos-passos.png";
import { FormZoho } from './components/ui/ContactForm';
import { useActiveSection } from './hooks/useActiveSection';
import { VideoDialog } from './components/ui/video-dialog';
import { WhatsAppFloater } from './components/ui/whatsapp-floater';
import { HeroForm } from './components/ui/hero-form';
import { Carousel } from './components/ui/carousel';
import { FeatureCard } from './components/ui/feature-card';


function App() {
  const [count, setCount] = useState(0)

  const antigosProblemas = [
  { titulo: "Visão completa da performance de cada unidade" },
  { titulo: "Decisões rápidas e estratégicas, baseadas em dados em tempo real" },
  { titulo: "Padronização operacional, reduzindo inconsistências e retrabalho" },
  { titulo: "Crescimento sustentável, sem depender de sistemas engessados" },
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
    description: "Todas as informações da rede em um só lugar, conectando operações, atendimento e relacionamento com clientes."
  },
  {
    title: "Integração de unidades",
    description: "Franqueadora e franqueados trabalham em um ecossistema único, com processos alinhados e padronização consistente."
  },
  {
    title: "Automação inteligente",
    description: "Fluxos automatizados asseguram a execução correta das etapas críticas da operação."
  },
  {
    title: "Relatórios em tempo real",
    description: "Dashboards com indicadores práticos que mostram o desempenho da rede no exato momento em que acontecem."
  },
  {
    title: "Alta escalabilidade",
    description: "A solução acompanha a evolução da rede, permitindo expansão sem complexidade ou reestruturações."
  }

];


const zohoCreator = [
  {
    title: "RECONHECIMENTO COMO CREATOR PARTNER CHAMPION DE 2024 (ÚNICO NA AMÉRICA LATINA)",
    description: "Este prêmio destaca a excelência e o desempenho de parceiros que que utilizam a plataforma Zoho Creator para desenvolver soluções inovadoras."
  },
  {
    title: "STATUS DE PREMIUM PARTNER DA ZOHO",
    description: "Indica uma parceria forte e reconhecida com a Zoho, refletindo a qualidade dos serviços prestados em 13 anos de parceria."
  },
  {
    title: "CERTIFICAÇÃO COMO ZOHO EDUCATION PARTNER (APENAS 2 NO MUNDO)",
    description: "Este reconhecimento demonstra a capacidade de fornecer soluções educacionais eficazes utilizando a plataforma Zoho."
  }
]

  const objetivos = [
    { boldText: 'Elimine silos de informação',  text: " e conecte todos os pontos da rede em um único ecossistema." },
    { boldText: 'Agilize decisões', text: " com dados confiáveis e visibilidade total das unidades." },
    { boldText: 'Padronize operações', text: " sem engessar o modelo de negócio." },
    { boldText: 'Aumente a visibilidade da rede', text: " com indicadores claros e comparáveis por unidade ou região." },
    { boldText: 'Escale sem dores,', text: " mantendo consistência mesmo em momentos de expansão acelerada." },
  ];


  const segurancaFeatures = [
    {
      title: "Dados de apps protegidos em todos os estágios",
      description:
        "Todos os seus arquivos, bancos de dados, unidades de nuvem, feeds de URL da web e dados armazenados em aplicativos são protegidos com protocolos rígidos de segurança e em conformidade com leis de privacidade.",
      bullets: [
        "Conformidade com GDPR e HIPAA",
        "Autenticação em vários fatores",
        "Isolamento de dados",
      ],
    },
    {
      title: "Alcance um ambiente de nuvem seguro",
      description:
        "Da segurança de infraestrutura e rede ao gerenciamento de incidentes e controles de clientes, políticas de nível empresarial cobrem todos os aspectos do seu aplicativo.",
      bullets: [
        "Estrutura de segurança baseada em OWASP",
        "Políticas DMARC para evitar spam",
        "Recuperação de desastres e continuidade dos negócios",
      ],
    },
    {
      title: "Garanta adesão a requisitos comerciais e regulatórios",
      description:
        "Reduza riscos organizacionais, aumente a transparência e atenda às normas do setor com certificações reconhecidas.",
      bullets: [
        "ISO/IEC 27001",
        "SOC 2 + HIPAA",
        "Privacy Shield Framework UE e EUA",
      ],
    },
    {
      title: "Priorização das preferências de privacidade",
      description:
        "A privacidade dos dados do usuário é prioridade máxima em toda a plataforma.",
      bullets: [
        "Nunca vendemos dados",
        "Dados excluídos após 6 meses de contas encerradas",
        "Certificação ISO 27001",
      ],
    },
  ];


  const navLinks = [

     {id: 8, name: "Contato"}
  ]


  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const sectionIds = navLinks
    .map((l) => l.name)
    .filter((name) => name !== "A Kafnet" || name !== "hero");

  const { scrollToSection } = useActiveSection(sectionIds)
  
  function handleToggleDialog() {
    console.log(isDialogOpen)
    setIsDialogOpen(cur => !cur)
  }


  return (
   
    <ThemeProvider>
      <main className='bg-[#f3f3f5]'>
        <Header/>
        <Section className="relative bg-[url('./assets/hero.png')] bg-cover text-white overflow-hidden" >
          <div
          className=" 
            absolute 
            inset-0
            z-0
            pointer-events-none
            bg-gradient-to-l
            from-black/80
            via-black/60
            to-transparent
          "
        ></div>
          <Container display='grid' gridColumns='2' padding='pt-8 lg:pt-[140px]' className="relative z-10 gap-x-24 gap-y-24">
            <div className='text-left flex flex-col gap-1 backdrop-filter pr-8 lg:pb-[260px]'>
              <Heading className='lg:whitespace-nowrap' size='lg' >
                Sistema de Gestão <br></br>  <span className="font-thin"> para Franquias </span>
              </Heading>
              <Paragraph size='sm'>
                <strong>Transforme a operação da sua franquia com uma plataforma inteligente em low-code </strong> 
              Controle, padronização e visibilidade para crescer sem perder a agilidade.
              </Paragraph>
              <div className='flex items-center gap-4 mt-4 '>
                <Button className='self-start' icon={<Play/>} onClick={() => scrollToSection('O SaaS')} >Assistir à demonstração</Button>
                <ArrowDown className='stroke-gray-400'/>
              </div>
            </div>
            <div className='w-'>  
              <HeroForm/>
            </div>
          </Container>  
        </Section>
      
        {/* O Problema */}
        <Section id="O SaaS">
            <Container className="relative  gap-y-12">
                <div className='text-center flex flex-col gap-4'>
                  <Heading size='md'>
                     Desenvolva com segurança. 
                  </Heading>
                  <Paragraph padding='lg:px-60'>
                    Potencialize a expansão da sua rede com a tranquilidade de saber que seus processos acompanham seu crescimento.
                  </Paragraph>
                </div>
                {/* Vídeo */}
                <div className="iframe-container">
                    <iframe  src="https://player.vimeo.com/video/1146683500"
                      width={950} height={530}
                      frameborder="0" allow="autoplay; fullscreen;"
                      allowfullscreen>
                    </iframe>
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
                   
                    md:gap-0
                    md:gap-y-6
                  "
                >
                  {antigosProblemas.map(({ titulo }, i) => (
                    <div className={`flex md:flex-row grow ${i != 3 && 'justify-center' } `}>
                    <Card
                      key={titulo}
                      description={titulo}
                      className={`
                        z-30
                        relative
                        border-[#db324b]
                        border-dashed
                        px-6 py-8
                        text-center
                        min-h-[240px]
                        grow 
                       bg-white
                        
                        ${i === 3 ? 'lg:max-w-[240px]' : ''}
                        ${i % 2 !== 0 ? 'lg:self-end' : 'lg:self-start'} 
                        `}
                        >
                          <Star/>
                        </Card>
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

                    i % 2 !== 0 && i !== antigosProblemas.length - 1 ?  
                    <svg className='hidden md:block lg:self-start' xmlns="http://www.w3.org/2000/svg" width="240" height="460"  viewBox="20 50 220 230">
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
                    : i === antigosProblemas.length  
                    ?  
                    <svg className='hidden md:block' xmlns="http://www.w3.org/2000/svg" width="240" height="460" viewBox="20 110 220 230">
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
          <Section id="Recursos">
            <Container display='grid' className='gap-y-12' >
                <div className='text-center flex flex-col gap-4'>
                    <Heading size='md'>
                      Expanda sua rede de franquias com segurança e eficiência
                    </Heading>
                    <Paragraph padding='lg:px-60'>
                   O sistema de gestão Kafnet franquias, foi desenvolvido para redes e franqueados que desejam crescer mantendo o controle operacional, padronização e inteligência.

O que o Kafnet franquias <span className='text-[#db324b]'> entrega: </span>
                    </Paragraph>
              
                  </div>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-4'>
                {solucaoKafnet.map(({title, description}) => (
                  <Card key={title} title={title} description={description} className='border-[#db324b] border-dashed p-8 bg-white' />
                  ))}

                <div className='flex flex-col justify-between items-center gap-4 p-8 border-[1.55px] border-black rounded-xl'>
                    <Paragraph className='text-black'>Eleve o padrão da sua franqueadora</Paragraph>              
                        <div className='flex'>
                           <div className='solucoes-dot-grid w-1/8 flex flex-col justify-between  text-2xl p-6 rounded-xl'>
                          </div>
                           <div className='solucoes-dot-grid w-1/8 flex flex-col justify-between  text-2xl p-6 rounded-xl'>
                          </div>
                          <div className='solucoes-dot-grid w-1/8 flex flex-col justify-between  text-2xl p-6 rounded-xl'>
                          </div>
                          <div className='solucoes-dot-grid w-1/8 flex flex-col justify-between  text-2xl p-6 rounded-xl'>
                          </div>
                          <div className='solucoes-dot-grid w-1/8 flex flex-col justify-between  text-2xl p-6 rounded-xl'>
                          </div>
                          <div className='solucoes-dot-grid w-1/8 flex flex-col justify-between  text-2xl p-6 rounded-xl'>
                          </div>
                        </div>
                      
                
                      <Button onClick={() => scrollToSection('Contato')} size='md' variant='secondary' className='justify-center'>
                          Saiba mais
                        </Button> 
                  </div>
                </div>

            </Container>
        </Section>


        {/* Funcionalidades Principais */}
        <Section id='Funcionalidades'>
          <Container>
            <div className='text-center'>
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
              <div className="bg-[#db324b] p-[24px_0] text-center relative">

                <div className="sticky top-[82px] lg:top-[90px] pt-12 lg:pt-0 my-8 bg-[#db324b]">
                  <Heading size="md" className="text-white">
                    Benefício
                  </Heading>
                </div>

                <div className="flex flex-col gap-24 mt-6 lg:mt-6">
                  {beneficios.map(({ title }, i) => (
                    <div
                      key={i}
                      className="
                        text-2xl font-bold
                        flex gap-2
                        bg-gradient-to-r from-[#f8f8f8] via-white to-[#9b9b9b]
                        text-transparent bg-clip-text
                        min-h-[120px] items-center justify-center
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
              
              <div className="bg-white border-[2.5px] border-[#db324b] border-dashed py-[24px] text-center">
                <div className="sticky top-[82px] lg:top-[90px] pt-12 lg:pt-0 my-8 bg-white">
                  <Heading size="md">Impacto para sua Rede</Heading>
                </div>

                <div className="flex flex-col gap-24 mt-6 lg:mt-8">
                  {beneficios.map(({ description }, i) => (
                    <div
                      key={i}
                      className="
                
                        text-xl font-semibold
                        min-h-[120px] flex items-center justify-center mx-4
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

      
       <Section className='hidden'>
          <Container display="grid" className='grid-cols-1 items-center gap-y-6 lg:gap-y-12 '>
            <div className='flex flex-col lg:flex-row justify-center items-center gap-6'>
              <img className='w-60' src={kafnetLogo} alt='' />
              <div className='pb-12 text-center'>
                <Heading size='md'>Por que Kafnet?</Heading>
              </div>
            </div>
            <div>
              <div className='grid grid-cols-1 lg:grid-cols-3  gap-4'>
                {
                  zohoCreator.map(({title, description}, i) => (
                    <Card title={title} description={description} contentGap={`${i === 1 ?  ' gap-18' : '' } gap-3 `} className={`min-h-[400px] flex flex-col justify-between px-4 py-6 text-black ${i == 1 && 'gap-20'} border-none bg-gray-50` }>
                      <div className='dot-grid text-[#db324b]'></div>
                    </Card>
                  ))
                }
              </div> 
            </div>
          </Container>
       </Section>

       <section className='py-[72px]'>
          <Container className='text-center lg:px-6'>

            <Paragraph>
              Nossa expertise permite entendermos o que realmente faz uma franquia operar com fluidez  e aplicamos esse conhecimento direto na sua solução.
            </Paragraph>
          </Container>

       </section>

       <Section id='Low-Code' className='max-w-screen'>
        <Container>
          <div className='mb-4 text-center'>    
            <Heading size='md'>Segurança em Low-Code</Heading>
          </div>
            <Carousel>
            {segurancaFeatures.map((feature) => (
              <div
                key={feature.title}
                className="    
                  snap-start
                  min-w-[45%]
                  md:min-w-[45%]
                  lg:min-w-[32%]
                "
              >
                <FeatureCard feature={feature} />
              </div>
            ))}
          </Carousel>

        </Container>
       </Section>
       {/* Contato */}
        <Section id='Contato'>
          <Container className='text-center lg:text-left'>
            <Heading size='md' className='mb-12'>Cresça sua rede de franquias com segurança, previsibilidade e controle</Heading>
            <div className='grid sm:grid-cols-1 lg:grid-cols-2      
                justify-evenly gap-y-8 
                gap-x-12
              ' >
                <div className='grid grid-flow-row gap-y-8 lg:justify-items-start items-center'>
                  <div>  
                    <p className='text-[20px]'> Agende agora uma demonstração!</p>
                  </div>
                  <div className='border-[2px] border-[#db324b] border-dashed py-12 px-8 rounded-2xl'>
                    <ul className='flex flex-col gap-3 text-md md:text-xl items-center lg:items-start'>
                      {objetivos.map(({boldText, text}) => (
                        <li className='flex items-center flex-col lg:flex-row gap-4'>
                          <Check className='text-emerald-500 w-6'/>
                          <p>
                            <strong className='whitespace-nowrap'>{boldText}</strong>{text}
                          </p>
                        
                        </li>
                      ))}
                    </ul>
                  </div>
              
                </div>
            
                {/* <img src={proximosPassos} alt='Pessoas'  className='self-end rounded-xl' /> */}
                <div className='flex items-end'>

                <FormZoho/> 
                </div>
            
            </div>
          </Container>
        </Section>
        {/*}
        <Section className=''>
          <Container>
       
          </Container>
        </Section>
        */}
        {/*}
        <Section>
          <Container>
             <iframe frameborder="0" id="iframewin" width="100%" height="100%" src="https://nevps-zgph.maillist-manage.com/ua/Optin?od=11287ecd08309c&zx=13361c566&tD=114e4d59259f967a9&sD=114e4d5925a623f73"></iframe>
          </Container>
        </Section>
        */}

        
        <Footer/>
      {/*  <VideoDialog onHandleToggleDialog={handleToggleDialog} isDialogOpen={isDialogOpen} /> */}
        <WhatsAppFloater/>
      </main>
    </ThemeProvider>
  )
}

export default App
