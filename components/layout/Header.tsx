'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import LanguageSelector from '@/components/ui/LanguageSelector'
import SearchBar from '@/components/ui/SearchBar'

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Découvrir', href: '/destinations' },
  { name: 'Activités', href: '/activites' },
  { name: 'Régions', href: '/regions' },
  { name: 'Planifier', href: '/planifier' },
  { name: 'Actualités', href: '/actualites' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-forest-green to-golden-yellow rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">DC</span>
            </div>
            <span className={`font-display text-2xl font-bold ${scrolled ? 'text-forest-green' : 'text-white'}`}>
              Destination Congo
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors ${
                  scrolled
                    ? 'text-gray-700 hover:text-forest-green'
                    : 'text-white hover:text-golden-yellow'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            <div className="flex items-center space-x-4 ml-4 pl-4 border-l border-gray-200">
              <SearchBar />
              <LanguageSelector />
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled
                ? 'text-gray-700'
                : 'text-white'
            }`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4">
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 py-2">
                <LanguageSelector />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

