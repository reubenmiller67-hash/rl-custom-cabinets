import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../lib/firebase'
import PlaceholderImage from '../components/ui/PlaceholderImage'
import GoldDivider from '../components/ui/GoldDivider'

export default function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      await addDoc(collection(db, 'contacts'), {
        name,
        email,
        phone,
        message,
        createdAt: serverTimestamp(),
      })
      setSent(true)
      setName('')
      setEmail('')
      setPhone('')
      setMessage('')
    } catch (err) {
      setError('Something went wrong. Please try again or call us.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ backgroundColor: '#0D0D0D' }}>
      <section className="px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl font-semibold md:text-5xl"
            style={{ color: '#F5F0E8' }}
          >
            Contact Us
          </motion.h1>

          <div className="mt-12 grid gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="font-heading text-xl font-semibold" style={{ color: '#C9A84C' }}>
                Visit & Call
              </h2>
              <p className="mt-4" style={{ color: '#A39E93' }}>
                R&L Custom Cabinets<br />
                Southern Michigan
              </p>
              <p className="mt-2" style={{ color: '#6B6560' }}>
                Serving Southern Michigan & Northern Indiana
              </p>
              <a
                href="tel:5172279490"
                className="mt-4 block transition-colors hover:text-[#C9A84C]"
                style={{ color: '#6B6560' }}
              >
                Phone: (517) 227-9490
              </a>
              <a
                href="mailto:rlcustomcabinets67@gmail.com"
                className="mt-2 block transition-colors hover:text-[#C9A84C]"
                style={{ color: '#6B6560' }}
              >
                rlcustomcabinets67@gmail.com
              </a>
              <p className="mt-6 text-sm" style={{ color: '#6B6560' }}>
                Hours: By appointment
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              {sent ? (
                <p className="rounded-lg border p-4" style={{ borderColor: '#4CAF50', color: '#4CAF50' }}>
                  Thank you. We&apos;ll get back to you soon.
                </p>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && <p className="text-sm" style={{ color: '#CF6679' }}>{error}</p>}
                  <div>
                    <label className="mb-2 block text-sm font-medium" style={{ color: '#A39E93' }}>Name *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-lg border bg-[#1A1A1A] px-4 py-3 outline-none focus:border-[#C9A84C]"
                      style={{ borderColor: '#333333', color: '#F5F0E8' }}
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium" style={{ color: '#A39E93' }}>Email *</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-lg border bg-[#1A1A1A] px-4 py-3 outline-none focus:border-[#C9A84C]"
                      style={{ borderColor: '#333333', color: '#F5F0E8' }}
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium" style={{ color: '#A39E93' }}>Phone</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full rounded-lg border bg-[#1A1A1A] px-4 py-3 outline-none focus:border-[#C9A84C]"
                      style={{ borderColor: '#333333', color: '#F5F0E8' }}
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium" style={{ color: '#A39E93' }}>Message *</label>
                    <textarea
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={5}
                      className="w-full rounded-lg border bg-[#1A1A1A] px-4 py-3 outline-none focus:border-[#C9A84C]"
                      style={{ borderColor: '#333333', color: '#F5F0E8' }}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="rounded-lg px-8 py-3.5 font-medium disabled:opacity-70"
                    style={{ backgroundColor: '#C9A84C', color: '#0D0D0D' }}
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
              <p className="mt-6 text-sm" style={{ color: '#6B6560' }}>
                For project quotes, use our{' '}
                <Link to="/quote" className="font-medium transition-colors hover:text-[#C9A84C]" style={{ color: '#C9A84C' }}>
                  detailed quote form
                </Link>
                .
              </p>
            </motion.div>
          </div>

          <GoldDivider className="my-16" />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <PlaceholderImage className="min-h-[320px] w-full" />
            <p className="mt-2 text-center text-sm" style={{ color: '#6B6560' }}>Map placeholder</p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
