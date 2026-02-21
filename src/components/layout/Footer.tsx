import { Link } from 'react-router-dom'
import GoldDivider from '../ui/GoldDivider'

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
        <GoldDivider className="mb-12" width="max-w-lg" />
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Link to="/" className="inline-block">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 120" className="h-16 md:h-20 mx-auto md:mx-0" aria-label="R&amp;L Custom Cabinets">
              <defs>
                <linearGradient id="footerGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#E2C873" stopOpacity={1} />
                  <stop offset="50%" stopColor="#C9A84C" stopOpacity={1} />
                  <stop offset="100%" stopColor="#A88A3D" stopOpacity={1} />
                </linearGradient>
                <linearGradient id="footerGoldLine" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#A88A3D" stopOpacity={0} />
                  <stop offset="20%" stopColor="#C9A84C" stopOpacity={1} />
                  <stop offset="80%" stopColor="#C9A84C" stopOpacity={1} />
                  <stop offset="100%" stopColor="#A88A3D" stopOpacity={0} />
                </linearGradient>
              </defs>
              <text x="200" y="58" textAnchor="middle" fontFamily="Playfair Display, Georgia, serif" fontSize={56} fontWeight={700} letterSpacing={8} fill="url(#footerGoldGrad)">R&amp;L</text>
              <line x1="60" y1="72" x2="340" y2="72" stroke="url(#footerGoldLine)" strokeWidth={1}/>
              <text x="200" y="95" textAnchor="middle" fontFamily="Inter, Helvetica Neue, Arial, sans-serif" fontSize={16} fontWeight={400} letterSpacing={10} fill="#F5F0E8">CUSTOM CABINETS</text>
              <polygon points="45,72 50,67 55,72 50,77" fill="#C9A84C" opacity={0.8}/>
              <polygon points="345,72 350,67 355,72 350,77" fill="#C9A84C" opacity={0.8}/>
            </svg>
            </Link>
            <p className="mt-3 text-sm" style={{ color: '#A39E93' }}>
              Handcrafted Excellence. Rooted in Tradition.
            </p>
            <p className="mt-2 text-sm" style={{ color: '#A39E93' }}>
              Serving Southern Michigan & Northern Indiana
            </p>
            <a
              href="tel:5172279490"
              className="mt-1 block text-sm transition-colors hover:text-[#C9A84C]"
              style={{ color: '#6B6560' }}
            >
              (517) 227-9490
            </a>
            <a
              href="mailto:rlcustomcabinets67@gmail.com"
              className="mt-1 block text-sm transition-colors hover:text-[#C9A84C]"
              style={{ color: '#6B6560' }}
            >
              rlcustomcabinets67@gmail.com
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
