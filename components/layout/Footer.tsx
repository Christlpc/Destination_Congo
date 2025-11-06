import Link from 'next/link'
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react'

const footerLinks = {
  discover: [
    { name: 'Destinations', href: '/destinations' },
    { name: 'Régions Touristiques', href: '/regions' },
    { name: 'Sites et Attractions', href: '/sites' },
    { name: 'Activités', href: '/activites' },
  ],
  plan: [
    { name: 'Planifier son Voyage', href: '/planifier' },
    { name: 'Informations Pratiques', href: '/informations' },
    { name: 'Visas et Documents', href: '/visas' },
    { name: 'Sécurité', href: '/securite' },
  ],
  business: [
    { name: 'Espace Partenaires', href: '/partenaires' },
    { name: 'Espace Corporate', href: '/corporate' },
    { name: 'Espace Investisseurs', href: '/investisseurs' },
    { name: 'Devenir Partenaire', href: '/devenir-partenaire' },
  ],
  legal: [
    { name: 'À Propos', href: '/a-propos' },
    { name: 'Mentions Légales', href: '/mentions-legales' },
    { name: 'Politique de Confidentialité', href: '/confidentialite' },
    { name: 'CGU', href: '/cgu' },
  ],
}

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
  { name: 'Youtube', icon: Youtube, href: 'https://youtube.com' },
]

export default function Footer() {
  return (
    <footer className="bg-forest-green-dark text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-forest-green to-golden-yellow rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">DC</span>
              </div>
              <span className="font-display text-2xl font-bold">Destination Congo</span>
            </div>
            <p className="text-gray-300 mb-6">
              Découvrez les merveilles du Congo Brazzaville à travers des expériences authentiques 
              et inoubliables. Écotourisme, culture, aventure et tourisme fluvial vous attendent.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-golden-yellow" />
                <span>Brazzaville, République du Congo</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-golden-yellow" />
                <span>+242 06 XXX XX XX</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-golden-yellow" />
                <span>contact@tourismcongo.cg</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Découvrir</h3>
            <ul className="space-y-2">
              {footerLinks.discover.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-golden-yellow transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Planifier</h3>
            <ul className="space-y-2">
              {footerLinks.plan.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-golden-yellow transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Professionnels</h3>
            <ul className="space-y-2">
              {footerLinks.business.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-golden-yellow transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="font-display text-xl font-semibold mb-2">Newsletter</h3>
              <p className="text-gray-300">Recevez nos dernières actualités et offres exclusives</p>
            </div>
            <form className="flex w-full md:w-auto space-x-2">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 md:w-64 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-golden-yellow"
              />
              <button
                type="submit"
                className="btn-secondary whitespace-nowrap"
              >
                S'abonner
              </button>
            </form>
          </div>
        </div>

        {/* Social Links and Copyright */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex space-x-4 mb-4 md:mb-0">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-golden-yellow transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
            <div className="text-center md:text-right text-gray-300 text-sm">
              <p>&copy; {new Date().getFullYear()} Destination Congo Brazzaville. Tous droits réservés.</p>
              <p className="mt-1">Développé par l'OPIT - Office de Promotion de l'Investissement et du Tourisme</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}


