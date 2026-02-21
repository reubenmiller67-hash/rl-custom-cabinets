import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../lib/firebase'
import { serviceAreaCityOptions } from '../data/serviceAreas'
import { FiCheck } from 'react-icons/fi'
import { HiOutlineOfficeBuilding, HiOutlineHome, HiOutlineClipboardList } from 'react-icons/hi'

const projectTypes = [
  { id: 'kitchen', label: 'Kitchen', icon: HiOutlineHome },
  { id: 'bathroom', label: 'Bathroom', icon: HiOutlineHome },
  { id: 'closet', label: 'Closet/Storage', icon: HiOutlineHome },
  { id: 'builtins', label: 'Built-ins', icon: HiOutlineHome },
  { id: 'commercial', label: 'Commercial/Multi-Unit', icon: HiOutlineOfficeBuilding },
  { id: 'other', label: 'Other', icon: HiOutlineClipboardList },
]

const buildTypes = [
  { id: 'new', label: 'New Construction' },
  { id: 'remodel', label: 'Remodel/Renovation' },
]

const styleOptions = ['Modern', 'Traditional', 'Shaker', 'Farmhouse', 'Transitional', 'Not Sure']
const timelineOptions = ['Ready Now', '1-3 Months', '3-6 Months', '6+ Months', 'Just Exploring']
const budgetOptions = ['Under $10K', '$10K-$25K', '$25K-$50K', '$50K+', 'Commercial (Discuss)']

