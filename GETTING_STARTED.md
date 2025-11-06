# Guide de Démarrage - Destination Congo

## 🚀 Installation Rapide

### Prérequis
- Node.js 18+ installé
- npm ou yarn

### Étapes

1. **Installer les dépendances**
```bash
npm install
```

2. **Lancer le serveur de développement**
```bash
npm run dev
```

3. **Ouvrir le navigateur**
Rendez-vous sur [http://localhost:3000](http://localhost:3000)

## 📦 Structure du Projet

```
destination-congo/
├── app/                    # Pages Next.js 14 (App Router)
│   ├── page.tsx           # Page d'accueil
│   ├── layout.tsx         # Layout principal
│   ├── globals.css        # Styles globaux
│   ├── destinations/      # Pages destinations
│   ├── activites/         # Pages activités
│   ├── partenaires/       # Espace B2B
│   ├── investisseurs/     # Espace investisseurs
│   ├── contact/           # Page contact
│   ├── regions/           # Pages régions
│   ├── planifier/         # Guide de planification
│   └── actualites/        # Blog et actualités
│
├── components/            # Composants React
│   ├── layout/           # Header, Footer
│   ├── sections/         # Sections de pages
│   └── ui/               # Composants UI réutilisables
│
├── types/                # Types TypeScript
├── public/               # Assets statiques
└── package.json          # Dépendances
```

## 🎨 Personnalisation

### Modifier les Couleurs
Les couleurs sont définies dans `tailwind.config.js` :
- Vert Forêt : `forest-green`
- Jaune Doré : `golden-yellow`
- Rouge Culturel : `cultural-red`
- Bleu Congo : `congo-blue`

### Ajouter du Contenu
- **Destinations** : Modifiez les données dans `components/sections/FeaturedDestinations.tsx`
- **Activités** : Modifiez les données dans `components/sections/Activities.tsx`
- **Blog** : Ajoutez des articles dans `app/actualites/page.tsx`

## 🔧 Configuration

### Images
Les images sont configurées pour utiliser Unsplash. Pour utiliser vos propres images :
1. Placez-les dans `public/images/`
2. Modifiez les URLs dans les composants

### Email
Modifiez les adresses email dans :
- `components/layout/Footer.tsx`
- `app/contact/page.tsx`

### SEO
Modifiez les métadonnées dans `app/layout.tsx`

## 📱 Fonctionnalités à Développer

### Priorité Haute
- [ ] Système d'authentification pour espaces B2B
- [ ] Intégration CMS (Strapi, Contentful)
- [ ] Système de réservation
- [ ] Intégration Google Analytics

### Priorité Moyenne
- [ ] Multilingue complet (next-intl)
- [ ] Système de paiement
- [ ] API backend
- [ ] Tests unitaires

### Priorité Basse
- [ ] Application mobile
- [ ] Système de notifications
- [ ] Dashboard admin

## 🐛 Dépannage

### Erreur "Module not found"
```bash
rm -rf node_modules package-lock.json
npm install
```

### Erreur avec Leaflet (carte)
Assurez-vous que les styles CSS de Leaflet sont importés dans le composant.

### Images ne s'affichent pas
Vérifiez la configuration dans `next.config.js` pour les domaines autorisés.

## 📞 Support

Pour toute question :
- Email : contact@tourismcongo.cg
- Documentation Next.js : https://nextjs.org/docs

---

**Bon développement ! 🚀**


