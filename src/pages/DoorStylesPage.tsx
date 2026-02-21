import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PlaceholderImage from '../components/ui/PlaceholderImage'
import GoldDivider from '../components/ui/GoldDivider'

const filters = ['All', 'Modern', 'Traditional', 'Transitional', 'Raised Panel', 'Flat Panel', 'Shaker']

const doorStyles: { id: number; name: string; category: string; slug: string; filters: string[] }[] = [
  { id: 1, name: 'Classic Shaker', category: 'Transitional', slug: 'classic-shaker', filters: ['Transitional', 'Shaker'] },
  { id: 2, name: 'Raised Cathedral', category: 'Traditional', slug: 'raised-cathedral', filters: ['Traditional', 'Raised Panel'] },
  { id: 3, name: 'Flat Panel Modern', category: 'Modern', slug: 'flat-panel-modern', filters: ['Modern', 'Flat Panel'] },
  { id: 4, name: 'Beadboard', category: 'Farmhouse/Traditional', slug: 'beadboard', filters: ['Traditional'] },
  { id: 5, name: 'Recessed Panel', category: 'Transitional', slug: 'recessed-panel', filters: ['Transitional'] },
  { id: 6, name: 'Slab/Euro', category: 'Modern', slug: 'slab-euro', filters: ['Modern', 'Flat Panel'] },
  { id: 7, name: 'Arch Top', category: 'Traditional', slug: 'arch-top', filters: ['Traditional'] },
  { id: 8, name: 'Mission', category: 'Craftsman/Traditional', slug: 'mission', filters: ['Traditional'] },
]

export default function DoorStylesPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? doorStyles
    : doorStyles.filter((d) => d.filters.includes(activeFilter))

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
            Door Styles & Finishes
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mt-4 text-lg"
            style={{ color: '#A39E93' }}
          >
            Explore our complete collection of custom cabinet door styles
          </motion.p>

          <div className="mt-10 flex flex-wrap gap-2">
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

          <GoldDivider className="my-12" />

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((style, i) => (
              <motion.article
                key={style.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                className="overflow-hidden rounded-lg border"
                style={{ backgroundColor: '#242424', borderColor: '#333333' }}
              >
                <PlaceholderImage className="min-h-[220px]" />
                <div className="border-t p-6" style={{ borderColor: '#333333' }}>
                  <h2 className="font-heading text-xl font-semibold" style={{ color: '#F5F0E8' }}>
                    {style.name}
                  </h2>
                  <span className="mt-2 inline-block text-sm" style={{ color: '#C9A84C' }}>
                    {style.category}
                  </span>
                  <Link
                    to={`/door-styles#${style.slug}`}
                    className="mt-4 inline-flex font-medium transition-colors hover:text-[#E2C873]"
                    style={{ color: '#C9A84C' }}
                  >
                    View Details →
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t px-4 py-16 md:px-6" style={{ borderColor: '#333333', backgroundColor: '#1A1A1A' }}>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-2xl font-semibold" style={{ color: '#F5F0E8' }}>
            Ready to see these in your space?
          </h2>
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
