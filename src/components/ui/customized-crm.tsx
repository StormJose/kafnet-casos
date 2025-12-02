import { BellRing, Menu } from "lucide-react";
import type React from "react";
import { useState } from "react";


interface CustomizedCRMProps {
    
}

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
        <div className="flex flex-col gap-12">
            <ul className="flex items-center gap-4">
                {colors.map((color) => (
                    <button key={color.id} onClick={() => handleChangeColor(color)} className={`w-10 h-10 ${color.hex} rounded-full ${UIColor?.id === color.id ? 'border-2 border-gray-800' : ''} cursor-pointer `} >
                        
                    </button>
                ))}
            </ul>
            <div>

                <nav className={`w-full px-4 py-2 flex justify-between items-center ${UIColor?.hex}`}>
                    <Menu width={18} />
                    <div className="flex items-center gap-2">

                        <BellRing width={18} />
                        <button className="w-28 h-6 rounded-xl bg-white"></button>
                    </div>
                </nav>
                {
                    UIColor.id === 1 &&
                    <div className="grid grid-cols-1 bg-gray-300 gap-x-4 w-full h-[280px]">
                        <div className="bg-gray-300 grid py-1 px-8">
                            <div className="bg-white w-full h-3"></div>
                            <div className="bg-white w-full h-3"></div>
                            <div className="bg-white w-full h-3"></div>
                            <div className="bg-white w-full h-3"></div>
                            <div className="bg-white w-full h-3"></div>
                            <div className="bg-white w-full h-3"></div>
                            <div className="bg-white w-full h-3"></div>
                            <div className="bg-white w-full h-3"></div>
                            <div className="bg-white w-full h-3"></div>
                            <div className="bg-white w-full h-3"></div>
                            <div className="bg-white w-full h-3"></div>

                        </div>
                     
                    </div>
                }
                {
                    UIColor.id === 2 &&
                    <div className="grid grid-cols-3 gap-x-4 w-full h-[280px]">
                        <div className="bg-gray-300 grid py-4 px-8">
                            <div className="bg-white rounded-xl w-full h-3"></div>
                            <div className="bg-white rounded-xl w-full h-3"></div>
                            <div className="bg-white rounded-xl w-full h-3"></div>
                            <div className="bg-white rounded-xl w-full h-3"></div>
                        </div>
                        <div className="bg-gray-300"></div>
                        <div className="bg-gray-300"></div>

                    </div>
                }
                  {
                    UIColor.id === 3 &&
                    <div className="grid grid-cols-2 gap-x-4 w-full  h-[280px]">
                        <div className="bg-gray-300 grid grid-cols-3 gap-4 py-4 px-8">
                            <div className="bg-white rounded-xl w-full h-3"></div>
                            <div className="bg-white rounded-xl w-full h-3"></div>
                            <div className="bg-white rounded-xl w-full h-3"></div>
                            <div className="bg-white rounded-xl w-full h-3"></div>
                            <div className="bg-white rounded-xl w-full h-3"></div>
                            <div className="bg-white rounded-xl w-full h-3"></div>
                            <div className="bg-white rounded-xl w-full h-3"></div>
                            <div className="bg-white rounded-xl w-full h-3"></div>
                        </div>
                        <div className="bg-gray-300"></div>
                       

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
}