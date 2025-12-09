import { BellRing, Menu } from "lucide-react";
import type React from "react";
import { useState } from "react";
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";
import dashboard from "../../assets/dashboard.png";


interface StrategicReportsProps {
    
}

export function StrategicReports ({}: StrategicReportsProps) {

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
        <div className="flex flex-col gap-12">
            <img className="max-w-full" src={dashboard} alt="dashboard" />
        {/*
            <div className="grid gap-y-8 bg-gray-100 p-8 rounded-xl" >
                <div className="grid grid-cols-3 gap-1.5 my-4">
                    <div className="bg-linear-to-r from-[#db324b] to-[#831e2d] rounded-xl text-white p-4 h-full">
                        <Paragraph className="font-semibold">Total de<br></br>Leads</Paragraph>
                        <Heading size="sm"> 23</Heading>
                        <p className="text-xs">5% superior ao último mês</p>
                    </div>
                    <div className="bg-gray-300 rounded-xl p-4 h-full">
                        <Paragraph className="font-semibold">Matriculas Realizadas</Paragraph>
                        <Heading size="sm">2899</Heading>
                        <p className="text-xs text-[#db324b]"><span className="p-1 rounded-xm  border-[#db324b] mr-1 ">+6%</span>Em relação a Novembro</p>
                    </div>
                    <div className="bg-gray-300 rounded-xl p-4 h-full">
                        <Paragraph>Matrículas Pendentes</Paragraph>
                        <Heading size="sm">50</Heading>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <div className="bg-white p-4 rounded-2xl">
                    <Paragraph size="sm" className="mb-2">Movimentação</Paragraph>
                    <div className="flex gap-2  h-28">
                        <div className="h-full w-4 flex flex-col text-center  mt-auto">
                           <div className="bg-[#db324b] h-1/16 rounded-3xl"></div>
                           <span className="mt-auto">D</span>
                        </div>
                          <div className="h-full w-4 flex flex-col text-center mt-auto ">
                           <div className="bg-[#db324b] h-1/2 rounded-3xl"></div>
                           <span className="mt-auto">S</span>
                        </div>
                          <div className="h-full w-4 flex flex-col text-center ">
                           <div className="bg-[#db324b] h-1/4 rounded-3xl"></div>
                           <span className="mt-auto">T</span>
                        </div>
                        <div className="h-full w-4 flex flex-col text-center ">
                           <div className="bg-[#db324b] h-full rounded-3xl"></div>
                           <span className="mt-auto">Q</span>
                        </div>
                        <div className="h-full w-4 flex flex-col text-center ">
                           <div className="bg-[#db324b] h-1/2 rounded-3xl"></div>
                           <span className="mt-auto">Q</span>
                        </div>
                        <div className="h-full w-4 flex flex-col text-center ">
                           <div className="bg-[#db324b] h-1/8 rounded-3xl"></div>
                           <span className="mt-auto">S</span>
                        </div>
                    </div>
            
                    </div>
                    <div className="pizza-chart justify-self-center self-center">
                        <div className="center-label"></div>
                    </div>
                      <div className="bg-white flex justify-center items-end p-4 ">
                            <div className="w-12 h-24 bg-[#db324b]"></div>
                            <div className="w-12 h-12 bg-[#db324b]/50"></div>
                            
                            <div className="w-12 h-8 bg-[#db324b]/20"></div>

                        </div>
                </div>
            </div>
            */}
        </div>
    )
}