import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PlaceholderImage from '../components/ui/PlaceholderImage'
import GoldDivider from '../components/ui/GoldDivider'

const steps = [
  { title: 'Free Consultation', desc: 'Meet directly with the owner for a free in-home or virtual design consultation. We\'ll discuss your vision, take measurements, and start planning your project — no salespeople, no middlemen.', image: '/images/process/consultation.jpg', alt: 'Design consultation' },
  { title: 'Design & Selection', desc: 'Using professional 3D design software, we\'ll create detailed renderings of your project so you can see exactly what your space will look like. Select door styles, finishes, hardware, and countertops with confidence before we build a single cabinet.', image: '/images/process/design.jpg', alt: '3D kitchen design' },
  { title: 'Crafting', desc: 'Every cabinet is built in our full-scale production facility by skilled craftsmen with deep roots in the region\'s woodworking tradition. We combine precision CNC technology with traditional handcraft techniques, and every piece goes through rigorous quality checkpoints before it leaves our shop.', image: '/images/process/crafting.jpg', alt: 'Cabinet craftsmanship' },
  { title: 'Installation', desc: 'Our professional crew installs your cabinetry. We keep the worksite clean and pay attention to every detail so the result is seamless.', image: '/images/process/installation.jpg', alt: 'Cabinet installation' },
  { title: 'Final Walkthrough', desc: 'We inspect the finished project with you, ensure everything is perfect, and review care and warranty so you can enjoy your new space for generations.', image: '/images/process/walkthrough.jpg', alt: 'Final walkthrough' },
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

      <GoldDivider className="my-16" />

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
                  <PlaceholderImage src={step.image} alt={step.alt} className="min-h-[200px] w-full max-w-md" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <GoldDivider className="my-16" />

      <section className="px-4 py-12 md:px-6" style={{ backgroundColor: '#1A1A1A' }}>
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-heading text-lg font-medium" style={{ color: '#C9A84C' }}>
            Most residential projects complete in 6–10 weeks from design approval.
          </p>
        </div>
      </section>

      <GoldDivider className="my-16" />

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
