import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";
import { Container } from "./container";
import { useActiveSection } from "../../hooks/useActiveSection";
import { Button } from "../ui/Button";

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  const navLinks = [
    { id: 1, name: "O Problema" },
    { id: 2, name: "Solução" },
    { id: 3, name: "Funcionalidades" },
    { id: 4, name: "Benefícios" },
    { id: 5, name: "Casos de Uso" },
    { id: 6, name: "Low-Code" },
    { id: 7, name: "A Kafnet" },
  ];

  const sectionIds = navLinks
    .map((l) => l.name)
    .filter((name) => name !== "A Kafnet" || name !== "hero");

  const active = useActiveSection(sectionIds);
  const { theme } = useTheme();

  function scrollToSection(id: string) {
    const section = document.getElementById(id);
    if (!section) return;

    const header = document.querySelector("header");
    const headerHeight = header ? header.getBoundingClientRect().height : 0;

    const sectionTop = section.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: sectionTop - headerHeight - 24,
      behavior: "smooth",
    });
  }

  return (
    <header
      className={`bg-[${theme.colors.background}] p-[44px_0_8px_0] ${className} ${
        active
          ? "sticky top-0 left-0 z-90 inset-0 bg-white transition-all translate-y-0"
          : "translate-y-px"
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between">
      
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button className="lg:hidden p-2 rounded-md border border-gray-300">
                <Menu />
              </button>
            </Dialog.Trigger>

            <Dialog.Overlay className="fixed inset-0 bg-black/40 backdrop-blur-sm h-screen z-99" />

            {/* ------------ */}
            {/* SLIDING Menu */}
            {/* ------------ */}
            <Dialog.Content
              className="
                fixed right-0 top-0 h-full w-[75%] max-w-xs 
                bg-white z-100 p-6 
                animate-slideLeft
                flex flex-col gap-8
              "
            >
              <Dialog.Close className="self-end p-2">
                <X />
              </Dialog.Close>

              <ul className="flex flex-col gap-6 bg-white">
                {navLinks.map(({ id, name }) => (
                  <li key={id}>
                    {name === "A Kafnet" ? (
                      <a
                        href=""
                        className="bg-linear-to-r from-[#db324b] to-[#831e2d] px-6 py-2 text-white rounded-xl block text-center"
                      >
                        {name}
                      </a>
                    ) : (
                      <Dialog.Close asChild>
                        <a
                          onClick={() => scrollToSection(name)}
                          className="text-xl text-gray-700 block"
                        >
                          {name}
                        </a>
                      </Dialog.Close>
                    )}
                  </li>
                ))}
              </ul>
            </Dialog.Content>
          </Dialog.Root>

          {/* ------------------------------------ */}
          {/* DESKTOP NAVIGATION */}
          {/* ------------------------------------ */}
          <ul className="hidden lg:flex items-center gap-8 w-full">
            {navLinks.map(({ id, name }) => {
              return name === "A Kafnet" ? (
                <li key={id} className="ml-auto">
                  <a
                    href=""
                    className="bg-linear-to-r from-[#db324b] to-[#831e2d] px-8 py-2 tracking-wide text-white rounded-xl"
                  >
                    {name}
                  </a>
                </li>
              ) : (
                <li
                  key={id}
                  className="text-md cursor-pointer group hover:text-[#db324b] transition-colors"
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
