import { useState } from 'react'
import { Link } from 'react-router-dom'
import AuthLayout from '../components/AuthLayout'
import FormField from '../components/FormField'
import GoogleButton from '../components/GoogleButton'

export default function Signup() {
  const [form, setForm] = useState({ displayName: '', username: '', email: '', password: '' })
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  const validate = () => {
    const e = {}
    if (form.displayName.trim().length < 2) e.displayName = 'Enter your name'
    if (!/^[a-zA-Z0-9_]{3,30}$/.test(form.username))
      e.username = 'Use 3 to 30 letters, numbers or underscores'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Enter a valid email address'
    if (form.password.length < 8) e.password = 'Use at least 8 characters'
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const found = validate()
    setErrors(found)
    if (Object.keys(found).length > 0) return
    console.log('Sign up form is valid. API call and OTP screen come next.')
  }

  return (
    <AuthLayout title="Create your account" subtitle="Join your people on Vibe Social">
      <GoogleButton label="Sign up with Google" />

      <div className="my-5 flex items-center gap-3 text-xs text-slate-400">
        <span className="h-px flex-1 bg-slate-200" /> or with email <span className="h-px flex-1 bg-slate-200" />
      </div>

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <FormField
          label="Name"
          name="displayName"
          placeholder="Alex Carter"
          autoComplete="name"
          value={form.displayName}
          onChange={handleChange}
          error={errors.displayName}
        />
        <FormField
          label="Username"
          name="username"
          placeholder="alexcarter"
          autoComplete="username"
          value={form.username}
          onChange={handleChange}
          error={errors.username}
        />
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
        <FormField
          label="Password"
          name="password"
          type="password"
          placeholder="At least 8 characters"
          autoComplete="new-password"
          value={form.password}
          onChange={handleChange}
          error={errors.password}
        />

        <button
          type="submit"
          className="w-full rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-white shadow-md shadow-brand/25 hover:brightness-110"
        >
          Sign Up
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-slate-500">
        Already have an account?{' '}
        <Link to="/login" className="font-semibold text-brand hover:underline">
          Log in
        </Link>
      </p>
    </AuthLayout>
  )
}