import { useLanguage } from '../context/LanguageContext';
import { skillsList } from '../data/translations';
import { Layout, Server, Terminal, Wrench } from 'lucide-react';

export default function Skills() {
  const { t } = useLanguage();

  const skillGroups = [
    {
      key: 'frontend',
      title: t.skills.categories.frontend,
      icon: Layout,
      skills: skillsList.frontend,
    },
    {
      key: 'backend',
      title: t.skills.categories.backend,
      icon: Server,
      skills: skillsList.backend,
    },
    {
      key: 'general',
      title: t.skills.categories.general,
      icon: Terminal,
      skills: skillsList.general,
    },
    {
      key: 'tools',
      title: t.skills.categories.tools,
      icon: Wrench,
      skills: skillsList.tools,
    },
  ];

  return (
    <section id="skills" className="py-20 border-b border-line/80 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink mb-2">
            {t.skills.title}
          </h2>
          <p className="text-sm sm:text-base text-muted">
            {t.skills.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillGroups.map((group) => {
            const IconComponent = group.icon;
            return (
              <div
                key={group.key}
                className="bg-raised/40 border border-line/80 rounded-xl p-5 hover:border-line-strong transition-colors"
              >
                <div className="flex items-center gap-2.5 mb-4 text-accent">
                  <div className="p-2 bg-surface border border-line rounded-lg">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-semibold text-ink-soft">
                    {group.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="text-xs font-mono px-2.5 py-1 rounded bg-surface border border-line text-ink-soft"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}