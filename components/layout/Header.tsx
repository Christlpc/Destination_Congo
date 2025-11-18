'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react'
import { useTranslations, useLocale } from 'next-intl'
import LanguageSelector from '@/components/ui/LanguageSelector'
import SearchBar from '@/components/ui/SearchBar'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const t = useTranslations('navigation')
  const locale = useLocale()

  const navigation = [
    { name: t('home'), href: `/${locale}` },
    { name: t('opit'), href: `/${locale}/opit` },
    {
      name: t('discover'),
      href: '#',
      submenu: [
        { name: t('destinations'), href: `/${locale}/destinations` },
        { name: t('interactiveMap'), href: `/${locale}/carte-interactive` },
      ],
    },
    { name: t('investTourism'), href: `/${locale}/investisseurs` },
    { name: t('news'), href: `/${locale}/actualites` },
    {
      name: t('practicalInfo'),
      href: '#',
      submenu: [
        { name: t('guide'), href: `/${locale}/guide-pratique` },
        { name: t('contact'), href: `/${locale}/contact` },
      ],
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest('.dropdown-container')) {
        setOpenDropdown(null)
      }
    }

    if (openDropdown) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [openDropdown])

  const handleDropdownToggle = (itemName: string) => {
    setOpenDropdown(openDropdown === itemName ? null : itemName)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-24 md:h-28">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center">
            <div className="relative w-20 h-20 md:w-24 md:h-24 flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Tourism Congo Logo"
                fill
                className="object-contain"
                priority
                unoptimized
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navigation.map((item) => (
              <div key={item.name} className="relative group dropdown-container">
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => handleDropdownToggle(item.name)}
                      className={`font-medium transition-colors flex items-center space-x-1 ${
                        scrolled
                          ? 'text-gray-700 hover:text-forest-green'
                          : 'text-white hover:text-golden-yellow'
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                    </button>
                    {openDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-gray-700 hover:bg-forest-green/10 hover:text-forest-green transition-colors"
                            onClick={() => setOpenDropdown(null)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`font-medium transition-colors ${
                      scrolled
                        ? 'text-gray-700 hover:text-forest-green'
                        : 'text-white hover:text-golden-yellow'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
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
                <div key={item.name}>
                  {item.submenu ? (
                    <>
                      <button
                        onClick={() => handleDropdownToggle(item.name)}
                        className="w-full flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                      </button>
                      {openDropdown === item.name && (
                        <div className="pl-6 space-y-1">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              onClick={() => {
                                setMobileMenuOpen(false)
                                setOpenDropdown(null)
                              }}
                              className="block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
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

