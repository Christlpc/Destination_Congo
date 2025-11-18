'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, Play } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

const heroImages = [
  'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920',
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920',
  'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=1920',
]

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0)
  const t = useTranslations('hero')
  const tCommon = useTranslations('common')

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images with Fade */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="gradient-overlay" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            {t('title')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
            {t('subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="btn-secondary group">
              {tCommon('explore')}
              <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn-outline border-white text-white hover:bg-white hover:text-forest-green">
              {tCommon('about')}
            </button>
            <button className="btn-outline border-white text-white hover:bg-white hover:text-forest-green">
              {tCommon('invest')}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1 h-3 bg-white rounded-full" />
        </motion.div>
      </div>
    </section>
  )
}


