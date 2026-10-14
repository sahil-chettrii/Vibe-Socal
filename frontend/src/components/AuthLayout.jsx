import { Link } from 'react-router-dom'
import logo from '../assets/logo-icon.svg'

export default function AuthLayout({ title, subtitle, children }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-5 py-10">
      <Link to="/" className="mb-8 flex items-center gap-3">
        <img src={logo} alt="Vibe Social logo" className="h-10 w-10" />
        <span className="text-xl font-bold">Vibe Social</span>
      </Link>

      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-2xl font-extrabold tracking-tight">{title}</h1>
        <p className="mt-1 text-sm text-slate-500">{subtitle}</p>
        <div className="mt-6">{children}</div>
      </div>
    </div>
  )
}