import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";
import { Container } from "./container";
import { useActiveSection } from "../../hooks/useActiveSection";
import logo from "../../assets/logo-franquias.png";


interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  const navLinks = [
    { id: 1, name: "O SaaS" },
    { id: 2, name: "Recursos" },
    { id: 3, name: "Funcionalidades" },
    { id: 4, name: "Benefícios" },
    { id: 5, name: "Casos de Uso" },
    { id: 6, name: "Low-Code" },
    { id: 7, name: "Contato" },

  ];

  const sectionIds = navLinks
    .map((l) => l.name)
    .filter((name) => name !== "Contato" || name !== "hero");

  const {active , scrollToSection } = useActiveSection(sectionIds);
 
  const { theme } = useTheme();


  return (
    <header
      className={`bg-[${theme.colors.background}] p-[24px_0_24px_0] z-[99] ${className} ${
        active
          ? "sticky top-0 left-0 bg-white transition-all translate-y-0 "
          : "sticky lg:sticky translate-y-px "
      }`}
    >
      <Container>
     
        <nav className="flex items-center justify-between gap-8 z-99">
          <a href="#">
            <img className="max-w-44" src={logo} />
          </a>
          <Dialog.Root >
            <Dialog.Trigger  asChild> 
              <button className="lg:hidden p-2 rounded-md border border-gray-300 cursor-pointer">
                <Menu />
              </button>
            </Dialog.Trigger>

            <Dialog.Overlay className="fixed inset-0 bg-black/40 backdrop-blur-sm h-screen" />

            {/* ------------ */}
            {/* SLIDING Menu */}
            {/* ------------ */}
            <Dialog.Content
              className="
                fixed top-[44%] left-0 h-full max-w-screen 
                z-100 p-8 
                flex flex-col 
                gap-2
                mx-auto
              "
            >
              <Dialog.Close className="bg-white self-start p-8 rounded-full cursor-pointer">
                <X />
              </Dialog.Close>

              <ul className="flex flex-col gap-6 p-4 rounded-xl bg-white">
                {navLinks.map(({ id, name }) => {

                    const isActive = active === name
                    console.log(isActive, active, name)
                    return (

                        <li key={id}>
                      {/* from-[#db324b] to-[#831e2d] */}
                    {name === "Contato" ? (
                        <a
                        href="https://kafnet.com.br/contato" target="_blank" 
                        className="bg-linear-to-r px-6 py-2 rounded-xl block text-center cursor-pointer "
                      >
                        {name}
                      </a>
                    ) : (
                        <Dialog.Close asChild>
                        <a
                          onClick={() => scrollToSection(name)}
                          className={`text-xl text-gray-700 block ${isActive && 'text-[#db324b]'} cursor-pointer`}
                          >
                          {name}
                        </a>
                      </Dialog.Close>
                    )}
                  </li>
                )
})}
              </ul>
            </Dialog.Content>
          </Dialog.Root>

          {/* ------------------------------------ */}
          {/* DESKTOP NAVIGATION */}
          {/* ------------------------------------ */}
          <ul className="hidden lg:flex items-center gap-8 w-full">
            {navLinks.map(({ id, name }) => {
              const isActive = active === name;
              return name === "Contato" ? (
                <li key={id} className="ml-auto">
                  <a
                    href="https://kafnet.com.br/contato" target="_blank"
                    className="bg-[#db324b] px-8 py-2 tracking-wide text-white rounded-xl"
                  >
                    {name}
                  </a>
                </li>
              ) : (
                <li
                  key={id}
                  className={`text-md cursor-pointer group hover:text-[#db324b] transition-colors ${isActive && 'text-[#db324b]'}`}
                >
                  <a onClick={() => scrollToSection(name)}>{name}</a>
                </li>
              );
            })}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
