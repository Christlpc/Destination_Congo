'use client'

import { useState } from 'react'
import { Search, X } from 'lucide-react'
import Link from 'next/link'

const searchSuggestions = [
  { type: 'destination', name: 'Parc National de Nouabalé-Ndoki', url: '/destinations/1' },
  { type: 'destination', name: 'Brazzaville', url: '/destinations/2' },
  { type: 'activity', name: 'Safari Écotouristique', url: '/activites/1' },
  { type: 'activity', name: 'Tourisme Fluvial', url: '/activites/4' },
  { type: 'region', name: 'Région Pool', url: '/regions/1' },
]

export default function SearchBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<typeof searchSuggestions>([])

  const handleSearch = (value: string) => {
    setQuery(value)
    if (value.length > 2) {
      const filtered = searchSuggestions.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      )
      setResults(filtered)
    } else {
      setResults([])
    }
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
        aria-label="Rechercher"
      >
        <Search className="w-5 h-5" />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-50"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed top-20 left-1/2 transform -translate-x-1/2 w-full max-w-2xl z-50 px-4">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="flex items-center p-4 border-b">
                <Search className="w-5 h-5 text-gray-400 mr-3" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => handleSearch(e.target.value)}
                  placeholder="Rechercher destinations, activités, régions..."
                  className="flex-1 outline-none text-gray-900"
                  autoFocus
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="ml-3 p-1 hover:bg-gray-100 rounded"
                >
                  <X className="w-5 h-5 text-gray-400" />
                </button>
              </div>
              {results.length > 0 && (
                <div className="max-h-96 overflow-y-auto">
                  {results.map((result, index) => (
                    <Link
                      key={index}
                      href={result.url}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 hover:bg-gray-50 transition-colors border-b last:border-b-0"
                    >
                      <div className="flex items-center">
                        <span className="text-xs px-2 py-1 bg-forest-green/10 text-forest-green rounded mr-3">
                          {result.type}
                        </span>
                        <span className="text-gray-900">{result.name}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
              {query.length > 2 && results.length === 0 && (
                <div className="px-4 py-8 text-center text-gray-500">
                  Aucun résultat trouvé pour "{query}"
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </>
  )
}


