/* ============================================================
   MADEVA — JavaScript principal
   ============================================================ */

(function () {
  'use strict';

  /* ── 1. NAVBAR — cambio al hacer scroll ── */
  const navbar = document.getElementById('navbar');

  function updateNavbar() {
    if (!navbar) return;
    if (window.scrollY > 60) {
      navbar.classList.remove('navbar--transparent');
      navbar.classList.add('navbar--scrolled');
    } else {
      navbar.classList.add('navbar--transparent');
      navbar.classList.remove('navbar--scrolled');
    }
  }

  window.addEventListener('scroll', updateNavbar, { passive: true });
  updateNavbar(); // estado inicial

  /* ── 2. MENÚ HAMBURGUESA (mobile) ── */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  if (hamburger && mobileMenu) {
    function setMenu(isOpen) {
      mobileMenu.classList.toggle('open', isOpen);
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen);
      hamburger.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
      // Bloquear scroll del body cuando el menú está abierto
      document.body.style.overflow = isOpen ? 'hidden' : '';
    }

    hamburger.addEventListener('click', function () {
      setMenu(!mobileMenu.classList.contains('open'));
    });

    // Cerrar al hacer clic en cualquier enlace del menú
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () { setMenu(false); });
    });

    // Cerrar con Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
        setMenu(false);
        hamburger.focus();
      }
    });

    // Cerrar si la pantalla pasa a escritorio (rotar tablet, redimensionar),
    // para no dejar el scroll de la página bloqueado
    window.matchMedia('(min-width: 1024px)').addEventListener('change', function (e) {
      if (e.matches) setMenu(false);
    });
  }

  /* ── 3. SCROLL REVEAL con IntersectionObserver ── */
  const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

  if ('IntersectionObserver' in window && revealEls.length > 0) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // solo una vez
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: mostrar todo
    revealEls.forEach(function (el) {
      el.classList.add('visible');
    });
  }

  /* ── 4. BOTÓN SCROLL TO TOP ── */
  const fabTop = document.getElementById('fab-top');

  if (fabTop) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 400) {
        fabTop.classList.add('visible');
      } else {
        fabTop.classList.remove('visible');
      }
    }, { passive: true });

    fabTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ── 5. ENLACE ACTIVO en navbar ── */
  // Nombre del archivo actual; una ruta que termina en "/" es index.html
  const currentFile = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.navbar__link, .navbar__mobile-link');

  navLinks.forEach(function (link) {
    link.classList.toggle('active', link.getAttribute('href') === currentFile);
  });

  /* ── 6. FILTROS DE GALERÍA (página proyectos) ── */
  const filterBtns = document.querySelectorAll('.gallery-filter');
  const galleryItems = document.querySelectorAll('.gallery-item');

  if (filterBtns.length > 0 && galleryItems.length > 0) {
    // Temporizadores pendientes por item, para cancelarlos si se cambia de
    // filtro antes de que termine la animación (clics rápidos)
    const timers = new Map();

    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        const filter = btn.getAttribute('data-filter');

        // Actualizar estado activo
        filterBtns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');

        // Filtrar items
        galleryItems.forEach(function (item) {
          const category = item.getAttribute('data-category');
          clearTimeout(timers.get(item));
          if (filter === 'all' || category === filter) {
            item.style.display = '';
            item.style.opacity = '0';
            timers.set(item, setTimeout(function () {
              item.style.transition = 'opacity 0.3s ease';
              item.style.opacity = '1';
            }, 10));
          } else {
            item.style.opacity = '0';
            timers.set(item, setTimeout(function () {
              item.style.display = 'none';
            }, 300));
          }
        });
      });
    });
  }

  /* ── 7. NÚMERO DE WHATSAPP centralizado ── */
  // Cambiar este número para actualizar todos los links de WhatsApp
  // (también está escrito en el href de cada botón, para que funcione sin JS)
  const WA_NUMBER = '573021282572';
  const WA_MESSAGE = encodeURIComponent('Hola, vi el demo de Madeva y quiero hablar sobre una página web así para mi negocio.');
  const WA_URL = 'https://wa.me/' + WA_NUMBER + '?text=' + WA_MESSAGE;

  document.querySelectorAll('[data-wa]').forEach(function (el) {
    el.setAttribute('href', WA_URL);
    el.setAttribute('target', '_blank');
    el.setAttribute('rel', 'noopener noreferrer');
  });

  /* ── 8. REDES SOCIALES de ejemplo ── */
  // Los íconos sin perfil real (href="#") no hacen nada, en vez de saltar al inicio
  document.querySelectorAll('a[href="#"]').forEach(function (el) {
    el.addEventListener('click', function (e) { e.preventDefault(); });
  });

})();
