import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const field = 'w-full rounded-lg border border-white/20 bg-gradient-to-b from-white/20 to-white/5 px-4 py-3 text-sm text-white placeholder:text-white/60 backdrop-blur-md focus:border-electric'
const codes = [['PK', '+92'], ['US', '+1'], ['GB', '+44'], ['AE', '+971'], ['SA', '+966'], ['IN', '+91'], ['DE', '+49'], ['FR', '+33']]
const serviceOptions = ['Web Design', 'Web Development', 'UI/UX Design', 'Branding', '3D Creation', 'Marketing']

export default function RequestCallForm() {
  const nav = useNavigate()
  const [errors, setErrors] = useState({})

  const onSubmit = (e) => {
    e.preventDefault()
    const d = Object.fromEntries(new FormData(e.currentTarget))
    const err = {}
    if (!d.name?.trim()) err.name = 'Enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(d.email || '')) err.email = 'Enter a valid email address.'
    if (!/^[0-9 ()-]{6,}$/.test(d.phone || '')) err.phone = 'Enter a valid phone number.'
    if (!d.service) err.service = 'Select a service.'
    setErrors(err)
    if (Object.keys(err).length) return
    // TODO: send `d` to your backend, CRM or form service here.
    nav('/thank-you')
  }

  const Err = ({ k }) => (errors[k] ? <p role="alert" className="mt-1 text-sm text-pink">{errors[k]}</p> : null)

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-3.5">
      <div><label className="sr-only" htmlFor="name">Name</label><input id="name" name="name" placeholder="Enter your name*" className={field} /><Err k="name" /></div>
      <div><label className="sr-only" htmlFor="email">Email</label><input id="email" name="email" type="email" placeholder="Enter your email*" className={field} /><Err k="email" /></div>
      <div>
        <div className="flex gap-2">
          <label className="sr-only" htmlFor="code">Country code</label>
          <select id="code" name="code" defaultValue="+92" className={`${field} !w-28 shrink-0`}>
            {codes.map(([c, d]) => <option key={c} value={d} className="text-ink">{c} {d}</option>)}
          </select>
          <label className="sr-only" htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="tel" placeholder="Enter your phone number*" className={field} />
        </div>
        <Err k="phone" />
      </div>
      <div>
        <label className="sr-only" htmlFor="service">Service</label>
        <select id="service" name="service" defaultValue="" className={field}>
          <option value="" disabled>Select the service you are interested in*</option>
          {serviceOptions.map((s) => <option key={s} value={s} className="text-ink">{s}</option>)}
        </select>
        <Err k="service" />
      </div>
      <div><label className="sr-only" htmlFor="brief">Needs</label><input id="brief" name="brief" placeholder="Describe your needs" className={field} /></div>
      <button className="btn-primary mt-1 rounded-lg px-6 py-3 text-sm font-medium transition hover:-translate-y-0.5">Request a Callback</button>
    </form>
  )
}