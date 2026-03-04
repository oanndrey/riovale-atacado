import Link from "next/link";
import Image from "next/image"; // Importando componente Image
import {
  Instagram,
  Facebook,
  Youtube,
  MapPin,
  Phone,
  Mail,
  Code2,
  ExternalLink,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Link exato da localização no Google Maps
  const mapsLink =
    "https://www.google.com.br/maps/place/Riovale+Com%C3%A9rcio+De+Alimentos+(CEASA)/@-6.6336514,-37.8088818,8.25z/data=!4m10!1m2!2m1!1srio+vale+atacadista!3m6!1s0x7ab1f24ce1262a7:0x636ff4a3680ce5af!8m2!3d-8.073041!4d-34.9444771!15sChNyaW8gdmFsZSBhdGFjYWRpc3RhkgEKd2hvbGVzYWxlcuABAA!16s%2Fg%2F11nnwmw9vv?entry=ttu&g_ep=EgoyMDI2MDMwMS4xIKXMDSoASAFQAw%3D%3D";

  return (
    <footer className="bg-riovale-secondary text-white pt-20 pb-10 border-t border-white/5 font-sans">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Coluna 1: Logo & Sobre */}
          <div className="space-y-6">
            {/* LOGO ADICIONADA AQUI */}
            <div className="relative w-48 h-16 md:w-56 md:h-20 -ml-2">
              <Image
                src="/logo-riovale.png"
                alt="RioVale Atacado"
                fill
                className="object-contain object-left"
              />
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              Líder em distribuição no Nordeste, levando produtos de qualidade e
              preços competitivos para quem faz a economia girar.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-riovale-primary hover:text-riovale-secondary transition-all"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-riovale-primary hover:text-riovale-secondary transition-all"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-riovale-primary hover:text-riovale-secondary transition-all"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Coluna 2: Institucional */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 uppercase tracking-widest text-riovale-primary">
              Institucional
            </h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Nossa História
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Trabalhe Conosco
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Acesso Rápido */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 uppercase tracking-widest text-riovale-primary">
              Acesso Rápido
            </h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Solicitar Cotação
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Tabela de Produtos
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Área do Representante
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Fale Conosco
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Contato & Endereço */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 uppercase tracking-widest text-riovale-primary">
              Onde Estamos
            </h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3 group">
                <MapPin
                  size={18}
                  className="text-riovale-primary shrink-0 mt-1 group-hover:animate-bounce"
                />
                <a
                  href={mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors group-hover:underline decoration-riovale-primary underline-offset-4"
                >
                  <span className="leading-relaxed block">
                    Rod. BR-101, Km 70, Nº 550
                    <br />
                    Galpão I, Lojas 09-12
                    <br />
                    Curado, Recife - PE
                    <br />
                    CEP: 50.790-640
                  </span>
                  <span className="text-xs text-riovale-primary flex items-center gap-1 mt-2 font-bold uppercase tracking-wider">
                    Ver no Google Maps <ExternalLink size={12} />
                  </span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-riovale-primary shrink-0" />
                <a
                  href="tel:+558133330000"
                  className="hover:text-white transition-colors"
                >
                  (81) 3333-0000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-riovale-primary shrink-0" />
                <a
                  href="mailto:contato@riovaleatacado.com.br"
                  className="hover:text-white transition-colors"
                >
                  contato@riovaleatacado.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Linha Final - Copyright e Créditos */}
        <div className="pt-8 border-t border-white/10 flex flex-col lg:flex-row justify-between items-center gap-4 text-[10px] text-gray-400 font-mono uppercase tracking-[0.1em]">
          {/* Dados Legais da Empresa */}
          <div className="text-center lg:text-left">
            <p className="mb-1">
              © {currentYear} Riovale Comércio de Alimentos Ltda.
            </p>
            <p>CNPJ: 17.512.912/0001-45 • Todos os direitos reservados.</p>
          </div>

          {/* Assinatura do Desenvolvedor (PRESERVADA) */}
          <a
            href="https://instagram.com/oanndrey"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 group transition-colors duration-300"
          >
            <Code2 size={14} className="group-hover:text-riovale-primary" />
            <span>
              Desenvolvido por{" "}
              <span className="text-white-300 group-hover:text-white transition-colors">
                Andrey Vieira
              </span>{" "}
              •{" "}
              <span className="text-white-300 font-bold group-hover:text-riovale-primary transition-colors decoration-riovale-primary underline-offset-4 group-hover:underline">
                SOLICITE SEU SITE
              </span>
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
