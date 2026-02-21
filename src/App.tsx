import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'
import ResidentialPage from './pages/ResidentialPage'
import CommercialPage from './pages/CommercialPage'
import PortfolioPage from './pages/PortfolioPage'
import DoorStylesPage from './pages/DoorStylesPage'
import CountertopsPage from './pages/CountertopsPage'
import AboutPage from './pages/AboutPage'
import ProcessPage from './pages/ProcessPage'
import ServiceAreasPage from './pages/ServiceAreasPage'
import CityPage from './pages/CityPage'
import BlogPage from './pages/BlogPage'
import BlogPostPage from './pages/BlogPostPage'
import ContactPage from './pages/ContactPage'
import QuotePage from './pages/QuotePage'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#0D0D0D' }}>
        <Navbar />
        <main className="flex-1">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/residential" element={<ResidentialPage />} />
              <Route path="/commercial" element={<CommercialPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/door-styles" element={<DoorStylesPage />} />
              <Route path="/countertops" element={<CountertopsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/process" element={<ProcessPage />} />
              <Route path="/service-areas" element={<ServiceAreasPage />} />
              <Route path="/service-areas/:city" element={<CityPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/quote" element={<QuotePage />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
