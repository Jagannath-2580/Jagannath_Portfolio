import { ArrowLeft, CheckCircle2, Github, Mail } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { profile, projects } from '../data/portfolio';
import { CustomCursor, ScrollProgress } from './Layout';

export function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return <Navigate to="/#projects" replace />;
  }

  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <main className="min-h-screen bg-mist px-4 py-8 dark:bg-ink">
        <section className="mx-auto max-w-6xl">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <Link to="/#projects" className="secondary-button">
              <ArrowLeft size={18} /> Back to Projects
            </Link>
            <a className="primary-button" href={project.github} target="_blank" rel="noreferrer">
              <Github size={18} /> View GitHub
            </a>
          </div>

          <article className="overflow-hidden rounded-[34px] border border-slate-200/70 bg-white shadow-soft dark:border-white/10 dark:bg-white/[0.06]">
            <div className="relative overflow-hidden bg-slate-950">
              <img src={project.image} alt={`${project.title} project`} className="h-[320px] w-full object-cover opacity-90 sm:h-[440px]" />
              <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-30 mix-blend-screen`} />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
                <p className="text-sm font-bold uppercase tracking-[0.26em] text-aurora">{project.subtitle}</p>
                <h1 className="mt-3 max-w-4xl font-display text-4xl font-bold text-white sm:text-6xl">{project.title}</h1>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">{project.description}</p>
              </div>
            </div>

            <div className="grid gap-8 p-6 sm:p-10 lg:grid-cols-[1fr_.75fr]">
              <div>
                <h2 className="font-display text-2xl font-bold text-slate-950 dark:text-white">Project Information</h2>
                <div className="mt-5 space-y-4">
                  {project.details.map((detail) => (
                    <div key={detail} className="flex gap-3 rounded-2xl border border-slate-200/70 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/5">
                      <CheckCircle2 className="mt-1 shrink-0 text-aurora" size={19} />
                      <p className="leading-7 text-slate-700 dark:text-slate-300">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              <aside className="glass-panel p-6">
                <h2 className="font-display text-2xl font-bold text-slate-950 dark:text-white">Tech Stack</h2>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="badge">{tech}</span>
                  ))}
                </div>

                <h3 className="mt-8 font-display text-xl font-bold text-slate-950 dark:text-white">Key Features</h3>
                <div className="mt-4 space-y-3">
                  {project.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
                      <CheckCircle2 size={16} className="text-electric" />
                      {feature}
                    </div>
                  ))}
                </div>

                <a className="secondary-button mt-8 w-full justify-center" href={`mailto:${profile.email}?subject=${encodeURIComponent(project.title)}`}>
                  <Mail size={18} /> Discuss This Project
                </a>
              </aside>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}
