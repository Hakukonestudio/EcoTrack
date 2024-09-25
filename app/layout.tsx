import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EcoTrack - Tulossa pian',
  description: 'Seuraa ja pienennä hiilijalanjälkeäsi EcoTrackin avulla.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fi">
      <body className={inter.className}>{children}</body>
    </html>
  )
}