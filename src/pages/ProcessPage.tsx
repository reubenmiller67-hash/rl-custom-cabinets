import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PlaceholderImage from '../components/ui/PlaceholderImage'

const steps = [
  {
    title: 'Free Consultation',
    desc: 'We start with a free in-home or virtual design consultation. We discuss your vision, take measurements, and understand how you use the space. No obligation.',
  },
  {
    title: 'Design & Selection',
    desc: 'You\'ll receive 3D renderings and work with us on material selection, door styles, and finishes. We make sure every detail matches your taste and budget.',
  },
  {
    title: 'Crafting',
    desc: 'Your cabinets are built in our Bronson facility. We use precision CNC and hand finishing, with quality checkpoints at every stage.',
  },
  {
    title: 'Installation',
    desc: 'Our professional crew installs your cabinetry. We keep the worksite clean and pay attention to every detail so the result is seamless.',
  },
  {
    title: 'Final Walkthrough',
    desc: 'We inspect the finished project with you, ensure everything is perfect, and review care and warranty so you can enjoy your new space for generations.',
  },
]

export default function ProcessPage() {
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
            Our Process
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mt-4 text-lg"
            style={{ color: '#A39E93' }}
          >
            From first conversation to final installation
          </motion.p>
        </div>
      </section>

      <section className="px-4 pb-16 md:px-6 md:pb-24">
        <div className="mx-auto max-w-4xl">
          {steps.map((step, i) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex flex-col gap-8 py-12 md:flex-row md:items-start md:gap-12"
            >
              <div
                className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full text-xl font-semibold"
                style={{ backgroundColor: '#C9A84C', color: '#0D0D0D' }}
              >
                {i + 1}
              </div>
              <div className="flex-1">
                <h2 className="font-heading text-2xl font-semibold" style={{ color: '#F5F0E8' }}>
                  {step.title}
                </h2>
                <p className="mt-4" style={{ color: '#A39E93' }}>
                  {step.desc}
                </p>
                <div className="mt-6">
                  <PlaceholderImage className="min-h-[200px] w-full max-w-md" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="px-4 py-12 md:px-6" style={{ backgroundColor: '#1A1A1A' }}>
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-heading text-lg font-medium" style={{ color: '#C9A84C' }}>
            Most residential projects complete in 6–10 weeks from design approval.
          </p>
        </div>
      </section>

      <section className="border-t px-4 py-16 md:px-6" style={{ borderColor: '#333333' }}>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-2xl font-semibold" style={{ color: '#F5F0E8' }}>
            Ready to get started?
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
