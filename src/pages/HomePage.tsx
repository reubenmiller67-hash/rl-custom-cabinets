import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiChevronDown } from 'react-icons/hi'
import { FiCheckSquare, FiUsers, FiMapPin, FiTool } from 'react-icons/fi'
import { IoStar } from 'react-icons/io5'
import PlaceholderImage from '../components/ui/PlaceholderImage'

const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
  }),
}

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

const featuredProjects = [
  { name: 'Modern Kitchen Remodel', type: 'Kitchen' },
  { name: 'Master Bath Suite', type: 'Bathroom' },
  { name: 'Downtown Apartments', type: 'Commercial' },
  { name: 'Farmhouse Kitchen', type: 'Kitchen' },
  { name: 'Spa Bathroom', type: 'Bathroom' },
  { name: 'Senior Living Commons', type: 'Commercial' },
]

const processSteps = [
  { title: 'Consultation', desc: 'Free in-home or virtual design consultation' },
  { title: 'Design', desc: '3D renderings and material selection' },
  { title: 'Build', desc: 'Precision crafted in our 40-person facility' },
  { title: 'Install', desc: 'Professional installation by our team' },
  { title: 'Enjoy', desc: 'Your dream space, built to last generations' },
]

const testimonials = [
  { quote: 'R&L transformed our kitchen beyond what we imagined. The craftsmanship is incredible.', name: 'Placeholder Name', location: 'Kalamazoo, MI', stars: 5 },
  { quote: 'Professional from start to finish. They delivered 200 units on time and on budget.', name: 'Placeholder Name', location: 'Property Manager', stars: 5 },
  { quote: 'The custom built-ins they designed for our home office are absolutely stunning.', name: 'Placeholder Name', location: 'Battle Creek, MI', stars: 5 },
]

const whyCards = [
  { icon: FiCheckSquare, title: 'True Custom', desc: 'Every cabinet built to your exact specifications. No stock sizes, no compromises.' },
  { icon: FiUsers, title: '40-Person Production', desc: 'Large-scale capacity with small-shop attention to detail.' },
  { icon: FiMapPin, title: 'Serving Southern Michigan', desc: 'Kalamazoo, Battle Creek, South Bend, Grand Rapids and beyond.' },
  { icon: FiTool, title: 'Design to Installation', desc: 'One team handles your project from first sketch to final installation.' },
]

