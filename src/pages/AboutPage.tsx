import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PlaceholderImage from '../components/ui/PlaceholderImage'

const values = [
  { title: 'Quality', desc: 'Every cabinet built to last. We use quality materials and time-tested joinery.' },
  { title: 'Integrity', desc: 'We say what we do and do what we say. Transparent pricing and timelines.' },
  { title: 'Craftsmanship', desc: 'Precision CNC paired with hand finishing. The best of technology and tradition.' },
  { title: 'Customer Service', desc: 'From first call to final walkthrough, we\'re with you every step.' },
]

export default function AboutPage() {
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
            Handcrafted Excellence from Bronson, Michigan
          </motion.h1>
        </div>
      </section>

      <section className="px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-2xl font-semibold"
            style={{ color: '#C9A84C' }}
          >
            Our Story
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-6 space-y-4"
            style={{ color: '#A39E93' }}
          >
            <p>
              R&L Custom Cabinets is a high-end custom cabinetry company based in Bronson, Michigan. We combine traditional craftsmanship with modern production capacity — a 40-person facility that can handle everything from one-of-a-kind residential projects to large commercial and multi-unit builds.
            </p>
            <p>
              Our team believes in true custom: no stock sizes, no compromises. Every cabinet is built to your exact specifications, with attention to detail from the first design consultation to the final installation. We serve Southern Michigan and Northern Indiana with the same care whether you&apos;re remodeling a single kitchen or outfitting hundreds of units.
            </p>
          </motion.div>
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
            Our Team
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 flex flex-col items-center gap-8 md:flex-row"
          >
            <div className="flex-shrink-0">
              <PlaceholderImage className="h-64 w-64 rounded-full" />
            </div>
            <div>
              <h3 className="font-heading text-xl font-semibold" style={{ color: '#C9A84C' }}>
                Reuben
              </h3>
              <p className="mt-4" style={{ color: '#A39E93' }}>
                Placeholder bio for Reuben — founder, lead designer, or key team member. This section will highlight experience, philosophy, and commitment to quality at R&L Custom Cabinets.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-2xl font-semibold"
            style={{ color: '#F5F0E8' }}
          >
            Production Facility
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-6"
            style={{ color: '#A39E93' }}
          >
            Our 40-person shop in Bronson is where design becomes reality. We use precision CNC equipment alongside hand finishing to deliver consistent, high-quality cabinetry at scale. Whether it&apos;s a single residential project or a phased commercial rollout, we have the capacity and the team to get it done.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10"
          >
            <PlaceholderImage className="min-h-[300px] w-full" />
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-16 md:px-6 md:py-24" style={{ backgroundColor: '#1A1A1A' }}>
        <div className="mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-2xl font-semibold"
            style={{ color: '#F5F0E8' }}
          >
            Our Values
          </motion.h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-lg border-l-4 p-6"
                style={{ backgroundColor: '#242424', borderColor: '#C9A84C' }}
              >
                <h3 className="font-heading text-lg font-semibold" style={{ color: '#C9A84C' }}>{v.title}</h3>
                <p className="mt-2 text-sm" style={{ color: '#A39E93' }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t px-4 py-16 md:px-6" style={{ borderColor: '#333333' }}>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-2xl font-semibold" style={{ color: '#F5F0E8' }}>
            Work With Us
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
