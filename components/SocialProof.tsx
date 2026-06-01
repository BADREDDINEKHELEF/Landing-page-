'use client'

import { motion } from 'framer-motion'

const avatars = [
  { initial: 'Y', color: '#9B2BE0' },
  { initial: 'S', color: '#E91E8C' },
  { initial: 'A', color: '#F5C518' },
  { initial: 'M', color: '#4F8EF7' },
  { initial: 'L', color: '#2BE09B' },
]

export default function SocialProof() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
      className="py-6 border-y border-white/[0.05]"
      style={{ background: 'rgba(255,255,255,0.015)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          {/* Avatar stack */}
          <div className="flex -space-x-2.5">
            {avatars.map((a, i) => (
              <div
                key={i}
                className="w-9 h-9 rounded-full border-2 border-[#0F0E1A] flex items-center justify-center text-[11px] font-bold text-white ring-0"
                style={{ backgroundColor: a.color }}
              >
                {a.initial}
              </div>
            ))}
          </div>

          {/* Stars */}
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} className="w-4 h-4 fill-[#F5C518]" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
            <span className="text-[#F5C518] font-bold text-sm ml-1.5">4.9</span>
          </div>

          {/* Text */}
          <p className="text-[#A0A0B0] text-sm text-center sm:text-left">
            Déjà attendu par des centaines de personnes à{' '}
            <span className="text-white font-semibold">Alger</span>,{' '}
            <span className="text-white font-semibold">Oran</span>,{' '}
            <span className="text-white font-semibold">Constantine</span>...
          </p>
        </div>
      </div>
    </motion.div>
  )
}
