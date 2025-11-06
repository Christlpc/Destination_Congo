'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const activities = [
  {
    id: 1,
    title: 'Safari Écotouristique',
    description: 'Observation des gorilles, éléphants et autres espèces emblématiques',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600',
    category: 'Écotourisme',
  },
  {
    id: 2,
    title: 'Randonnées Nature',
    description: 'Exploration des forêts tropicales et paysages époustouflants',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600',
    category: 'Aventure',
  },
  {
    id: 3,
    title: 'Découverte Culturelle',
    description: 'Immersion dans les traditions et l\'artisanat local',
    image: 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=600',
    category: 'Culture',
  },
  {
    id: 4,
    title: 'Tourisme Fluvial',
    description: 'Croisières sur le majestueux fleuve Congo',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600',
    category: 'Fluvial',
  },
  {
    id: 5,
    title: 'Observation Ornithologique',
    description: 'Découverte de la riche avifaune congolaise',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600',
    category: 'Écotourisme',
  },
  {
    id: 6,
    title: 'Gastronomie Locale',
    description: 'Dégustation des spécialités culinaires authentiques',
    image: 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=600',
    category: 'Culture',
  },
]

export default function Activities() {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-forest-green mb-4">
            Activités Incontournables
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Plus de 20 activités touristiques pour une expérience mémorable
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Link href={`/activites/${activity.id}`}>
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
                    <h3 className="font-display text-xl font-bold text-forest-green mb-2">
                      {activity.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {activity.description}
                    </p>
                    <div className="flex items-center text-forest-green font-semibold group-hover:gap-2 transition-all">
                      Découvrir
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/activites" className="btn-primary inline-flex items-center">
            Voir toutes les Activités
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

