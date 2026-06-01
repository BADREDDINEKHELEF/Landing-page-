'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    icon: '📸',
    step: '01',
    title: 'Analysez votre visage',
    description:
      'Teint, forme du visage, morphologie — Outfity vous comprend en profondeur pour des recommandations ultra-personnalisées.',
    accent: '#9B2BE0',
    glowColor: 'rgba(155,43,224,0.15)',
    borderColor: 'rgba(155,43,224,0.2)',
  },
  {
    icon: '👗',
    step: '02',
    title: 'Importez votre garde-robe',
    description:
      "Prenez vos vêtements en photo — l'IA classe et tag automatiquement chaque pièce pour créer votre dressing digital.",
    accent: '#F5C518',
    glowColor: 'rgba(245,197,24,0.08)',
    borderColor: 'rgba(245,197,24,0.2)',
  },
  {
    icon: '✨',
    step: '03',
    title: 'Obtenez des tenues IA',
    description:
      "Parfaites pour l'occasion, la météo, votre style. Des looks du quotidien aux tenues de mariage algérien — toujours juste.",
    accent: '#E91E8C',
    glowColor: 'rgba(233,30,140,0.12)',
    borderColor: 'rgba(233,30,140,0.2)',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-18"
        >
          <p className="text-[#F5C518] text-xs font-bold tracking-[0.2em] uppercase mb-4">Comment ça marche ?</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            3 étapes.{' '}
            <span style={{ background: 'linear-gradient(90deg, #9B2BE0, #E91E8C)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Look parfait.
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.14, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative rounded-3xl p-8 cursor-default overflow-hidden group"
              style={{
                background: `linear-gradient(160deg, ${s.glowColor} 0%, rgba(26,26,46,0.6) 100%)`,
                border: `1px solid ${s.borderColor}`,
                backdropFilter: 'blur(16px)',
              }}
            >
              {/* Step number watermark */}
              <div
                className="absolute top-4 right-5 text-6xl font-extrabold opacity-[0.06] select-none"
                style={{ color: s.accent }}
              >
                {s.step}
              </div>

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-lg"
                style={{ background: `linear-gradient(135deg, ${s.glowColor}, rgba(26,26,46,0.8))`, border: `1px solid ${s.borderColor}` }}
              >
                {s.icon}
              </div>

              {/* Label */}
              <p className="text-xs font-bold tracking-[0.18em] uppercase mb-2.5" style={{ color: s.accent }}>
                Étape {i + 1}
              </p>

              <h3 className="text-white text-xl font-extrabold mb-3 tracking-tight">{s.title}</h3>
              <p className="text-[#A0A0B0] leading-relaxed text-sm">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
