import {
  BookOpen,
  BriefcaseBusiness,
  Code2,
  Database,
  GraduationCap,
  Layers3,
  LockKeyhole,
  Mail,
  MapPin,
  Phone,
  Server,
  ShieldCheck,
  Sparkles,
  Workflow,
} from 'lucide-react';
import {
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJava,
  FaJs,
  FaReact,
} from 'react-icons/fa';
import {
  SiHibernate,
  SiIntellijidea,
  SiMysql,
  SiPostman,
  SiSpringboot,
  SiSwagger,
} from 'react-icons/si';
import type { IconType } from 'react-icons';
import type { LucideIcon } from 'lucide-react';

export type Skill = {
  name: string;
  category: string;
  Icon: IconType | LucideIcon;
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  details: string[];
  github: string;
  accent: string;
};

export const profile = {
  name: 'Jagannath Behera',
  role: 'Java Full Stack Developer | React Developer',
  email: 'jagannathbehera0287@gmail.com',
  phone: '+91 8328920287',
  linkedin: 'https://www.linkedin.com/in/jagannath-behera-b3bb13272',
  github: 'https://github.com/Jagannath-2580',
  resume: '/Jagannath_Res.pdf',
  hometown: 'Jagatsinghpur, Odisha 754103',
  currentLocation: 'Hyderabad, Ameerpet 500016',
  photo: '/Linkdin_Profile.jpeg',
  intro:
    'I build secure, scalable web applications as a Java Full Stack Developer and React Developer, using Spring Boot, REST APIs, microservices, and clean database design.',
  summary:
    'Java Full Stack Developer and React Developer trained at NareshIT Technologies with hands-on experience designing backend services, integrating modern React interfaces, securing APIs with JWT, and building feature-rich business applications.',
};

export const navItems = [
  'Home',
  'About',
  'Skills',
  'Experience',
  'Projects',
  'Education',
  'Resume',
  'Contact',
];

export const skills: Skill[] = [
  { name: 'Java', category: 'Backend', Icon: FaJava },
  { name: 'Spring Boot', category: 'Backend', Icon: SiSpringboot },
  { name: 'Spring MVC', category: 'Backend', Icon: Layers3 },
  { name: 'Spring Security', category: 'Security', Icon: ShieldCheck },
  { name: 'Spring Data JPA', category: 'Database', Icon: Database },
  { name: 'Hibernate', category: 'Database', Icon: SiHibernate },
  { name: 'Microservices', category: 'Architecture', Icon: Workflow },
  { name: 'REST APIs', category: 'Backend', Icon: Server },
  { name: 'JWT Authentication', category: 'Security', Icon: LockKeyhole },
  { name: 'React', category: 'Frontend', Icon: FaReact },
  { name: 'JavaScript', category: 'Frontend', Icon: FaJs },
  { name: 'HTML', category: 'Frontend', Icon: FaHtml5 },
  { name: 'CSS', category: 'Frontend', Icon: FaCss3Alt },
  { name: 'MySQL', category: 'Database', Icon: SiMysql },
  { name: 'Git', category: 'Tools', Icon: FaGitAlt },
  { name: 'GitHub', category: 'Tools', Icon: FaGithub },
  { name: 'Maven', category: 'Tools', Icon: Code2 },
  { name: 'Postman', category: 'Tools', Icon: SiPostman },
  { name: 'Swagger', category: 'Tools', Icon: SiSwagger },
  { name: 'VS Code', category: 'Tools', Icon: Code2 },
  { name: 'IntelliJ IDEA', category: 'Tools', Icon: SiIntellijidea },
];

