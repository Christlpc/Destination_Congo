'use client'

import { DateTime } from 'luxon'
import { Calendar, Sun, Cloud, Droplets, Thermometer } from 'lucide-react'

const seasons = [
  {
    name: 'Saison Sèche',
    period: { start: '2024-06-01', end: '2024-09-30' },
    description: 'Idéale pour la randonnée et les safaris',
    icon: Sun,
    color: 'golden-yellow',
    activities: ['Safari', 'Randonnées', 'Observation faune', 'Photographie'],
    temperature: '22-30°C',
  },
  {
    name: 'Saison Pluvieuse',
    period: { start: '2024-10-01', end: '2025-04-30' },
    description: 'Parfaite pour la culture et les activités en intérieur',
    icon: Droplets,
    color: 'congo-blue',
    activities: ['Culture', 'Musées', 'Gastronomie', 'Artisanat'],
    temperature: '24-32°C',
  },
]

const months = [
  { month: 'Janvier', season: 'Pluvieuse', best: false },
  { month: 'Février', season: 'Pluvieuse', best: false },
  { month: 'Mars', season: 'Pluvieuse', best: false },
  { month: 'Avril', season: 'Pluvieuse', best: false },
  { month: 'Mai', season: 'Transition', best: true },
  { month: 'Juin', season: 'Sèche', best: true },
  { month: 'Juillet', season: 'Sèche', best: true },
  { month: 'Août', season: 'Sèche', best: true },
  { month: 'Septembre', season: 'Sèche', best: true },
  { month: 'Octobre', season: 'Pluvieuse', best: false },
  { month: 'Novembre', season: 'Pluvieuse', best: false },
  { month: 'Décembre', season: 'Pluvieuse', best: false },
]

export default function BestTimeToVisit() {
  const currentMonth = DateTime.now().month
  const formatDate = (dateString: string) => {
    return DateTime.fromISO(dateString).setLocale('fr').toFormat('d MMMM')
  }

  return (
    <section className="section-padding bg-gradient-to-br from-forest-green/5 via-white to-congo-blue/5 relative overflow-hidden">
      {/* Silhouettes de végétation */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-10 left-10 w-80 h-80">
          <svg viewBox="0 0 300 300" className="w-full h-full">
            <path
              d="M150 50 L100 150 L80 200 L150 250 L220 200 L200 150 Z"
              fill="currentColor"
              className="text-forest-green"
            />
          </svg>
        </div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-forest-green mb-4">
            Quand Visiter le Congo ?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez les meilleures périodes pour planifier votre voyage selon vos préférences
          </p>
        </div>

        {/* Seasons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {seasons.map((season, index) => {
            const Icon = season.icon
            return (
              <div
                key={season.name}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className={`bg-white rounded-3xl p-8 shadow-xl border-2 border-${season.color}/20 hover:shadow-2xl transition-all`}
              >
                <div className={`w-16 h-16 bg-${season.color}/10 rounded-2xl flex items-center justify-center mb-6`}>
                  <Icon className={`w-8 h-8 text-${season.color}`} />
                </div>
                <h3 className="font-display text-2xl font-bold text-forest-green mb-2">
                  {season.name}
                </h3>
                <div className="flex items-center text-gray-600 mb-4">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span className="font-semibold">
                    {formatDate(season.period.start)} - {formatDate(season.period.end)}
                  </span>
                </div>
                <div className="flex items-center text-gray-600 mb-6">
                  <Thermometer className="w-5 h-5 mr-2" />
                  <span>{season.temperature}</span>
                </div>
                <p className="text-gray-600 mb-6">{season.description}</p>
                <div className="flex flex-wrap gap-2">
                  {season.activities.map((activity) => (
                    <span
                      key={activity}
                      className={`px-3 py-1 bg-${season.color}/10 text-${season.color} text-xs rounded-lg font-medium`}
                    >
                      {activity}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Calendar Grid */}
        <div className="bg-white rounded-3xl p-8 shadow-xl" data-aos="fade-up">
          <h3 className="font-display text-2xl font-bold text-forest-green mb-6 text-center">
            Calendrier Annuel
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {months.map((month, index) => {
              const isCurrent = DateTime.now().month === index + 1
              const isBest = month.best
              return (
                <div
                  key={month.month}
                  className={`p-4 rounded-xl text-center transition-all ${
                    isCurrent
                      ? 'bg-forest-green text-white shadow-lg scale-105'
                      : isBest
                      ? 'bg-golden-yellow/10 border-2 border-golden-yellow/30'
                      : 'bg-gray-50 border border-gray-200'
                  }`}
                >
                  <div className={`text-sm font-semibold mb-1 ${isCurrent ? 'text-white' : 'text-gray-700'}`}>
                    {month.month}
                  </div>
                  <div className={`text-xs ${isCurrent ? 'text-white/80' : 'text-gray-500'}`}>
                    {month.season}
                  </div>
                  {isBest && !isCurrent && (
                    <div className="mt-2 text-xs text-golden-yellow font-bold">⭐</div>
                  )}
                  {isCurrent && (
                    <div className="mt-2 text-xs text-white/80 font-bold">● MAINTENANT</div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}




