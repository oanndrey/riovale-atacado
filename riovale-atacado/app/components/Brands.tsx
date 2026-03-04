"use client";

import { motion } from "framer-motion";

// Placeholders para logos. Na prática, você usará SVGs reais das marcas.
const brands = [
  "Nestlé",
  "Unilever",
  "Ambev",
  "P&G",
  "Coca-Cola",
  "Ypê",
  "Bauducco",
  "3 Corações",
];

export default function Brands() {
  return (
    <section className="py-12 bg-white border-b border-riovale-border">
      <div className="container mx-auto px-4">
        <p className="text-center text-riovale-text-sec text-sm font-bold uppercase tracking-widest mb-8">
          Distribuidor autorizado das principais marcas
        </p>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          {brands.map((brand, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="font-display font-black text-3xl text-riovale-secondary/40 hover:text-riovale-secondary cursor-default select-none"
            >
              {/* Aqui entrariam as imagens <img src="..." /> */}
              {brand}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
