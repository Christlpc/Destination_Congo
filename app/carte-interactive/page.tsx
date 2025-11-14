'use client'

import dynamic from 'next/dynamic'

const MapComponent = dynamic(() => import('@/components/ui/MapComponent'), {
  ssr: false,
  loading: () => (
    <div className="h-[700px] w-full bg-gray-200 rounded-lg flex items-center justify-center">
      <p className="text-gray-500">Chargement de la carte...</p>
    </div>
  ),
})

export default function CarteInteractivePage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920)',
          }}
        />
        <div className="gradient-overlay" />
        <div className="relative z-10 container-custom text-center text-white">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">
            Carte Interactive
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Explorez les destinations et attractions du Congo Brazzaville
          </p>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <MapComponent activeFilter="all" />
        </div>
      </section>
    </div>
  )
}

