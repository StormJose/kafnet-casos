import zohoPremiumPartner from "../../assets/Zoho-Premium-Partner-zoho-badge-new-1024x302.png";
import zohoEducationPartner from "../../assets/Zoho-Education-Partner.png";
import creatorCertified from "../../assets/Zoho-Creator-Champion-2024.png";
import zohoCreatorLogo from "../../assets/creator-footer.png";
import kafnetLogo from "../../assets/kafnet-logo-red.png";
import { Container } from "./container";
import { Facebook, Instagram, Linkedin, MapPin, Youtube } from "lucide-react";

export function Footer() {

    return (
        <footer className="bg-white py-14 lg:pt-[72px] pb-8 border-t-[#cacaca] border-t-[0.4px]">
            <Container className="grid ">

            {/*
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-8 justify-items-center items-center p-4">
                    <img className="max-w-54" src={zohoPremiumPartner} alt="" />
                    <img className="max-w-32"  src={zohoEducationPartner} alt="" />
                    <img  className="max-w-32"  src={creatorCertified} alt="" />
                </div>
            */}  
            <div className="grid grid-cols-1 gap-y-8 gap-x-4 my-8">
                <p>
                    Desenvolvido sobre a tecnologia <strong> Zoho Creator </strong>, uma das principais plataformas low-code corporativas do mercado global.

                </p>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-8 border-t-[0.88px] pt-8 border-t-[#cacaca] " >
                    <ul className="flex flex-col gap-2 ">
                        <a href="https://kafnet.com.br/crm-e-solucoes-de-negocio" className="underline cursor-pointer">
                            <li>CRM e Soluções de Negócio</li>
                        </a>
                        <a href="https://kafnet.com.br/desenvolvimento-software-low-code" className="underline cursor-pointer">
                            <li>Desenvolvimento de Sistemas</li>
                        </a>
                        <a href="https://kafnet.com.br/analise-de-dados-e-inteligencia-artificial" className="underline cursor-pointer">
                            <li>Análise de Dados e Inteligência Artificial</li>
                        </a>
                        <a href="https://kafnet.com.br/computacao-em-nuvem-e-arquitetura-cloud" className="underline cursor-pointer">
                            <li>Cibersegurança e Monitoramento de Dados</li>
                        </a>
                        <a href="https://kafnet.com.br/computacao-em-nuvem-e-arquitetura-cloud" className="underline cursor-pointer">
                            <li>
                            Computação em Nuvem e Arquitetura Cloud
                            </li>
                        </a>
                    </ul>
                    <ul className="flex flex-col gap-2 min-w-5">
                        <a href="https://kafnet.com.br/blog" className="underline cursor-pointer">
                            <li>Blog</li>
                        </a>
                        <a href="https://kafnet.com.br/quem-somos" className="underline cursor-pointer">
                            <li className="">Quem Somos</li>
                        </a>
                        <a href="https://kafnet.com.br/contato" className="underline cursor-pointer">
                            <li>Contato</li>
                        </a>
                    </ul>
                    <div>
                        <ul className="flex flex-col gap-3 flex-start ">
                            <li className="flex items-center gap-1">
                                <MapPin className="w-8 self-start " />
                                <p>Rua Amauri, 116, Itaim Bibi, São Paulo / SP</p>
                            </li>
                            <li className="flex items-center gap-1">
                                <MapPin className="w-8 self-start" />
                               <p>Rua Leo de Oliveira, 33, Guarulhos / SP</p>
                            </li>
                            <li className="flex items-center gap-1">
                              
                                <p>comercial@kafnet.com.br</p>
                            </li>
                            <li >
                                <p  className="text-[22px]">

                                    +55 11 4872-2872
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
                <div className="flex flex-col flex-end gap-8 lg:flex-row items-center justify-center lg:justify-between border-t-[#cacaca] border-t-[0.88px] pt-[12px]">
                    <div className="flex items-center justify-self-start gap-3">
                        <div className="text-center">
                            <img className="max-w-32 mb-3.5" src={kafnetLogo} alt="" />
                            <p>Kafnet IT</p>
                        </div>
                        <p className={`text-white text-[64px] font-thin`}>|</p>
                        <a href="https://www.zoho.com/pt-br/creator" target="_blank">
                            <div>
                                <img className="max-w-24" src={zohoCreatorLogo} alt="" />
                                <p>Zoho Creator</p>
                            </div>
                        </a>
                    </div>
                    <div className="flex flex-col items-center lg:items-end text-center lg:self-end gap-2">
                        <ul className="flex items-center gap-4">
                           <a href="https://www.facebook.com/KAFNET/?locale=pt_BR" target="_blank">
                                <li>
                                    <svg aria-hidden="true" className="w-6" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path></svg>    
                                </li>
                           </a>
                            <li><strong>.</strong></li>
                           <a href="https://www.instagram.com/kafnetit" target="_blank">

                                <li>
                                    <svg aria-hidden="true" className="w-6" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                                </li>
                           </a>
                            <li><strong>.</strong></li>
                            <a href="https://www.youtube.com/channel/UCnr12moX5Fmk_NXytLJJuIw" target="_blank">
                                <li>
                                    <svg aria-hidden="true" className="w-6" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg>
                                </li>
                            </a>
                            <li><strong>.</strong></li>
                            <a href="https://br.linkedin.com/company/kafnet" target="_blank">
                                <li>
                                    <svg aria-hidden="true" className="w-6" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>
                                </li>
                            </a>
                        </ul>
                        <p>© 2025  Kafnet It Solutions. Todos os direitos reservados.
                        </p>
                    </div>
                </div>
            </Container>
        
        </footer>
    )
}