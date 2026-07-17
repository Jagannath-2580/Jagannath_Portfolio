import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { ArrowUpRight, BookOpen, CheckCircle2, Download, Github, Info as InfoIcon, Mail, Send } from 'lucide-react';
import { FormEvent, useState } from 'react';
import type { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { contactCards, education, experience, profile, projects, skills } from '../data/portfolio';
import { SectionShell } from './Layout';

const skillAccents = ['#5b8cff', '#1fd6a5', '#ff7a59', '#f43f5e', '#a78bfa', '#22d3ee'];

export function About() {
  return (
    <SectionShell id="about" eyebrow="About" title="A full stack developer focused on clean systems and polished user experiences.">
      <div className="grid gap-6 lg:grid-cols-[.95fr_1.05fr]">
        <div className="glass-panel p-7">
          <p className="text-lg leading-8 text-slate-700 dark:text-slate-300">{profile.summary}</p>
          <p className="mt-5 leading-8 text-slate-600 dark:text-slate-400">
            My career objective is to contribute to high-quality engineering teams where I can build reliable backend services, responsive frontend experiences, and business applications that are easy to maintain, secure, and ready to scale.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <Info label="Home" value={profile.hometown} />
            <Info label="Currently Staying" value={profile.currentLocation} />
          </div>
        </div>
        <div className="relative min-h-[360px] overflow-hidden rounded-[32px] border border-slate-200/70 bg-slate-950 p-8 text-white shadow-glow dark:border-white/10">
          <div className="orbit-ring absolute -right-20 -top-20 h-72 w-72 rounded-full border border-dashed border-aurora/40" />
          <div className="relative z-10">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-aurora">Professional Journey</p>
            <h3 className="mt-4 font-display text-3xl font-bold">From training to production-minded project building.</h3>
            <p className="mt-5 leading-8 text-slate-300">
              After completing a 1-year Java Full Stack training program at NareshIT Technologies, I built projects that combine Spring Boot services, React screens, MySQL data models, authentication, and API documentation. I enjoy turning requirements into structured, testable, recruiter-ready software stories.
            </p>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="info-card rounded-2xl border border-slate-200/70 bg-white/60 p-4 dark:border-white/10 dark:bg-white/5">
      <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-electric">{label}</p>
      <p className="mt-2 bg-gradient-to-r from-slate-950 via-electric to-aurora bg-clip-text font-display text-base font-extrabold text-transparent dark:from-white dark:via-aurora dark:to-electric">
        {value}
      </p>
    </div>
  );
}

export function Skills() {
  return (
    <SectionShell id="skills" eyebrow="Skills" title="A powerful Java full stack toolkit for secure, scalable product development.">
      <div className="mb-8 max-w-3xl rounded-[28px] border border-electric/20 bg-slate-950 p-6 text-white shadow-glow">
        <p className="font-display text-2xl font-bold">
          Backend depth, <span className="bg-gradient-to-r from-aurora to-electric bg-clip-text text-transparent">React polish</span>, and production-ready tooling.
        </p>
        <p className="mt-3 leading-7 text-slate-300">
          Focused on Java, Spring Boot, REST APIs, secure authentication, database design, and clean frontend integration.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {skills.map(({ name, category, Icon }, index) => (
          <motion.div
            key={name}
            className="skill-card group p-5"
            style={{ '--skill-accent': skillAccents[index % skillAccents.length] } as CSSProperties}
            initial={{ opacity: 0, y: 22, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.025, duration: 0.45 }}
          >
            <div className="skill-icon mb-5 flex h-14 w-14 items-center justify-center rounded-2xl text-white">
              <Icon size={24} />
            </div>
            <h3 className="font-display text-xl font-extrabold text-slate-950 transition group-hover:text-[var(--skill-accent)] dark:text-white">{name}</h3>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">{category}</p>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
}

export function Experience() {
  return (
    <SectionShell id="experience" eyebrow="Experience" title="Professional training and project experience with a full stack mindset.">
      <div className="relative space-y-6 before:absolute before:left-5 before:top-4 before:h-[calc(100%-2rem)] before:w-px before:bg-gradient-to-b before:from-electric before:via-aurora before:to-ember">
        {experience.map((item) => (
          <div key={item.title} className="relative pl-14">
            <span className="absolute left-0 top-1 grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-electric to-aurora text-white shadow-glow">
              <CheckCircle2 size={20} />
            </span>
            <div className="glass-panel p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="font-display text-xl font-bold text-slate-950 dark:text-white">{item.title}</h3>
                <span className="rounded-full bg-electric/10 px-3 py-1 text-sm font-semibold text-electric">{item.period}</span>
              </div>
              <p className="mt-2 font-semibold text-slate-700 dark:text-slate-300">{item.company}</p>
              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

export function Projects() {
  return (
    <SectionShell id="projects" eyebrow="Projects" title="Selected work built around real product flows and backend depth.">
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <article key={project.title} className="group overflow-hidden rounded-[28px] border border-slate-200/70 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-glow dark:border-white/10 dark:bg-white/5">
            <div className="relative overflow-hidden bg-slate-950">
              <img src={project.image} alt={`${project.title} project preview`} className="aspect-[1.45] w-full object-cover opacity-90 transition duration-700 group-hover:scale-105" />
              <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-25 mix-blend-screen`} />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
              <div className={`absolute inset-x-4 bottom-4 h-1 rounded-full bg-gradient-to-r ${project.accent}`} />
            </div>
            <div className="p-6">
              <p className="text-sm font-semibold text-electric">{project.subtitle}</p>
              <h3 className="mt-2 font-display text-2xl font-bold text-slate-950 dark:text-white">{project.title}</h3>
              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="badge">{tech}</span>
                ))}
              </div>
              <div className="mt-5 space-y-2">
                {project.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                    <CheckCircle2 size={16} className="text-aurora" />
                    {feature}
                  </div>
                ))}
              </div>
              <div className="mt-6 flex gap-3">
                <a className="small-button" href={project.github} target="_blank" rel="noreferrer">
                  <Github size={17} /> GitHub
                </a>
                <Link className="small-button" to={`/projects/${project.slug}`}>
                  <InfoIcon size={17} /> Project Details
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}

export function Education() {
  return (
    <SectionShell id="education" eyebrow="Education" title="Postgraduate foundation for software engineering and application development.">
      {education.map((item) => (
        <div key={item.degree} className="glass-panel flex flex-col gap-5 p-7 sm:flex-row sm:items-start">
          <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-electric to-aurora text-white">
            <BookOpen size={26} />
          </div>
          <div>
            <h3 className="font-display text-2xl font-bold text-slate-950 dark:text-white">{item.degree}</h3>
            <p className="mt-2 font-semibold text-slate-700 dark:text-slate-300">{item.institution}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="badge">{item.period}</span>
              <span className="badge">{item.score}</span>
            </div>
            <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">{item.description}</p>
          </div>
        </div>
      ))}
    </SectionShell>
  );
}

export function Resume() {
  return (
    <SectionShell id="resume" eyebrow="Resume" title="A concise profile for Java Full Stack Developer opportunities.">
      <div className="relative overflow-hidden rounded-[32px] bg-slate-950 p-8 text-white shadow-glow sm:p-10">
        <div className="absolute inset-0 bg-mesh opacity-80" />
        <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h3 className="font-display text-3xl font-bold">Download Jagannath Behera's resume</h3>
            <p className="mt-4 max-w-2xl leading-8 text-slate-300">
              Includes Java, Spring Boot, React, MySQL, microservices, REST API development, training experience, featured projects, and contact details for recruiter outreach.
            </p>
          </div>
          <a className="primary-button bg-white text-ink hover:bg-slate-100" href={profile.resume} download>
            <Download size={20} /> Download Resume
          </a>
        </div>
      </div>
    </SectionShell>
  );
}

export function Contact() {
  const [status, setStatus] = useState('');

  const sendEmail = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      const data = new FormData(form);
      const subject = encodeURIComponent(String(data.get('subject') || 'Portfolio Contact'));
      const body = encodeURIComponent(`Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`);
      window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}&su=${subject}&body=${body}`, '_blank', 'noopener,noreferrer');
      setStatus('Gmail compose opened with your message. Please click Send there to deliver it.');
      return;
    }

    try {
      await emailjs.sendForm(serviceId, templateId, form, { publicKey });
      form.reset();
      setStatus('Message sent successfully. Thank you for reaching out.');
    } catch {
      setStatus('Message could not be sent. Please use the email or phone details beside the form.');
    }
  };

  return (
    <SectionShell id="contact" eyebrow="Contact" title="Ready to discuss Java full stack roles, projects, and collaborations.">
      <div className="contact-hero mb-8 p-6 text-white">
        <p className="font-display text-2xl font-extrabold">
          Let's build something <span className="bg-gradient-to-r from-aurora via-electric to-ember bg-clip-text text-transparent">secure, scalable, and recruiter-ready.</span>
        </p>
        <p className="mt-3 max-w-3xl leading-7 text-slate-300">
          Send role details, project requirements, or interview opportunities. Gmail compose opens automatically if EmailJS is not configured.
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
        <div className="space-y-4">
          {contactCards.map(({ label, value, href, Icon }) => (
            <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="contact-card glass-panel flex items-center gap-4 p-5">
              <span className="contact-card-icon grid h-12 w-12 place-items-center rounded-2xl text-white">
                <Icon size={22} />
              </span>
              <span>
                <span className="block text-sm text-slate-500 dark:text-slate-400">{label}</span>
                <span className="block font-semibold text-slate-950 dark:text-white">{value}</span>
              </span>
              <ArrowUpRight className="contact-card-arrow ml-auto text-slate-400" size={18} />
            </a>
          ))}
        </div>
        <form onSubmit={sendEmail} className="contact-form-shell grid gap-4 p-4 sm:p-6">
          <div>
            <p className="font-display text-2xl font-extrabold text-slate-950 dark:text-white">Send a message</p>
            <p className="mt-2 text-sm font-medium text-slate-600 dark:text-slate-400">I usually respond to relevant Java Full Stack and React Developer opportunities quickly.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <input name="name" required placeholder="Your name" className="field" />
            <input name="email" required type="email" placeholder="Your email" className="field" />
          </div>
          <input name="subject" required placeholder="Subject" className="field" />
          <textarea name="message" required rows={6} placeholder="Tell me about the role, project, or opportunity." className="field resize-none" />
          <button className="primary-button w-full justify-center" type="submit">
            <Mail size={19} /> Send Message
          </button>
          {status && <p className="rounded-2xl border border-aurora/25 bg-aurora/10 px-4 py-3 text-sm font-semibold text-slate-700 dark:text-slate-200">{status}</p>}
        </form>
      </div>
    </SectionShell>
  );
}
