"use client";

import { motion } from "framer-motion";
import {
  Truck,
  TrendingUp,
  CreditCard,
  Users,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

const advantages = [
  {
    id: "01",
    title: "Logística Ágil na RMR",
    desc: "Entrega em até 24h para Recife e Região Metropolitana. Sua gôndola nunca fica vazia.",
    icon: <Truck size={32} />,
  },
  {
    id: "02",
    title: "Mix de Alto Giro",
    desc: "Focamos nos produtos da Curva A: aqueles que o seu cliente procura todo dia.",
    icon: <TrendingUp size={32} />,
  },
  {
    id: "03",
    title: "Crédito Flexível",
    desc: "Análise de crédito desburocratizada e prazos estendidos para parceiros recorrentes.",
    icon: <CreditCard size={32} />,
  },
  {
    id: "04",
    title: "Atendimento Híbrido",
    desc: "A agilidade do WhatsApp com a atenção de um consultor comercial dedicado à sua região.",
    icon: <Users size={32} />,
  },
  {
    id: "05",
    title: "Segurança Fiscal",
    desc: "Operação 100% legalizada com emissão de NFe, garantindo tranquilidade para sua contabilidade.",
    icon: <ShieldCheck size={32} />,
  },
  {
    id: "06",
    title: "Cotação Digital",
    desc: "Solicite preços e feche pedidos direto pelo celular, sem burocracia e com histórico online.",
    icon: <Smartphone size={32} />,
  },
];

export default function Advantages() {
  return (
    <section
      id="vantagens"
      className="py-24 bg-riovale-bg-alt px-4 border-y border-riovale-border/50"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-riovale-secondary font-display font-extrabold text-4xl md:text-5xl uppercase mb-4">
            Por que escolher a{" "}
            <span className="text-riovale-primary-dark">RioVale?</span>
          </h2>
          <p className="text-riovale-text-sec max-w-2xl mx-auto text-lg">
            Estrutura robusta pensada para resolver as dores do varejista
            pernambucano.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((adv, index) => (
            <motion.div
              key={adv.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 border border-riovale-border/60 bg-white hover:border-riovale-primary transition-all duration-300 relative group overflow-hidden rounded-lg shadow-sm hover:shadow-lg"
            >
              {/* Número de Fundo (Decorativo) */}
              <span className="font-display font-black text-7xl text-riovale-bg-alt absolute -bottom-4 -right-4 group-hover:text-riovale-primary/10 transition-colors select-none">
                {adv.id}
              </span>

              {/* Ícone */}
              <div className="mb-6 text-riovale-primary bg-riovale-secondary/5 w-fit p-3 rounded-lg group-hover:bg-riovale-primary group-hover:text-riovale-secondary transition-colors duration-300">
                {adv.icon}
              </div>

              {/* Conteúdo */}
              <h3 className="text-riovale-secondary font-display font-bold text-2xl mb-3 relative z-10 uppercase">
                {adv.title}
              </h3>
              <p className="text-riovale-text-sec leading-relaxed relative z-10 text-sm md:text-base">
                {adv.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
