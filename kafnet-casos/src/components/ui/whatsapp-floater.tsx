import { MessageCircle } from "lucide-react";


export function WhatsAppFloater () {
    return (
        <a href="https://api.whatsapp.com/send/?phone=5511991494610&text=Ol%C3%A1%2C+quero+informa%C3%A7%C3%B5es+sobre+a+Kafnet&type=phone_number&app_absent=0" target="_blank" className="cursor-pointer">

        <div className="z-50 bg-green-500 p-6 rounded-full fixed bottom-[25px] right-[25px]">
            <MessageCircle className="text-white"/>
        </div>
        </a>
    )
}