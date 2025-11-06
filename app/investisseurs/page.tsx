'use client'

import { TrendingUp, BarChart3, FileText, Briefcase, ArrowRight, Download } from 'lucide-react'
import Link from 'next/link'

const investmentOpportunities = [
  {
    icon: Briefcase,
    title: 'Hôtellerie de Luxe',
    description: 'Développement d&apos;infrastructures hôtelières haut de gamme',
    sector: 'Hospitalité',
  },
  {
    icon: TrendingUp,
    title: 'Écotourisme',
    description: 'Investissement dans les lodges et campements éco-responsables',
    sector: 'Durable',
  },
  {
    icon: BarChart3,
    title: 'Infrastructures',
    description: 'Développement des infrastructures touristiques et de transport',
    sector: 'Infrastructure',
  },
  {
    icon: FileText,
    title: 'Services Touristiques',
    description: 'Agences de voyage, guides, restaurants et activités',
    sector: 'Services',
  },
]

const incentives = [
  'Exonérations fiscales pour investissements touristiques',
  'Accès facilité aux terrains pour projets touristiques',
  'Support administratif et réglementaire',
  'Partenariats publics-privés favorisés',
]

export default function InvestisseursPage() {
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
            Espace Investisseurs
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Opportunités d&apos;investissement dans le secteur touristique du Congo
          </p>
        </div>
      </section>

      {/* Opportunities Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold text-forest-green mb-4">
              Opportunités d&apos;Investissement
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez les secteurs porteurs du tourisme congolais
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {investmentOpportunities.map((opportunity) => {
              const Icon = opportunity.icon
              return (
                <div
                  key={opportunity.title}
                  className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-forest-green transition-all hover:shadow-lg"
                >
                  <div className="w-12 h-12 bg-forest-green/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-forest-green" />
                  </div>
                  <span className="text-xs font-semibold text-golden-yellow mb-2 block">
                    {opportunity.sector}
                  </span>
                  <h3 className="font-display text-lg font-bold text-forest-green mb-2">
                    {opportunity.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {opportunity.description}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Market Data */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-16">
            <h2 className="font-display text-3xl font-bold text-forest-green mb-6">
              Données Sectorielles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-forest-green mb-2">+15%</div>
              <div className="text-gray-600">Croissance annuelle du secteur</div>
              </div>
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-forest-green mb-2">200K+</div>
                <div className="text-gray-600">Visiteurs par an</div>
              </div>
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-forest-green mb-2">500M$</div>
                <div className="text-gray-600">Potentiel d&apos;investissement</div>
              </div>
            </div>
          </div>

          {/* Incentives */}
          <div className="mb-16">
            <h2 className="font-display text-3xl font-bold text-forest-green mb-6">
              Incitations Fiscales
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {incentives.map((incentive, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 bg-white rounded-xl p-4 shadow-sm"
                >
                  <div className="w-6 h-6 bg-golden-yellow rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-forest-green text-xs font-bold">✓</span>
                  </div>
                  <p className="text-gray-700">{incentive}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-r from-forest-green to-congo-blue rounded-2xl p-8 text-white">
            <h2 className="font-display text-3xl font-bold mb-4">
              Contactez notre Équipe Investissement
            </h2>
            <p className="text-gray-200 mb-6 max-w-2xl">
              Intéressé par une opportunité d&apos;investissement ? Notre équipe est là pour vous accompagner
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact?subject=investment" className="btn-secondary inline-flex items-center">
                <Briefcase className="w-5 h-5 mr-2" />
                Nous Contacter
              </Link>
              <button className="btn-outline border-white text-white hover:bg-white hover:text-forest-green inline-flex items-center">
                <Download className="w-5 h-5 mr-2" />
                Télécharger la Documentation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


