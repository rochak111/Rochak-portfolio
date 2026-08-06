import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const links = ['About', 'Experience', 'Skills', 'Projects', 'Research', 'Contact'];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-xl">
    <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
      <a href="#home" className="font-bold tracking-tight text-white">Rochak<span className="text-sky-400">.</span></a>
      <div className="hidden items-center gap-7 md:flex">{links.map(x => <a key={x} href={`#${x.toLowerCase()}`} className="text-sm text-slate-300 transition hover:text-sky-400">{x}</a>)}</div>
      <button aria-label="Toggle menu" className="md:hidden" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
    </nav>
    {open && <div className="border-t border-slate-800 bg-slate-950 px-5 py-4 md:hidden">{links.map(x => <a key={x} href={`#${x.toLowerCase()}`} onClick={() => setOpen(false)} className="block py-3 text-slate-300">{x}</a>)}</div>}
  </header>;
}
