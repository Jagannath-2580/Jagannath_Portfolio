import { motion } from 'framer-motion';
import { ArrowDownToLine, Github, Linkedin, Mail, MapPin, Send } from 'lucide-react';
import type { CSSProperties } from 'react';
import { Typewriter } from './Typewriter';
import { metrics, profile } from '../data/portfolio';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen scroll-mt-28 overflow-hidden bg-mesh px-4 pb-20 pt-32 dark:bg-ink sm:pt-36">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,.12)_1px,transparent_1px)] bg-[size:72px_72px] opacity-50" />
      <div className="particles" aria-hidden="true">
        {Array.from({ length: 18 }).map((_, index) => (
          <span key={index} style={{ '--i': index } as CSSProperties} />
        ))}
      </div>
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.08fr_.92fr] lg:gap-14">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/70 px-4 py-2 text-sm font-semibold text-slate-700 shadow-soft backdrop-blur dark:border-white/10 dark:bg-white/10 dark:text-slate-200">
            <MapPin size={16} />
            Hyderabad, Ameerpet
          </div>
          <h1 className="max-w-4xl font-display text-4xl font-bold leading-[1.06] text-slate-950 dark:text-white sm:text-6xl lg:text-7xl">
            {profile.name}
            <span className="block bg-gradient-to-r from-electric via-aurora to-ember bg-clip-text text-transparent">
              <Typewriter words={['Java Full Stack Developer', 'React Developer', 'Spring Boot Developer']} />
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-700 dark:text-slate-300 sm:mt-7 sm:text-lg">{profile.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3 sm:mt-9">
            <a className="primary-button" href={profile.resume} download>
              <ArrowDownToLine size={19} /> Download Resume
            </a>
            <a className="secondary-button" href="#contact">
              <Send size={18} /> Contact Me
            </a>
            <a className="icon-link" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a className="icon-link" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a className="icon-link" href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}&su=Portfolio%20Opportunity`} target="_blank" rel="noreferrer" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
          <div className="mt-9 grid gap-3 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map(({ value, label, Icon }) => (
              <div key={label} className="glass-panel p-4">
                <Icon className="mb-4 text-electric" size={22} />
                <div className="font-display text-2xl font-bold text-slate-950 dark:text-white">{value}</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">{label}</div>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div className="relative mx-auto w-full max-w-[460px] lg:max-w-[500px]" initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.12 }}>
          <div className="absolute -inset-6 rounded-[44px] bg-gradient-to-br from-electric/25 via-aurora/20 to-ember/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[32px] border border-white/20 bg-[#7fb0f0] p-3 shadow-glow backdrop-blur-2xl dark:bg-[#7fb0f0]">
            <div className="overflow-hidden rounded-[24px] bg-[#7fb0f0]">
              <img src={profile.photo} alt="Jagannath Behera profile" className="h-[380px] w-full scale-[1.18] object-cover object-[50%_24%] sm:h-[500px] lg:h-[540px]" />
            </div>
            <div className="absolute bottom-5 left-5 right-5 overflow-hidden rounded-2xl border border-white/30 bg-[#050816]/95 p-4 text-white shadow-[0_28px_80px_rgba(0,0,0,.72)] ring-1 ring-electric/30 backdrop-blur-2xl sm:bottom-6 sm:left-6 sm:right-6 sm:p-5">
              <div className="absolute inset-0 bg-gradient-to-br from-electric/18 via-transparent to-aurora/14" />
              <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-electric via-aurora to-ember shadow-[0_0_24px_rgba(31,214,165,.8)]" />
              <p className="relative text-sm font-extrabold leading-6 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,.9)]">
                Available for <span className="text-aurora drop-shadow-[0_0_12px_rgba(31,214,165,.9)]">Java Full Stack</span> and <span className="text-electric drop-shadow-[0_0_12px_rgba(91,140,255,.95)]">React Developer</span> roles
              </p>
              <p className="relative mt-2 font-display text-xl font-extrabold leading-7 text-white sm:text-2xl">
                <span className="bg-gradient-to-r from-white via-aurora to-electric bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(91,140,255,.75)]">Spring Boot + React + MySQL</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
