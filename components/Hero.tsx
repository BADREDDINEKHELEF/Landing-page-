'use client'

import { motion } from 'framer-motion'

function PhoneMockup() {
  return (
    <div className="relative select-none">
      {/* Animated glow rings */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-0 rounded-[2.8rem] blur-3xl"
        style={{ background: 'linear-gradient(135deg, rgba(155,43,224,0.45), rgba(233,30,140,0.35))' }}
      />
      <motion.div
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute inset-0 rounded-[2.8rem] blur-[60px]"
        style={{ background: 'radial-gradient(ellipse, rgba(155,43,224,0.25) 0%, transparent 70%)' }}
      />

      {/* Phone body */}
      <div
        className="relative w-[272px] h-[556px] rounded-[2.8rem] overflow-hidden border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.6)]"
        style={{ background: 'linear-gradient(180deg, #1A1A2E 0%, #0F0E1A 100%)' }}
      >
        {/* Dynamic island / notch */}
        <div className="flex justify-center pt-4 pb-1">
          <div className="w-24 h-[18px] bg-[#080810] rounded-full" />
        </div>

        {/* Status bar */}
        <div className="flex items-center justify-between px-6 pb-2">
          <span className="text-[10px] text-white/50 font-medium">9:41</span>
          <div className="flex items-center gap-1">
            <div className="flex gap-px">
              {[40, 60, 80, 100].map((h, i) => (
                <div key={i} className="w-0.5 rounded-sm bg-white/60" style={{ height: `${h * 0.1}rem` }} />
              ))}
            </div>
            <svg className="w-3.5 h-3.5 text-white/60" fill="currentColor" viewBox="0 0 24 24">
              <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/>
            </svg>
            <div className="flex items-center gap-0.5">
              <div className="w-5 h-2.5 rounded-sm border border-white/50 p-px">
                <div className="w-4/5 h-full bg-white/70 rounded-sm" />
              </div>
              <div className="w-0.5 h-1.5 bg-white/50 rounded-r-sm" />
            </div>
          </div>
        </div>

        {/* App header */}
        <div className="px-5 py-3 flex items-center justify-between">
          <div>
            <p className="text-[11px] text-[#A0A0B0]">Bonjour, Yasmine 👋</p>
            <p className="text-white font-bold text-sm mt-0.5">Votre tenue du jour</p>
          </div>
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white shadow-lg"
            style={{ background: 'linear-gradient(135deg, #9B2BE0, #E91E8C)' }}
          >
            Y
          </div>
        </div>

        {/* Main outfit card */}
        <div className="mx-4 rounded-2xl overflow-hidden border border-white/[0.08]" style={{ background: 'rgba(155,43,224,0.08)' }}>
          {/* Outfit visual */}
          <div className="h-36 relative flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, rgba(155,43,224,0.15) 0%, rgba(233,30,140,0.1) 100%)' }}
          >
            {/* Clothes grid */}
            <div className="flex gap-3 items-end">
              <div className="flex flex-col gap-1.5 items-center">
                <div className="w-14 h-16 rounded-xl shadow-lg" style={{ background: 'linear-gradient(160deg, #e8d5a3, #c9b27a)' }} />
                <span className="text-[8px] text-white/50">Haut</span>
              </div>
              <div className="flex flex-col gap-1.5 items-center mb-1">
                <div className="w-14 h-12 rounded-xl shadow-lg" style={{ background: 'linear-gradient(160deg, #2C2C5E, #1A1A3E)' }} />
                <span className="text-[8px] text-white/50">Bas</span>
              </div>
              <div className="flex flex-col gap-1.5 items-center">
                <div className="w-10 h-8 rounded-xl shadow-md" style={{ background: 'linear-gradient(160deg, #8B5E3C, #6B4020)' }} />
                <span className="text-[8px] text-white/50">Chaussures</span>
              </div>
            </div>
            {/* IA badge */}
            <div className="absolute top-2.5 right-2.5 flex flex-col gap-1 items-end">
              <span className="text-[9px] text-white bg-white/10 backdrop-blur-sm px-2 py-0.5 rounded-full border border-white/20">✨ IA Match</span>
              <span className="text-[9px] text-[#F5C518] font-bold">Score : 98%</span>
            </div>
          </div>

          {/* Card info */}
          <div className="px-3 py-2.5 flex items-center justify-between">
            <div>
              <p className="text-white font-bold text-[11px]">Casual Chic</p>
              <p className="text-[#A0A0B0] text-[9px]">Idéal pour le bureau</p>
            </div>
            <div
              className="text-[#0F0E1A] text-[9px] font-extrabold px-2.5 py-1 rounded-full"
              style={{ background: 'linear-gradient(90deg, #FFE878, #F5C518)' }}
            >
              Voir
            </div>
          </div>
        </div>

        {/* Suggestions row */}
        <div className="px-5 mt-3">
          <p className="text-[#A0A0B0] text-[9px] font-semibold uppercase tracking-wider mb-2">Suggestions IA</p>
          <div className="flex gap-1.5">
            {["Pour l'Aïd", 'Bureau', 'Soirée', 'Quotidien'].map((tag) => (
              <span key={tag} className="text-[8px] px-2 py-1 rounded-full bg-white/[0.06] border border-white/10 text-white/60 whitespace-nowrap">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom navigation */}
        <div
          className="absolute bottom-0 inset-x-0 border-t border-white/[0.06] px-6 py-3.5 flex justify-around items-center backdrop-blur-sm"
          style={{ background: 'rgba(15,14,26,0.92)' }}
        >
          {[
            { icon: '🏠', active: false },
            { icon: '👗', active: false },
            { icon: '✨', active: true },
            { icon: '👤', active: false },
          ].map(({ icon, active }, i) => (
            <span key={i} className={`text-xl transition-all ${active ? 'scale-110' : 'opacity-30'}`}>{icon}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] } }),
}

export default function Hero() {
  const scrollToWaitlist = () => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px]" style={{ background: 'rgba(155,43,224,0.12)' }} />
        <div className="absolute top-1/3 right-1/5 w-[400px] h-[400px] rounded-full blur-[100px]" style={{ background: 'rgba(233,30,140,0.08)' }} />
        <div className="absolute bottom-1/4 left-1/2 w-[300px] h-[300px] rounded-full blur-[80px]" style={{ background: 'rgba(245,197,24,0.04)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24 lg:py-36 relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">
          {/* Left: copy */}
          <div>
            <motion.div
              variants={fadeUp} initial="hidden" animate="show" custom={0}
              className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 mb-6"
              style={{ background: 'rgba(245,197,24,0.07)', borderColor: 'rgba(245,197,24,0.25)' }}
            >
              <span className="text-[#F5C518] text-[11px] font-bold tracking-[0.12em] uppercase">
                AI POWERED. YOUR STYLE. PERFECTED.
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp} initial="hidden" animate="show" custom={0.1}
              className="text-[2.75rem] sm:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-[1.1] tracking-tight mb-6"
            >
              Votre garde-robe.{' '}
              <span style={{ background: 'linear-gradient(90deg, #9B2BE0, #E91E8C)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Réinventée
              </span>{' '}
              par l'IA.
            </motion.h1>

            <motion.p
              variants={fadeUp} initial="hidden" animate="show" custom={0.2}
              className="text-[#A0A0B0] text-lg leading-relaxed mb-10 max-w-[480px]"
            >
              Outfity analyse votre morphologie, votre teint et votre style pour créer des tenues parfaites — chaque jour.
            </motion.p>

            <motion.div
              variants={fadeUp} initial="hidden" animate="show" custom={0.3}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <button
                onClick={scrollToWaitlist}
                className="inline-flex items-center justify-center gap-2 font-bold px-8 py-4 rounded-full text-[#0F0E1A] text-base active:scale-95 transition-all duration-200"
                style={{ background: 'linear-gradient(90deg, #FFE878, #F5C518)', boxShadow: '0 0 32px rgba(245,197,24,0.4)' }}
              >
                Rejoindre la liste d'attente
              </button>
              <button className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-semibold px-8 py-4 rounded-full text-base hover:bg-white/[0.04] active:scale-95 transition-all duration-200">
                Voir la démo
              </button>
            </motion.div>

            <motion.div
              variants={fadeUp} initial="hidden" animate="show" custom={0.4}
              className="flex flex-wrap gap-3"
            >
              {[
                { icon: '⭐', text: '4.9 étoiles' },
                { icon: '🔥', text: '+10,000 tenues générées' },
                { icon: '🇩🇿', text: 'Fait en Algérie' },
              ].map((b) => (
                <div key={b.text} className="flex items-center gap-1.5 bg-white/[0.05] border border-white/10 rounded-full px-3 py-1.5">
                  <span className="text-sm">{b.icon}</span>
                  <span className="text-white/65 text-xs font-medium">{b.text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: phone */}
          <motion.div
            initial={{ opacity: 0, x: 60, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <PhoneMockup />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
