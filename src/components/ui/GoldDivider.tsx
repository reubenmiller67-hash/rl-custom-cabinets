import { motion } from 'framer-motion'

interface GoldDividerProps {
  className?: string
  width?: string
}

const GoldDivider = ({ className = '', width = 'max-w-md' }: GoldDividerProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`flex items-center justify-center ${width} mx-auto ${className}`}
    >
      {/* Left line */}
      <div
        className="flex-1 h-px"
        style={{
          background: 'linear-gradient(to right, transparent, #C9A84C)',
        }}
      />
      {/* Diamond accent */}
      <div className="mx-3">
        <svg width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
          <polygon points="5,0 10,5 5,10 0,5" fill="#C9A84C" opacity="0.8" />
        </svg>
      </div>
      {/* Right line */}
      <div
        className="flex-1 h-px"
        style={{
          background: 'linear-gradient(to left, transparent, #C9A84C)',
        }}
      />
    </motion.div>
  )
}

export default GoldDivider
