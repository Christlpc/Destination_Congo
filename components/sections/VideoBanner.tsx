'use client'

import { useState } from 'react'
import { Play, X } from 'lucide-react'

export default function VideoBanner() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920)',
          }}
        />
        <div className="gradient-overlay" />
      </div>

      <div className="relative z-10 container-custom h-full flex items-center justify-center">
        <div className="text-center text-white">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Une Expérience Immersive
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-200">
            Plongez dans la beauté naturelle et la richesse culturelle du Congo Brazzaville
          </p>
          <button
            onClick={() => setIsPlaying(true)}
            className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all flex items-center justify-center group"
          >
            <Play className="w-10 h-10 text-white ml-1 group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </div>

      {/* Video Modal */}
      {isPlaying && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <button
            onClick={() => setIsPlaying(false)}
            className="absolute top-4 right-4 text-white hover:text-golden-yellow transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="w-full max-w-4xl aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Destination Congo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  )
}


