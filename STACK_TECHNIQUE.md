# Stack Technique - TOURISM CONGO

## 🚀 Stack Moderne et Premium

Ce projet utilise une stack technique de niveau professionnel pour créer un site de promotion touristique premium, performant et scalable.

---

## 📦 Technologies Installées

### 1. **Framework - Next.js 16**
- ✅ Next.js 16 avec App Router
- ✅ React Server Components (RSC) pour des pages ultra rapides
- ✅ SSR + ISR pour optimiser SEO et vitesse
- ✅ Optimisations automatiques des imports de packages

### 2. **UI / Design**

#### **Tailwind CSS**
- Framework CSS flexible pour une identité visuelle élégante
- Design premium sans limite
- Idéal pour animations + mises en page riches

#### **shadcn/ui**
- Composants UI ultra propres
- Facilement stylisables pour le thème "Congo Nature + Modern Tech"
- Compatible Tailwind
- **Installation**: `npx shadcn@latest add [component-name]`

#### **Framer Motion**
- Micro-interactions fluides (fade, parallax, slides)
- Effet premium garanti
- Déjà installé et configuré

### 3. **Animations Avancées**

#### **Lenis - Smooth Scroll**
- Effet de défilement doux et premium
- **Provider**: `components/providers/SmoothScrollProvider.tsx`
- Déjà intégré dans le layout principal

#### **GSAP ScrollTrigger**
- Animations au scroll avancées
- **Composant**: `components/animations/ScrollTriggerAnimation.tsx`
- Supporte: fade, slideUp, slideLeft, slideRight, scale, parallax

**Exemple d'utilisation:**
```tsx
import ScrollTriggerAnimation from '@/components/animations/ScrollTriggerAnimation'

<ScrollTriggerAnimation animation="fade" delay={0.2}>
  <div>Votre contenu</div>
</ScrollTriggerAnimation>
```

### 4. **3D / Effets Visuels**

#### **Three.js + React Three Fiber**
- Carte 3D du Congo
- Scènes jungle stylisées
- Transitions immersives
- **Composant exemple**: `components/3d/CongoMap3D.tsx`

**Exemple d'utilisation:**
```tsx
import CongoMap3D from '@/components/3d/CongoMap3D'

<CongoMap3D />
```

### 5. **Images / Médias**

#### **Next/Image + Cloudinary**
- Compression automatique
- CDN global
- Transformation dynamique
- **Utilitaire**: `lib/cloudinary.ts`

**Exemple d'utilisation:**
```tsx
import { getCloudinaryUrl } from '@/lib/cloudinary'

const imageUrl = getCloudinaryUrl('path/to/image.jpg', {
  width: 800,
  quality: 80,
  format: 'webp'
})
```

#### **Lottie Animations**
- Icônes animées premium
- **Composant**: `components/ui/LottieAnimation.tsx`

**Exemple d'utilisation:**
```tsx
import LottieAnimation from '@/components/ui/LottieAnimation'
import animationData from '@/public/animations/elephant.json'

<LottieAnimation animationData={animationData} loop={true} />
```

### 6. **CMS Headless - Sanity.io**

#### **Configuration**
- **Client**: `lib/sanity.ts`
- **Image Builder**: Fonction `urlFor()` pour optimiser les images Sanity

**Variables d'environnement requises:**
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

**Exemple d'utilisation:**
```tsx
import { sanityClient } from '@/lib/sanity'
import { urlFor } from '@/lib/sanity'

// Récupérer des données
const data = await sanityClient.fetch(`*[_type == "destination"]`)

// Optimiser une image
const imageUrl = urlFor(data.image).width(800).url()
```

### 7. **SEO / Performance**

#### **Next.js Metadata API**
- Métadonnées automatisées
- OpenGraph optimisés
- Sitemap automatique
- **Configuration**: `lib/seo.ts`

**Exemple d'utilisation dans une page:**
```tsx
import { Metadata } from 'next'
import { defaultSEO } from '@/lib/seo'

export const metadata: Metadata = {
  ...defaultSEO,
  title: 'Ma Page',
  description: 'Description de ma page',
}
```

