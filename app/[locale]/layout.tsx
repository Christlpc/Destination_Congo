import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import '../globals.css'
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

export function generateStaticParams() {
  return [{ locale: 'fr' }, { locale: 'en' }]
}

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

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  // Unwrap params Promise
  const { locale } = await params
  
  // Validate that the incoming `locale` parameter is valid
  const validLocales = ['fr', 'en'] as const
  if (!validLocales.includes(locale as any)) {
    notFound()
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages()

  return (
    <html lang={locale} className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <NextIntlClientProvider messages={messages}>
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
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

