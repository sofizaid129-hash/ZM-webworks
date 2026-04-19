import { motion, useScroll, useTransform } from "motion/react";
import { 
  Code2, 
  ShoppingBag, 
  School, 
  ChevronRight, 
  Users, 
  Globe, 
  BarChart, 
  Layout, 
  ArrowRight,
  Github,
  Twitter,
  Linkedin,
  Mail,
  Menu,
  X
} from "lucide-react";
import { useState, useRef } from "react";

const services = [
  {
    title: "School Management System",
    description: "Cloud-based solutions for educational institutions. Automated grading, attendance, and fee management.",
    icon: <School className="w-8 h-8" />,
    color: "bg-blue-500"
  },
  {
    title: "Ecommerce Solutions",
    description: "High-converting online stores with custom checkout flows, inventory management, and multi-payment support.",
    icon: <ShoppingBag className="w-8 h-8" />,
    color: "bg-cyan-500"
  },
  {
    title: "Custom Web Applications",
    description: "Tailor-made software built for your specific business needs. Scalable architecture using modern stacks.",
    icon: <Code2 className="w-8 h-8" />,
    color: "bg-indigo-500"
  },
  {
    title: "Business Dashboards",
    description: "Visualizing your data for better decision making. Real-time analytics and predictive reporting.",
    icon: <BarChart className="w-8 h-8" />,
    color: "bg-purple-500"
  },
  {
    title: "UX/UI Prototyping",
    description: "Designing intuitive user journeys and stunning visual interfaces that delight your customers.",
    icon: <Layout className="w-8 h-8" />,
    color: "bg-pink-500"
  },
  {
    title: "API Cloud Integration",
    description: "Connecting your business systems with robust APIs and secure cloud infrastructure.",
    icon: <Globe className="w-8 h-8" />,
    color: "bg-emerald-500"
  }
];

