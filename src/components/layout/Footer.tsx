import { Link } from 'react-router-dom'

const quickLinks = [
  { label: 'Residential', path: '/residential' },
  { label: 'Commercial', path: '/commercial' },
  { label: 'Door Styles', path: '/door-styles' },
  { label: 'Our Work', path: '/portfolio' },
  { label: 'Process', path: '/process' },
  { label: 'Contact', path: '/contact' },
]

const footerCities = [
  { label: 'Kalamazoo', slug: 'kalamazoo' },
  { label: 'Battle Creek', slug: 'battle-creek' },
  { label: 'South Bend', slug: 'south-bend' },
  { label: 'Grand Rapids', slug: 'grand-rapids' },
  { label: 'Coldwater', slug: 'coldwater' },
  { label: 'Three Rivers', slug: 'three-rivers' },
]

export default function Footer() {
  return (
    <footer className="border-t" style={{ backgroundColor: '#0D0D0D', borderColor: '#333333' }}>
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="mb-8 h-px w-full" style={{ backgroundColor: '#C9A84C' }} />
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Link to="/" className="inline-block">
              <img src="/logos/rl-logo.svg" alt="R&L Custom Cabinets" className="h-16 md:h-20" />
            </Link>
            <p className="mt-3 text-sm" style={{ color: '#A39E93' }}>
              Handcrafted Excellence. Rooted in Tradition.
            </p>
            <p className="mt-2 text-sm" style={{ color: '#A39E93' }}>
              Serving Southern Michigan & Northern Indiana
            </p>
            <p className="mt-1 text-sm" style={{ color: '#6B6560' }}>
              (XXX) XXX-XXXX
            </p>
            <a
              href="mailto:info@rlcustomcabinets.com"
              className="mt-1 block text-sm transition-colors hover:text-[#C9A84C]"
              style={{ color: '#6B6560' }}
            >
              info@rlcustomcabinets.com
            </a>
          </div>
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider" style={{ color: '#F5F0E8' }}>
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm transition-colors hover:text-[#C9A84C]"
                    style={{ color: '#A39E93' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider" style={{ color: '#F5F0E8' }}>
              Service Areas
            </h3>
            <ul className="mt-4 space-y-2">
              {footerCities.map((city) => (
                <li key={city.slug}>
                  <Link
                    to={`/service-areas/${city.slug}`}
                    className="text-sm transition-colors hover:text-[#C9A84C]"
                    style={{ color: '#A39E93' }}
                  >
                    {city.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          className="mt-12 flex flex-col items-center justify-between gap-4 border-t py-6 text-center md:flex-row"
          style={{ borderColor: '#333333' }}
        >
          <p className="text-sm" style={{ color: '#6B6560' }}>
            © 2026 R&L Custom Cabinets
          </p>
          <p className="text-sm" style={{ color: '#6B6560' }}>
            Proudly Serving Southern Michigan & Northern Indiana
          </p>
        </div>
      </div>
    </footer>
  )
}