const serviceCities = [
  'kalamazoo', 'battle-creek', 'south-bend', 'grand-rapids', 'coldwater', 'three-rivers',
  'sturgis', 'hillsdale', 'elkhart', 'goshen', 'fort-wayne', 'lansing',
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative flex min-h-screen flex-col items-center justify-center px-4 text-center"
        style={{
          background: 'linear-gradient(180deg, #0D0D0D 0%, #1A1A1A 100%)',
          backgroundImage: 'radial-gradient(ellipse at 50% 0%, rgba(201, 168, 76, 0.06) 0%, transparent 50%), linear-gradient(180deg, #0D0D0D 0%, #1A1A1A 100%)',
        }}
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.h1
            variants={item}
            className="font-heading text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl"
            style={{ color: '#F5F0E8' }}
          >
            Handcrafted Cabinets. Timeless Design.
          </motion.h1>
          <motion.p
            variants={item}
            className="mt-6 text-lg md:text-xl"
            style={{ color: '#A39E93' }}
          >
            Custom residential and commercial cabinetry, built with precision in Southern Michigan.
          </motion.p>
          <motion.div variants={item} className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/residential"
              className="rounded-lg px-8 py-3.5 font-medium transition-colors hover:opacity-90"
              style={{ backgroundColor: '#C9A84C', color: '#0D0D0D' }}
            >
              Explore Residential
            </Link>
            <Link
              to="/commercial"
              className="rounded-lg border-2 px-8 py-3.5 font-medium transition-colors hover:bg-[#C9A84C] hover:text-[#0D0D0D]"
              style={{ borderColor: '#C9A84C', color: '#C9A84C' }}
            >
              Explore Commercial
            </Link>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <HiChevronDown className="h-8 w-8 animate-bounce" style={{ color: '#C9A84C' }} />
        </motion.div>
      </section>

      {/* Dual Path */}
      <section className="px-4 py-20 md:px-6 lg:py-28" style={{ backgroundColor: '#0D0D0D' }}>
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              whileHover={{ scale: 1.02 }}
              className="overflow-hidden rounded-lg border transition-colors"
              style={{ backgroundColor: '#242424', borderColor: '#333333' }}
            >
              <PlaceholderImage className="min-h-[280px]" />
              <div className="p-8">
                <h2 className="font-heading text-2xl font-semibold" style={{ color: '#C9A84C' }}>
                  RESIDENTIAL
                </h2>
                <p className="mt-3" style={{ color: '#A39E93' }}>
                  Custom kitchens, bathrooms, and built-ins designed around your life.
                </p>
                <Link
                  to="/residential"
                  className="mt-4 inline-flex items-center font-medium transition-colors hover:text-[#E2C873]"
                  style={{ color: '#C9A84C' }}
                >
                  Explore Residential →
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              whileHover={{ scale: 1.02 }}
              className="overflow-hidden rounded-lg border transition-colors"
              style={{ backgroundColor: '#242424', borderColor: '#333333' }}
            >
              <PlaceholderImage className="min-h-[280px]" />
              <div className="p-8">
                <h2 className="font-heading text-2xl font-semibold" style={{ color: '#C9A84C' }}>
                  COMMERCIAL & MULTI-UNIT
                </h2>
                <p className="mt-3" style={{ color: '#A39E93' }}>
                  Scalable production for apartments, hotels, and multi-family projects. 40-person production facility.
                </p>
                <Link
                  to="/commercial"
                  className="mt-4 inline-flex items-center font-medium transition-colors hover:text-[#E2C873]"
                  style={{ color: '#C9A84C' }}
                >
                  Explore Commercial →
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why R&L */}
      <section className="px-4 py-20 md:px-6 lg:py-28" style={{ backgroundColor: '#1A1A1A' }}>
        <div className="mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl font-semibold md:text-4xl"
            style={{ color: '#C9A84C' }}
          >
            Why Choose R&L Custom Cabinets
          </motion.h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-lg border-l-4 p-6"
                style={{ backgroundColor: '#242424', borderColor: '#C9A84C' }}
              >
                <card.icon className="h-10 w-10" style={{ color: '#C9A84C' }} />
                <h3 className="mt-4 font-heading text-lg font-semibold" style={{ color: '#F5F0E8' }}>
                  {card.title}
                </h3>
                <p className="mt-2 text-sm" style={{ color: '#A39E93' }}>
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="px-4 py-20 md:px-6 lg:py-28" style={{ backgroundColor: '#0D0D0D' }}>
        <div className="mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl font-semibold md:text-4xl"
            style={{ color: '#F5F0E8' }}
          >
            Our Recent Work
          </motion.h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((proj, i) => (
              <motion.div
                key={proj.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="group relative overflow-hidden rounded-lg"
                style={{ backgroundColor: '#242424' }}
              >
                <div className="relative min-h-[220px]">
                  <PlaceholderImage className="min-h-[220px] w-full" />
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center bg-[#C9A84C]/20 opacity-0 transition-opacity group-hover:opacity-100"
                    style={{ color: '#0D0D0D' }}
                  >
                    <span className="font-medium">View Project →</span>
                  </div>
                </div>
                <div className="border-t p-4" style={{ borderColor: '#333333' }}>
                  <p className="font-medium" style={{ color: '#F5F0E8' }}>{proj.name}</p>
                  <span className="mt-1 inline-block text-xs" style={{ color: '#C9A84C' }}>{proj.type}</span>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <Link
              to="/portfolio"
              className="font-medium transition-colors hover:text-[#E2C873]"
              style={{ color: '#C9A84C' }}
            >
              View All Projects →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Process Preview */}
      <section className="px-4 py-20 md:px-6 lg:py-28" style={{ backgroundColor: '#1A1A1A' }}>
        <div className="mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl font-semibold md:text-4xl"
            style={{ color: '#F5F0E8' }}
          >
            Our Process
          </motion.h2>
          <div className="relative mt-12 flex flex-wrap justify-center gap-6 overflow-x-auto pb-4 md:flex-nowrap md:gap-2">
            {/* Gold line behind circles on desktop */}
            <div className="absolute top-6 left-0 right-0 hidden h-0.5 md:block" style={{ backgroundColor: '#C9A84C' }} />
            {processSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative z-10 flex min-w-[140px] flex-shrink-0 flex-col items-center text-center"
              >
                <div
                  className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full text-lg font-semibold"
                  style={{ backgroundColor: '#C9A84C', color: '#0D0D0D' }}
                >
                  {i + 1}
                </div>
                <h3 className="mt-4 font-heading text-sm font-semibold md:text-base" style={{ color: '#F5F0E8' }}>{step.title}</h3>
                <p className="mt-1 text-xs md:text-sm" style={{ color: '#A39E93' }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 py-20 md:px-6 lg:py-28" style={{ backgroundColor: '#0D0D0D' }}>
        <div className="mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl font-semibold md:text-4xl"
            style={{ color: '#F5F0E8' }}
          >
            What Our Clients Say
          </motion.h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-lg border p-6"
                style={{ backgroundColor: '#242424', borderColor: '#333333' }}
              >
                <p className="italic" style={{ color: '#A39E93' }}>&ldquo;{t.quote}&rdquo;</p>
                <p className="mt-4 font-medium" style={{ color: '#F5F0E8' }}>{t.name}</p>
                <p className="text-sm" style={{ color: '#6B6560' }}>{t.location}</p>
                <div className="mt-2 flex gap-0.5" style={{ color: '#C9A84C' }}>
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <IoStar key={j} className="h-4 w-4" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20 md:px-6 lg:py-28" style={{ backgroundColor: '#1A1A1A' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="font-heading text-3xl font-semibold md:text-4xl" style={{ color: '#F5F0E8' }}>
            Ready to Start Your Project?
          </h2>
          <p className="mt-4 text-lg" style={{ color: '#A39E93' }}>
            Get a free design consultation. No obligation, no pressure.
          </p>
          <Link
            to="/quote"
            className="mt-8 inline-block rounded-lg px-10 py-4 font-medium transition-colors hover:opacity-90"
            style={{ backgroundColor: '#C9A84C', color: '#0D0D0D' }}
          >
            Get Your Free Quote
          </Link>
          <p className="mt-6 text-sm" style={{ color: '#6B6560' }}>
            Or call us: (XXX) XXX-XXXX
          </p>
        </motion.div>
      </section>

      {/* Service Areas Preview */}
      <section className="px-4 py-20 md:px-6 lg:py-28" style={{ backgroundColor: '#0D0D0D' }}>
        <div className="mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl font-semibold md:text-4xl"
            style={{ color: '#F5F0E8' }}
          >
            Proudly Serving Southern Michigan & Northern Indiana
          </motion.h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {serviceCities.map((slug) => (
              <Link
                key={slug}
                to={`/service-areas/${slug}`}
                className="rounded-lg border px-4 py-2 text-sm font-medium transition-colors hover:border-[#C9A84C] hover:text-[#C9A84C]"
                style={{ borderColor: '#333333', color: '#A39E93' }}
              >
                {slug.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
              </Link>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <Link
              to="/service-areas"
              className="font-medium transition-colors hover:text-[#E2C873]"
              style={{ color: '#C9A84C' }}
            >
              View All Service Areas →
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
