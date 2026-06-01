'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function HangerIcon({ size = 30 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M16 4C16 4 19 4 19 7C19 9 17.5 9.8 16 10.5"
        stroke="#F5C518" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      />
      <path
        d="M16 10.5L2.5 22.5H29.5L16 10.5Z"
        stroke="#F5C518" strokeWidth="2" strokeLinejoin="round" fill="rgba(245,197,24,0.04)"
      />
      <line x1="2.5" y1="26" x2="29.5" y2="26" stroke="#F5C518" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  const navLinks = [
    { label: 'Fonctionnalités', href: 'features' },
    { label: 'Tarifs', href: 'pricing' },
    { label: "Liste d'attente", href: 'waitlist' },
  ]

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0F0E1A]/80 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.4)]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group" aria-label="Outfity accueil">
            <HangerIcon />
            <span className="text-xl font-extrabold text-white tracking-tight">Outfity</span>
          </a>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={`#${l.href}`}
                onClick={scrollTo(l.href)}
                className="text-[#A0A0B0] hover:text-white text-sm font-medium transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <button
            onClick={scrollTo('waitlist')}
            className="hidden md:block bg-gradient-to-r from-[#FFE878] to-[#F5C518] text-[#0F0E1A] font-bold px-5 py-2.5 rounded-full text-sm hover:brightness-110 active:scale-95 transition-all duration-200 shadow-[0_0_20px_rgba(245,197,24,0.3)]"
          >
            Rejoindre la liste
          </button>

          {/* Mobile CTA */}
          <button
            onClick={scrollTo('waitlist')}
            className="md:hidden bg-gradient-to-r from-[#FFE878] to-[#F5C518] text-[#0F0E1A] font-bold px-4 py-2 rounded-full text-xs active:scale-95 transition-all"
          >
            Rejoindre
          </button>
        </div>
      </div>
    </motion.header>
  )
}
