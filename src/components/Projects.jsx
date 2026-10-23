import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { profileConfig, projectLinks } from '../data/translations';
import { Image as ImageIcon, ExternalLink } from 'lucide-react';
import GithubIcon from './icons/GithubIcon';

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-20 border-b border-line/80 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink mb-2">
            {t.projects.title}
          </h2>
          <p className="text-sm sm:text-base text-muted">
            {t.projects.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.projects.list.map((proj) => (
            <ProjectCard key={proj.id} project={proj} />
          ))}
        </div>

      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  const { t } = useLanguage();
  const [imgError, setImgError] = useState(false);

  const links = projectLinks[project.id] || {};
  const repoUrl = links.repo || profileConfig.github;
  const demoUrl = links.demo;

  return (
    <div className="bg-raised/60 border border-line/80 rounded-xl overflow-hidden flex flex-col hover:border-line-strong transition-all group">
      
      {/* 16:9 Screen Mockup Slot */}
      <div className="relative aspect-video w-full bg-surface border-b border-line/80 flex items-center justify-center overflow-hidden">
        {/* Mockup browser bar */}
        <div className="absolute top-0 inset-x-0 h-6 bg-raised/90 border-b border-line flex items-center px-2 gap-1 z-10">
          <div className="w-2 h-2 rounded-full bg-line-strong"></div>
          <div className="w-2 h-2 rounded-full bg-line-strong"></div>
          <div className="w-2 h-2 rounded-full bg-line-strong"></div>
          <span className="font-mono text-[9px] text-faint ml-2 truncate">
            {project.id}.local
          </span>
        </div>

        {!imgError ? (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover pt-6 group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          /* Graceful placeholder frame */
          <div className="flex flex-col items-center justify-center text-faint gap-1.5 pt-6 p-4 text-center">
            <ImageIcon className="w-6 h-6 text-line-strong" />
            <span className="text-xs font-mono text-muted">Screenshot Slot</span>
            <span className="text-[10px] text-faint font-mono truncate max-w-full">
              {project.image}
            </span>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono uppercase tracking-wider text-accent bg-accent/10 px-2 py-0.5 rounded border border-accent/30">
              {project.type}
            </span>
          </div>

          <h3 className="font-semibold text-base text-ink group-hover:text-accent transition-colors">
            {project.title}
          </h3>

          <p className="text-xs text-muted leading-relaxed">
            {project.description}
          </p>

          <ul className="space-y-1.5 text-xs text-muted list-disc list-inside">
            {project.bullets.map((b, i) => (
              <li key={i} className="leading-snug text-ink-soft">{b}</li>
            ))}
          </ul>
        </div>

        {/* Tech Badges & GitHub Link */}
        <div className="pt-2 border-t border-line/80 space-y-3">
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t, i) => (
              <span
                key={i}
                className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface border border-line text-ink-soft"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between gap-3 pt-1">
            <a
              href={repoUrl}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-mono inline-flex items-center gap-1.5 text-muted hover:text-ink transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>{t.projects.viewCode}</span>
            </a>

            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-mono inline-flex items-center gap-1.5 text-muted hover:text-accent transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>{t.projects.liveDemo}</span>
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}