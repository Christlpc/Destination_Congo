'use client'

import { useState } from 'react'
import { Globe, ChevronDown } from 'lucide-react'

const languages = [
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
]

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedLang] = useState(languages[0])

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
      >
        <span>{selectedLang.flag}</span>
        <span className="hidden sm:inline">{selectedLang.code.toUpperCase()}</span>
        <ChevronDown className="w-4 h-4" />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-20 overflow-hidden">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  // TODO: Implement language switching
                  setIsOpen(false)
                }}
                className={`w-full px-4 py-2 text-left hover:bg-gray-100 transition-colors flex items-center space-x-2 ${
                  selectedLang.code === lang.code ? 'bg-forest-green/10' : ''
                }`}
              >
                <span>{lang.flag}</span>
                <span>{lang.name}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}


