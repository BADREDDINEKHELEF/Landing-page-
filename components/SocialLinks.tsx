'use client'

import { motion } from 'framer-motion'

const socials = [
  {
    name: 'Instagram',
    handle: '@badro_khelef',
    description: 'Tenues, inspiration mode & coulisses du projet',
    cta: 'Suivre sur Instagram',
    url: 'https://www.instagram.com/badro_khelef?igsh=NDc5ZXhtdWwwemhk&utm_source=qr',
    gradient: 'linear-gradient(135deg, #E91E8C 0%, #9B2BE0 50%, #F5A623 100%)',
    glowColor: 'rgba(233,30,140,0.2)',
    borderColor: 'rgba(233,30,140,0.2)',
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    name: 'TikTok',
    handle: '@darkhead26',
    description: 'Vidéos mode, tendances & contenu exclusif Outfity',
    cta: 'Suivre sur TikTok',
    url: 'https://www.tiktok.com/@darkhead26?_r=1&_t=ZS-96qf5PkqBGc',
    gradient: 'linear-gradient(135deg, #010101 0%, #69C9D0 50%, #EE1D52 100%)',
    glowColor: 'rgba(105,201,208,0.15)',
    borderColor: 'rgba(105,201,208,0.2)',
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.53V6.77a4.85 4.85 0 01-1.02-.08z"/>
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    handle: 'Badreddine Khelef',
    description: 'Actualités du projet, vision produit & partnerships',
    cta: 'Suivre sur LinkedIn',
    url: 'https://www.linkedin.com/in/badreddine-khelef-70bb87372/',
    gradient: 'linear-gradient(135deg, #0077B5 0%, #00A0DC 100%)',
    glowColor: 'rgba(0,119,181,0.18)',
    borderColor: 'rgba(0,119,181,0.25)',
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
]

export default function SocialLinks() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(155,43,224,0.07) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[#F5C518] text-xs font-bold tracking-[0.2em] uppercase mb-4">
            Communauté
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Suivez l'aventure
          </h2>
          <p className="text-[#A0A0B0] text-lg mt-4 max-w-xl mx-auto">
            Rejoignez la communauté Outfity sur vos plateformes favorites.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {socials.map((s, i) => (
            <motion.a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.14, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative rounded-3xl p-8 flex flex-col gap-5 cursor-pointer overflow-hidden"
              style={{
                background: 'rgba(26,26,46,0.6)',
                border: `1px solid ${s.borderColor}`,
                backdropFilter: 'blur(20px)',
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"
                style={{ background: `radial-gradient(ellipse at 50% 0%, ${s.glowColor} 0%, transparent 70%)` }}
              />

              {/* Icon circle */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-xl flex-shrink-0"
                style={{ background: s.gradient }}
              >
                {s.icon}
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-white font-extrabold text-xl">{s.name}</h3>
                </div>
                <p className="text-[#A0A0B0] text-sm font-medium mb-3">{s.handle}</p>
                <p className="text-[#A0A0B0] text-sm leading-relaxed">{s.description}</p>
              </div>

              {/* CTA row */}
              <div className="flex items-center justify-between">
                <span
                  className="text-sm font-bold px-4 py-2 rounded-full text-white transition-all duration-200 group-hover:brightness-110"
                  style={{ background: s.gradient }}
                >
                  {s.cta}
                </span>
                <svg
                  className="w-5 h-5 text-[#A0A0B0] group-hover:text-white group-hover:translate-x-1 transition-all duration-200"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
