import { BellRing, Menu } from "lucide-react";
import { useState } from "react";
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";
import BrazilMap from "../../assets/brazil-in-blue.png"
import amarelo from "../../assets/amarelo.png";
import verde from "../../assets/verde.png";
import azul from "../../assets/azul.png";


interface CustomizedCRMProps {
    
}

/*
export function CustomizedCRM ({}: CustomizedCRMProps) {

    const colors = [
        {
            id: 1,
            hex: 'bg-[#FBBF24]'
        },
        {
            id: 2,
            hex: 'bg-[#34D399]'
        },
        {
            id: 3,
            hex: 'bg-[#3B82F6]',
        },
        {
            id: 4,
            hex: 'bg-[#EF4444]',
        },
        {
            id: 5,
            hex: 'bg-[#EC4899]'
        }
    ]

    const [UIColor, setUIColor] = useState(colors[1]);


    function handleChangeColor(color) {
        setUIColor(color)
    }

    return (
        <div className="flex flex-col gap-12 ">
            <ul className="flex items-center gap-4  ">
                {colors.map((color) => (
                    <button key={color.id} onClick={() => handleChangeColor(color)} className={`w-10 h-10 ${color.hex} rounded-full ${UIColor?.id === color.id ? 'border-2 border-gray-800' : ''} cursor-pointer `} >
                        
                    </button>
                ))}
            </ul>
            <div className="rounded-2xl">

                <nav className={`w-full px-4 py-2 flex justify-between items-center shrink ${UIColor?.hex} rounded-t-2xl`}>
                    <Menu width={18} />
                    <div className="flex item items-center gap-2">

                        <BellRing width={18} />
                        <button className="w-28 h-6 rounded-xl bg-white"></button>
                    </div>
                </nav>
                {
                    UIColor.id === 1 &&
                    <div className="flex flex-col gap-4 bg-gray-100 p-8 gap-x-4 w-full h-[280px] rounded-b-2xl">
                        <div className="bg-[#FBBF24] py-1.5 px-1 self-start whitespace-nowrap rounded-2xl"><p className="text-[8px]">Mostrar minhas tarefas </p> </div>

                        <div className="grid grid-flow-col gap-y-4 gap-x-1.5 ">
                            <div className="grid h-full gap-y-4">

                                <div className=" bg-white text-amber-950 rounded-md px-4">
                                    <Heading size="sm">23</Heading>
                                </div>
                                <div className="bg-white flex justify-center gap-1.5 items-end p-4 rounded-md">
                                    <div className="w-6 h-12 bg-[#FBBF24]"></div>
                                    <div className="w-6 h-24 bg-[#FBBF24]/50"></div>
                                    
                                    <div className="w-6 h-16 bg-[#FBBF24]/20"></div>

                                </div>
                                <div className=" bg-white rounded-2xl"></div>
                            </div>
                          
                          <div className="grid h-full gap-y-4">

                                <div className=" bg-white text-amber-950 rounded-md px-4">
                                    <Heading size="sm">48%</Heading>
                                </div>
                                <div className="bg-white flex justify-center gap-1.5 items-end p-4 rounded-md">
                                    <div className="w-6 h-12 bg-[#FBBF24]"></div>
                                    <div className="w-6 h-24 bg-[#FBBF24]/50"></div>
                                    
                                    <div className="w-6 h-16 bg-[#FBBF24]/20"></div>

                                </div>
                                <div className=" bg-white rounded-2xl"></div>
                            </div>
                          <div className="grid h-full gap-y-4">

                                <div className=" bg-white text-amber-950 rounded-md px-4">
                                    <Heading size="sm">+12h</Heading>
                                </div>
                                <div className="bg-white flex justify-center gap-1.5 items-end p-4 rounded-md">
                                    <div className="w-6 h-12 bg-[#FBBF24]"></div>
                                    <div className="w-6 h-24 bg-[#FBBF24]/50"></div>
                                    
                                    <div className="w-6 h-16 bg-[#FBBF24]/20"></div>

                                </div>
                                <div className=" bg-white rounded-2xl"></div>
                            </div>
                          
                        </div>
                     
                    </div>
                }
                {
                    UIColor.id === 2 &&
                <div className="grid grid-cols-1 bg-gray-50 p-4 gap-x-4 gap-y-4 w-full h-[280px]">
                    <div className="flex justify-between items-center">
                         <div className=" bg-white text-black rounded-md p-4 min-w-9">
                            <div className="rounded-full bg-[#34D399]/50 w-8 h-8"> </div>
                            <p className="text-xs mt-2">Prospecção</p>        
                        </div>
                         <div className=" bg-white text-black rounded-md p-4  min-w-9">
                            <div className="rounded-full bg-[#34D399]/50 w-8 h-8"> </div>
                            <p className="text-xs mt-2">Qualificação</p>              
                        </div>
                          <div className=" bg-white text-black rounded-md p-4 min-w-9">
                            <div className="rounded-full bg-[#34D399] w-8 h-8"> </div>
                            <p className="text-xs mt-2">Oportunidade</p>             
                        </div>
                          <div className=" bg-white text-black rounded-md p-4 min-w-9">
                            <div className="rounded-full bg-[#34D399]/50 w-8 h-8"> </div>
                            <p className="text-xs mt-2">Cliente</p>          
                        </div>
                    </div>         
                <div className="grid grid-cols-2 h-full gap-y-4">
                    <div className="flex flex-col gap-2">
                        <div className="self-start px-2 py-1.5 bg-[#34d399] text-[8px] rounded-2xl mb-2 text-white">Enviar e-mail</div>
                        <p className="text-[8px]">Jesualdo Ferreira</p>
                        <p className="text-[8px]">992192199</p>
                        <p className="text-[8px]">jesualdof@mail.com</p>
                    </div>

                    <div className="bg-white flex justify-center gap-1.5 items-end p-4 rounded-md">
                        <div className="w-6 h-12 bg-[#34D399]"></div>
                            <div className="w-6 h-24 bg-[#34D399]/50"></div>
                                    
                        <div className="w-6 h-16 bg-[#34D399]/20"></div>

                    </div>
                    <div className=" bg-white rounded-2xl"></div>
                </div>
                          
                       
                          
            </div>
                     
                }
                  {
                    UIColor.id === 3 &&
                    <div className="grid grid-cols-2 gap-x-4 w-full bg-gray-50  h-[280px] ">
                        <div className="bg-gray-50 grid grid-cols-1 gap-2  py-4 px-8">
                            <div className="grid h-full gap-y-4">

                                <div className=" bg-white text-black rounded-md p-4">
                                    <p className="text-sm">SC</p>
                                    <Heading size="sm">+129</Heading>
                                </div>
                                 <div className="blue-pizza-chart justify-self-center self-center">
                                    <div className="center-label"></div>
                                </div>
                                <div className=" bg-white rounded-2xl"></div>
                            </div>
                        </div>
                        <div className="bg-gray-50">
                            <img src={BrazilMap} alt="Brazil Map" />
                        </div>
                       

                    </div>
                }
                {
                    UIColor.id === 4 &&
                    <div className="grid grid-cols-2 gap-x-4 w-full  h-[280px]">
                        <div className="bg-gray-300 grid grid-cols-3 gap-4 py-12 px-8">
                            <div className="bg-white rounded-xl w-full h-8"></div>
                            <div className="bg-white rounded-xl w-full h-8"></div>
                            <div className="bg-white rounded-xl w-full h-8"></div>
                            <div className="bg-white rounded-xl w-full h-8"></div>
                            <div className="bg-white rounded-xl w-full h-8"></div>
                            <div className="bg-white rounded-xl w-full h-8"></div>
                            <div className="bg-white rounded-xl w-full h-8"></div>
                            <div className="bg-white rounded-xl w-full h-8"></div>
                        </div>
                        <div className="bg-gray-300 flex justify-center items-end px-4 ">
                            <div className="w-12 h-12 bg-[#FBBF24]"></div>
                            <div className="w-12 h-24 bg-[#EF4444]"></div>
                            
                            <div className="w-12 h-16 bg-[#34D399]"></div>

                        </div>
                       

                    </div>
                }
                {
                    UIColor.id === 5 &&
                    <div className="grid grid-cols-2 gap-x-4 w-full  h-[280px] bg-gray-300">
                        <div className="bg-gray-300 flex justify-center items-end px-4 ">
                            <div className="w-12 h-24 bg-[#FBBF24]"></div>
                            <div className="w-12 h-12 bg-[#EF4444]"></div>
                            
                            <div className="w-12 h-8 bg-[#34D399]"></div>

                        </div>
                        <div className="bg-gray-300 grid gap-3 py-12 px-18">
                            <div className="bg-white rounded-xl w-full h-3"></div>
                            <div className="bg-white rounded-xl w-full h-3"></div>
                            <div className="bg-white rounded-xl w-full h-3"></div>
                            <div className="bg-white rounded-xl w-full h-3"></div>
                            <div className="bg-[#34D399] justify-self-end w-12 h-3 rounded-xl"></div>
                        </div>
                     
                    </div>
                }
            </div>
        </div>
    )
}*/

