import { useState } from "react";
import { Heading } from "./Heading";
import { MoveRight } from "lucide-react";


interface AutomationProcessesProps {
    
}

export function AutomationProcesses ({}: AutomationProcessesProps) {

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
                <div className="flex items-center gap-2">
                    <div className="bg-emerald-500/20 text-emerald-500 px-2 py-1.5 rounded-xl h-full">
                        <span>Operações</span>
                        
                    </div>
                    <MoveRight className="text-gray-600"/>
                    <div className="bg-emerald-500/20 text-emerald-500 px-2 py-1.5 rounded-xl h-full">
                        <span>Financeiro</span>
                    </div>
                     <MoveRight className="text-gray-600" />
                    <div className="bg-[#db324b]/20 text-[#db324b] px-2 py-1.5 rounded-xl h-full">
                        <span>Conformidade</span>
                    </div>
                    
                     <MoveRight className="text-gray-600" />
                    <div className="bg-emerald-500/20 text-emerald-500 px-2 py-1.5 rounded-xl h-full">
                        Checklists
                    </div>
                </div>
            </div>
        </div>
    )
}