import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
export default function Hero() {
  return <section id="home" className="relative flex min-h-screen items-center pt-16">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(14,165,233,.16),transparent_34%)]" />
    <div className="section-shell relative grid items-center gap-12 lg:grid-cols-[1.2fr_.8fr]">
      <div><p className="eyebrow">Hello, I’m</p><h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">Rochak Bhattarai</h1>
      <h2 className="mt-5 text-xl font-semibold text-sky-400 sm:text-2xl">Software Engineer · Cloud & DevOps Engineer</h2>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">I design cloud-native systems, automate infrastructure and delivery pipelines, and explore research in microservices, observability, resilience, and software architecture.</p>
      <div className="mt-8 flex flex-wrap gap-3"><a className="button-primary" href="/assets/Rochak-Resume.pdf" target="_blank"><Download size={18}/>Download CV</a><a className="button-secondary" href="#contact"><Mail size={18}/>Contact Me</a></div>
      <div className="mt-7 flex gap-4"><a aria-label="LinkedIn" href="https://www.linkedin.com/in/rochak-bhattarai-5077951b4/" target="_blank" className="rounded-full border border-slate-700 p-3 hover:border-sky-400 hover:text-sky-400"><Linkedin size={20}/></a><a aria-label="GitHub" href="https://github.com/rochak111" target="_blank" className="rounded-full border border-slate-700 p-3 hover:border-sky-400 hover:text-sky-400"><Github size={20}/></a></div></div>
      <div className="mx-auto w-full max-w-md"><div className="relative overflow-hidden rounded-[2rem] border border-slate-700 bg-slate-900 p-3 shadow-glow"><img src="/assets/profile-pic.png" alt="Rochak Bhattarai" className="aspect-square w-full rounded-[1.5rem] object-cover"/></div></div>
    </div><a href="#about" className="absolute bottom-7 left-1/2 -translate-x-1/2 animate-bounce text-slate-500"><ArrowDown/></a>
  </section>;
}
