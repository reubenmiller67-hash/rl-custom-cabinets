import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { serviceAreas } from '../data/serviceAreas'

const tier1Slugs = ['coldwater', 'sturgis', 'three-rivers', 'hillsdale', 'union-city']
const tier2Slugs = ['kalamazoo', 'battle-creek', 'south-bend', 'elkhart', 'goshen', 'marshall']
const tier3Slugs = ['grand-rapids', 'lansing', 'fort-wayne', 'ann-arbor', 'toledo']

function CityGrid({ slugs, title }: { slugs: string[]; title: string }) {
  const cities = serviceAreas.filter((c) => slugs.includes(c.slug))
  return (
    <div>
      <h3 className="font-heading text-lg font-semibold" style={{ color: '#C9A84C' }}>
        {title}
      </h3>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cities.map((city) => (
          <Link
            key={city.slug}
            to={`/service-areas/${city.slug}`}
            className="rounded-lg border p-6 transition-colors hover:border-[#C9A84C] hover:bg-[#242424]"
            style={{ backgroundColor: '#242424', borderColor: '#333333' }}
          >
            <p className="font-medium" style={{ color: '#F5F0E8' }}>{city.name}, {city.state}</p>
            <p className="mt-1 text-sm" style={{ color: '#6B6560' }}>In the heart of Southern Michigan</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default function ServiceAreasPage() {
  return (
    <div style={{ backgroundColor: '#0D0D0D' }}>
      <section className="px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl font-semibold md:text-5xl"
            style={{ color: '#F5F0E8' }}
          >
            Areas We Serve
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mt-4 text-lg"
            style={{ color: '#A39E93' }}
          >
            Custom cabinetry delivered across Southern Michigan and Northern Indiana
          </motion.p>
        </div>
      </section>

      <section className="px-4 pb-16 md:px-6 md:pb-24">
        <div className="mx-auto max-w-6xl space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <CityGrid slugs={tier1Slugs} title="Tier 1 — Under 1 hour" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <CityGrid slugs={tier2Slugs} title="Tier 2 — 1–2 hours" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <CityGrid slugs={tier3Slugs} title="Tier 3 — 2–3 hours" />
          </motion.div>
        </div>
      </section>

      <section className="border-t px-4 py-16 md:px-6" style={{ borderColor: '#333333', backgroundColor: '#1A1A1A' }}>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-lg" style={{ color: '#A39E93' }}>
            Don&apos;t see your city? <Link to="/contact" className="font-medium transition-colors hover:text-[#C9A84C]" style={{ color: '#C9A84C' }}>Contact us</Link> — we may still serve your area.
          </p>
        </div>
      </section>
    </div>
  )
}
