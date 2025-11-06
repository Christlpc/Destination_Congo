import { Calendar, MapPin, Plane, Hotel, Utensils, FileText, Shield } from 'lucide-react'
import BestTimeToVisit from '@/components/sections/BestTimeToVisit'

const planningSteps = [
  {
    icon: Calendar,
    title: 'Quand Partir',
    description: 'Découvrez les meilleures périodes pour visiter selon vos préférences',
  },
  {
    icon: MapPin,
    title: 'Choisir une Destination',
    description: 'Explorez nos 15 destinations phares et leurs attractions',
  },
  {
    icon: Plane,
    title: 'Réserver un Vol',
    description: 'Trouvez les meilleures options de transport aérien',
  },
  {
    icon: Hotel,
    title: 'Trouver un Hébergement',
    description: 'Sélectionnez parmi nos partenaires certifiés',
  },
  {
    icon: Utensils,
    title: 'Planifier les Activités',
    description: 'Organisez votre séjour avec nos activités recommandées',
  },
  {
    icon: FileText,
    title: 'Documents Nécessaires',
    description: 'Visa, passeport et autres documents requis',
  },
]

const practicalInfo = [
  {
    title: 'Visas et Documents',
    icon: FileText,
    content: 'Les citoyens de nombreux pays peuvent obtenir un visa à l\'arrivée ou doivent le demander à l\'avance.',
  },
  {
    title: 'Santé et Vaccinations',
    icon: Shield,
    content: 'Vaccination contre la fièvre jaune obligatoire. Consultez votre médecin avant le départ.',
  },
  {
    title: 'Climat',
    icon: Calendar,
    content: 'Climat tropical avec deux saisons : sèche (mai-septembre) et pluvieuse (octobre-avril).',
  },
]

export default function PlanifierPage() {
  return (
    <div className="pt-20">
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
            Planifier son Voyage
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Tout ce dont vous avez besoin pour organiser votre séjour au Congo
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <BestTimeToVisit />
          
          <div className="text-center mb-12 mt-16">
            <h2 className="font-display text-4xl font-bold text-forest-green mb-4">
              Guide de Planification
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Suivez ces étapes pour organiser votre voyage de rêve
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {planningSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <div
                  key={step.title}
                  className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-forest-green transition-all hover:shadow-lg"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-forest-green/10 rounded-lg flex items-center justify-center mr-4">
                      <Icon className="w-6 h-6 text-forest-green" />
                    </div>
                    <div className="w-8 h-8 bg-golden-yellow rounded-full flex items-center justify-center text-forest-green font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="font-display text-lg font-bold text-forest-green mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {step.description}
                  </p>
                </div>
              )
            })}
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <h2 className="font-display text-3xl font-bold text-forest-green mb-8">
              Informations Pratiques
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {practicalInfo.map((info) => {
                const Icon = info.icon
                return (
                  <div
                    key={info.title}
                    className="bg-white rounded-xl p-6"
                  >
                    <div className="w-12 h-12 bg-forest-green/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-forest-green" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-forest-green mb-2">
                      {info.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {info.content}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