export function CustomizedCRM({}: CustomizedCRMProps) {
  const colors = [
    { id: 1, hex: "bg-[#FBBF24]" },
    { id: 2, hex: "bg-[#34D399]" },
    { id: 3, hex: "bg-[#3B82F6]" },
   // { id: 4, hex: "bg-[#EF4444]" },
   // { id: 5, hex: "bg-[#EC4899]" },
  ];

  const [UIColor, setUIColor] = useState(colors[1]);

  function handleChangeColor(color) {
    setUIColor(color);
  }

  return (
    <div className="flex flex-col gap-12 w-full min-w-0">
      <ul className="flex items-center gap-4 flex-wrap">
        {colors.map((color) => (
          <button
            key={color.id}
            onClick={() => handleChangeColor(color)}
            className={`w-8 h-8 md:w-10 md:h-10 ${color.hex} rounded-full ${
              UIColor?.id === color.id ? "border-2 border-gray-800" : ""
            } cursor-pointer`}
          ></button>
        ))}
      </ul>

      <div className="rounded-2xl w-full min-w-0">
     
        {/*
        <nav
          className={`w-full px-3 py-2 md:px-4 flex justify-between items-center ${UIColor?.hex} rounded-t-2xl`}
        >
          <Menu width={18} />
          <div className="flex items-center gap-2">
            <BellRing width={18} />
            <button className="h-5 w-20 md:w-28 md:h-6 bg-white rounded-xl"></button>
          </div>
        </nav>
        */}
        {/* ======================= */}
        {/*         Amarelo         */}
        {/* ======================= */}
        {UIColor.id === 1 && (
            <img className="max-w-full" src={amarelo} alt="" />
        )}

        {/* ======================= */}
        {/*         Verde           */}
        {/* ======================= */}
        {UIColor.id === 2 && (
            <img src={verde} alt="" />
        )}

        {/* ==================== */}
        {/*         Azul         */}
        {/*===================== */}
        {UIColor.id === 3 && (
          <img src={azul} alt="" />
        )}

        {/* ========================== */}
        {/*       Vermelho             */}
        {/* ========================== */}
        {UIColor.id === 4 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full min-h-[280px] bg-gray-300">
            <div className="grid grid-cols-3 gap-4 p-8">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="bg-white rounded-xl h-8"></div>
              ))}
            </div>

            <div className="flex justify-center items-end gap-2 p-4">
              <div className="max-w-10 md:w-12 h-10 md:h-12 bg-[#FBBF24]"></div>
              <div className="max-w-10 md:w-12 h-20 md:h-24 bg-[#EF4444]"></div>
              <div className="max-w-10 md:w-12 h-14 md:h-16 bg-[#34D399]"></div>
            </div>
          </div>
        )}

        {/* ===================== */}
        {/*       Rosa            */}
        {/* ===================== */}
        {UIColor.id === 5 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full min-h-[280px] bg-gray-300">
            <div className="flex justify-center items-end gap-2 p-4">
              <div className="w-10 md:w-12 h-20 md:h-24 bg-[#FBBF24]"></div>
              <div className="w-10 md:w-12 h-10 md:h-12 bg-[#EF4444]"></div>
              <div className="w-10 md:w-12 h-6 md:h-8 bg-[#34D399]"></div>
            </div>

            <div className="grid gap-3 p-8">
              <div className="bg-white rounded-xl h-3"></div>
              <div className="bg-white rounded-xl h-3"></div>
              <div className="bg-white rounded-xl h-3"></div>
              <div className="bg-white rounded-xl h-3"></div>

              <div className="bg-[#34D399] justify-self-end w-12 h-3 rounded-xl"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
