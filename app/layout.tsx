import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ChatWidget from '@/components/ui/ChatWidget'
import AOSProvider from '@/components/providers/AOSProvider'
import SmoothScrollProvider from '@/components/providers/SmoothScrollProvider'
import { Analytics } from '@/components/providers/Analytics'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Destination Congo Brazzaville - Découvrez la beauté du Congo',
  description: 'Explorez les merveilles du Congo Brazzaville : écotourisme, culture, aventure et tourisme fluvial. Planifiez votre voyage inoubliable.',
  keywords: 'Congo Brazzaville, tourisme, écotourisme, safari, culture, voyage',
  authors: [{ name: 'OPIT - Office de Promotion de l\'Investissement et du Tourisme' }],
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'Destination Congo Brazzaville',
    description: 'Découvrez les trésors cachés du Congo Brazzaville',
    type: 'website',
    locale: 'fr_FR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <SmoothScrollProvider>
          <AOSProvider>
            <Header />
            <main className="min-h-screen">{children}</main>
            {/* Footer temporairement caché pour le site vitrine */}
            {/* <Footer /> */}
            {/* <ChatWidget /> */}
            <Analytics />
          </AOSProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