const projects = [
  {
    name: "EduFlow Pro",
    category: "Management System",
    image: "https://picsum.photos/seed/school/800/600"
  },
  {
    name: "Vogue Market",
    category: "Ecommerce",
    image: "https://picsum.photos/seed/ecommerce/800/600"
  },
  {
    name: "FinTrack Dashboard",
    category: "Fintech",
    image: "https://picsum.photos/seed/dashboard/800/600"
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: scrollRef });
  
  const opacityHero = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scaleHero = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <div ref={scrollRef} className="min-h-screen selection:bg-brand-accent selection:text-bg-dark">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 bg-bg-dark rounded flex items-center justify-center transition-transform group-hover:-rotate-6">
              <span className="text-white font-display font-bold text-xl italic">ZM</span>
            </div>
            <span className="font-display font-bold text-xl tracking-tighter">webworks</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {["Services", "Portfolio", "About", "Process"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-slate-600 hover:text-bg-dark transition-colors">
                {item}
              </a>
            ))}
            <button className="bg-bg-dark text-white text-sm font-bold px-6 py-3 rounded hover:bg-brand-primary transition-all active:scale-95 shadow-lg shadow-bg-dark/20">
              Start a Project
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <motion.div 
        initial={false}
        animate={isMenuOpen ? { x: 0 } : { x: "100%" }}
        className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
      >
        <div className="flex flex-col gap-8">
          {["Services", "Portfolio", "About", "Process"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-3xl font-display font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <button className="w-full bg-bg-dark text-white py-4 rounded-xl font-bold text-lg">
            Let's Talk
          </button>
        </div>
      </motion.div>

      {/* Hero Section */}
      <motion.section 
        style={{ opacity: opacityHero, scale: scaleHero }}
        className="relative pt-40 pb-20 px-6 overflow-hidden visible-grid"
      >
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-brand-primary/10 rounded-full text-brand-primary text-sm font-bold mb-8 border border-brand-primary/20"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
            </span>
            ACCEPTING NEW PROJECTS FOR 2026
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-6xl md:text-8xl font-display font-bold leading-[0.9] text-bg-dark max-w-4xl"
          >
            Engineering digital <span className="text-brand-primary">excellence</span> for forward-thinking brands.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 text-xl text-slate-500 max-w-2xl leading-relaxed"
          >
            ZM webworks is a boutique agency focusing on building high-performance school systems, ecommerce experiences, and custom enterprise tools.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12 flex flex-col sm:flex-row gap-4"
          >
            <button className="px-10 py-5 bg-bg-dark text-white rounded font-bold text-lg hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2">
              View Our Work
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-10 py-5 bg-white border-2 border-slate-200 text-bg-dark rounded font-bold text-lg hover:bg-slate-50 transition-all">
              Consultation
            </button>
          </motion.div>
        </div>

        {/* Floating Shapes */}
        <div className="absolute top-1/2 left-0 w-32 h-32 bg-brand-primary/5 rounded-full blur-3xl -translate-y-1/2"></div>
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-brand-secondary/5 rounded-full blur-3xl"></div>
      </motion.section>

      {/* Partners/Stats */}
      <section className="py-20 border-y border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { label: "Completed Projects", value: "150+" },
              { label: "Happy Clients", value: "98%" },
              { label: "Hours Logged", value: "12k+" },
              { label: "Global Reach", value: "15 countries" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-display font-bold text-bg-dark mb-1">{stat.value}</div>
                <div className="text-xs uppercase tracking-widest text-slate-400 font-bold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">Built for scale. <br />Design for impact.</h2>
              <p className="text-lg text-slate-500">From educational infrastructures to global retail platforms, we provide full-lifecycle development services.</p>
            </div>
            <div className="hidden md:block h-px flex-1 bg-slate-200 mx-10 mb-6"></div>
            <div className="text-right">
              <span className="text-6xl font-display font-bold text-slate-100">01</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200 overflow-hidden">
            {services.map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ backgroundColor: "rgba(99, 102, 241, 0.02)" }}
                className="bg-white p-12 group cursor-pointer"
              >
                <div className={`w-16 h-16 ${service.color} text-white rounded-2xl flex items-center justify-center mb-10 transition-transform group-hover:scale-110 group-hover:rotate-6`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">{service.title}</h3>
                <p className="text-slate-500 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-sm font-bold tracking-wider uppercase group-hover:text-brand-primary transition-colors">
                  Learn More
                  <ChevronRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section id="portfolio" className="py-32 bg-bg-dark text-white overflow-hidden visible-grid-dark px-6">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-start justify-between mb-20 gap-12">
            <div>
              <h2 className="text-5xl md:text-7xl font-display font-bold mb-8">Selected <br /><span className="text-brand-accent">Case Studies</span></h2>
              <p className="text-slate-400 max-w-md text-lg">A deep dive into our most impactful partnerships and technical breakthroughs.</p>
            </div>
            <div className="flex gap-4">
              <button className="w-14 h-14 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
                <ArrowRight className="w-6 h-6 rotate-180" />
              </button>
              <button className="w-14 h-14 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group relative"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-lg mb-6 grayscale hover:grayscale-0 transition-all duration-500">
                  <img src={project.image} alt={project.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-xs font-bold text-brand-accent mb-1 tracking-widest uppercase">{project.category}</div>
                    <h4 className="text-3xl font-display font-bold">{project.name}</h4>
                  </div>
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-brand-accent group-hover:text-bg-dark transition-all">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-slate-50 relative overflow-hidden px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="aspect-square bg-slate-200 rounded-3xl overflow-hidden relative group">
              <img src="https://picsum.photos/seed/office/1000/1000" alt="Our Workspace" className="w-full h-full object-cover grayscale transition-transform duration-1000 group-hover:scale-105" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-brand-primary/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <motion.div 
                whileInView={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute bottom-10 left-10 p-8 bg-white shadow-2xl rounded-2xl flex items-center gap-6 max-w-xs"
              >
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <span className="text-emerald-600 font-bold">100%</span>
                </div>
                <div className="text-sm font-bold text-slate-800 uppercase tracking-tighter">In-house development team</div>
              </motion.div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-xs font-black tracking-[0.3em] text-slate-400 uppercase mb-8 block">THE WEBWORKS EDGE</span>
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-10">We don't just write code. We ship results.</h2>
            
            <div className="space-y-10">
              {[
                { title: "Strategic Architecture", desc: "We plan for the long term. No technical debt, just scalable codebases.", icon: <Globe className="w-6 h-6" /> },
                { title: "User-First Logic", desc: "Every feature we build is validated against real user pain points.", icon: <Users className="w-6 h-6" /> },
                { title: "Seamless Launch", desc: "We manage the entire deployment and migration process.", icon: <ArrowRight className="w-6 h-6" /> }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h5 className="text-xl font-display font-bold mb-2">{item.title}</h5>
                    <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-7xl mx-auto rounded-[3rem] bg-brand-primary p-12 md:p-24 text-center relative overflow-hidden shadow-2xl shadow-brand-primary/30">
          <div className="relative z-10">
            <h2 className="text-5xl md:text-8xl font-display font-bold text-white mb-8 leading-[0.9]">Ready to build something <span className="italic opacity-80">unforgettable?</span></h2>
            <p className="text-white/80 text-xl md:text-2xl max-w-2xl mx-auto mb-12">
              Let's join forces and create the digital products your business deserves.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="px-12 py-6 bg-white text-brand-primary rounded-full font-bold text-lg hover:scale-105 active:scale-95 transition-all">
                Send a Message
              </button>
              <a href="mailto:hello@zmwebworks.com" className="text-white font-bold text-lg flex items-center gap-2 group">
                hello@zmwebworks.com
                <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </a>
            </div>
          </div>
          
          {/* Decorative gradients */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-secondary/40 blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-accent/30 blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-8 h-8 bg-bg-dark rounded flex items-center justify-center">
                  <span className="text-white font-display font-bold text-sm italic">ZM</span>
                </div>
                <span className="font-display font-bold text-lg tracking-tighter">webworks</span>
              </div>
              <p className="text-slate-500 max-w-sm mb-8 leading-relaxed">
                A globally distributed agency focused on pushing the boundaries of what's possible on the open web.
              </p>
              <div className="flex gap-4">
                {[Twitter, Linkedin, Github, Mail].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-brand-primary hover:border-brand-primary transition-all">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h6 className="font-bold text-xs tracking-widest uppercase text-slate-400 mb-8">Navigation</h6>
              <ul className="space-y-4">
                {["Services", "Portfolio", "Process", "Careers", "Contact"].map(link => (
                  <li key={link}>
                    <a href="#" className="text-sm font-medium text-slate-600 hover:text-bg-dark transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h6 className="font-bold text-xs tracking-widest uppercase text-slate-400 mb-8">Location</h6>
              <p className="text-sm text-slate-600 mb-4">
                Global Remote Agency <br />Headquartered in the Cloud.
              </p>
              <div className="pt-4 border-t border-slate-100">
                <div className="text-xs font-bold text-slate-400 uppercase mb-2">Local Time</div>
                <div className="text-lg font-display font-bold text-bg-dark">09:42 AM GMT</div>
              </div>
            </div>
          </div>

          <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-bold text-slate-400 tracking-widest uppercase">
            <div>© 2026 ZM WEBWORKS. All Rights Reserved.</div>
            <div className="flex gap-8">
              <a href="#" className="hover:text-bg-dark">Privacy Policy</a>
              <a href="#" className="hover:text-bg-dark">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
