import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PlaceholderImage from '../components/ui/PlaceholderImage'
import GoldDivider from '../components/ui/GoldDivider'

const services = [
  { id: 'kitchens', title: 'Custom Kitchens', desc: 'Full kitchen design and installation. Cabinets built to your exact layout and style.' },
  { id: 'bathrooms', title: 'Bathroom Vanities', desc: 'Vanities and storage that turn your bathroom into a retreat.' },
  { id: 'closets', title: 'Walk-in Closets', desc: 'Custom closet systems designed for how you live.' },
  { id: 'built-ins', title: 'Built-in Shelving & Entertainment Centers', desc: 'Wall units, bookcases, and media centers that fit your space perfectly.' },
  { id: 'home-offices', title: 'Home Offices', desc: 'Desks, shelving, and storage for a productive home office.' },
  { id: 'laundry', title: 'Laundry Rooms', desc: 'Cabinets and countertops that make laundry day easier.' },
  { id: 'mudrooms', title: 'Mudrooms & Pantries', desc: 'Organized entry and pantry storage tailored to your needs.' },
]

export default function ResidentialPage() {
  return (
    <div style={{ backgroundColor: '#0D0D0D' }}>
      <section className="px-4 py-20 md:px-6 md:py-28" style={{ backgroundColor: '#1A1A1A' }}>
        <div className="mx-auto max-w-4xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl font-semibold md:text-5xl"
            style={{ color: '#F5F0E8' }}
          >
            Custom Residential Cabinetry
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mt-6 text-lg"
            style={{ color: '#A39E93' }}
          >
            Kitchens, bathrooms, closets, and built-ins designed around your life
          </motion.p>
        </div>
      </section>

      <GoldDivider className="my-16" />

      <section className="px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((svc, i) => (
              <motion.article
                key={svc.id}
                id={svc.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="overflow-hidden rounded-lg border"
                style={{ backgroundColor: '#242424', borderColor: '#333333' }}
              >
                <PlaceholderImage className="min-h-[200px]" />
                <div className="border-t p-6" style={{ borderColor: '#333333' }}>
                  <h2 className="font-heading text-xl font-semibold" style={{ color: '#F5F0E8' }}>
                    {svc.title}
                  </h2>
                  <p className="mt-3 text-sm" style={{ color: '#A39E93' }}>
                    {svc.desc}
                  </p>
                  <Link
                    to="/quote"
                    className="mt-4 inline-flex font-medium transition-colors hover:text-[#E2C873]"
                    style={{ color: '#C9A84C' }}
                  >
                    Learn More →
                  </Link>
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
            Start Your Residential Project
          </h2>
          <p className="mt-4" style={{ color: '#A39E93' }}>
            Free design consultation. No obligation.
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
