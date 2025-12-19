import * as Dialog from "@radix-ui/react-dialog";
import { X } from 'lucide-react';
import { Button } from "./Button";
import { Heading } from "./Heading";


interface VideoDialogProps {
    isDialogOpen: number
}


export function PromotionalPopup({isDialogOpen, onHandleToggleDialog}) {
  return (

     <div className={isDialogOpen ? "block relative" : "hidden relative" }>  

        <div className="   
                    bg-[url('./assets/proximos-passos.png')]
                    bg-white
                    fixed bottom-[25px] right-[25px]             
                    z-50 p-8 max-w-screen w-[280px] h-[365px] rounded-xl
                    text-center
                    flex flex-col 
                    shadow-sm shadow-gray-600/50
                  "
                >
                    <div>
                        <button
                            onClick={onHandleToggleDialog}
                        
                            className={` ${isDialogOpen ? 'block' : 'hidden'} bg-white stroke-black  absolute z-999 top-1 top-[-44px] right-0  p-2 rounded-md border border-gray-300 cursor-pointer`}
                         >
                            <X />
                        </button>
                    </div>
                  
                  <div className="flex flex-col justify-evenly gap-24">
                        <Heading size="sm" className="text-black" >Condição especial para franqueados.</Heading>
                        <a className="text-white bg-[#db324b] rounded-xl py-1.5 px-2" href="https://kafnet.com.br/contato" target="_blank">Contato</a>
                 </div>
            </div>     
    </div> 
         
  );
};