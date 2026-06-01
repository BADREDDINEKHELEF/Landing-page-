import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: 'Outfity — Votre Styliste Personnel IA',
  description:
    "Outfity analyse votre morphologie, votre teint et votre style pour créer des tenues parfaites — chaque jour. L'app IA mode made in Algeria.",
  keywords: ['styliste IA', 'mode Algérie', 'tenues IA', 'garde-robe IA'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="dark">
      <body className={`${inter.className} bg-[#0F0E1A]`}>{children}</body>
    </html>
  )
}
