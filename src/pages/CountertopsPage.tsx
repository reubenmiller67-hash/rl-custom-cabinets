import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PlaceholderImage from '../components/ui/PlaceholderImage'

const materials = [
  {
    id: 'granite',
    name: 'Granite',
    desc: 'Natural stone with unique patterns and durability. Heat and scratch resistant, and adds lasting value to your home.',
    benefits: ['Unique natural patterns', 'Heat resistant', 'Long-lasting', 'Adds resale value'],
    count: 5,
  },
  {
    id: 'quartz',
    name: 'Quartz',
    desc: 'Engineered stone that offers consistency in color and pattern. Non-porous, low maintenance, and highly durable.',
    benefits: ['Non-porous', 'Low maintenance', 'Consistent appearance', 'Stain resistant'],
    count: 6,
  },
  {
    id: 'marble',
    name: 'Marble',
    desc: 'Timeless luxury with distinctive veining. Ideal for those seeking a classic, elegant look.',
    benefits: ['Elegant veining', 'Classic look', 'Cool to the touch', 'Premium aesthetic'],
    count: 4,
  },
  {
    id: 'butcher-block',
    name: 'Butcher Block',
    desc: 'Warm wood surfaces that bring a natural, inviting feel to your kitchen. Perfect for food prep and casual dining.',
    benefits: ['Warm aesthetic', 'Can be sanded and refinished', 'Eco-friendly options', 'Food-prep friendly'],
    count: 4,
  },
  {
    id: 'solid-surface',
    name: 'Solid Surface',
    desc: 'Seamless, versatile material that can be molded into integrated sinks and custom shapes. Easy to repair and maintain.',
    benefits: ['Seamless installation', 'Integrated sinks possible', 'Easy to repair', 'Wide color range'],
    count: 5,
  },
]

export default function CountertopsPage() {
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
            Countertop Selections
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mt-4 text-lg"
            style={{ color: '#A39E93' }}
          >
            Complete your kitchen with the perfect countertop
          </motion.p>
        </div>
      </section>

      <section className="px-4 pb-16 md:px-6 md:pb-24">
        <div className="mx-auto max-w-6xl space-y-20">
          {materials.map((mat, idx) => (
            <motion.article
              key={mat.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              className="rounded-lg border p-8 md:p-10"
              style={{ backgroundColor: '#242424', borderColor: '#333333' }}
            >
              <h2 className="font-heading text-2xl font-semibold" style={{ color: '#C9A84C' }}>
                {mat.name}
              </h2>
              <p className="mt-4" style={{ color: '#A39E93' }}>
                {mat.desc}
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: mat.count }).map((_, i) => (
                  <PlaceholderImage key={i} className="min-h-[140px]" />
                ))}
              </div>
              <ul className="mt-8 flex flex-wrap gap-4">
                {mat.benefits.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm" style={{ color: '#A39E93' }}>
                    <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: '#C9A84C' }} />
                    {b}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="border-t px-4 py-16 md:px-6" style={{ borderColor: '#333333', backgroundColor: '#1A1A1A' }}>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-2xl font-semibold" style={{ color: '#F5F0E8' }}>
            Discuss Countertop Options
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
