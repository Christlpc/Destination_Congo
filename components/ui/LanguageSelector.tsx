'use client'

import { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { useLocale } from 'next-intl'
import { ChevronDown } from 'lucide-react'
import FlagIcon from './FlagIcon'

const languages = [
  { code: 'fr', name: 'Français' },
  { code: 'en', name: 'English' },
]

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const locale = useLocale()

  const selectedLang = languages.find(lang => lang.code === locale) || languages[0]

  const handleLanguageChange = (langCode: string) => {
    // Remplacer la locale dans l'URL ou ajouter si elle n'existe pas
    let newPathname = pathname
    if (pathname.startsWith(`/${locale}`)) {
      newPathname = pathname.replace(`/${locale}`, `/${langCode}`)
    } else {
      newPathname = `/${langCode}${pathname === '/' ? '' : pathname}`
    }
    router.push(newPathname)
    router.refresh()
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
          isOpen ? 'bg-gray-100' : 'hover:bg-gray-100'
        }`}
      >
        <FlagIcon country={selectedLang.code as 'fr' | 'en'} className="w-5 h-5" />
        <span className="hidden sm:inline text-sm font-medium">{selectedLang.code.toUpperCase()}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-20 overflow-hidden border border-gray-200">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors flex items-center space-x-3 ${
                  selectedLang.code === lang.code ? 'bg-forest-green/10 text-forest-green' : 'text-gray-700'
                }`}
              >
                <FlagIcon country={lang.code as 'fr' | 'en'} className="w-5 h-5" />
                <span className="text-sm font-medium">{lang.name}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}


