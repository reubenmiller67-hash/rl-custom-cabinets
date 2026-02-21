import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PlaceholderImage from '../components/ui/PlaceholderImage'
import GoldDivider from '../components/ui/GoldDivider'

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
            Handcrafted Excellence from Southern Michigan
          </motion.h1>
        </div>
      </section>

      <GoldDivider className="my-16" />

      <section className="px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-2xl font-semibold"
            style={{ color: '#C9A84C' }}
          >
            Built on Tradition. Driven by Quality.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-6 space-y-4"
            style={{ color: '#A39E93' }}
          >
            <p>
              R&L Custom Cabinets was founded on the woodworking traditions of Southern Michigan, where craftsmanship is more than a skill — it&apos;s a way of life. Our production team includes skilled artisans with deep roots in the region&apos;s woodworking heritage, bringing old-world attention to detail to every cabinet we build.
            </p>
            <p>
              What sets us apart is simple: the owner is involved in every project from start to finish. From your very first phone call through design, production, and installation — you&apos;re working with the same person who stakes their name on the final result. No hand-offs, no runaround.
            </p>
            <p>
              We believe a cabinet should be built the way it was meant to be — with quality materials, skilled hands, and an uncompromising commitment to getting every detail right. Whether it&apos;s a single custom kitchen or a 200-unit commercial project, that standard never changes.
            </p>
          </motion.div>
        </div>
      </section>

      <GoldDivider className="my-16" />

      <section className="px-4 py-16 md:px-6 md:py-24" style={{ backgroundColor: '#1A1A1A' }}>
        <div className="mx-auto max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-2xl font-semibold"
            style={{ color: '#F5F0E8' }}
          >
            Meet the Owner
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
                Reuben Miller
              </h3>
              <p className="mt-1 text-sm" style={{ color: '#6B6560' }}>
                Owner & Lead Designer
              </p>
              <p className="mt-4" style={{ color: '#A39E93' }}>
                With roots in Southern Michigan&apos;s woodworking tradition, Reuben personally oversees every project from initial design through final installation. He leads the design process using professional 3D rendering software, so you can see your kitchen before a single board is cut.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <GoldDivider className="my-16" />

      <section className="px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-2xl font-semibold"
            style={{ color: '#F5F0E8' }}
          >
            Our Production Facility
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-6"
            style={{ color: '#A39E93' }}
          >
            Our full-scale production facility is equipped with both precision CNC technology and traditional handcraft capabilities. This combination allows us to deliver consistent, high-quality cabinetry at any scale — whether you need one custom kitchen or cabinetry for an entire apartment complex. Our team of skilled craftsmen brings decades of combined woodworking experience to every piece that leaves our shop.
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

      <GoldDivider className="my-16" />

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

      <GoldDivider className="my-16" />

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
