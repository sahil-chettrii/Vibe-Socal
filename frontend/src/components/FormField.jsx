import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'

export default function FormField({ label, type = 'text', error, ...props }) {
  const [show, setShow] = useState(false)
  const isPassword = type === 'password'

  return (
    <div>
      <label htmlFor={props.name} className="mb-1.5 block text-sm font-medium text-slate-700">
        {label}
      </label>
      <div className="relative">
        <input
          id={props.name}
          type={isPassword && show ? 'text' : type}
          className={`w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-brand focus:ring-2 focus:ring-brand/20 ${
            error ? 'border-red-400' : 'border-slate-200'
          }`}
          {...props}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShow(!show)}
            aria-label={show ? 'Hide password' : 'Show password'}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
          >
            {show ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>
      {error && <p className="mt-1.5 text-xs text-red-500">{error}</p>}
    </div>
  )
}