import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { navItems, profile } from '../data/portfolio';
import { useTheme } from '../hooks/useTheme';

export function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center bg-ink text-white"
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.45 }}
        >
          <motion.div
            className="relative h-24 w-24 rounded-[28px] border border-white/15 bg-white/8 p-5 shadow-glow backdrop-blur"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, rotate: [0, 0, 8, -8, 0] }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <div className="grid h-full w-full place-items-center rounded-2xl bg-gradient-to-br from-electric via-aurora to-ember font-display text-3xl font-bold">
              JB
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? (window.scrollY / height) * 100 : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return <div className="fixed left-0 top-0 z-[90] h-1 bg-gradient-to-r from-electric via-aurora to-ember" style={{ width: `${progress}%` }} />;
}

export function CustomCursor() {
  const [point, setPoint] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const move = (event: MouseEvent) => setPoint({ x: event.clientX, y: event.clientY });
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed z-[95] hidden h-9 w-9 rounded-full border border-electric/60 mix-blend-difference lg:block"
      animate={{ x: point.x - 18, y: point.y - 18 }}
      transition={{ type: 'spring', stiffness: 420, damping: 32, mass: 0.35 }}
    />
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed left-0 right-0 top-4 z-50 px-4">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-slate-200/60 bg-white/75 px-4 py-3 shadow-soft backdrop-blur-2xl dark:border-white/10 dark:bg-ink/70">
        <a href="#home" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-electric via-aurora to-ember font-display font-bold text-white shadow-glow">
            JB
          </span>
          <span className="hidden font-display text-sm font-semibold text-slate-950 dark:text-white sm:block">{profile.name}</span>
        </a>
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-950 hover:text-white dark:text-slate-200 dark:hover:bg-white dark:hover:text-ink">
              {item}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button aria-label="Toggle theme" onClick={toggleTheme} className="icon-button">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button aria-label="Open menu" onClick={() => setOpen((value) => !value)} className="icon-button lg:hidden">
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            className="mx-auto mt-3 grid max-w-7xl gap-1 rounded-2xl border border-slate-200/60 bg-white/90 p-3 shadow-soft backdrop-blur-2xl dark:border-white/10 dark:bg-ink/90 lg:hidden"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
          >
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-100 dark:text-white dark:hover:bg-white/10">
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export function SectionShell({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="section-pad">
      <motion.div className="mx-auto max-w-7xl" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-120px' }} transition={{ duration: 0.65 }}>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="section-title">{title}</h2>
        {children}
      </motion.div>
    </section>
  );
}
