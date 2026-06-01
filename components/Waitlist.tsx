'use client'

import { motion } from 'framer-motion'

export default function Waitlist() {

  return (
    <section id="waitlist" className="relative py-28 overflow-hidden">
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(155,43,224,0.18) 0%, rgba(233,30,140,0.1) 40%, transparent 70%)',
        }}
      />
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8 border"
          style={{
            background: 'linear-gradient(90deg, rgba(155,43,224,0.15), rgba(233,30,140,0.15))',
            borderColor: 'rgba(155,43,224,0.35)',
          }}
        >
          <span>🔥</span>
          <span className="text-white text-sm font-semibold">Liste d'attente ouverte — Places limitées</span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-5 leading-tight tracking-tight"
        >
          Soyez parmi les premiers.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="text-[#A0A0B0] text-lg mb-12 leading-relaxed"
        >
          Inscrivez-vous maintenant et recevez{' '}
          <span className="text-[#F5C518] font-semibold">1 mois Premium offert</span>{' '}
          à l'ouverture.
        </motion.p>

        {/* Glassmorphism card with Tally form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-3xl p-7 sm:p-10 max-w-[560px] mx-auto"
          style={{
            background: 'rgba(26,26,46,0.75)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid rgba(255,255,255,0.08)',
            boxShadow: '0 0 60px rgba(155,43,224,0.12), 0 24px 60px rgba(0,0,0,0.4)',
          }}
        >
          <iframe
            src="https://tally.so/embed/1A6RPL?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="280"
            frameBorder={0}
            title="Liste d'attente Outfity"
            className="w-full"
          />

          <div className="flex items-center justify-center gap-1.5 mt-5">
            <span className="text-sm">🔒</span>
            <p className="text-[#A0A0B0] text-xs">
              Vos données sont protégées. Aucun spam, jamais.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
