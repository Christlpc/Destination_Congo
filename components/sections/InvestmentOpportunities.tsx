'use client'

import Link from 'next/link'
import { Briefcase, TrendingUp, Building2, DollarSign, ArrowRight, CheckCircle } from 'lucide-react'

const opportunities = [
  {
    icon: Building2,
    title: 'Hôtellerie de Luxe',
    description: 'Développement d\'infrastructures hôtelières haut de gamme dans les destinations phares',
    investment: '5M - 50M USD',
    roi: '15-25%',
    highlight: true,
  },
  {
    icon: Briefcase,
    title: 'Écolodges',
    description: 'Installations éco-responsables dans les parcs nationaux et zones protégées',
    investment: '2M - 20M USD',
    roi: '20-30%',
  },
  {
    icon: TrendingUp,
    title: 'Tourisme Fluvial',
    description: 'Croisières et expéditions sur le fleuve Congo, infrastructure portuaire',
    investment: '3M - 30M USD',
    roi: '18-28%',
  },
  {
    icon: DollarSign,
    title: 'Services Touristiques',
    description: 'Agences de voyage, guides locaux, restaurants, activités d\'aventure',
    investment: '100K - 5M USD',
    roi: '25-35%',
  },
]

const incentives = [
  'Exonérations fiscales jusqu\'à 10 ans',
  'Accès facilité aux terrains',
  'Support administratif complet',
  'Partenariats publics-privés',
  'Accès aux financements internationaux',
]

export default function InvestmentOpportunities() {
  return (
    <section className="section-padding bg-gradient-to-br from-forest-green-dark via-forest-green to-congo-blue text-white relative overflow-hidden">
      {/* Silhouettes d'animaux en arrière-plan */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <path
              d="M100 20 Q120 60 100 80 Q80 60 100 20 M100 80 Q120 100 100 120 Q80 100 100 80"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="2"
              className="text-white"
            />
          </svg>
        </div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Opportunités d'Investissement
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Le secteur touristique du Congo Brazzaville offre des opportunités d'investissement 
            exceptionnelles avec un potentiel de croissance remarquable
          </p>
        </div>

        {/* Opportunities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {opportunities.map((opportunity, index) => {
            const Icon = opportunity.icon
            return (
              <div
                key={opportunity.title}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 transition-all duration-300 hover:bg-white/20 hover:scale-105 ${
                  opportunity.highlight
                    ? 'border-golden-yellow shadow-2xl shadow-golden-yellow/20'
                    : 'border-white/20'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                    <Icon className="w-8 h-8 text-golden-yellow" />
                  </div>
                  {opportunity.highlight && (
                    <span className="px-3 py-1 bg-golden-yellow text-forest-green text-xs font-bold rounded-full">
                      POPULAIRE
                    </span>
                  )}
                </div>
                <h3 className="font-display text-2xl font-bold mb-3">
                  {opportunity.title}
                </h3>
                <p className="text-gray-200 mb-6">
                  {opportunity.description}
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-white/20">
                  <div>
                    <div className="text-xs text-gray-300 mb-1">Investissement</div>
                    <div className="font-bold text-golden-yellow">{opportunity.investment}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-300 mb-1">ROI estimé</div>
                    <div className="font-bold text-golden-yellow">{opportunity.roi}</div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Incentives */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8" data-aos="fade-up">
          <h3 className="font-display text-2xl font-bold mb-6 text-center">
            Incitations et Avantages
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {incentives.map((incentive, index) => (
              <div
                key={index}
                className="flex items-center space-x-3"
                data-aos="fade-right"
                data-aos-delay={index * 50}
              >
                <CheckCircle className="w-6 h-6 text-golden-yellow flex-shrink-0" />
                <span className="text-gray-200">{incentive}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center" data-aos="fade-up">
          <Link
            href="/investisseurs"
            className="inline-flex items-center px-8 py-4 bg-golden-yellow text-forest-green font-bold rounded-xl hover:bg-golden-yellow-light transition-all duration-300 shadow-2xl hover:shadow-golden-yellow/50 transform hover:scale-105"
          >
            Explorer les Opportunités
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}


