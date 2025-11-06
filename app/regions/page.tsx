'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, MapPin, Users, Music, Palette, Camera, Calendar } from 'lucide-react'
import { DateTime } from 'luxon'

const departments = [
  {
    id: 1,
    name: 'Pool',
    capital: 'Kinkala',
    location: 'Région centrale',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200',
    description: 'Le cœur historique et culturel du Congo, berceau des traditions ancestrales',
    culture: {
      traditions: 'Cérémonies traditionnelles, danses rituelles, rites d\'initiation',
      artisanat: 'Sculptures en bois, masques cérémoniels, poteries',
      musique: 'Rythmes traditionnels, tam-tams, chants polyphoniques',
      gastronomie: 'Plats traditionnels, poissons du fleuve, manioc',
    },
    attractions: ['Parcs nationaux', 'Sites historiques', 'Communautés locales', 'Marchés traditionnels'],
    bestTime: { start: '2024-06-01', end: '2024-09-30' },
    population: '180,000',
  },
  {
    id: 2,
    name: 'Kouilou',
    capital: 'Loango',
    location: 'Côte Atlantique',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200',
    description: 'Terre de rencontre entre l\'océan et la culture, où les traditions côtières s\'expriment',
    culture: {
      traditions: 'Culture maritime, pêche traditionnelle, rites de passage',
      artisanat: 'Vannerie, tissage, sculptures sur coquillages',
      musique: 'Musique côtière, rythmes de la mer, chants de pêcheurs',
      gastronomie: 'Fruits de mer, poissons grillés, cuisine océanique',
    },
    attractions: ['Plages', 'Sports nautiques', 'Vie nocturne', 'Culture côtière'],
    bestTime: { start: '2024-05-01', end: '2024-10-31' },
    population: '120,000',
  },
  {
    id: 3,
    name: 'Likouala',
    capital: 'Impfondo',
    location: 'Nord-Est',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200',
    description: 'Région de la forêt primaire, gardienne des savoirs ancestraux et de la biodiversité',
    culture: {
      traditions: 'Cérémonies forestières, médecine traditionnelle, contes et légendes',
      artisanat: 'Objets en feuilles, instruments de musique, armes traditionnelles',
      musique: 'Musique de la forêt, instruments naturels, chants éthiques',
      gastronomie: 'Produits de la forêt, gibier, fruits sauvages',
    },
    attractions: ['Écotourisme', 'Faune sauvage', 'Randonnées', 'Culture forestière'],
    bestTime: { start: '2024-06-01', end: '2024-09-30' },
    population: '95,000',
  },
  {
    id: 4,
    name: 'Niari',
    capital: 'Dolisie',
    location: 'Sud',
    image: 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=1200',
    description: 'Terre de l\'artisanat et de l\'expression artistique, où la créativité congolaise rayonne',
    culture: {
      traditions: 'Festivals culturels, danses urbaines, expression contemporaine',
      artisanat: 'Bijoux, textiles, art contemporain, design',
      musique: 'Musique moderne, rumba congolaise, fusion',
      gastronomie: 'Cuisine métissée, innovations culinaires, saveurs urbaines',
    },
    attractions: ['Culture', 'Artisanat', 'Traditions', 'Art contemporain'],
    bestTime: { start: '2024-05-01', end: '2024-09-30' },
    population: '250,000',
  },
  {
    id: 5,
    name: 'Lékoumou',
    capital: 'Sibiti',
    location: 'Centre-Sud',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200',
    description: 'Région agricole aux traditions profondes, où la terre et la culture s\'unissent',
    culture: {
      traditions: 'Fêtes agricoles, rituels de récolte, célébrations saisonnières',
      artisanat: 'Outils agricoles, paniers, objets utilitaires',
      musique: 'Chants de travail, musique rurale, harmonie naturelle',
      gastronomie: 'Produits du terroir, plats traditionnels, cuisine de saison',
    },
    attractions: ['Agriculture', 'Traditions', 'Communautés', 'Paysages'],
    bestTime: { start: '2024-06-01', end: '2024-09-30' },
    population: '85,000',
  },
  {
    id: 6,
    name: 'Bouenza',
    capital: 'Madingou',
    location: 'Centre-Sud',
    image: 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=1200',
    description: 'Terre de métissage culturel, où les influences se rencontrent harmonieusement',
    culture: {
      traditions: 'Célébrations multiculturelles, échanges intercommunautaires',
      artisanat: 'Artisanat mixte, créations hybrides',
      musique: 'Fusion musicale, rythmes croisés',
      gastronomie: 'Cuisine fusion, saveurs mélangées',
    },
    attractions: ['Culture mixte', 'Traditions', 'Communautés', 'Échanges'],
    bestTime: { start: '2024-05-01', end: '2024-09-30' },
    population: '310,000',
  },
]

