"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "jherva-theme";

export function ThemeToggle({ className }: { className?: string }) {
  const [theme, setTheme] = React.useState<"light" | "dark">("dark");
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    // Sincroniza con el atributo que fija ThemeScript antes del primer
    // paint (fuente externa al DOM, no derivable durante el render en
    // servidor) — uso legítimo de efecto, no estado derivable de props.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    const current = document.documentElement.getAttribute("data-theme");
    setTheme(current === "dark" ? "dark" : "light");
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={mounted ? `Cambiar a modo ${theme === "dark" ? "claro" : "oscuro"}` : "Cambiar tema"}
      className={cn(
        "flex size-11 items-center justify-center rounded-full border border-border text-text-secondary transition-colors duration-[var(--duration-fast)] hover:border-border-strong hover:text-text-primary",
        className
      )}
    >
      {mounted && theme === "dark" ? (
        <Sun size={16} aria-hidden />
      ) : (
        <Moon size={16} aria-hidden />
      )}
    </button>
  );
}

/**
 * Script inline que fija el tema antes del primer render — evita flash.
 * Oscuro es el default del sitio: una primera visita (sin preferencia
 * guardada) siempre abre en modo oscuro, sin mirar prefers-color-scheme.
 * Una vez el usuario cambia el tema manualmente, esa elección se respeta.
 */
export function ThemeScript() {
  const code = `
    (function () {
      try {
        var stored = window.localStorage.getItem('${STORAGE_KEY}');
        var theme = stored === 'light' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', theme);
      } catch (e) {}
    })();
  `;
  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
