'use client'

import { useState, FormEvent } from 'react'
import { Mail, Check } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // TODO: Integrate with newsletter service
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setEmail('')
    }, 3000)
  }

  return (
    <section className="section-padding bg-gradient-to-r from-forest-green to-congo-blue text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Restez Informé
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Recevez nos dernières actualités, offres exclusives et conseils de voyage
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <div className="flex-1 relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre adresse email"
                required
                className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-golden-yellow"
              />
            </div>
            <button
              type="submit"
              className={`px-8 py-4 rounded-lg font-semibold transition-all ${
                submitted
                  ? 'bg-green-500'
                  : 'bg-golden-yellow text-forest-green hover:bg-golden-yellow-light'
              }`}
            >
              {submitted ? (
                <span className="flex items-center">
                  <Check className="w-5 h-5 mr-2" />
                  Abonné !
                </span>
              ) : (
                "S'abonner"
              )}
            </button>
          </form>
          <p className="text-sm text-gray-300 mt-4">
            En vous abonnant, vous acceptez notre politique de confidentialité
          </p>
        </div>
      </div>
    </section>
  )
}

