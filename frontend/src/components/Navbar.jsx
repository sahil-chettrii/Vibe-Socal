import { Link } from 'react-router-dom'
import logo from '../assets/logo-icon.svg'

const links = ['Home', 'Features', 'Privacy', 'Download', 'Community']

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-5">

        {/* Logo + name */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Vibe Social logo" className="h-9 w-9" />
          <span className="text-lg font-bold">Vibe Social</span>
        </Link>

        {/* Page links */}
        <nav className="hidden gap-9 md:flex">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium text-slate-600 hover:text-slate-900"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Log In + Sign Up */}
        <div className="flex items-center gap-3">
          <Link to="/login" className="px-3 text-sm font-semibold text-slate-700">
            Log In
          </Link>
          <Link
            to="/signup"
            className="rounded-xl bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand/25 hover:brightness-110"
          >
            Sign Up
          </Link>
        </div>

      </div>
    </header>
  )
}