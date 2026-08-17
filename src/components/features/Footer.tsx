import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-10 px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="flex flex-col gap-4 md:max-w-xs">
            <Logo />
            <p className="text-sm text-text-secondary">
              {siteConfig.tagline} para negocios en toda Colombia.
            </p>
          </div>

          <nav aria-label="Navegación de pie de página" className="flex flex-wrap gap-x-10 gap-y-4">
            <ul className="flex flex-col gap-3">
              <li className="text-xs font-medium uppercase tracking-wide text-text-muted">
                Sitio
              </li>
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/paginas-web-para"
                  className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                >
                  Páginas por negocio
                </Link>
              </li>
              <li>
                <Link
                  href="/precios"
                  className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                >
                  Precios
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                >
                  Blog
                </Link>
              </li>
            </ul>

            <ul className="flex flex-col gap-3">
              <li className="text-xs font-medium uppercase tracking-wide text-text-muted">
                Contacto
              </li>
              <li>
                <a
                  href={siteConfig.phone.href}
                  className="flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-text-primary"
                >
                  <Phone size={14} aria-hidden />
                  {siteConfig.phone.display}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.phone.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-text-primary"
                >
                  <MessageCircle size={14} aria-hidden />
                  WhatsApp
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-xs text-text-muted sm:flex-row sm:items-center">
          <p>© {year} Jherva. Todos los derechos reservados.</p>
          <p>Diseñado y desarrollado siguiendo el Jherva Engineering Standard.</p>
        </div>
      </div>
    </footer>
  );
}
