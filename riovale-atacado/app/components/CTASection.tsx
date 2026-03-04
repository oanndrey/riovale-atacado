"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone, ArrowRight } from "lucide-react";

export default function CTASection() {
  // Substitua pelo número real da RioVale
  const whatsappNumber = "5581999999999";
  const message = encodeURIComponent(
    "Olá! Vim pelo site e gostaria de receber a tabela de preços para meu comércio.",
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <section id="contato" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-riovale-secondary rounded-3xl p-8 md:p-16 text-center relative overflow-hidden shadow-2xl border border-white/10"
        >
          {/* Elementos de Fundo (Efeito de luz) */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-riovale-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-riovale-primary text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
              Atendimento Imediato
            </span>

            <h2 className="font-display font-extrabold text-4xl md:text-6xl text-white uppercase mb-6 leading-none">
              Pronto para abastecer <br className="hidden md:block" />
              sua <span className="text-riovale-primary">o seu comércio?</span>
            </h2>

            <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl leading-relaxed">
              Não perca tempo preenchendo formulários longos. Fale agora com um
              consultor, receba nossa tabela atualizada e feche seu pedido em
              minutos.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 w-full justify-center">
              {/* Botão Principal - WhatsApp */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-riovale-primary hover:bg-riovale-primary-dark text-riovale-text font-bold px-8 py-5 rounded-lg uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(242,183,5,0.4)] hover:shadow-[0_0_30px_rgba(242,183,5,0.6)] hover:-translate-y-1 flex items-center justify-center gap-3 text-sm md:text-base"
              >
                <MessageCircle
                  size={22}
                  className="group-hover:animate-pulse"
                />
                Chamar no WhatsApp
                <ArrowRight
                  size={18}
                  className="opacity-60 group-hover:translate-x-1 transition-transform"
                />
              </a>

              {/* Botão Secundário - Telefone */}
              <a
                href="tel:+558133330000"
                className="group border border-white/30 text-white hover:bg-white/10 font-bold px-8 py-5 rounded-lg uppercase tracking-widest transition-all flex items-center justify-center gap-3 text-sm md:text-base"
              >
                <Phone size={20} />
                Ligar no Comercial
              </a>
            </div>

            <div className="mt-12 flex flex-col md:flex-row items-center gap-4 md:gap-8 opacity-60">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-white text-xs font-mono uppercase tracking-wider">
                  Consultores Online Agora
                </span>
              </div>
              <span className="hidden md:block w-px h-4 bg-white/30"></span>
              <p className="text-white text-xs font-mono uppercase tracking-wider">
                Segunda a Sábado — 07:00 às 18:00
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
