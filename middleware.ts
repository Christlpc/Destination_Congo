import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
  // Liste des locales supportées
  locales: ['fr', 'en'],
  
  // Locale par défaut
  defaultLocale: 'fr',
  
  // Toujours afficher la locale dans l'URL
  localePrefix: 'always'
})

export const config = {
  // Matcher pour toutes les routes sauf api, _next et fichiers statiques
  matcher: ['/', '/(fr|en)/:path*']
}

