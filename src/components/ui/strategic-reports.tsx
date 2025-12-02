import { BellRing, Menu } from "lucide-react";
import type React from "react";
import { useState } from "react";
import { Heading } from "./Heading";


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
            {/*
            <ul className="flex items-center gap-4">
                {colors.map((color) => (
                    <button key={color.id} onClick={() => handleChangeColor(color)} className={`w-10 h-10 ${color.hex} rounded-full ${UIColor?.id === color.id ? 'border-2 border-gray-800' : ''} cursor-pointer `} >
                        
                    </button>
                ))}
            </ul>
            */}
            <div className="grid gap-y-8 bg-gray-50 p-4 rounded-xl" >
                <div className="grid grid-cols-3 gap-4 my-4 h-13">
                    <div className="bg-gray-300 rounded-md p-4 h-full">
                        <Heading size="sm"> 23</Heading>
                    </div>
                    <div className="bg-gray-300 rounded-md p-4 h-full">
                        <Heading size="sm"> 23%</Heading>
                    </div>
                    <div className="bg-gray-300 rounded-md p-4 h-full">
                        <Heading size="sm"> 2300km</Heading>
                    </div>
                </div>
                <div className="pizza-chart justify-self-center self-center">
                    <div className="center-label"></div>
                </div>
            </div>
        </div>
    )
}