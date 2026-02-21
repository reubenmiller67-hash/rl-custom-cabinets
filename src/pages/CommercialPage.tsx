import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PlaceholderImage from '../components/ui/PlaceholderImage'
import GoldDivider from '../components/ui/GoldDivider'

const stats = ['Full-Scale Production Facility', 'XX+ Projects Completed', 'On-Time Delivery']

const serviceCards = [
  { id: 'apartments', title: 'Apartments & Multi-Family', desc: 'Consistent, durable cabinetry for units at scale. Phased delivery and installation.' },
  { id: 'hotels', title: 'Hotels & Hospitality', desc: 'Guest rooms, lobbies, and back-of-house cabinetry built to hospitality standards.' },
  { id: 'senior-living', title: 'Senior Living', desc: 'Accessible, durable solutions for independent and assisted living communities.' },
  { id: 'office', title: 'Office Spaces', desc: 'Reception, break rooms, and workspace cabinetry for commercial buildings.' },
]

const processSteps = ['Bid', 'Shop Drawings', 'Production', 'Phased Delivery', 'Installation']

export default function CommercialPage() {
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
            Commercial & Multi-Unit Cabinetry
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mt-6 text-lg"
            style={{ color: '#A39E93' }}
          >
            Scalable production with consistent quality. Backed by our full-scale in-house production facility.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-10 flex flex-wrap justify-center gap-8 border-y py-6"
            style={{ borderColor: '#333333' }}
          >
            {stats.map((s) => (
              <span key={s} className="font-heading text-lg font-semibold" style={{ color: '#C9A84C' }}>
                {s}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      <GoldDivider className="my-16" />

      <section className="px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-2xl font-semibold"
            style={{ color: '#F5F0E8' }}
          >
            What We Build
          </motion.h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {serviceCards.map((card, i) => (
              <motion.article
                key={card.id}
                id={card.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="overflow-hidden rounded-lg border"
                style={{ backgroundColor: '#242424', borderColor: '#333333' }}
              >
                <PlaceholderImage className="min-h-[200px]" />
                <div className="border-t p-6" style={{ borderColor: '#333333' }}>
                  <h3 className="font-heading text-xl font-semibold" style={{ color: '#F5F0E8' }}>
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm" style={{ color: '#A39E93' }}>
                    {card.desc}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <GoldDivider className="my-16" />

      <section className="px-4 py-16 md:px-6 md:py-24" style={{ backgroundColor: '#1A1A1A' }}>
        <div className="mx-auto max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-2xl font-semibold"
            style={{ color: '#F5F0E8' }}
          >
            Production Capabilities
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-6"
            style={{ color: '#A39E93' }}
          >
            Our in-house production facility is equipped to handle projects of any scale. Whether you need cabinetry for a 20-unit apartment building or a 500-room hotel, we have the capacity, the craftsmen, and the systems to deliver consistent quality on your timeline.
          </motion.p>
        </div>
      </section>

      <GoldDivider className="my-16" />

      <section className="px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-2xl font-semibold"
            style={{ color: '#F5F0E8' }}
          >
            Commercial Process
          </motion.h2>
          <div className="mt-10 flex flex-wrap justify-between gap-4">
            {processSteps.map((step, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex flex-col items-center text-center"
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-full font-semibold"
                  style={{ backgroundColor: '#C9A84C', color: '#0D0D0D' }}
                >
                  {i + 1}
                </div>
                <span className="mt-3 font-medium" style={{ color: '#F5F0E8' }}>{step}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <GoldDivider className="my-16" />

      <section className="border-t px-4 py-16 md:px-6" style={{ borderColor: '#333333', backgroundColor: '#1A1A1A' }}>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-2xl font-semibold" style={{ color: '#F5F0E8' }}>
            Request a Commercial Quote
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
