import { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { FileDown, Sun, Moon, Menu, X } from 'lucide-react';
import { profileConfig } from '../data/translations';

const SECTION_IDS = ['projects', 'skills', 'journey', 'contact'];

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navLinks = [
    { href: '#projects', label: t.nav.projects },
    { href: '#skills', label: t.nav.skills },
    { href: '#journey', label: t.nav.journey },
    { href: '#contact', label: t.nav.contact },
  ];

  // Close the mobile menu whenever the viewport grows past the `md` breakpoint.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const onChange = (e) => {
      if (e.matches) setMenuOpen(false);
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  // Prevent the page behind the mobile menu from scrolling.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // Highlight the section currently in view.
  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const langBtn = (code, label) => (
    <button
      type="button"
      onClick={() => setLang(code)}
      aria-pressed={lang === code}
      aria-label={`Switch language to ${label}`}
      className={`px-2 py-1 rounded transition-colors ${
        lang === code
          ? 'bg-line text-accent font-semibold'
          : 'text-muted hover:text-ink-soft'
      }`}
    >
      {label}
    </button>
  );

  const linkClass = (href) =>
    `text-sm transition-colors ${
      activeSection === href.replace('#', '')
        ? 'text-accent'
        : 'text-muted hover:text-accent'
    }`;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-surface/80 border-b border-line/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
        <a href="#top" className="flex items-center gap-2 group shrink-0">
          <div className="w-8 h-8 rounded-lg bg-raised border border-line-strong/80 flex items-center justify-center font-mono font-bold text-sm text-accent group-hover:border-accent/50 transition-colors">
            AB
          </div>
          <span className="hidden sm:block font-mono text-sm tracking-tight text-muted group-hover:text-ink transition-colors">
            abdobeny<span className="text-accent">.dev</span>
          </span>
        </a>

        <div className="flex items-center gap-3 sm:gap-6">
          <nav className="hidden md:flex items-center gap-6" aria-label="Main">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                aria-current={activeSection === link.href.replace('#', '') ? 'true' : undefined}
                className={linkClass(link.href)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* THEME TOGGLE */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="p-2 bg-raised hover:bg-line border border-line rounded-lg text-muted hover:text-ink transition-colors"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* LANGUAGE SWITCHER */}
          <div
            className="flex items-center bg-raised border border-line rounded-lg p-0.5 text-xs font-mono"
            role="group"
            aria-label="Language"
          >
            {langBtn('fr', 'Français')}
            {langBtn('en', 'English')}
            {langBtn('ar', 'العربية')}
          </div>

          <a
            href={profileConfig.resumePath}
            download
            title={t.hero.downloadCv}
            aria-label={t.hero.downloadCv}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-ink-soft bg-raised hover:bg-line border border-line-strong/80 rounded-lg transition-colors"
          >
            <FileDown className="w-3.5 h-3.5 text-accent" />
            <span>CV</span>
          </a>

          {/* MOBILE MENU TOGGLE */}
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="md:hidden p-2 bg-raised hover:bg-line border border-line rounded-lg text-muted hover:text-ink transition-colors"
          >
            {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU PANEL */}
      <div
        id="mobile-menu"
        hidden={!menuOpen}
        className="md:hidden border-t border-line/80 bg-surface/95 backdrop-blur-md"
      >
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex flex-col" aria-label="Mobile">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="py-3 text-sm text-muted hover:text-accent border-b border-line/40 transition-colors last:border-0"
            >
              {link.label}
            </a>
          ))}
          <a
            href={profileConfig.resumePath}
            download
            onClick={() => setMenuOpen(false)}
            className="mt-3 mb-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-mono text-ink-soft bg-raised hover:bg-line border border-line-strong/80 rounded-lg transition-colors"
          >
            <FileDown className="w-3.5 h-3.5 text-accent" />
            <span>{t.hero.downloadCv}</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
