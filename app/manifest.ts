import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Destination Congo Brazzaville',
    short_name: 'Destination Congo',
    description: 'Site officiel de promotion touristique du Congo Brazzaville',
    start_url: '/',
    display: 'standalone',
    background_color: '#2D5016',
    theme_color: '#2D5016',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}


