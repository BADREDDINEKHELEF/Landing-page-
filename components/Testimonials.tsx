'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Yasmine B.',
    city: 'Alger',
    rating: 5,
    quote:
      "Enfin une appli qui comprend le style algérien ! J'ai trouvé ma tenue d'Aïd parfaite en moins de 2 minutes. C'est vraiment magique ✨",
    initial: 'Y',
    color: '#9B2BE0',
  },
  {
    name: 'Sara M.',
    city: 'Oran',
    rating: 5,
    quote:
      "L'IA a analysé ma morphologie et m'a proposé des tenues que je n'aurais jamais osé essayer — et pourtant elles me vont parfaitement. Je suis bluffée.",
    initial: 'S',
    color: '#E91E8C',
  },
  {
    name: 'Amira K.',
    city: 'Constantine',
    rating: 5,
    quote:
      "Plus besoin de passer des heures devant mon armoire. Outfity me donne le look parfait chaque matin. Je recommande à toutes mes amies !",
    initial: 'A',
    color: '#F5C518',
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 fill-[#F5C518]" viewBox="0 0 20 20">
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-28 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(26,26,46,0.1) 50%, transparent 100%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#F5C518] text-xs font-bold tracking-[0.2em] uppercase mb-4">Témoignages</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">Ce qu'ils disent</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.14, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
              className="rounded-3xl p-8 flex flex-col"
              style={{
                background: 'rgba(26,26,46,0.6)',
                border: '1px solid rgba(255,255,255,0.07)',
                backdropFilter: 'blur(20px)',
              }}
            >
              <Stars count={t.rating} />

              <blockquote className="text-white/80 leading-relaxed text-sm mt-5 mb-7 flex-1">
                "{t.quote}"
              </blockquote>

              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0 shadow-lg"
                  style={{ backgroundColor: t.color }}
                >
                  {t.initial}
                </div>
                <div>
                  <p className="text-white font-bold text-sm">{t.name}</p>
                  <p className="text-[#A0A0B0] text-xs">{t.city}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
