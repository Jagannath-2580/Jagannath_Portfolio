import { Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../data/portfolio';

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-200/70 bg-slate-950 px-4 py-10 text-white dark:border-white/10">
      <div className="absolute inset-0 bg-mesh opacity-55" />
      <div className="absolute inset-0 bg-slate-950/82" />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-lg font-bold text-white">{profile.name}</p>
          <p className="mt-1 text-sm text-slate-300">Java Full Stack Developer | React Developer | Spring Boot | MySQL</p>
          <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-aurora">Hyderabad, Ameerpet 500016</p>
        </div>
        <div className="flex gap-3">
          <a className="icon-link" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={19} /></a>
          <a className="icon-link" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={19} /></a>
          <a className="icon-link" href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}&su=Portfolio%20Opportunity`} target="_blank" rel="noreferrer" aria-label="Email"><Mail size={19} /></a>
        </div>
      </div>
    </footer>
  );
}
