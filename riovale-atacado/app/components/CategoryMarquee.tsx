"use client";

const categories = [
  "Alimentos",
  "Bebidas",
  "Higiene",
  "Limpeza",
  "Pet Shop",
  "Descartáveis",
  "Bazar",
  "Laticínios",
  "Congelados",
  "Hortifruti",
];

export default function CategoryMarquee() {
  return (
    <div className="bg-riovale-secondary py-4 overflow-hidden border-y border-white/10 relative">
      {/* Container de animação */}
      <div className="flex whitespace-nowrap animate-marquee">
        {/* Renderizamos duas vezes para o loop ser infinito e sem cortes */}
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center">
            {categories.map((cat, index) => (
              <div key={index} className="flex items-center">
                <span className="text-riovale-primary font-display font-bold text-xl md:text-2xl uppercase tracking-[0.2em] px-8">
                  {cat}
                </span>
                <span className="text-white/30 text-2xl">•</span>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Estilo local para a animação do Marquee */}
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
