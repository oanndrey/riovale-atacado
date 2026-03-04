"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Truck,
  TrendingUp,
  Headset,
  MessageCircle,
} from "lucide-react";

export default function Hero() {
  const whatsappLink =
    "https://wa.me/5581999999999?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20fazer%20uma%20cota%C3%A7%C3%A3o.";

  return (
    <section className="relative min-h-[90vh] flex items-center bg-riovale-secondary overflow-hidden pt-20">
      {/* Background com Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-riovale-secondary via-riovale-secondary/90 to-riovale-secondary/40"></div>
      </div>

      <div className="container mx-auto px-4 z-10 grid md:grid-cols-2 gap-12 items-center">
        {/* Texto Principal (Esquerda) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 w-fit px-3 py-1 rounded-full border border-white/20 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-riovale-primary animate-pulse"></span>
            <span className="text-riovale-primary-light text-xs font-bold uppercase tracking-wider">
              Atacado de confiança em Pernambuco
            </span>
          </div>

          <h1 className="font-display font-extrabold text-5xl md:text-7xl text-white leading-tight">
            ABASTECEMOS O <br />
            <span className="text-riovale-primary">SEU NEGÓCIO</span> COM <br />
            QUALIDADE.
          </h1>

          <p className="text-gray-300 text-lg md:text-xl max-w-lg font-light">
            Distribuição completa de alimentos, bebidas e utilidades. Logística
            própria e condições exclusivas para CNPJ.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <a
              href="#produtos"
              className="bg-riovale-primary hover:bg-riovale-primary-dark text-riovale-text text-base font-bold px-8 py-4 rounded-md uppercase tracking-wide transition-all shadow-[0_0_20px_rgba(242,183,5,0.3)] hover:shadow-[0_0_30px_rgba(242,183,5,0.5)] flex items-center justify-center gap-2 cursor-pointer"
            >
              Conheça o Mix
              <ArrowRight size={20} />
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/30 text-white hover:bg-white/10 font-bold px-8 py-4 rounded-md uppercase tracking-wide transition-all flex items-center justify-center gap-2"
            >
              Falar com Vendedor
            </a>
          </div>

          {/* Badges de Confiança */}
          <div className="flex items-center gap-6 mt-8 pt-8 border-t border-white/10">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-riovale-primary" size={20} />
              <span className="text-gray-300 text-sm font-semibold">
                Frota Própria
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-riovale-primary" size={20} />
              <span className="text-gray-300 text-sm font-semibold">
                Nota Fiscal Full
              </span>
            </div>
          </div>
        </motion.div>

        {/* Card Flutuante (Direita) - Ajustado para Institucional */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden md:block relative"
        >
          {/* O Card "Vidro" */}
          <div className="relative bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-xl shadow-2xl max-w-md ml-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-white font-display font-bold text-2xl uppercase">
                Por que a RioVale?
              </h3>
              <span className="bg-riovale-primary text-riovale-secondary text-xs font-bold px-2 py-1 rounded uppercase">
                Vantagens
              </span>
            </div>

            {/* Lista de Vantagens (Substituindo os produtos) */}
            <div className="space-y-4">
              {/* Item 1 */}
              <div className="flex items-center gap-4 bg-black/20 p-4 rounded-lg hover:bg-black/30 transition-colors group">
                <div className="w-10 h-10 bg-white/10 rounded-md flex items-center justify-center text-riovale-primary">
                  <Truck size={20} />
                </div>
                <div className="flex-1">
                  <div className="text-gray-100 text-sm font-bold group-hover:text-riovale-primary transition-colors">
                    Entrega em até 24h
                  </div>
                  <div className="text-xs text-gray-400">
                    Para Recife e Região Metropolitana
                  </div>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-center gap-4 bg-black/20 p-4 rounded-lg hover:bg-black/30 transition-colors group">
                <div className="w-10 h-10 bg-white/10 rounded-md flex items-center justify-center text-riovale-primary">
                  <TrendingUp size={20} />
                </div>
                <div className="flex-1">
                  <div className="text-gray-100 text-sm font-bold group-hover:text-riovale-primary transition-colors">
                    Tabela Progressiva
                  </div>
                  <div className="text-xs text-gray-400">
                    Descontos reais por volume de compra
                  </div>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-center gap-4 bg-black/20 p-4 rounded-lg hover:bg-black/30 transition-colors group">
                <div className="w-10 h-10 bg-white/10 rounded-md flex items-center justify-center text-riovale-primary">
                  <Headset size={20} />
                </div>
                <div className="flex-1">
                  <div className="text-gray-100 text-sm font-bold group-hover:text-riovale-primary transition-colors">
                    Consultor Dedicado
                  </div>
                  <div className="text-xs text-gray-400">
                    Atendimento humano via WhatsApp
                  </div>
                </div>
              </div>
            </div>

            {/* Botão de WhatsApp no Card */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mt-6 bg-[#25D366] hover:bg-[#128C7E] text-white py-4 rounded font-bold text-sm uppercase transition-all flex items-center justify-center gap-2 shadow-lg hover:-translate-y-1"
            >
              <MessageCircle size={20} />
              Cotação via WhatsApp
            </a>

            <p className="text-center text-white/30 text-[10px] uppercase tracking-widest mt-3">
              Resposta em até 30 minutos
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
