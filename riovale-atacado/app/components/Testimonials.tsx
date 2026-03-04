"use client";

import { motion } from "framer-motion";
import { Star, Quote, BadgeCheck } from "lucide-react";

const testimonials = [
  {
    name: "Roberto Campos",
    role: "Proprietário",
    business: "Mercadinho Preço Bom",
    city: "Afogados - Recife",
    text: "O que me ganhou foi a pontualidade. Aqui em Afogados o movimento é grande e não posso ter ruptura de estoque. O caminhão da RioVale encosta toda terça-feira sem falta.",
    initials: "RC",
    color: "bg-blue-600",
  },
  {
    name: "Dona Lúcia",
    role: "Gerente",
    business: "Padaria Pão da Hora",
    city: "Várzea - Recife",
    text: "Eu comprava o trigo e o óleo em fornecedores diferentes. Na RioVale consegui centralizar tudo com um preço melhor. O vendedor Júnior sempre me avisa antes dos aumentos.",
    initials: "LM",
    color: "bg-orange-600",
  },
  {
    name: "Carlos Eduardo",
    role: "Sócio",
    business: "Depósito O Baratão",
    city: "Casa Amarela - Recife",
    text: "A facilidade de pedir pelo WhatsApp agilizou minha vida. Mando a lista de manhã e a nota fiscal chega no e-mail na hora. Sem burocracia pra quem precisa trabalhar.",
    initials: "CE",
    color: "bg-green-600",
  },
  {
    name: "Fernanda Lima",
    role: "Compradora",
    business: "Rede SuperMais",
    city: "Jaboatão dos Guararapes",
    text: "O mix de higiene e limpeza deles é imbatível. Consigo margem pra competir com os atacadistas maiores, e ainda recebo na porta da loja com frete grátis.",
    initials: "FL",
    color: "bg-purple-600",
  },
  {
    name: "Sr. Antônio",
    role: "Dono",
    business: "Conveniência Posto 10",
    city: "Boa Viagem - Recife",
    text: "Pra quem trabalha com bebida gelada, reposição rápida é tudo. No Carnaval eles me salvaram quando meu estoque de cerveja zerou no sábado.",
    initials: "SA",
    color: "bg-red-600",
  },
  {
    name: "Ricardo Alves",
    role: "Gestor",
    business: "Empório Gourmet",
    city: "Espinheiro - Recife",
    text: "Gosto da transparência na negociação. A tabela é clara, o desconto por volume é real e o boleto vem com prazo justo pra gente girar a mercadoria.",
    initials: "RA",
    color: "bg-teal-600",
  },
];

export default function Testimonials() {
  return (
    <section
      id="depoimentos"
      className="py-24 bg-riovale-bg relative overflow-hidden"
    >
      {/* Background Decorativo Sutil */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute right-0 top-0 w-96 h-96 bg-riovale-primary rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute left-0 bottom-0 w-64 h-64 bg-riovale-secondary rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-riovale-secondary/5 px-4 py-1.5 rounded-full mb-6">
            <Star className="text-riovale-primary fill-riovale-primary w-4 h-4" />
            <Star className="text-riovale-primary fill-riovale-primary w-4 h-4" />
            <Star className="text-riovale-primary fill-riovale-primary w-4 h-4" />
            <Star className="text-riovale-primary fill-riovale-primary w-4 h-4" />
            <Star className="text-riovale-primary fill-riovale-primary w-4 h-4" />
            <span className="text-sm font-bold text-riovale-secondary uppercase tracking-wide ml-2">
              Excelência em Atendimento
            </span>
          </div>

          <h2 className="text-riovale-secondary font-display font-extrabold text-4xl md:text-5xl uppercase leading-tight">
            O que dizem nossos <br />
            <span className="text-riovale-primary-dark">
              Parceiros Comerciais
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-xl border border-riovale-border hover:border-riovale-primary hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
            >
              {/* Cabeçalho do Card */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-full ${t.color} flex items-center justify-center text-white font-display font-bold text-lg shadow-md`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-riovale-secondary leading-tight">
                      {t.business}
                    </h4>
                    <div className="flex items-center gap-1 text-xs text-riovale-text-sec mt-1">
                      <BadgeCheck className="w-3 h-3 text-blue-500" />
                      <span>Cliente Verificado</span>
                    </div>
                  </div>
                </div>
                <Quote className="text-riovale-border group-hover:text-riovale-primary/30 transition-colors w-8 h-8" />
              </div>

              {/* Texto */}
              <div className="flex-grow">
                <div className="flex gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      className="w-3 h-3 text-riovale-primary fill-riovale-primary"
                    />
                  ))}
                </div>
                <p className="text-riovale-text-sec text-sm leading-relaxed italic">
                  "{t.text}"
                </p>
              </div>

              {/* Rodapé do Card */}
              <div className="mt-6 pt-4 border-t border-riovale-bg-alt flex justify-between items-center">
                <div>
                  <p className="font-bold text-sm text-riovale-secondary">
                    {t.name}
                  </p>
                  <p className="text-xs text-riovale-text-sec">{t.role}</p>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-riovale-secondary-mid bg-riovale-secondary-light/10 px-2 py-1 rounded">
                  📍 {t.city}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Botão de CTA Sutil */}
        <div className="text-center mt-12">
          <p className="text-riovale-text-sec text-sm mb-4">
            Junte-se a mais de 5.000 comércios em Pernambuco
          </p>
          <button className="text-riovale-secondary font-bold border-b-2 border-riovale-primary hover:text-riovale-primary-dark transition-colors uppercase tracking-widest text-sm pb-1">
            Ver mais histórias de sucesso
          </button>
        </div>
      </div>
    </section>
  );
}
