import { useState } from 'react'
import { Link } from 'react-router-dom'
import AuthLayout from '../components/AuthLayout'
import FormField from '../components/FormField'
import GoogleButton from '../components/GoogleButton'

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  const validate = () => {
    const e = {}
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Enter a valid email address'
    if (!form.password) e.password = 'Enter your password'
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const found = validate()
    setErrors(found)
    if (Object.keys(found).length > 0) return
    console.log('Login form is valid. API call comes after the backend is ready.')
  }

  return (
    <AuthLayout title="Welcome back" subtitle="Log in to your account">
      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <FormField
          label="Email"
          name="email"
          type="email"
          placeholder="alex@example.com"
          autoComplete="email"
          value={form.email}
          onChange={handleChange}
          error={errors.email}
        />
        <div>
          <FormField
            label="Password"
            name="password"
            type="password"
            placeholder="Your password"
            autoComplete="current-password"
            value={form.password}
            onChange={handleChange}
            error={errors.password}
          />
          <div className="mt-2 text-right">
            <Link to="/login" className="text-xs font-medium text-brand hover:underline">
              Forgot password?
            </Link>
          </div>
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-white shadow-md shadow-brand/25 hover:brightness-110"
        >
          Log In
        </button>
      </form>

      <div className="my-5 flex items-center gap-3 text-xs text-slate-400">
        <span className="h-px flex-1 bg-slate-200" /> or <span className="h-px flex-1 bg-slate-200" />
      </div>

      <GoogleButton label="Continue with Google" />

      <p className="mt-6 text-center text-sm text-slate-500">
        New to Vibe?{' '}
        <Link to="/signup" className="font-semibold text-brand hover:underline">
          Create a new account
        </Link>
      </p>
    </AuthLayout>
  )
}