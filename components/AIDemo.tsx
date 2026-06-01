'use client'

import { motion } from 'framer-motion'

const features = [
  { icon: '🕌', text: "Tenues pour l'Aïd, mariages algériens, bureau, quotidien" },
  { icon: '🎨', text: 'Compatibilité couleurs et morphologie' },
  { icon: '⭐', text: 'Score de style et conseils personnalisés' },
  { icon: '🇩🇿', text: 'Style traditionnel algérien intégré' },
  { icon: '🤖', text: 'Powered by Gemini 2.5 AI' },
]

const outfitItems = [
  { label: 'Qamis', bg: 'linear-gradient(160deg, #2d8b5a, #1a5c3a)' },
  { label: 'Burnous', bg: 'linear-gradient(160deg, #b8860b, #8b6508)' },
  { label: 'Pantalon', bg: 'linear-gradient(160deg, #2C2C5E, #1A1A3E)' },
  { label: 'Chaussures', bg: 'linear-gradient(160deg, #5D3A1A, #3D2010)' },
]

function OutfitPhone() {
  return (
    <div className="relative select-none">
      <motion.div
        animate={{ scale: [1, 1.06, 1], opacity: [0.45, 0.65, 0.45] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-0 rounded-[2.8rem] blur-3xl"
        style={{ background: 'linear-gradient(135deg, rgba(155,43,224,0.4), rgba(233,30,140,0.3))' }}
      />

      <div
        className="relative w-[260px] h-[510px] rounded-[2.8rem] overflow-hidden border border-white/10 shadow-2xl mx-auto"
        style={{ background: 'linear-gradient(180deg, #1A1A2E 0%, #0F0E1A 100%)' }}
      >
        {/* Notch */}
        <div className="flex justify-center pt-4 pb-2">
          <div className="w-20 h-4 bg-[#080810] rounded-full" />
        </div>

        {/* Header */}
        <div className="px-4 pb-3 flex items-center justify-between">
          <div>
            <p className="text-[#F5C518] font-extrabold text-sm">Tenue Aïd 🌙</p>
            <p className="text-[#A0A0B0] text-[10px]">Style traditionnel × moderne</p>
          </div>
          <div
            className="text-white text-[9px] font-bold px-2.5 py-1 rounded-full"
            style={{ background: 'linear-gradient(90deg, #9B2BE0, #E91E8C)' }}
          >
            IA Match
          </div>
        </div>

        {/* Outfit grid */}
        <div className="grid grid-cols-2 gap-2 px-4 mb-3">
          {outfitItems.map((item) => (
            <div
              key={item.label}
              className="h-24 rounded-2xl flex items-end p-2.5 shadow-lg"
              style={{ background: item.bg }}
            >
              <span className="text-white/70 text-[9px] font-semibold bg-black/30 rounded px-1">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Score */}
        <div className="mx-4 rounded-2xl p-3" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-white text-xs font-semibold">Score de style</span>
            <span className="text-[#F5C518] text-sm font-extrabold">96/100</span>
          </div>
          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '96%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
              className="h-full rounded-full"
              style={{ background: 'linear-gradient(90deg, #9B2BE0, #F5C518)' }}
            />
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 px-4 mt-3">
          {['Aïd', 'Traditionnel', 'Gemini 2.5', '🇩🇿 Made in DZ'].map((tag) => (
            <span key={tag} className="text-[9px] px-2 py-0.5 rounded-full bg-white/[0.05] border border-white/10 text-white/55">
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="absolute bottom-0 inset-x-0 p-4" style={{ background: 'linear-gradient(to top, #0F0E1A, transparent)' }}>
          <div
            className="rounded-full py-2.5 text-center text-[#0F0E1A] text-xs font-extrabold"
            style={{ background: 'linear-gradient(90deg, #FFE878, #F5C518)' }}
          >
            Générer une autre tenue ✨
          </div>
        </div>
      </div>
    </div>
  )
}

export default function AIDemo() {
  return (
    <section className="py-28 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(26,26,46,0.15) 50%, transparent 100%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[#F5C518] text-xs font-bold tracking-[0.2em] uppercase mb-4">Intelligence Artificielle</p>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
              L'IA qui vous{' '}
              <span style={{ background: 'linear-gradient(90deg, #9B2BE0, #E91E8C)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                comprend
              </span>
            </h2>
            <p className="text-[#A0A0B0] text-lg leading-relaxed mb-10 max-w-[440px]">
              De l'Aïd au quotidien, Outfity s'adapte à votre culture, votre morphologie et vos occasions — avec une précision que seule l'IA peut offrir.
            </p>

            <div className="space-y-5">
              {features.map((f, i) => (
                <motion.div
                  key={f.text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.09 }}
                  className="flex items-center gap-4"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-lg flex-shrink-0 shadow-md"
                    style={{
                      background: 'linear-gradient(135deg, rgba(155,43,224,0.15), rgba(233,30,140,0.1))',
                      border: '1px solid rgba(155,43,224,0.2)',
                    }}
                  >
                    {f.icon}
                  </div>
                  <p className="text-white/80 leading-relaxed text-sm">{f.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center"
          >
            <OutfitPhone />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
