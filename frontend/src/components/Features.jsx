import { ShieldCheck, Users, Laptop, UserCircle } from 'lucide-react'

const features = [
  {
    icon: ShieldCheck,
    title: 'Truly private',
    text: 'End-to-end encrypted conversations keep message content between you and the people you choose.',
  },
  {
    icon: Users,
    title: 'More than just chat',
    text: 'Bring friends, groups, and communities together without losing the human part.',
  },
  {
    icon: Laptop,
    title: 'Everywhere you are',
    text: 'Move naturally between responsive desktop and mobile experiences.',
  },
  {
    icon: UserCircle,
    title: 'Designed for everyone',
    text: 'Accessible, intuitive communication with clarity built into every interaction.',
  },
]

export default function Features() {
  return (
    <section id="features" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-6xl px-5">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-brand">
            Why Vibe
          </p>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Made for the way we connect now.
          </h2>
          <p className="mt-5 text-lg text-slate-600">
            Private when it matters, social when you want it, and beautifully
            simple every time you open it.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-brand">
                <item.icon size={18} />
              </span>
              <h3 className="mt-6 font-bold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {item.text}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}