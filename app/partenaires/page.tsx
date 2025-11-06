'use client'

import { useState } from 'react'
import { Building2, Users, FileText, Shield, Download, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const partnerBenefits = [
  {
    icon: Building2,
    title: 'Portail B2B Sécurisé',
    description: 'Accès dédié pour agences de voyage et partenaires institutionnels',
  },
  {
    icon: Users,
    title: 'Solutions Corporate',
    description: 'Offres team building, séminaires, incentives avec devis groupes',
  },
  {
    icon: FileText,
    title: 'Documentation Professionnelle',
    description: 'Brochures téléchargeables, fiches techniques, tarifs groupes',
  },
  {
    icon: Shield,
    title: 'Partenaires Certifiés',
    description: 'Accès à notre annuaire de 30+ partenaires certifiés',
  },
]

const partners = [
  { name: 'Hôtel Excellence', category: 'Hébergement', logo: '🏨' },
  { name: 'Safari Congo Tours', category: 'Tour Opérateur', logo: '🦁' },
  { name: 'Fleuve Aventures', category: 'Transport', logo: '🚢' },
  { name: 'Restaurant Le Baobab', category: 'Restauration', logo: '🍽️' },
]

export default function PartenairesPage() {
  const [showLogin, setShowLogin] = useState(false)

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
            Espace Partenaires
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Solutions B2B et outils professionnels pour nos partenaires
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold text-forest-green mb-4">
              Avantages Partenaires
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Rejoignez notre réseau de partenaires et bénéficiez d&apos;outils professionnels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {partnerBenefits.map((benefit) => {
              const Icon = benefit.icon
              return (
                <div
                  key={benefit.title}
                  className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-forest-green/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-forest-green" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-forest-green mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {benefit.description}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Login Section */}
          <div className="bg-forest-green rounded-2xl p-8 text-white text-center">
            <h2 className="font-display text-3xl font-bold mb-4">
              Accès Partenaire
            </h2>
            <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
              Connectez-vous à votre espace partenaire pour accéder aux ressources exclusives
            </p>
            <button
              onClick={() => setShowLogin(!showLogin)}
              className="btn-secondary"
            >
              Se Connecter
            </button>
          </div>

          {showLogin && (
            <div className="mt-8 bg-white rounded-2xl p-8 shadow-lg max-w-md mx-auto">
              <h3 className="font-display text-2xl font-bold text-forest-green mb-6">
                Connexion
              </h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email professionnel
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-green"
                    placeholder="votre@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Mot de passe
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-green"
                    placeholder="••••••••"
                  />
                </div>
                <button type="submit" className="btn-primary w-full">
                  Se Connecter
                </button>
              </form>
            </div>
          )}

          {/* Partners Directory */}
          <div className="mt-16">
            <h2 className="font-display text-3xl font-bold text-forest-green mb-8 text-center">
              Annuaire des Partenaires
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center"
                >
                  <div className="text-4xl mb-3">{partner.logo}</div>
                  <h3 className="font-semibold text-forest-green mb-1">{partner.name}</h3>
                  <p className="text-sm text-gray-600">{partner.category}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Become Partner */}
          <div className="mt-16 bg-gradient-to-r from-forest-green to-congo-blue rounded-2xl p-8 text-white text-center">
            <h2 className="font-display text-3xl font-bold mb-4">
              Devenir Partenaire
            </h2>
            <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
              Rejoignez notre réseau de partenaires et développez votre activité touristique
            </p>
            <Link href="/devenir-partenaire" className="btn-secondary inline-flex items-center">
              En savoir plus
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}


