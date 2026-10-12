import { ArrowRight, Play, ShieldCheck, Users, Laptop } from 'lucide-react'
import HeroMockup from './HeroMockup'
export default function Hero() {
  return (
    <section id="home" className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:py-24">

      {/* Left side: text */}
      <div>
        <span className="inline-block rounded-full border border-indigo-100 bg-brand-soft px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-brand">
          A social chat app for everyone
        </span>

        <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
          Your people.
          <br />
          <span className="text-brand">Your conversations.</span>
        </h1>

        <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-600">
          Chat, connect, and build communities with complete privacy.
          End-to-end encrypted messaging for everyone.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="/signup"
            className="inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-white shadow-md shadow-brand/25 hover:brightness-110"
          >
            Get Started Free <ArrowRight size={16} />
          </a>
          <a
            href="/app"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold hover:bg-slate-50"
          >
            <Play size={14} fill="currentColor" /> Explore the App
          </a>
        </div>

        {/* Small feature points */}
        <ul className="mt-8 flex flex-wrap gap-6 text-xs text-slate-500">
          <li className="flex items-center gap-2"><ShieldCheck size={14} className="text-brand" /> End-to-end encryption</li>
          <li className="flex items-center gap-2"><Users size={14} className="text-brand" /> Social communities</li>
          <li className="flex items-center gap-2"><Laptop size={14} className="text-brand" /> Across devices</li>
        </ul>
      </div>

      {/* Right side: phone mockups (next step) */}
      <HeroMockup />

    </section>
  )
}