export default function QuotePage() {
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [submitName, setSubmitName] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const [projectType, setProjectType] = useState('')
  const [buildType, setBuildType] = useState('')
  const [stylePreference, setStylePreference] = useState('')
  const [timeline, setTimeline] = useState('')
  const [budget, setBudget] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [city, setCity] = useState('')
  const [notes, setNotes] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      await addDoc(collection(db, 'quotes'), {
        projectType,
        buildType,
        stylePreference,
        timeline,
        budget,
        firstName,
        lastName,
        email,
        phone,
        city,
        notes: notes || null,
        createdAt: serverTimestamp(),
      })
      setSubmitName(firstName)
      setSubmitted(true)
    } catch (err) {
      setError('Something went wrong. Please try again or call us.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="min-h-[80vh] px-4 py-24 md:px-6" style={{ backgroundColor: '#0D0D0D' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mx-auto max-w-lg text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', delay: 0.2, stiffness: 200 }}
            className="mx-auto flex h-20 w-20 items-center justify-center rounded-full"
            style={{ backgroundColor: '#4CAF50' }}
          >
            <FiCheck className="h-10 w-10 text-white" />
          </motion.div>
          <h1 className="mt-8 font-heading text-3xl font-semibold" style={{ color: '#F5F0E8' }}>
            Thank you{submitName ? ` ${submitName}` : ''}!
          </h1>
          <p className="mt-4 text-lg" style={{ color: '#A39E93' }}>
            We&apos;ll contact you within 24 hours.
          </p>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-[80vh] px-4 py-12 md:px-6 md:py-16" style={{ backgroundColor: '#0D0D0D' }}>
      <div className="mx-auto max-w-2xl">
        {/* Progress bar */}
        <div className="mb-12 flex gap-2">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className="h-1.5 flex-1 rounded-full transition-colors"
              style={{ backgroundColor: step >= s ? '#C9A84C' : '#333333' }}
            />
          ))}
        </div>

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.25 }}
            >
              <h1 className="font-heading text-3xl font-semibold" style={{ color: '#F5F0E8' }}>
                Let&apos;s Start Your Project
              </h1>
              <p className="mt-2" style={{ color: '#A39E93' }}>
                Tell us about what you&apos;re looking for
              </p>
              <div className="mt-10">
                <p className="mb-4 text-sm font-medium" style={{ color: '#A39E93' }}>Project type</p>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {projectTypes.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setProjectType(opt.id)}
                      className="flex flex-col items-center rounded-lg border-2 p-4 text-center transition-colors"
                      style={{
                        borderColor: projectType === opt.id ? '#C9A84C' : '#333333',
                        backgroundColor: projectType === opt.id ? 'rgba(201, 168, 76, 0.1)' : '#1A1A1A',
                        color: '#F5F0E8',
                      }}
                    >
                      <opt.icon className="mb-2 h-8 w-8" style={{ color: '#C9A84C' }} />
                      <span className="text-sm font-medium">{opt.label}</span>
                    </button>
                  ))}
                </div>
              </div>
              <div className="mt-10">
                <p className="mb-4 text-sm font-medium" style={{ color: '#A39E93' }}>New build or remodel?</p>
                <div className="flex gap-4">
                  {buildTypes.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setBuildType(opt.id)}
                      className="flex-1 rounded-lg border-2 py-3 font-medium transition-colors"
                      style={{
                        borderColor: buildType === opt.id ? '#C9A84C' : '#333333',
                        backgroundColor: buildType === opt.id ? 'rgba(201, 168, 76, 0.1)' : '#1A1A1A',
                        color: '#F5F0E8',
                      }}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mt-12 flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  disabled={!projectType || !buildType}
                  className="rounded-lg px-8 py-3 font-medium transition-opacity disabled:opacity-50"
                  style={{ backgroundColor: '#C9A84C', color: '#0D0D0D' }}
                >
                  Next
                </button>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.25 }}
            >
              <h1 className="font-heading text-3xl font-semibold" style={{ color: '#F5F0E8' }}>
                Preferences
              </h1>
              <p className="mt-2" style={{ color: '#A39E93' }}>
                Help us tailor our recommendations
              </p>
              <div className="mt-10">
                <p className="mb-4 text-sm font-medium" style={{ color: '#A39E93' }}>Style preference</p>
                <div className="flex flex-wrap gap-2">
                  {styleOptions.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setStylePreference(opt)}
                      className="rounded-lg border-2 px-4 py-2 text-sm font-medium transition-colors"
                      style={{
                        borderColor: stylePreference === opt ? '#C9A84C' : '#333333',
                        backgroundColor: stylePreference === opt ? 'rgba(201, 168, 76, 0.1)' : '#1A1A1A',
                        color: '#F5F0E8',
                      }}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mt-8">
                <p className="mb-4 text-sm font-medium" style={{ color: '#A39E93' }}>Timeline</p>
                <div className="flex flex-wrap gap-2">
                  {timelineOptions.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setTimeline(opt)}
                      className="rounded-lg border-2 px-4 py-2 text-sm font-medium transition-colors"
                      style={{
                        borderColor: timeline === opt ? '#C9A84C' : '#333333',
                        backgroundColor: timeline === opt ? 'rgba(201, 168, 76, 0.1)' : '#1A1A1A',
                        color: '#F5F0E8',
                      }}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mt-8">
                <p className="mb-4 text-sm font-medium" style={{ color: '#A39E93' }}>Budget range</p>
                <div className="flex flex-wrap gap-2">
                  {budgetOptions.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setBudget(opt)}
                      className="rounded-lg border-2 px-4 py-2 text-sm font-medium transition-colors"
                      style={{
                        borderColor: budget === opt ? '#C9A84C' : '#333333',
                        backgroundColor: budget === opt ? 'rgba(201, 168, 76, 0.1)' : '#1A1A1A',
                        color: '#F5F0E8',
                      }}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mt-12 flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="rounded-lg border-2 px-6 py-3 font-medium transition-colors"
                  style={{ borderColor: '#C9A84C', color: '#C9A84C' }}
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="rounded-lg px-8 py-3 font-medium"
                  style={{ backgroundColor: '#C9A84C', color: '#0D0D0D' }}
                >
                  Next
                </button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.form
              key="step3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.25 }}
              onSubmit={handleSubmit}
            >
              <h1 className="font-heading text-3xl font-semibold" style={{ color: '#F5F0E8' }}>
                Contact Info
              </h1>
              <p className="mt-2" style={{ color: '#A39E93' }}>
                We&apos;ll reach out to schedule your free consultation
              </p>
              {error && (
                <p className="mt-4 text-sm" style={{ color: '#CF6679' }}>{error}</p>
              )}
              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium" style={{ color: '#A39E93' }}>First Name *</label>
                  <input
                    type="text"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full rounded-lg border bg-[#1A1A1A] px-4 py-3 outline-none focus:border-[#C9A84C]"
                    style={{ borderColor: '#333333', color: '#F5F0E8' }}
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium" style={{ color: '#A39E93' }}>Last Name *</label>
                  <input
                    type="text"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full rounded-lg border bg-[#1A1A1A] px-4 py-3 outline-none focus:border-[#C9A84C]"
                    style={{ borderColor: '#333333', color: '#F5F0E8' }}
                  />
                </div>
              </div>
              <div className="mt-6">
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
              <div className="mt-6">
                <label className="mb-2 block text-sm font-medium" style={{ color: '#A39E93' }}>Phone *</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-lg border bg-[#1A1A1A] px-4 py-3 outline-none focus:border-[#C9A84C]"
                  style={{ borderColor: '#333333', color: '#F5F0E8' }}
                />
              </div>
              <div className="mt-6">
                <label className="mb-2 block text-sm font-medium" style={{ color: '#A39E93' }}>City/Area *</label>
                <select
                  required
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full rounded-lg border bg-[#1A1A1A] px-4 py-3 outline-none focus:border-[#C9A84C]"
                  style={{ borderColor: '#333333', color: '#F5F0E8' }}
                >
                  <option value="">Select your area</option>
                  {serviceAreaCityOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
              <div className="mt-6">
                <label className="mb-2 block text-sm font-medium" style={{ color: '#A39E93' }}>Anything else you&apos;d like us to know?</label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={4}
                  className="w-full rounded-lg border bg-[#1A1A1A] px-4 py-3 outline-none focus:border-[#C9A84C]"
                  style={{ borderColor: '#333333', color: '#F5F0E8' }}
                />
              </div>
              <div className="mt-12 flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="rounded-lg border-2 px-6 py-3 font-medium"
                  style={{ borderColor: '#C9A84C', color: '#C9A84C' }}
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="rounded-lg px-8 py-3 font-medium disabled:opacity-70"
                  style={{ backgroundColor: '#C9A84C', color: '#0D0D0D' }}
                >
                  {loading ? 'Sending...' : 'Request My Free Consultation'}
                </button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
