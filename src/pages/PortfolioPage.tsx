import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PlaceholderImage from '../components/ui/PlaceholderImage'
import GoldDivider from '../components/ui/GoldDivider'

const filters = ['All', 'Kitchens', 'Bathrooms', 'Commercial', 'Built-ins']

const projects = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  name: `Project ${i + 1}`,
  type: ['Kitchen', 'Bathroom', 'Commercial', 'Built-ins'][i % 4],
  location: ['Kalamazoo', 'Battle Creek', 'South Bend', 'Coldwater', 'Grand Rapids'][i % 5] + ', MI',
}))

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.type.toLowerCase() === activeFilter.toLowerCase())

  return (
    <div style={{ backgroundColor: '#0D0D0D' }}>
      <section className="px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl font-semibold md:text-5xl"
            style={{ color: '#F5F0E8' }}
          >
            Our Work
          </motion.h1>
          <div className="mt-8 flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setActiveFilter(f)}
                className="rounded-lg border-2 px-4 py-2 text-sm font-medium transition-colors"
                style={{
                  borderColor: activeFilter === f ? '#C9A84C' : '#333333',
                  backgroundColor: activeFilter === f ? 'rgba(201, 168, 76, 0.1)' : 'transparent',
                  color: activeFilter === f ? '#C9A84C' : '#A39E93',
                }}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((proj, i) => (
              <motion.article
                key={proj.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="group relative overflow-hidden rounded-lg"
                style={{ backgroundColor: '#242424' }}
              >
                <div className="relative min-h-[240px]">
                  <PlaceholderImage src={`/images/portfolio/project-${proj.id}.jpg`} alt={proj.name} className="min-h-[240px] w-full" />
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center bg-[#C9A84C]/20 opacity-0 transition-opacity group-hover:opacity-100"
                    style={{ color: '#0D0D0D' }}
                  >
                    <span className="font-medium">View Project →</span>
                  </div>
                </div>
                <div className="border-t p-4" style={{ borderColor: '#333333' }}>
                  <p className="font-medium" style={{ color: '#F5F0E8' }}>{proj.name}</p>
                  <div className="mt-1 flex items-center gap-2">
                    <span className="text-xs" style={{ color: '#C9A84C' }}>{proj.type}</span>
                    <span className="text-xs" style={{ color: '#6B6560' }}>• {proj.location}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <GoldDivider className="my-16" />

      <section className="border-t px-4 py-16 md:px-6" style={{ borderColor: '#333333', backgroundColor: '#1A1A1A' }}>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-2xl font-semibold" style={{ color: '#F5F0E8' }}>
            Start your project
          </h2>
          <p className="mt-4" style={{ color: '#A39E93' }}>
            Get a free design consultation.
          </p>
          <Link
            to="/quote"
            className="mt-6 inline-block rounded-lg px-8 py-3.5 font-medium transition-colors hover:opacity-90"
            style={{ backgroundColor: '#C9A84C', color: '#0D0D0D' }}
          >
            Get Your Free Quote
          </Link>
        </div>
      </section>
    </div>
  )
}
