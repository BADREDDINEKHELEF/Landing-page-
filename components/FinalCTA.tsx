'use client'

import { motion } from 'framer-motion'

export default function FinalCTA() {
  const scrollToWaitlist = () => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="py-28 relative overflow-hidden">
      {/* Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full pointer-events-none blur-[100px]"
        style={{ background: 'linear-gradient(90deg, rgba(155,43,224,0.18), rgba(233,30,140,0.14))' }}
      />
      {/* Decorative ring */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ border: '1px solid rgba(155,43,224,0.08)' }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ border: '1px solid rgba(155,43,224,0.04)' }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-white mb-6 leading-tight tracking-tight">
            Prêt à transformer{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #9B2BE0, #E91E8C)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              votre style ?
            </span>
          </h2>

          <p className="text-[#A0A0B0] text-lg mb-10 leading-relaxed">
            Rejoignez la liste d'attente —{' '}
            <span className="text-[#F5C518] font-semibold">1 mois Premium offert</span>{' '}
            aux 500 premiers.
          </p>

          <motion.button
            onClick={scrollToWaitlist}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2.5 font-extrabold px-12 py-5 rounded-full text-lg text-[#0F0E1A] transition-all duration-200"
            style={{
              background: 'linear-gradient(90deg, #FFE878, #F5C518)',
              boxShadow: '0 0 50px rgba(245,197,24,0.4), 0 10px 40px rgba(245,197,24,0.2)',
            }}
          >
            Rejoindre maintenant
            <span>→</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
