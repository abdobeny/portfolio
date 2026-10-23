import { useLanguage } from '../context/LanguageContext';
import { GraduationCap, Briefcase } from 'lucide-react';

export default function ExperienceEducation() {
  const { t } = useLanguage();

  return (
    <section id="journey" className="py-20 border-b border-line/80 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink mb-2">
            {t.journey.title}
          </h2>
          <p className="text-sm sm:text-base text-muted">
            {t.journey.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Education column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-accent font-mono text-sm font-semibold uppercase tracking-wider mb-2">
              <GraduationCap className="w-4 h-4" />
              <span>{t.journey.educationTitle}</span>
            </div>

            <div className="space-y-4">
              {t.journey.education.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-raised/30 border border-line/80 space-y-2 relative"
                >
                  <span className="font-mono text-xs text-accent">
                    {item.period}
                  </span>
                  <h3 className="font-semibold text-ink text-base">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono text-muted">
                    {item.institution}
                  </p>
                  <p className="text-xs text-ink-soft pt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Work experience column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-accent font-mono text-sm font-semibold uppercase tracking-wider mb-2">
              <Briefcase className="w-4 h-4" />
              <span>{t.journey.experienceTitle}</span>
            </div>

            <div className="space-y-4">
              {t.journey.experience.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-raised/30 border border-line/80 space-y-2"
                >
                  <span className="font-mono text-xs text-accent">
                    {item.period}
                  </span>
                  <h3 className="font-semibold text-ink text-base">
                    {item.role}
                  </h3>
                  <p className="text-xs font-mono text-muted">
                    {item.company}
                  </p>
                  <p className="text-xs text-ink-soft pt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}

              {/* Extra soft skills box (Languages & Interests from CV) */}
              <div className="p-5 rounded-xl bg-surface border border-dashed border-line space-y-3">
                <span className="text-xs font-mono text-faint uppercase">
                  {t.journey.softSkillsTitle}
                </span>
                <div className="flex flex-wrap gap-2 text-xs font-mono">
                  {t.journey.spokenLanguages.map((language) => (
                    <span
                      key={language}
                      className="px-2 py-1 bg-raised rounded border border-line text-ink-soft"
                    >
                      {language}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 text-xs text-muted font-mono pt-1">
                  {t.journey.interests.map((interest) => (
                    <span key={interest}>{interest}</span>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}