export const projects: Project[] = [
  {
    slug: 'jagannath-book-store',
    title: 'Jagannath Book Store',
    subtitle: 'Microservices ecommerce platform',
    description:
      'A full stack online bookstore designed with secure authentication, service discovery, API gateway routing, and a polished React customer experience.',
    image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=85',
    technologies: [
      'Java',
      'Spring Boot',
      'Spring Security',
      'Microservices',
      'React',
      'JWT',
      'API Gateway',
      'Eureka',
      'MySQL',
    ],
    features: ['Cart', 'Wishlist', 'Orders', 'Blogs', 'Admin Dashboard'],
    details: [
      'Designed as a full stack ecommerce bookstore with separate customer and admin workflows.',
      'Implemented secure authentication flow using Spring Security and JWT-based access control.',
      'Structured the backend around microservices concepts with API Gateway and Eureka service discovery.',
      'Built user-focused modules for cart, wishlist, order management, blogs, and an admin dashboard.',
      'Used React for a responsive frontend and MySQL for persistent business data.',
    ],
    github: 'https://github.com/Jagannath-2580',
    accent: 'from-electric via-aurora to-ember',
  },
  {
    slug: 'counsellor-portal',
    title: 'Counsellor Portal',
    subtitle: 'Operational CRM-style backend system',
    description:
      'A Spring Boot portal for managing counsellor records, exposing clean REST APIs and reliable MySQL persistence for structured business workflows.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=85',
    technologies: ['Spring Boot', 'REST APIs', 'MySQL'],
    features: ['Counsellor records', 'API-first design', 'Structured data flows'],
    details: [
      'Created a backend-focused portal for managing counsellor information and operational records.',
      'Exposed clean REST API endpoints for creating, reading, updating, and managing structured data.',
      'Used Spring Boot for application structure and MySQL for reliable data persistence.',
      'Focused on maintainable service layers, clear API contracts, and practical business workflows.',
    ],
    github: 'https://github.com/Jagannath-2580',
    accent: 'from-aurora via-electric to-sky-400',
  },
  {
    slug: 'photo-forgery-detection',
    title: 'Photo Forgery Detection',
    subtitle: 'Academic image processing project',
    description:
      'An academic project focused on detecting manipulated image regions through Python-based image processing and analysis workflows.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85',
    technologies: ['Python', 'Image Processing'],
    features: ['Forgery analysis', 'Image preprocessing', 'Academic research implementation'],
    details: [
      'Built as an academic project focused on detecting image manipulation patterns.',
      'Used Python and image processing techniques to analyze suspicious visual regions.',
      'Explored preprocessing workflows that prepare image data for comparison and analysis.',
      'Strengthened understanding of problem analysis, research-based implementation, and technical documentation.',
    ],
    github: 'https://github.com/Jagannath-2580',
    accent: 'from-ember via-pink-500 to-electric',
  },
];

export const experience = [
  {
    title: 'Java Full Stack Development Training',
    company: 'NareshIT Technologies',
    period: '1 Year Training Program',
    description:
      'Completed intensive training covering Java, Spring Boot, Spring Security, REST APIs, React, MySQL, Git, and full stack project development.',
  },
  {
    title: 'Full Stack Ecommerce Application Development',
    company: 'Java, Spring Boot and React Projects',
    period: 'Hands-on Practice',
    description:
      'Built full stack ecommerce and business applications with authentication, backend APIs, database integration, reusable React UI, and deployment-ready frontend structure.',
  },
];

export const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Fakir Mohan University, Balasore',
    period: '2023',
    score: 'CGPA 7.0',
    description:
      'Postgraduate study focused on software engineering, programming fundamentals, database systems, web application development, and academic project delivery.',
  },
  {
    degree: 'Bachelor of Science in Chemistry Honours',
    institution: 'Utkal University, Bhubaneswar',
    period: '2020',
    score: '64%',
    description:
      'Built a strong analytical foundation through Chemistry Honours, strengthening problem-solving, structured thinking, and attention to detail.',
  },
];

export const contactCards = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}?subject=Portfolio%20Opportunity`, Icon: Mail },
  { label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}`, Icon: Phone },
  { label: 'Location', value: profile.currentLocation, href: '#contact', Icon: MapPin },
  { label: 'GitHub', value: 'github.com/Jagannath-2580', href: profile.github, Icon: FaGithub },
  { label: 'LinkedIn', value: 'Jagannath Behera', href: profile.linkedin, Icon: BriefcaseBusiness },
];

export const metrics = [
  { value: '21+', label: 'Core Skills', Icon: Sparkles },
  { value: '3', label: 'Featured Projects', Icon: BookOpen },
  { value: '1 Yr', label: 'NareshIT Training', Icon: GraduationCap },
  { value: 'Java Dev', label: 'Backend Focus', Icon: Code2 },
];