#### **Schema.org JSON-LD**
- **Fonction**: `generateTourismSchema()` dans `lib/seo.ts`
- Pour les attractions touristiques

### 8. **Analytics**

#### **Plausible Analytics**
- Léger, écolo, européen
- **Composant**: `components/providers/Analytics.tsx`
- Déjà intégré dans le layout

**Variable d'environnement:**
```env
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=tourismcongo.cg
```

---

## 🔧 Configuration

### Variables d'Environnement

Créez un fichier `.env.local` avec:

```env
# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET=production

# Cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name

# Plausible Analytics
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=tourismcongo.cg

# Site URL
NEXT_PUBLIC_SITE_URL=https://tourismcongo.cg
```

### Next.js Config

Le fichier `next.config.js` est configuré avec:
- ✅ Support Cloudinary et Sanity pour les images
- ✅ Optimisation des imports de packages volumineux
- ✅ Configuration des domaines d'images distants

---

## 📚 Structure des Fichiers

```
├── components/
│   ├── 3d/                    # Composants Three.js
│   │   └── CongoMap3D.tsx
│   ├── animations/            # Animations GSAP
│   │   └── ScrollTriggerAnimation.tsx
│   ├── providers/             # Providers React
│   │   ├── SmoothScrollProvider.tsx
│   │   └── Analytics.tsx
│   └── ui/                    # Composants UI
│       └── LottieAnimation.tsx
├── lib/
│   ├── cloudinary.ts          # Utilitaires Cloudinary
│   ├── sanity.ts              # Client Sanity
│   ├── seo.ts                 # Configuration SEO
│   └── utils.ts               # Utilitaires shadcn/ui
└── app/
    └── layout.tsx              # Layout principal avec providers
```

---

## 🎯 Prochaines Étapes

### 1. **Configurer Sanity.io**
1. Créer un projet sur [sanity.io](https://www.sanity.io)
2. Configurer les schémas pour:
   - Destinations
   - Articles/Actualités
   - Parcs nationaux
   - Galeries photos
3. Ajouter les variables d'environnement

### 2. **Configurer Cloudinary**
1. Créer un compte sur [cloudinary.com](https://cloudinary.com)
2. Configurer les transformations automatiques
3. Ajouter la variable d'environnement

### 3. **Configurer Plausible Analytics**
1. Créer un compte sur [plausible.io](https://plausible.io)
2. Ajouter votre domaine
3. Ajouter la variable d'environnement

### 4. **Ajouter des Composants shadcn/ui**
```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add dialog
# etc.
```

### 5. **Créer des Animations Lottie**
- Utiliser [LottieFiles](https://lottiefiles.com) pour créer/télécharger des animations
- Placer les fichiers JSON dans `public/animations/`

---

## 🚀 Commandes Disponibles

```bash
# Développement
npm run dev

# Build de production
npm run build

# Démarrer en production
npm start

# Linter
npm run lint

# Ajouter un composant shadcn/ui
npx shadcn@latest add [component-name]
```

---

## 📖 Ressources

- [Next.js 16 Documentation](https://nextjs.org/docs)
- [shadcn/ui Components](https://ui.shadcn.com)
- [Framer Motion](https://www.framer.com/motion/)
- [GSAP ScrollTrigger](https://greensock.com/docs/v3/Plugins/ScrollTrigger)
- [Three.js](https://threejs.org)
- [Sanity.io](https://www.sanity.io/docs)
- [Cloudinary](https://cloudinary.com/documentation)
- [Lenis](https://lenis.studiofreight.com)
- [Plausible Analytics](https://plausible.io/docs)

---

## ✨ Résultat

Un site:
- ✅ Ultra rapide (Next.js 16 + RSC)
- ✅ Immersif (animations avancées + 3D)
- ✅ Premium (design élégant)
- ✅ Mise en valeur visuelle du Congo
- ✅ Se met à jour facilement via Sanity CMS
- ✅ 100% optimisé SEO / tourisme
- ✅ Analytics respectueux de la vie privée

