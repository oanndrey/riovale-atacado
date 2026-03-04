"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ShoppingCart, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Links mapeados para os IDs das seções
  const navLinks = [
    { name: "Início", href: "#" }, // Mapeia para o topo
    { name: "Produtos", href: "#produtos" },
    { name: "Vantagens", href: "#vantagens" },
    { name: "Depoimentos", href: "#depoimentos" },
    { name: "Contato", href: "#contato" },
  ];

  // Efeito 1: Detectar Scroll para mudar tamanho do header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Efeito 2: "Scroll Spy" - Detectar qual seção está visível para mover a barrinha
  useEffect(() => {
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 200; // Offset para ativar um pouco antes de chegar

      // Verifica cada seção
      for (const link of navLinks) {
        if (link.href === "#") {
          if (window.scrollY < 200) setActiveSection("#");
          continue;
        }

        const section = document.querySelector(link.href) as HTMLElement;
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(link.href);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-riovale-primary shadow-lg py-1"
          : "bg-riovale-primary py-3"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center relative">
        {/* === ÁREA DA LOGO (Esquerda) === */}
        <div className="flex items-center">
          {/* Div fantasma para reservar espaço lateral se necessário, mas visualmente a logo é absoluta */}
          <div className="w-10 md:w-0"></div>

          <Link
            href="/"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-50"
            onClick={() => setActiveSection("#")}
          >
            <div
              className={`relative transition-all duration-300 ${
                isScrolled
                  ? "w-50 h-16 md:w-54 md:h-20"
                  : "w-72 h-24 md:w-72 md:h-28"
              }`}
            >
              <Image
                src="/logo-riovale.png"
                alt="RioVale Atacado"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>
        </div>

        {/* === NAVEGAÇÃO CENTRALIZADA (Centro Absoluto) === */}
        <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setActiveSection(link.href)}
                className={`relative px-4 py-2 text-sm font-bold uppercase tracking-wide transition-colors ${
                  // Se estiver ativo ou hover, fica branco/escuro, senão verde padrão
                  isActive
                    ? "text-riovale-secondary-mid"
                    : "text-riovale-secondary hover:text-riovale-text"
                }`}
              >
                {/* Texto do Link */}
                <span className="relative z-10">{link.name}</span>

                {/* A Barrinha Animada (Só aparece se for o link ativo) */}
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-[3px] bg-riovale-secondary rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* === BOTÕES CTA (Direita) === */}
        <div className="hidden md:flex items-center gap-4 ml-auto">
          <button className="flex items-center gap-2 border border-riovale-secondary text-riovale-secondary px-3 py-2 rounded-md hover:bg-riovale-secondary/10 transition-colors text-xs font-bold uppercase whitespace-nowrap">
            <Phone size={16} />
            (88) 9999-9999
          </button>

          <button className="bg-riovale-secondary text-white px-5 py-2 rounded-md font-bold text-xs uppercase tracking-wide hover:bg-riovale-secondary-mid transition-all hover:-translate-y-1 shadow-md flex items-center gap-2 whitespace-nowrap">
            <ShoppingCart size={18} />
            Fazer Pedido
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-riovale-secondary ml-auto z-50 relative"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-riovale-primary border-t border-riovale-secondary/10 p-4 shadow-xl flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-lg font-bold py-2 border-b border-riovale-secondary/10 ${
                activeSection === link.href
                  ? "text-white pl-2 border-l-4 border-l-riovale-secondary"
                  : "text-riovale-secondary"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <button className="w-full bg-riovale-secondary text-white py-3 rounded font-bold uppercase mt-2 shadow-sm">
            Fazer Pedido Agora
          </button>
        </div>
      )}
    </header>
  );
}