export default function RegionsPage() {
  const [activeDepartment, setActiveDepartment] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDepartment((prev) => (prev + 1) % departments.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  const formatDate = (dateString: string) => {
    return DateTime.fromISO(dateString).setLocale('fr').toFormat('d MMMM')
  }

  return (
    <div className="pt-20">
      {/* Hero Section avec Expression Culturelle */}
      <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
        {departments.map((dept, index) => (
          <div
            key={dept.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === activeDepartment ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${dept.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
            
            {/* Silhouettes culturelles en arrière-plan */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute bottom-0 left-0 right-0 h-64 flex items-end justify-center space-x-8">
                <svg viewBox="0 0 200 200" className="w-32 h-32">
                  <path
                    d="M100 20 Q120 60 100 80 Q80 60 100 20 M100 80 Q120 100 100 120 Q80 100 100 80"
                    fill="currentColor"
                    className="text-white"
                  />
                </svg>
                <svg viewBox="0 0 200 200" className="w-40 h-40">
                  <path
                    d="M100 40 L60 100 L100 140 L140 100 Z"
                    fill="currentColor"
                    className="text-white"
                  />
                </svg>
                <svg viewBox="0 0 200 200" className="w-32 h-32">
                  <circle cx="100" cy="100" r="40" fill="currentColor" className="text-white" />
                </svg>
              </div>
            </div>
          </div>
        ))}

        <div className="relative z-10 container-custom text-center text-white">
          <div data-aos="fade-up" className="mb-6">
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-4">
              DÉCOUVREZ LA CULTURE CONGOLAISE
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6" data-aos="fade-up" data-aos-delay="100">
            Les Départements du Congo
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200" data-aos="fade-up" data-aos-delay="200">
            {departments[activeDepartment].description}
          </p>
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {departments.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveDepartment(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === activeDepartment
                  ? 'bg-golden-yellow w-8'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Départements en détail */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {departments.map((department, index) => (
            <div
              key={department.id}
              className={`mb-24 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'} ${
                index > 0 ? 'pt-24 border-t border-gray-200' : ''
              }`}
              data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src={department.image}
                      alt={department.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center text-white mb-2">
                        <MapPin className="w-5 h-5 mr-2" />
                        <span className="font-semibold">{department.capital}</span>
                      </div>
                      <h2 className="font-display text-4xl font-bold text-white mb-2">
                        Département de {department.name}
                      </h2>
                      <p className="text-white/90 text-lg">{department.description}</p>
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="space-y-8">
                    {/* Culture Section */}
                    <div>
                      <h3 className="font-display text-3xl font-bold text-forest-green mb-6 flex items-center">
                        <Music className="w-8 h-8 mr-3 text-golden-yellow" />
                        Patrimoine Culturel
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-forest-green/5 rounded-xl p-4">
                          <div className="flex items-center mb-2">
                            <Users className="w-5 h-5 text-forest-green mr-2" />
                            <span className="font-semibold text-forest-green">Traditions</span>
                          </div>
                          <p className="text-sm text-gray-600">{department.culture.traditions}</p>
                        </div>
                        <div className="bg-golden-yellow/10 rounded-xl p-4">
                          <div className="flex items-center mb-2">
                            <Palette className="w-5 h-5 text-golden-yellow mr-2" />
                            <span className="font-semibold text-golden-yellow">Artisanat</span>
                          </div>
                          <p className="text-sm text-gray-600">{department.culture.artisanat}</p>
                        </div>
                        <div className="bg-congo-blue/10 rounded-xl p-4">
                          <div className="flex items-center mb-2">
                            <Music className="w-5 h-5 text-congo-blue mr-2" />
                            <span className="font-semibold text-congo-blue">Musique</span>
                          </div>
                          <p className="text-sm text-gray-600">{department.culture.musique}</p>
                        </div>
                        <div className="bg-cultural-red/10 rounded-xl p-4">
                          <div className="flex items-center mb-2">
                            <Camera className="w-5 h-5 text-cultural-red mr-2" />
                            <span className="font-semibold text-cultural-red">Gastronomie</span>
                          </div>
                          <p className="text-sm text-gray-600">{department.culture.gastronomie}</p>
                        </div>
                      </div>
                    </div>

                    {/* Info Pratiques */}
                    <div className="bg-gray-50 rounded-2xl p-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="flex items-center text-gray-600 mb-1">
                            <Calendar className="w-4 h-4 mr-1" />
                            <span className="text-xs">Meilleure période</span>
                          </div>
                          <p className="font-semibold text-forest-green">
                            {formatDate(department.bestTime.start)} - {formatDate(department.bestTime.end)}
                          </p>
                        </div>
                        <div>
                          <div className="text-gray-600 mb-1 text-xs">Population</div>
                          <p className="font-semibold text-forest-green">{department.population} habitants</p>
                        </div>
                      </div>
                    </div>

                    <Link
                      href={`/regions/${department.id}`}
                      className="btn-primary inline-flex items-center w-full justify-center"
                    >
                      Explorer {department.name}
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
