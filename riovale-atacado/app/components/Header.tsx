"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ShoppingCart, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navLinks = [
    { name: "Início", href: "#" },
    { name: "Produtos", href: "#produtos" },
    { name: "Vantagens", href: "#vantagens" },
    { name: "Depoimentos", href: "#depoimentos" },
    { name: "Contato", href: "#contato" },
  ];

  // Scroll Spy (Detectar seção ativa) - Mantido para a funcionalidade da barrinha nos links
  useEffect(() => {
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 200;
      for (const link of navLinks) {
        if (link.href === "#") {
          if (window.scrollY < 200) setActiveSection("#");
          continue;
        }
        const section = document.querySelector(link.href) as HTMLElement;
        if (section) {
          if (
            scrollPosition >= section.offsetTop &&
            scrollPosition < section.offsetTop + section.offsetHeight
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
    <header className="fixed top-0 left-0 w-full z-[100] bg-riovale-primary shadow-lg py-3">
      <div className="container mx-auto px-4 flex justify-between items-center relative">
        {/* LOGO - Fixa no tamanho grande com margem negativa */}
        <Link
          href="/"
          className="relative z-[101] flex items-center justify-center group"
          onClick={() => setActiveSection("#")}
        >
          <div className="relative w-64 h-24 -my-6 transition-all duration-300">
            <Image
              src="/logo-riovale.png"
              alt="RioVale Atacado"
              fill
              className="object-contain object-left drop-shadow-lg scale-70 origin-left"
              priority
            />
          </div>
        </Link>

        {/* NAVEGAÇÃO CENTRALIZADA */}
        <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-1 z-[90]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setActiveSection(link.href)}
                className={`relative px-4 py-2 text-sm font-bold uppercase tracking-wide transition-colors ${
                  isActive
                    ? "text-riovale-secondary-mid"
                    : "text-riovale-secondary hover:text-riovale-text"
                }`}
              >
                <span className="relative z-10">{link.name}</span>
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

        {/* BOTÕES CTA */}
        <div className="hidden md:flex items-center gap-4 ml-auto z-[90]">
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
          className="md:hidden text-riovale-secondary ml-auto z-[102]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-riovale-primary border-t border-riovale-secondary/10 p-4 shadow-xl flex flex-col gap-4 z-[90]">
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
