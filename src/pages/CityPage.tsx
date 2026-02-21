import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getCityBySlug } from '../data/serviceAreas'
import PlaceholderImage from '../components/ui/PlaceholderImage'

export default function CityPage() {
  const { city: citySlug } = useParams<{ city: string }>()
  const city = citySlug ? getCityBySlug(citySlug) : undefined

  if (!city) {
    return (
      <div className="min-h-[60vh] px-4 py-24 text-center" style={{ backgroundColor: '#0D0D0D' }}>
        <h1 className="font-heading text-2xl font-semibold" style={{ color: '#F5F0E8' }}>
          City not found
        </h1>
        <Link to="/service-areas" className="mt-4 inline-block font-medium" style={{ color: '#C9A84C' }}>
          View all service areas →
        </Link>
      </div>
    )
  }

  return (
    <div style={{ backgroundColor: '#0D0D0D' }}>
      <section className="px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl font-semibold md:text-5xl"
            style={{ color: '#F5F0E8' }}
          >
            Custom Cabinets in {city.name}, {city.state}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mt-6 text-lg"
            style={{ color: '#A39E93' }}
          >
            {city.description}
          </motion.p>
          <p className="mt-4 text-sm" style={{ color: '#C9A84C' }}>
            Proudly serving {city.name} and the surrounding area
          </p>
        </div>
      </section>

      <section className="px-4 py-16 md:px-6 md:py-24" style={{ backgroundColor: '#1A1A1A' }}>
        <div className="mx-auto max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-2xl font-semibold"
            style={{ color: '#F5F0E8' }}
          >
            Projects in {city.name}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 grid gap-6 sm:grid-cols-2"
          >
            <PlaceholderImage className="min-h-[220px]" />
            <PlaceholderImage className="min-h-[220px]" />
          </motion.div>
        </div>
      </section>

      <section className="border-t px-4 py-16 md:px-6" style={{ borderColor: '#333333' }}>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-2xl font-semibold" style={{ color: '#F5F0E8' }}>
            Ready for custom cabinets in {city.name}?
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
