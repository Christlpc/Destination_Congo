'use client'

import { useState } from 'react'
import { MessageCircle, X, Send } from 'lucide-react'

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-forest-green text-white rounded-full shadow-lg hover:shadow-xl hover:bg-forest-green-dark transition-all flex items-center justify-center z-40"
        aria-label="Ouvrir le chat"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[500px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-forest-green text-white p-4 flex items-center justify-between">
            <div>
              <h3 className="font-semibold">Support Client</h3>
              <p className="text-sm text-gray-200">Nous répondons généralement en quelques minutes</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-golden-yellow transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            <div className="space-y-4">
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <p className="text-sm text-gray-700">
                  Bonjour ! Comment pouvons-nous vous aider aujourd&apos;hui ?
                </p>
              </div>
            </div>
          </div>

          {/* Input */}
          <div className="border-t p-4">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                placeholder="Tapez votre message..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-green"
              />
              <button className="w-10 h-10 bg-forest-green text-white rounded-lg hover:bg-forest-green-dark transition-colors flex items-center justify-center">
                <Send className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Ou contactez-nous :{' '}
              <a href="mailto:contact@tourismcongo.cg" className="text-forest-green hover:underline">
                contact@tourismcongo.cg
              </a>
            </p>
          </div>
        </div>
      )}
    </>
  )
}


