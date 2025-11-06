'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, MapPin, Star } from 'lucide-react'

const destinations = [
  {
    id: 1,
    name: 'Parc National de Nouabalé-Ndoki',
    location: 'Nord Congo',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
    description: 'Sanctuaire de biodiversité, habitat des gorilles et éléphants',
    activities: ['Écotourisme', 'Safari', 'Observation faune'],
  },
  {
    id: 2,
    name: 'Brazzaville',
    location: 'Capitale',
    image: 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=800',
    description: 'Ville culturelle vibrante au bord du fleuve Congo',
    activities: ['Culture', 'Gastronomie', 'Architecture'],
  },
  {
    id: 3,
    name: 'Pointe-Noire',
    location: 'Côte Atlantique',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    description: 'Plages paradisiaques et vie nocturne animée',
    activities: ['Plage', 'Sports nautiques', 'Détente'],
  },
  {
    id: 4,
    name: 'Fleuve Congo',
    location: 'Tout le pays',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    description: 'Croisières et expéditions fluviales authentiques',
    activities: ['Croisière', 'Pêche', 'Observation'],
  },
]

export default function FeaturedDestinations() {
  return (
    <section className="section-padding bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Silhouettes de végétation en arrière-plan */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-10 left-10 w-96 h-96">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <path
              d="M200 50 L150 150 L120 200 L200 250 L280 200 L250 150 Z"
              fill="currentColor"
              className="text-forest-green"
            />
            <path
              d="M100 200 L130 280 L200 320 L270 280 L300 200"
              fill="currentColor"
              className="text-forest-green"
            />
          </svg>
        </div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-forest-green mb-4">
            Destinations Phares
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explorez les merveilles du Congo Brazzaville à travers nos destinations incontournables
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination, index) => (
            <div
              key={destination.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group"
            >
              <Link href={`/destinations/${destination.id}`}>
                <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100">
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={destination.image}
                      alt={destination.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    
                    {/* Badge Premium */}
                    <div className="absolute top-4 right-4">
                      <div className="bg-golden-yellow/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
                        <Star className="w-3 h-3 fill-white text-white" />
                        <span className="text-xs font-bold text-forest-green">PHARE</span>
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center text-white/90 mb-2 text-sm">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{destination.location}</span>
                      </div>
                      <h3 className="font-display text-2xl font-bold text-white mb-2">
                        {destination.name}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-600 mb-5 line-clamp-2 text-sm leading-relaxed">
                      {destination.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-5">
                      {destination.activities.map((activity) => (
                        <span
                          key={activity}
                          className="px-3 py-1.5 bg-forest-green/10 text-forest-green text-xs font-medium rounded-lg border border-forest-green/20"
                        >
                          {activity}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-forest-green font-semibold text-sm group-hover:text-forest-green-dark transition-colors">
                        Découvrir
                      </span>
                      <div className="w-8 h-8 bg-forest-green/10 rounded-full flex items-center justify-center group-hover:bg-forest-green group-hover:text-white transition-all">
                        <ArrowRight className="w-4 h-4 text-forest-green group-hover:text-white transition-colors" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/destinations" className="btn-primary inline-flex items-center">
            Voir toutes les Destinations
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

