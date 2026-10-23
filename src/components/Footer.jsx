import { useLanguage } from '../context/LanguageContext';
import { profileConfig } from '../data/translations';
import { Mail, Phone } from 'lucide-react';
import GithubIcon from './icons/GithubIcon';
import LinkedinIcon from './icons/LinkedinIcon';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="py-16 bg-surface scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="bg-raised/60 border border-line rounded-2xl p-8 sm:p-12 mb-12">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink">
              {t.footer.ready}
            </h2>
            <p className="text-muted text-sm leading-relaxed">
              {t.footer.desc}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href={`mailto:${profileConfig.email}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-accent-solid hover:bg-accent-solid/90 text-on-accent font-medium text-xs font-mono rounded-lg transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>{profileConfig.email}</span>
              </a>

              <a
                href={`tel:${profileConfig.phone}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-raised hover:bg-line border border-line text-ink-soft text-xs font-mono rounded-lg transition-colors"
              >
                <Phone className="w-4 h-4 text-accent" />
                <span>{profileConfig.phoneDisplay}</span>
              </a>

              <a
                href={profileConfig.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-raised hover:bg-line border border-line text-ink-soft rounded-lg transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={profileConfig.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-raised hover:bg-line border border-line text-ink-soft rounded-lg transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-faint gap-4">
          <p>© {new Date().getFullYear()} {profileConfig.name}. {t.footer.rights}</p>
          <p>{t.footer.builtWith}</p>
        </div>

      </div>
    </footer>
  );
}