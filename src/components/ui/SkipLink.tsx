/** Skip link accesible — 08-Accessibility/Keyboard.md */
export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-on-primary"
    >
      Saltar al contenido principal
    </a>
  );
}
