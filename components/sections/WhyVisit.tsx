'use client'

import { motion } from 'framer-motion'
import { TreePine, Users, Mountain, Waves, Heart, Shield } from 'lucide-react'

const reasons = [
  {
    icon: TreePine,
    title: 'Biodiversité Exceptionnelle',
    description: 'Parcs nationaux abritant une faune et flore uniques au monde',
  },
  {
    icon: Users,
    title: 'Culture Authentique',
    description: 'Rencontres enrichissantes avec les communautés locales',
  },
  {
    icon: Mountain,
    title: 'Paysages Époustouflants',
    description: 'Forêts tropicales, fleuves majestueux et paysages à couper le souffle',
  },
  {
    icon: Waves,
    title: 'Tourisme Fluvial',
    description: 'Expériences uniques sur le deuxième plus grand fleuve d\'Afrique',
  },
  {
    icon: Heart,
    title: 'Hospitalité Légendaire',
    description: 'Accueil chaleureux et traditions d\'hospitalité séculaires',
  },
  {
    icon: Shield,
    title: 'Destination Sûre',
    description: 'Sécurité et stabilité pour un voyage en toute sérénité',
  },
]

export default function WhyVisit() {
  return (
    <section className="section-padding bg-forest-green text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Pourquoi Visiter le Congo ?
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Découvrez les raisons qui font du Congo Brazzaville une destination unique
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-golden-yellow rounded-full flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-forest-green" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-200">
                  {reason.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

