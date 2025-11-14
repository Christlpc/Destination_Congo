'use client'

import { Building2, Users, Target, Award, Globe, TrendingUp } from 'lucide-react'

const missions = [
  {
    icon: Target,
    title: 'Mission',
    description: 'Promouvoir et développer le tourisme au Congo Brazzaville en mettant en valeur ses richesses naturelles, culturelles et patrimoniales.',
  },
  {
    icon: Globe,
    title: 'Vision',
    description: 'Faire du Congo Brazzaville une destination touristique de référence en Afrique centrale, reconnue pour son écotourisme et son authenticité.',
  },
  {
    icon: Award,
    title: 'Valeurs',
    description: 'Durabilité, authenticité, excellence et partenariat pour un tourisme responsable et bénéfique pour les communautés locales.',
  },
]

const services = [
  {
    icon: Building2,
    title: 'Promotion Touristique',
    description: 'Mise en valeur des destinations et attractions du Congo',
  },
  {
    icon: Users,
    title: 'Accompagnement des Investisseurs',
    description: 'Support pour les projets d&apos;investissement dans le secteur touristique',
  },
  {
    icon: TrendingUp,
    title: 'Développement Sectoriel',
    description: 'Stratégies et programmes pour la croissance du tourisme',
  },
]

export default function OPITPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920)',
          }}
        />
        <div className="gradient-overlay" />
        <div className="relative z-10 container-custom text-center text-white">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">
            L&apos;OPIT
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Office de Promotion de l&apos;Investissement et du Tourisme
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-forest-green mb-6">
              À Propos de l&apos;OPIT
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              L&apos;Office de Promotion de l&apos;Investissement et du Tourisme (OPIT) est l&apos;institution 
              chargée de promouvoir et de développer le secteur touristique de la République du Congo Brazzaville.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Notre mission est de positionner le Congo comme une destination d&apos;excellence en Afrique centrale, 
              en valorisant ses atouts naturels exceptionnels, sa riche biodiversité, sa culture authentique et 
              son patrimoine historique unique.
            </p>
          </div>

          {/* Mission, Vision, Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {missions.map((mission) => {
              const Icon = mission.icon
              return (
                <div
                  key={mission.title}
                  className="bg-gray-50 rounded-2xl p-8 text-center"
                >
                  <div className="w-16 h-16 bg-forest-green/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-forest-green" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-forest-green mb-4">
                    {mission.title}
                  </h3>
                  <p className="text-gray-600">
                    {mission.description}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Services */}
          <div className="mb-16">
            <h2 className="font-display text-4xl font-bold text-forest-green mb-8 text-center">
              Nos Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((service) => {
                const Icon = service.icon
                return (
                  <div
                    key={service.title}
                    className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-forest-green transition-all hover:shadow-lg"
                  >
                    <div className="w-12 h-12 bg-forest-green/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-forest-green" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-forest-green mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {service.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="bg-gradient-to-r from-forest-green to-congo-blue rounded-2xl p-8 text-white text-center">
            <h2 className="font-display text-3xl font-bold mb-4">
              Contactez l&apos;OPIT
            </h2>
            <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
              Pour toute question ou demande d&apos;information, notre équipe est à votre disposition
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-secondary inline-flex items-center justify-center">
                Nous Contacter
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

