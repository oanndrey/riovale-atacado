"use client";

import { motion } from "framer-motion";
import {
  Package,
  Coffee,
  Ham,
  Wine,
  Sparkles,
  Dog,
  Wheat,
  Baby,
} from "lucide-react";

// Dados ajustados para linguagem B2B (Atacado)
const categoryData = [
  {
    name: "Alimentos Básicos",
    items: "1.200+ SKUs",
    icon: <Wheat />,
    desc: "Arroz, feijão, óleos e enlatados de alto giro.",
  },
  {
    name: "Bebidas",
    items: "850+ SKUs",
    icon: <Wine />,
    desc: "Cervejas, destilados, sucos e refrigerantes.",
  },
  {
    name: "Frios e Laticínios",
    items: "400+ SKUs",
    icon: <Ham />,
    desc: "Queijos, iogurtes e manteigas das melhores marcas.",
  },
  {
    name: "Higiene e Limpeza",
    items: "600+ SKUs",
    icon: <Sparkles />,
    desc: "Produtos químicos, sabões e descartáveis.",
  },
  {
    name: "Linha Pet",
    items: "300+ SKUs",
    icon: <Dog />,
    desc: "Rações (sacos e granel) e acessórios.",
  },
  {
    name: "Bazar e Utilidades",
    items: "250+ SKUs",
    icon: <Package />,
    desc: "Utensílios do lar e itens de conveniência.",
  },
];

export default function CategoryGrid() {
  const whatsappLink =
    "https://wa.me/5581999999999?text=Ol%C3%A1%2C%20gostaria%20de%20receber%20o%20cat%C3%A1logo%20completo%20em%20PDF.";

  return (
    <section id="produtos" className="py-24 bg-riovale-bg px-4 scroll-mt-20">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-riovale-secondary font-display font-extrabold text-4xl md:text-5xl uppercase tracking-tight mb-4">
              Nossas Linhas de{" "}
              <span className="text-riovale-primary-dark">Produtos</span>
            </h2>
            <p className="text-riovale-text-sec text-lg">
              Mix inteligente pensado para maximizar a rentabilidade da sua
              gôndola. Trabalhamos com as marcas líderes de mercado.
            </p>
          </div>

          {/* Botão agora leva para o WhatsApp solicitando PDF */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-riovale-secondary font-bold uppercase tracking-widest text-sm border-b-2 border-riovale-primary pb-1 hover:text-riovale-primary-dark transition-colors cursor-pointer"
          >
            Solicitar Catálogo Digital
            <span className="group-hover:translate-x-1 transition-transform">
              <ArrowRightSmall />
            </span>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryData.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white p-8 rounded-lg border border-riovale-border hover:border-riovale-primary transition-all duration-350 hover:-translate-y-2 hover:shadow-xl cursor-pointer"
            >
              {/* Borda lateral amarela no hover */}
              <div className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-riovale-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-300 rounded-r" />

              <div className="text-riovale-secondary mb-6 bg-riovale-bg w-14 h-14 flex items-center justify-center rounded-lg group-hover:bg-riovale-primary group-hover:text-riovale-secondary transition-colors duration-300">
                {cat.icon}
              </div>

              <h3 className="font-display font-bold text-2xl text-riovale-secondary mb-2 uppercase">
                {cat.name}
              </h3>
              <p className="text-riovale-text-sec text-sm mb-4 leading-relaxed">
                {cat.desc}
              </p>

              <div className="flex justify-between items-center pt-4 border-t border-riovale-border">
                <span className="text-xs font-bold text-riovale-secondary-mid uppercase tracking-tighter bg-riovale-secondary-light/10 px-2 py-1 rounded">
                  {cat.items}
                </span>
                <span className="text-riovale-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">
                  <ArrowRightSmall />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArrowRightSmall() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14m-7-7 7 7-7 7" />
    </svg>
  );
}
