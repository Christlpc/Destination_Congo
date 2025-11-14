'use client'

import { FileText, Plane, Shield, Heart, DollarSign, Clock, MapPin } from 'lucide-react'

const guides = [
  {
    icon: Plane,
    title: 'Visa et Documents',
    description: 'Informations sur les visas, passeports et documents nécessaires pour votre voyage',
    sections: [
      'Visa touristique',
      'Passeport valide',
      'Certificat de vaccination',
      'Assurance voyage',
    ],
  },
  {
    icon: Heart,
    title: 'Santé et Vaccinations',
    description: 'Recommandations sanitaires et vaccinations obligatoires',
    sections: [
      'Vaccinations requises',
      'Prévention du paludisme',
      'Centres de santé',
      'Pharmacies',
    ],
  },
  {
    icon: Shield,
    title: 'Sécurité',
    description: 'Conseils de sécurité pour un voyage en toute sérénité',
    sections: [
      'Zones sécurisées',
      'Conseils de voyage',
      'Numéros d&apos;urgence',
      'Bonnes pratiques',
    ],
  },
  {
    icon: DollarSign,
    title: 'Monnaie et Budget',
    description: 'Informations sur la monnaie locale et les coûts de voyage',
    sections: [
      'Monnaie locale (FCFA)',
      'Taux de change',
      'Budget moyen',
      'Moyens de paiement',
    ],
  },
  {
    icon: Clock,
    title: 'Décalage Horaire',
    description: 'Informations sur le fuseau horaire et les heures d&apos;ouverture',
    sections: [
      'Fuseau horaire (UTC+1)',
      'Heures d&apos;ouverture',
      'Jours fériés',
      'Horaires des services',
    ],
  },
  {
    icon: MapPin,
    title: 'Transport',
    description: 'Comment se déplacer au Congo Brazzaville',
    sections: [
      'Transport aérien',
      'Transport terrestre',
      'Transport fluvial',
      'Location de véhicules',
    ],
  },
]

export default function GuidePratiquePage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=1920)',
          }}
        />
        <div className="gradient-overlay" />
        <div className="relative z-10 container-custom text-center text-white">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">
            Guide Pratique
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Toutes les informations essentielles pour préparer votre voyage
          </p>
        </div>
      </section>

      {/* Guides Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide) => {
              const Icon = guide.icon
              return (
                <div
                  key={guide.title}
                  className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-forest-green transition-all hover:shadow-lg"
                >
                  <div className="w-12 h-12 bg-forest-green/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-forest-green" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-forest-green mb-2">
                    {guide.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {guide.description}
                  </p>
                  <ul className="space-y-2">
                    {guide.sections.map((section, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-600">
                        <span className="text-forest-green mr-2">•</span>
                        {section}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>

          {/* Download Section */}
          <div className="mt-16 bg-gray-50 rounded-2xl p-8 text-center">
            <FileText className="w-16 h-16 text-forest-green mx-auto mb-4" />
            <h2 className="font-display text-3xl font-bold text-forest-green mb-4">
              Guide Complet à Télécharger
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Téléchargez notre guide pratique complet au format PDF avec toutes les informations détaillées
            </p>
            <button className="btn-primary inline-flex items-center">
              <FileText className="w-5 h-5 mr-2" />
              Télécharger le Guide PDF
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

