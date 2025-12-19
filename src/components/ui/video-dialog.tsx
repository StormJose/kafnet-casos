import * as Dialog from "@radix-ui/react-dialog";
import { X } from 'lucide-react';


interface VideoDialogProps {
    isDialogOpen: number
}


export function VideoDialog({isDialogOpen, onHandleToggleDialog}) {
  return (

     <Dialog.Root open={isDialogOpen}>
                
    
               <Dialog.Overlay onClick={onHandleToggleDialog} className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm w-screen h-screen transition-all" />
                
                {/* ------------ */}
                {/* SLIDING Menu */}
                {/* ------------ */}
            
                
                <Dialog.Content
                  className="
                  
                    fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] 
                    z-50 p-8 w-screen
                    text-center
                    flex flex-col justify-center items-center gap-8
                  "
                >
                  <Dialog.Trigger asChild>
                    <button
                        onClick={onHandleToggleDialog}
                    
                        className={` ${isDialogOpen ? 'block' : 'hidden'}  absolute z-999 top-[-75px] lg:top-[75px] right-[32px]  p-2 rounded-md border border-gray-300 cursor-pointer text-gray-100 bg-transparent`}
                      >
                        <X />
                    </button>
                </Dialog.Trigger>
                  
                  <div className="iframe-container">

                    <iframe  src="https://player.vimeo.com/video/1146683500"
                    width={950} height={530}
                    frameborder="0" allow="autoplay; fullscreen;"
                    allowfullscreen>
            </iframe>
                </div>
                          
                </Dialog.Content>

                
              </Dialog.Root>

         
  );
};
