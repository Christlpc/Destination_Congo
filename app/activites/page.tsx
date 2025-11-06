import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Clock, Users } from 'lucide-react'

const activities = [
  {
    id: 1,
    title: 'Safari Écotouristique',
    description: 'Observation des gorilles, éléphants et autres espèces emblématiques dans leur habitat naturel',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
    duration: '2-3 jours',
    groupSize: '2-8 personnes',
    category: 'Écotourisme',
  },
  {
    id: 2,
    title: 'Randonnées Nature',
    description: 'Exploration des forêts tropicales et paysages époustouflants avec guides locaux',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    duration: '1 journée',
    groupSize: '2-12 personnes',
    category: 'Aventure',
  },
  {
    id: 3,
    title: 'Découverte Culturelle',
    description: 'Immersion dans les traditions, l\'artisanat et les danses traditionnelles',
    image: 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=800',
    duration: '1/2 journée',
    groupSize: '2-20 personnes',
    category: 'Culture',
  },
  {
    id: 4,
    title: 'Tourisme Fluvial',
    description: 'Croisières sur le majestueux fleuve Congo avec observations de la faune',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    duration: '1-7 jours',
    groupSize: '4-30 personnes',
    category: 'Fluvial',
  },
]

export default function ActivitiesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920)',
          }}
        />
        <div className="gradient-overlay" />
        <div className="relative z-10 container-custom text-center text-white">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">
            Activités Touristiques
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Plus de 20 activités pour une expérience mémorable
          </p>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity) => (
              <Link
                key={activity.id}
                href={`/activites/${activity.id}`}
                className="group"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={activity.image}
                      alt={activity.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-forest-green text-sm font-semibold rounded-full">
                        {activity.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h2 className="font-display text-xl font-bold text-forest-green mb-2">
                      {activity.title}
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {activity.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{activity.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        <span>{activity.groupSize}</span>
                      </div>
                    </div>
                    <div className="flex items-center text-forest-green font-semibold group-hover:gap-2 transition-all">
                      Découvrir
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


