import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'

const navLinks = [
  {
    label: 'Residential',
    path: '/residential',
    dropdown: [
      { label: 'Kitchens', path: '/residential#kitchens' },
      { label: 'Bathrooms', path: '/residential#bathrooms' },
      { label: 'Closets', path: '/residential#closets' },
      { label: 'Built-ins', path: '/residential#built-ins' },
    ],
  },
  {
    label: 'Commercial',
    path: '/commercial',
    dropdown: [
      { label: 'Apartments', path: '/commercial#apartments' },
      { label: 'Hotels', path: '/commercial#hotels' },
      { label: 'Multi-Unit', path: '/commercial#multi-unit' },
      { label: 'Senior Living', path: '/commercial#senior-living' },
    ],
  },
  { label: 'Door Styles', path: '/door-styles' },
  { label: 'Our Work', path: '/portfolio' },
  { label: 'About', path: '/about' },
  { label: 'Service Areas', path: '/service-areas' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setOpenDropdown(null)
  }, [location.pathname])

  const isActive = (path: string) => location.pathname === path || location.pathname.startsWith(path + '/')

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(13, 13, 13, 0.95)' : '#0D0D0D',
        borderColor: '#333333',
      }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <Link to="/" className="flex items-baseline gap-1.5">
          <span className="font-heading text-2xl font-semibold" style={{ color: '#C9A84C' }}>
            R&L
          </span>
          <span className="font-sans text-sm font-medium tracking-widest" style={{ color: '#F5F0E8' }}>
            CUSTOM CABINETS
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((item) =>
            item.dropdown ? (
              <div
                key={item.path}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.path)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={item.path}
                  className="relative pb-1 text-sm font-medium transition-colors hover:opacity-90"
                  style={{ color: isActive(item.path) ? '#C9A84C' : '#F5F0E8' }}
                >
                  {item.label}
                  {isActive(item.path) && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C9A84C]" />
                  )}
                </Link>
                <AnimatePresence>
                  {openDropdown === item.path && (
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      className="absolute left-0 top-full pt-2"
                    >
                      <div
                        className="min-w-[180px] rounded border py-2"
                        style={{ backgroundColor: '#1A1A1A', borderColor: '#333333' }}
                      >
                        {item.dropdown.map((d) => (
                          <Link
                            key={d.path}
                            to={d.path}
                            className="block px-4 py-2 text-sm transition-colors hover:bg-[#242424] hover:text-[#C9A84C]"
                            style={{ color: '#A39E93' }}
                          >
                            {d.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={item.path}
                to={item.path}
                className="relative pb-1 text-sm font-medium transition-colors hover:opacity-90"
                style={{ color: isActive(item.path) ? '#C9A84C' : '#F5F0E8' }}
              >
                {item.label}
                {isActive(item.path) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C9A84C]" />
                )}
              </Link>
            )
          )}
        </div>

        <div className="hidden lg:block">
          <Link
            to="/quote"
            className="rounded px-5 py-2.5 text-sm font-medium transition-colors"
            style={{ backgroundColor: '#C9A84C', color: '#0D0D0D' }}
          >
            Get a Free Quote
          </Link>
        </div>

        <button
          type="button"
          className="rounded p-2 lg:hidden"
          style={{ color: '#F5F0E8' }}
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <HiMenu className="h-6 w-6" />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.25 }}
            className="fixed inset-y-0 right-0 z-50 w-full max-w-sm overflow-y-auto"
            style={{ backgroundColor: '#0D0D0D', borderLeft: '1px solid #333333' }}
          >
            <div className="flex items-center justify-between border-b p-4" style={{ borderColor: '#333333' }}>
              <span className="font-heading text-xl font-semibold" style={{ color: '#C9A84C' }}>
                R&L Custom Cabinets
              </span>
              <button
                type="button"
                className="rounded p-2"
                style={{ color: '#F5F0E8' }}
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <HiX className="h-6 w-6" />
              </button>
            </div>
            <div className="flex flex-col gap-1 p-4">
              {navLinks.map((item) => (
                <div key={item.path}>
                  <Link
                    to={item.path}
                    className="block rounded px-4 py-3 text-base font-medium"
                    style={{ color: isActive(item.path) ? '#C9A84C' : '#F5F0E8' }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.dropdown && (
                    <div className="ml-4 flex flex-col border-l border-[#333333] pl-3">
                      {item.dropdown.map((d) => (
                        <Link
                          key={d.path}
                          to={d.path}
                          className="py-2 text-sm"
                          style={{ color: '#A39E93' }}
                          onClick={() => setMobileOpen(false)}
                        >
                          {d.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                to="/quote"
                className="mt-4 block rounded-lg px-4 py-3 text-center font-medium"
                style={{ backgroundColor: '#C9A84C', color: '#0D0D0D' }}
                onClick={() => setMobileOpen(false)}
              >
                Get a Free Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden
        />
      )}
    </header>
  )
}
