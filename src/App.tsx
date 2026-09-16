import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from '@/pages/home-page'
import AboutPage from '@/pages/about-page'
import ServicesPage from '@/pages/services-page'
import ContactPage from '@/pages/contact-page'

export function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}
