'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Marie Dubois',
    location: 'Paris, France',
    rating: 5,
    text: 'Une expérience inoubliable ! Le Congo m\'a émerveillée par sa biodiversité et l\'accueil chaleureux de ses habitants. Je recommande vivement.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
  },
  {
    id: 2,
    name: 'John Smith',
    location: 'New York, USA',
    rating: 5,
    text: 'Le safari dans le parc national était extraordinaire. Nous avons vu des gorilles et des éléphants dans leur habitat naturel. Magique !',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
  },
  {
    id: 3,
    name: 'Ana Silva',
    location: 'Lisbonne, Portugal',
    rating: 5,
    text: 'La croisière sur le fleuve Congo était le point fort de notre voyage. Paysages magnifiques et expérience authentique.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
  },
]

export default function Testimonials() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-forest-green mb-4">
            Témoignages de Voyageurs
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez les expériences authentiques de nos visiteurs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <Quote className="w-12 h-12 text-golden-yellow mb-4" />
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-golden-yellow text-golden-yellow" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="font-semibold text-forest-green">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

