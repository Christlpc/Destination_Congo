import Link from 'next/link'
import Image from 'next/image'
import { Calendar, ArrowRight } from 'lucide-react'

const articles = [
  {
    id: 1,
    title: 'Nouveau Parc National Inauguré',
    excerpt: 'Découvrez le nouveau parc national qui ouvre ses portes aux visiteurs',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
    date: '15 Janvier 2024',
    category: 'Actualités',
  },
  {
    id: 2,
    title: 'Festival Culturel de Brazzaville',
    excerpt: 'Le festival annuel de culture congolaise revient avec de nombreuses surprises',
    image: 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=800',
    date: '10 Janvier 2024',
    category: 'Événements',
  },
  {
    id: 3,
    title: 'Guide du Tourisme Durable',
    excerpt: 'Comment voyager de manière responsable au Congo Brazzaville',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    date: '5 Janvier 2024',
    category: 'Blog',
  },
]

export default function ActualitesPage() {
  return (
    <div className="pt-20">
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
            Actualités & Événements
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Restez informé des dernières actualités touristiques
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link
                key={article.id}
                href={`/actualites/${article.id}`}
                className="group"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-forest-green text-xs font-semibold rounded-full">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-gray-500 text-sm mb-2">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{article.date}</span>
                    </div>
                    <h2 className="font-display text-xl font-bold text-forest-green mb-2">
                      {article.title}
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center text-forest-green font-semibold group-hover:gap-2 transition-all">
                      Lire la suite
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}









