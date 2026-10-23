import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, Mail, Check, ArrowUpRight } from 'lucide-react';
import GithubIcon from './icons/GithubIcon';
import LinkedinIcon from './icons/LinkedinIcon';
import { profileConfig } from '../data/translations';

export default function Hero() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(profileConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="top" className="pt-12 pb-20 border-b border-line/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs font-mono mb-6">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
          <span>{t.nav.availableBadge}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Main Info */}
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-2">
              <p className="text-muted text-sm font-mono tracking-wide">
                {t.hero.greeting}
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-ink">
                {profileConfig.name}
              </h1>
              <div className="flex flex-wrap items-center gap-2 pt-1 text-accent font-mono text-sm sm:text-base">
                <span>{t.hero.role}</span>
                <span className="text-faint">•</span>
                <span className="text-muted text-xs sm:text-sm bg-raised px-2 py-0.5 rounded border border-line">
                  {t.hero.badge}
                </span>
              </div>
            </div>

            <p className="text-base sm:text-lg text-ink-soft leading-relaxed max-w-2xl">
              {t.hero.pitch}
            </p>

            {/* Quick badges (Location, GitHub handle) - FreeCodeCamp removed */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-muted">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-accent" />
                <span>{t.hero.location}</span>
              </div>
              <a
                href={profileConfig.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-accent transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>{profileConfig.githubHandle}</span>
              </a>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#contact"
                className="px-5 py-2.5 bg-accent-solid hover:bg-accent-solid/90 text-on-accent font-medium text-sm rounded-lg transition-all shadow-sm flex items-center gap-2"
              >
                <span>{t.hero.contactBtn}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                onClick={handleCopy}
                className="px-4 py-2.5 bg-raised hover:bg-line border border-line text-ink-soft text-sm rounded-lg transition-colors flex items-center gap-2 font-mono"
              >
                {copied ? <Check className="w-4 h-4 text-accent" /> : <Mail className="w-4 h-4 text-muted" />}
                <span>{copied ? t.hero.emailCopied : t.hero.copyEmail}</span>
              </button>

              <a
                href={profileConfig.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-raised hover:bg-line border border-line text-muted hover:text-ink rounded-lg transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5" />
              </a>

              <a
                href={profileConfig.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-raised hover:bg-line border border-line text-muted hover:text-ink rounded-lg transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Profile Image Slot */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-2xl bg-raised border-2 border-line p-2 shadow-2xl relative overflow-hidden transition-all group-hover:border-accent/50">
                {!imageError ? (
                  <img
                    src={profileConfig.avatarUrl}
                    alt={profileConfig.name}
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover rounded-xl grayscale-[20%] group-hover:grayscale-0 transition-all duration-300"
                  />
                ) : (
                  <div className="w-full h-full rounded-xl bg-surface border border-dashed border-line flex flex-col items-center justify-center text-center p-4">
                    <div className="w-16 h-16 rounded-full bg-raised border border-line-strong flex items-center justify-center font-mono text-xl font-bold text-accent mb-2">
                      AB
                    </div>
                    <span className="text-xs font-mono text-muted">
                      Photo Placeholder
                    </span>
                    <span className="text-[10px] text-faint mt-1">
                      /public/images/profile.jpg
                    </span>
                  </div>
                )}
              </div>
              <div className="absolute -bottom-2 -right-2 px-2.5 py-1 bg-surface border border-line rounded-md font-mono text-[11px] text-accent">
                DEV // MARRAKECH
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}