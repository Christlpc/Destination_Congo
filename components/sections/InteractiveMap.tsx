'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import { TreePine, Camera, Waves, Mountain } from 'lucide-react'

// Import dynamique pour éviter les problèmes SSR avec Leaflet
const MapComponent = dynamic(() => import('@/components/ui/MapComponent'), {
  ssr: false,
  loading: () => (
    <div className="h-[700px] bg-gradient-to-br from-forest-green/10 to-congo-blue/10 flex items-center justify-center rounded-3xl">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-forest-green border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-600 font-medium">Chargement de la carte...</p>
      </div>
    </div>
  ),
})

const mapFilters = [
  { id: 'all', label: 'Tout Voir', icon: TreePine, color: 'forest-green', count: 30 },
  { id: 'ecotourisme', label: 'Écotourisme', icon: TreePine, color: 'forest-green', count: 5 },
  { id: 'culture', label: 'Culture', icon: Camera, color: 'cultural-red', count: 8 },
  { id: 'aventure', label: 'Aventure', icon: Mountain, color: 'congo-blue', count: 7 },
  { id: 'fluvial', label: 'Fluvial', icon: Waves, color: 'congo-blue', count: 3 },
]

export default function InteractiveMap() {
  const [activeFilter, setActiveFilter] = useState('all')

  return (
    <section className="section-padding bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Silhouettes d'animaux en arrière-plan */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <path
              d="M100 30 Q130 70 100 100 Q70 70 100 30"
              fill="currentColor"
              className="text-forest-green"
            />
            <ellipse cx="100" cy="140" rx="40" ry="30" fill="currentColor" className="text-forest-green" />
          </svg>
        </div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-forest-green mb-4">
            Explorez le Congo sur la Carte
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez les destinations, sites et attractions sur une carte interactive enrichie
          </p>
        </div>

        {/* Filters Premium */}
        <div className="flex flex-wrap justify-center gap-4 mb-12" data-aos="fade-up" data-aos-delay="100">
          {mapFilters.map((filter) => {
            const Icon = filter.icon
            const isActive = activeFilter === filter.id
            return (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`group relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
                  isActive
                    ? filter.color === 'forest-green'
                      ? 'bg-forest-green text-white shadow-xl scale-105'
                      : filter.color === 'cultural-red'
                      ? 'bg-cultural-red text-white shadow-xl scale-105'
                      : 'bg-congo-blue text-white shadow-xl scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200 hover:border-gray-300 shadow-md hover:shadow-lg'
                }`}
              >
                <Icon className={`w-5 h-5 ${
                  isActive
                    ? 'text-white'
                    : filter.color === 'forest-green'
                    ? 'text-forest-green'
                    : filter.color === 'cultural-red'
                    ? 'text-cultural-red'
                    : 'text-congo-blue'
                }`} />
                <span>{filter.label}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  isActive
                    ? 'bg-white/20 text-white'
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {filter.count}
                </span>
                {isActive && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-golden-yellow rounded-full"></div>
                )}
              </button>
            )
          })}
        </div>

        {/* Map Premium */}
        <div
          className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <MapComponent activeFilter={activeFilter} />
        </div>

        {/* Info Box */}
        <div className="mt-8 text-center" data-aos="fade-up" data-aos-delay="300">
          <p className="text-gray-600 text-sm">
            <span className="font-semibold text-forest-green">💡 Astuce :</span> Cliquez sur les marqueurs pour découvrir les 30 meilleurs sites touristiques du Congo avec photos et descriptions détaillées
          </p>
        </div>
      </div>
    </section>
  )
}

