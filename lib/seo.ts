import { Metadata } from 'next'

export const defaultSEO: Metadata = {
  title: {
    template: '%s | TOURISM CONGO',
    default: 'TOURISM CONGO - Un voyage entre nature, culture et authenticité',
  },
  description: 'Découvrez les merveilles du Congo Brazzaville : écotourisme, culture, aventure et tourisme fluvial. Planifiez votre voyage inoubliable.',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://tourismcongo.cg',
    siteName: 'TOURISM CONGO',
    images: [
      {
        url: 'https://tourismcongo.cg/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TOURISM CONGO',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@tourismcongo',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  themeColor: '#1a5f3f',
}

export function generateTourismSchema(data: {
  name: string
  description: string
  image?: string
  address?: {
    streetAddress?: string
    addressLocality: string
    addressCountry: string
  }
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    name: data.name,
    description: data.description,
    image: data.image,
    address: data.address
      ? {
          '@type': 'PostalAddress',
          streetAddress: data.address.streetAddress,
          addressLocality: data.address.addressLocality,
          addressCountry: data.address.addressCountry,
        }
      : undefined,
  }
}

