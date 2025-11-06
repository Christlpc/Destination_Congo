import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, MapPin, Calendar, Thermometer } from 'lucide-react'

const destinations = [
  {
    id: 1,
    name: 'Parc National de Nouabalé-Ndoki',
    location: 'Nord Congo',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200',
    description: 'Sanctuaire de biodiversité exceptionnelle, ce parc abrite des gorilles, éléphants de forêt, chimpanzés et une avifaune remarquable.',
    climate: 'Tropical humide',
    bestTime: 'Juin à Septembre',
    activities: ['Safari', 'Observation faune', 'Randonnée', 'Photographie'],
  },
  {
    id: 2,
    name: 'Brazzaville',
    location: 'Capitale',
    image: 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=1200',
    description: 'Ville cosmopolite au bord du fleuve Congo, mélangeant architecture coloniale et modernité, culture vivante et gastronomie.',
    climate: 'Tropical',
    bestTime: 'Toute l\'année',
    activities: ['Culture', 'Gastronomie', 'Architecture', 'Musées'],
  },
  {
    id: 3,
    name: 'Pointe-Noire',
    location: 'Côte Atlantique',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200',
    description: 'Plages paradisiaques, vie nocturne animée et port maritime historique. Destination idéale pour se détendre.',
    climate: 'Tropical côtier',
    bestTime: 'Mai à Octobre',
    activities: ['Plage', 'Sports nautiques', 'Détente', 'Nightlife'],
  },
  {
    id: 4,
    name: 'Fleuve Congo',
    location: 'Tout le pays',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200',
    description: 'Le deuxième plus grand fleuve d\'Afrique offre des croisières et expéditions fluviales authentiques.',
    climate: 'Tropical',
    bestTime: 'Toute l\'année',
    activities: ['Croisière', 'Pêche', 'Observation', 'Navigation'],
  },
]

export default function DestinationsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920)',
          }}
        />
        <div className="gradient-overlay" />
        <div className="relative z-10 container-custom text-center text-white">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">
            Découvrir les Destinations
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            15 destinations phares à explorer au Congo Brazzaville
          </p>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {destinations.map((destination) => (
              <Link
                key={destination.id}
                href={`/destinations/${destination.id}`}
                className="group"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={destination.image}
                      alt={destination.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center text-gray-600 mb-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm">{destination.location}</span>
                    </div>
                    <h2 className="font-display text-2xl font-bold text-forest-green mb-3">
                      {destination.name}
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {destination.description}
                    </p>
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Thermometer className="w-4 h-4 mr-1" />
                        <span>{destination.climate}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{destination.bestTime}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {destination.activities.map((activity) => (
                        <span
                          key={activity}
                          className="px-3 py-1 bg-forest-green/10 text-forest-green text-xs rounded-full"
                        >
                          {activity}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center text-forest-green font-semibold group-hover:gap-2 transition-all">
                      En savoir plus
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}


