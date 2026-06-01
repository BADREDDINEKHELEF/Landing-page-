'use client'

import { motion } from 'framer-motion'

const plans = [
  {
    name: 'Gratuit',
    price: '0',
    suffix: 'DA/mois',
    features: [
      '3 tenues gratuites',
      'Recommandations basiques',
      'Support communautaire',
    ],
    cta: 'Commencer',
    popular: false,
  },
  {
    name: 'Basique',
    price: '499',
    suffix: 'DA/mois',
    features: [
      'Tenues illimitées',
      'IA avec garde-robe',
      'Partage WhatsApp/Instagram',
      'Support email',
    ],
    cta: 'Commencer',
    popular: false,
  },
  {
    name: 'Premium',
    price: '999',
    suffix: 'DA/mois',
    features: [
      'Tout du forfait Basique',
      'IA avancée Gemini 2.5',
      'Analyse visage & couleurs',
      'Export PDF lookbook',
      'Style traditionnel algérien',
      'Support prioritaire WhatsApp',
    ],
    cta: 'Commencer',
    popular: true,
  },
]

function CheckIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0 text-[#F5C518]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#F5C518] text-xs font-bold tracking-[0.2em] uppercase mb-4">Tarifs</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Choisissez votre forfait
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.14, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
              className="relative rounded-3xl p-8 flex flex-col"
              style={
                plan.popular
                  ? {
                      background: 'rgba(26,26,46,0.9)',
                      border: '2px solid #F5C518',
                      boxShadow: '0 0 50px rgba(245,197,24,0.18), 0 24px 60px rgba(0,0,0,0.3)',
                      backdropFilter: 'blur(20px)',
                    }
                  : {
                      background: 'rgba(26,26,46,0.55)',
                      border: '1px solid rgba(255,255,255,0.07)',
                      backdropFilter: 'blur(20px)',
                    }
              }
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-[18px] left-1/2 -translate-x-1/2">
                  <span
                    className="text-[#0F0E1A] text-[11px] font-extrabold tracking-widest uppercase px-4 py-1.5 rounded-full"
                    style={{ background: 'linear-gradient(90deg, #FFE878, #F5C518)' }}
                  >
                    POPULAIRE
                  </span>
                </div>
              )}

              {/* Plan name */}
              <h3 className="text-white font-extrabold text-xl mb-1">{plan.name}</h3>

              {/* Price */}
              <div className="flex items-baseline gap-1.5 mb-7 mt-2">
                <span className="text-white text-4xl font-extrabold tracking-tight">{plan.price}</span>
                <span className="text-[#A0A0B0] text-sm">{plan.suffix}</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-[#A0A0B0] text-sm leading-relaxed">{feat}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className="w-full py-3.5 rounded-full font-bold text-sm transition-all duration-200 active:scale-95"
                style={
                  plan.popular
                    ? {
                        background: 'linear-gradient(90deg, #FFE878, #F5C518)',
                        color: '#0F0E1A',
                        boxShadow: '0 0 20px rgba(245,197,24,0.35)',
                      }
                    : {
                        background: 'transparent',
                        border: '1px solid rgba(255,255,255,0.18)',
                        color: '#ffffff',
                      }
                }
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
