'use client'

import { Users, Plane, Mountain, TreePine, TrendingUp, Globe } from 'lucide-react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js'
import { Bar, Doughnut } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

const stats = [
  {
    icon: Users,
    value: '200K+',
    label: 'Visiteurs par an',
    color: 'text-forest-green',
    bgColor: 'bg-forest-green/10',
  },
  {
    icon: Plane,
    value: '15',
    label: 'Destinations phares',
    color: 'text-golden-yellow',
    bgColor: 'bg-golden-yellow/10',
  },
  {
    icon: Mountain,
    value: '20+',
    label: 'Activités touristiques',
    color: 'text-congo-blue',
    bgColor: 'bg-congo-blue/10',
  },
  {
    icon: TreePine,
    value: '30+',
    label: 'Partenaires certifiés',
    color: 'text-cultural-red',
    bgColor: 'bg-cultural-red/10',
  },
  {
    icon: TrendingUp,
    value: '+15%',
    label: 'Croissance annuelle',
    color: 'text-forest-green',
    bgColor: 'bg-forest-green/10',
  },
  {
    icon: Globe,
    value: '12',
    label: 'Départements',
    color: 'text-golden-yellow',
    bgColor: 'bg-golden-yellow/10',
  },
]

const barChartData = {
  labels: ['2019', '2020', '2021', '2022', '2023', '2024'],
  datasets: [
    {
      label: 'Visiteurs (en milliers)',
      data: [120, 80, 100, 150, 180, 200],
      backgroundColor: 'rgba(45, 80, 22, 0.8)',
      borderColor: 'rgba(45, 80, 22, 1)',
      borderWidth: 2,
      borderRadius: 8,
    },
  ],
}

const doughnutData = {
  labels: ['Écotourisme', 'Culture', 'Aventure', 'Fluvial', 'Autres'],
  datasets: [
    {
      data: [35, 25, 20, 15, 5],
      backgroundColor: [
        'rgba(45, 80, 22, 0.8)',
        'rgba(212, 175, 55, 0.8)',
        'rgba(30, 58, 95, 0.8)',
        'rgba(139, 38, 53, 0.8)',
        'rgba(156, 163, 175, 0.8)',
      ],
      borderColor: [
        'rgba(45, 80, 22, 1)',
        'rgba(212, 175, 55, 1)',
        'rgba(30, 58, 95, 1)',
        'rgba(139, 38, 53, 1)',
        'rgba(156, 163, 175, 1)',
      ],
      borderWidth: 2,
    },
  ],
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom' as const,
      labels: {
        padding: 20,
        font: {
          size: 12,
        },
      },
    },
  },
}

export default function VisitCongoInNumbers() {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Silhouettes d'arbres en arrière-plan */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-0 w-64 h-64">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <path
              d="M100 20 L80 60 L60 80 L100 100 L140 80 L120 60 Z"
              fill="currentColor"
              className="text-forest-green"
            />
            <path
              d="M50 100 L70 140 L100 160 L130 140 L150 100"
              fill="currentColor"
              className="text-forest-green"
            />
          </svg>
        </div>
        <div className="absolute bottom-20 right-0 w-96 h-96">
          <svg viewBox="0 0 300 300" className="w-full h-full">
            <path
              d="M150 40 L120 100 L90 130 L150 150 L210 130 L180 100 Z"
              fill="currentColor"
              className="text-forest-green"
            />
          </svg>
        </div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-forest-green mb-4">
            Le Congo en Chiffres
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez les statistiques qui font du Congo Brazzaville une destination d&apos;exception
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={stat.label}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className={`w-14 h-14 ${stat.bgColor} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className={`w-7 h-7 ${stat.color}`} />
                </div>
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            )
          })}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div
            data-aos="fade-right"
            className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
          >
            <h3 className="font-display text-2xl font-bold text-forest-green mb-6">
              Évolution des Visiteurs
            </h3>
            <div className="h-80">
              <Bar data={barChartData} options={chartOptions} />
            </div>
          </div>

          <div
            data-aos="fade-left"
            className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
          >
            <h3 className="font-display text-2xl font-bold text-forest-green mb-6">
              Répartition par Type de Tourisme
            </h3>
            <div className="h-80">
              <Doughnut data={doughnutData} options={chartOptions} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

