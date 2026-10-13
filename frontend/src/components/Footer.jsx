import logo from '../assets/logo-icon.svg'

const columns = [
  { title: 'Product', links: ['Features', 'Privacy', 'Download'] },
  { title: 'Company', links: ['About', 'Community', 'Contact'] },
  { title: 'Legal', links: ['Terms', 'Privacy Policy'] },
]

export default function Footer() {
  return (
    <footer id="download" className="border-t border-slate-100 bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.5fr_repeat(3,1fr)]">

        {/* Brand */}
        <div>
          <a href="#home" className="flex items-center gap-3">
            <img src={logo} alt="Vibe Social logo" className="h-9 w-9" />
            <span className="text-lg font-bold">Vibe Social</span>
          </a>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-500">
            A social chat app for everyone. Your people. Your conversations.
          </p>
        </div>

        {/* Link columns */}
        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="text-sm font-bold">{col.title}</h4>
            <ul className="mt-4 space-y-3">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-slate-500 hover:text-slate-900">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-100 py-6 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} Vibe Social. All rights reserved.
      </div>
    </footer>
  )
}