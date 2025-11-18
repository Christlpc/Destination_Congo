export interface TouristSite {
  id: number
  name: string
  position: [number, number]
  type: 'nature' | 'culture' | 'histoire' | 'religieux' | 'cote' | 'fluvial'
  category: string
  rating: number
  description: string
  image: string
  location: string
  activities?: string[]
  bestTime?: string
  access?: string
  gps?: string
  features?: string[]
}

export const touristSites: TouristSite[] = [
  // SITES NATURELS
  {
    id: 1,
    name: 'Parc National de Nouabalé-Ndoki',
    position: [2.5395, 16.6008],
    type: 'nature',
    category: 'Écotourisme',
    rating: 5,
    description: 'L\'un des parcs les plus riches du pays. Forêt tropicale intacte de plus de 4000 km² abritant des gorilles, éléphants, chimpanzés, antilopes et plus de 300 espèces d\'oiseaux. Patrimoine mondial de l\'UNESCO.',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
    location: 'Département de la Sangha (extrême nord du Congo)',
    activities: ['Observation de gorilles au Baï de Mbeli', 'Trek en forêt', 'Croisières fluviales', 'Photographie animalière'],
    bestTime: 'Juin à septembre (saison sèche)',
    access: 'Via Ouesso (vol depuis Brazzaville) puis transfert terrestre/fluvial',
    gps: '2.5395°N, 16.6008°E',
  },
  {
    id: 2,
    name: 'Réserve de Gorilles Lesio-Louna (Lefini)',
    position: [-3.5, 15.5],
    type: 'nature',
    category: 'Écotourisme',
    rating: 4,
    description: 'Belle réserve abritant gorilles et chimpanzés sauvages en proximité avec les visiteurs. Accessible en voiture depuis Brazzaville.',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
    location: 'À 200 km nord-est de Brazzaville',
    activities: ['Observation des gorilles et chimpanzés', 'Randonnées guidées'],
    bestTime: 'Juin à septembre',
    access: 'Accessible en voiture depuis Brazzaville',
  },
  {
    id: 3,
    name: 'Chutes de Brazzaville - Loufoulakari et Bela',
    position: [-4.2, 15.0],
    type: 'nature',
    category: 'Nature',
    rating: 4,
    description: 'Les cascades les plus impressionnantes du Congo. Loufoulakari se jette de façon spectaculaire dans le fleuve Congo. Chutes de Bela, la plus haute atteint 30 mètres.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    location: 'À environ 75 km de Brazzaville',
    activities: ['Photographie', 'Randonnée', 'Observation nature'],
    bestTime: 'Pendant la saison des pluies pour plus d\'eau',
    access: 'Route piste en 4x4 depuis Brazzaville (1h de piste)',
  },
  {
    id: 4,
    name: 'Trou de Nguela (Trou de Dieu)',
    position: [-4.3, 15.0],
    type: 'nature',
    category: 'Nature',
    rating: 3,
    description: 'Vaste dépression ressemblant à un cratère de volcan ou impact de météorite. Site sacré avec des paysages verdoyants surréalistes. "Anneau de Saturne" local.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    location: 'Vallée de Kinkala',
    activities: ['Photographie', 'Randonnée', 'Observation géologique'],
    features: ['Panorama magnifique de la route'],
  },
  {
    id: 5,
    name: 'Lac Bleu (Lac Zan)',
    position: [-4.2, 12.8],
    type: 'nature',
    category: 'Nature',
    rating: 3,
    description: 'Surnommé "l\'anneau de Saturne", ce lac offre de très beaux paysages. Lac de couleur bleu intense en montagne.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    location: 'Vallée de Mâh, à 10 km de Dolisie et 136 km de Brazzaville',
    activities: ['Photographie', 'Pique-nique', 'Promenade'],
    features: ['Site romantique et paisible'],
  },
  {
    id: 6,
    name: 'Monts de la Lune',
    position: [-4.0, 12.5],
    type: 'nature',
    category: 'Nature',
    rating: 3,
    description: 'Formations rocheuses aux formes arrondies surréalistes. Paysage unique et fascinant.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    location: 'Près du village Mila-Mila (Niari), lisière sud de la réserve de Tsoulou',
    activities: ['Randonnée', 'Exploration géologique'],
  },
  {
    id: 7,
    name: 'Glacier de Sel de Makola',
    position: [-4.8, 11.8],
    type: 'nature',
    category: 'Nature',
    rating: 3,
    description: 'Résidu blanc de l\'exploitation de potasse par la Compagnie des Potasses du Congo (CPC). Site unique rappelant des paysages glaciaires.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    location: 'Région du Kouilou',
    features: ['Paysage blanc surprenant en Afrique tropicale', 'Histoire: Exploitation stoppée en 1977'],
  },
  {
    id: 8,
    name: 'Grotte de Nkila-Ntari',
    position: [-4.2, 13.5],
    type: 'nature',
    category: 'Nature',
    rating: 3,
    description: 'Grotte naturelle impressionnante à explorer.',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
    location: 'Département de la Bouenza, près du village Nkila-Ntari',
    activities: ['Exploration spéléologique', 'Randonnée'],
  },
  {
    id: 9,
    name: 'Rapides d\'Adinga',
    position: [-0.5, 14.5],
    type: 'nature',
    category: 'Nature',
    rating: 3,
    description: 'Rapides répertoriés comme sites potentiels pour barrage hydro-électrique. Nature sauvage et riche.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    location: 'Près du village Adinga, commune d\'Etoumbi, rivière Lekoli',
    activities: ['Kayak', 'Observation nature'],
  },
  {
    id: 21,
    name: 'Parc Conkouati-Douli',
    position: [-3.8, 11.2],
    type: 'nature',
    category: 'Écotourisme',
    rating: 4,
    description: 'Parc protégeant forêts luxuriantes, savanes et lagunes. Faune exceptionnelle richement diversifiée.',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
    location: 'Région côtière du Congo',
    activities: ['Safari', 'Observation naturaliste', 'Randonnées'],
    features: ['Éléphants, hippopotames, antilopes, crocodiles, nombreuses espèces d\'oiseaux'],
  },
  {
    id: 22,
    name: 'Réserve du Mont Fouari',
    position: [1.0, 15.0],
    type: 'nature',
    category: 'Écotourisme',
    rating: 3,
    description: 'Réserve naturelle abritant faune et flore exceptionnelles. Peu fréquentée, riche en espèces rares.',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
    location: 'Nord-est du Congo',
  },
  {
    id: 24,
    name: 'Forêts Primaires du Nord',
    position: [1.5, 16.0],
    type: 'nature',
    category: 'Écotourisme',
    rating: 4,
    description: 'Forêts tropicales exubérantes du nord. Nature sauvage, écosystèmes intacts.',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
    location: 'Région nord du Congo',
    features: ['Pour amoureux de la nature et aventuriers'],
  },
  {
    id: 25,
    name: 'Plateaux Batékés',
    position: [-4.0, 15.5],
    type: 'nature',
    category: 'Nature',
    rating: 3,
    description: 'Savane arbustive à perte de vue. Paysages unique du Congo-Brazzaville.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    location: 'Région des plateaux batékés',
    features: ['Contraste avec forêts du nord', 'Faune savannière'],
  },

  // SITES HISTORIQUES ET CULTURELS
  {
    id: 10,
    name: 'Mémorial Pierre Savorgnan de Brazza',
    position: [-4.2634, 15.2772],
    type: 'histoire',
    category: 'Histoire',
    rating: 4,
    description: 'Monument emblématique depuis 2006. Abrite les restes de l\'explorateur franco-italien Pierre Savorgnan de Brazza, fondateur de Brazzaville. Style néoclassique.',
    image: 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=800',
    location: 'Centre-ville de Brazzaville',
    activities: ['Visite historique', 'Expositions', 'Photographie'],
    features: ['Expositions, objets, images, peintures retraçant l\'exploration du Congo'],
  },
  {
    id: 11,
    name: 'Basilique Sainte-Anne de Brazzaville',
    position: [-4.2634, 15.2772],
    type: 'religieux',
    category: 'Religieux',
    rating: 4,
    description: 'Merveille architecturale conçue par le célèbre architecte français Roger Erell. Construite en 1949.',
    image: 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=800',
    location: 'Centre-ville de Brazzaville',
    activities: ['Visite architecturale', 'Office religieux'],
    features: ['Voûtes hautes de 22 mètres', 'Toit émeraude (vert)', 'Vitraux représentant de Gaulle et Félix Éboué', 'Fusion de style européen avec éléments africains'],
  },
  {
    id: 12,
    name: 'Palais du Peuple (Palais Présidentiel)',
    position: [-4.2634, 15.2772],
    type: 'histoire',
    category: 'Histoire',
    rating: 3,
    description: 'Actuel palais présidentiel congolais. Construit vers 1901-1902 par le commissaire général du Congo.',
    image: 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=800',
    location: 'Brazzaville',
    features: ['Monument architectural majeur', 'Réhabilité jusqu\'en 1994'],
  },
  {
    id: 13,
    name: 'Marché Central de Poto-Poto',
    position: [-4.2634, 15.2772],
    type: 'culture',
    category: 'Culture',
    rating: 3,
    description: 'Marché célèbre, foyer de nombreux immigrés ouest-africains. Centre dynamique de la jeunesse urbaine congolaise.',
    image: 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=800',
    location: 'Quartier Poto-Poto, Brazzaville',
    activities: ['Shopping', 'Découverte artisanat', 'Gastronomie locale'],
    features: ['Artisanat, sculptures, bijoux', 'Buvettes populaires', 'École de peinture (créée en 1951)'],
  },
  {
    id: 14,
    name: 'Marché de Moungali',
    position: [-4.2634, 15.2772],
    type: 'culture',
    category: 'Culture',
    rating: 3,
    description: 'Marché incontournable pour les souvenirs et l\'artisanat local.',
    image: 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=800',
    location: 'Quartier Moungali, Brazzaville',
    activities: ['Shopping', 'Artisanat'],
    features: ['Artisanat, sculptures, bijoux congolais'],
  },
  {
    id: 15,
    name: 'Marché de Bacongo',
    position: [-4.2634, 15.2772],
    type: 'culture',
    category: 'Culture',
    rating: 3,
    description: 'Marché traditionnel offrant artisanat local et produits locaux.',
    image: 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=800',
    location: 'Quartier Bacongo, Brazzaville',
    activities: ['Shopping', 'Découverte culturelle'],
    features: ['Artisanat local, sculptures, bijoux, vêtements traditionnels'],
  },
  {
    id: 16,
    name: 'École de Peinture de Poto-Poto',
    position: [-4.2634, 15.2772],
    type: 'culture',
    category: 'Culture',
    rating: 4,
    description: 'L\'une des premières écoles de peinture en Afrique (créée en 1951). Représentation et expression de l\'art congolais.',
    image: 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=800',
    location: 'Centre-ville de Brazzaville, quartier Poto-Poto',
    activities: ['Visite ateliers', 'Galerie', 'Découverte artistique'],
    features: ['Centre culturel majeur', 'Reconnaissance internationale'],
  },
  {
    id: 17,
    name: 'Plateau Ville',
    position: [-4.2634, 15.2772],
    type: 'culture',
    category: 'Culture',
    rating: 3,
    description: 'Centre d\'échanges commerciaux pour touristes.',
    image: 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=800',
    location: 'Centre-ville de Brazzaville',
    activities: ['Shopping', 'Négociation'],
    features: ['Peintures, vêtements africains, artisanat, sculptures, tableaux'],
  },
  {
    id: 18,
    name: 'Parc Mbudi',
    position: [-4.2634, 15.2772],
    type: 'fluvial',
    category: 'Fluvial',
    rating: 3,
    description: 'Site idéal pour promenades belles, romantiques et méditatives en bord de fleuve.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    location: 'Le long de la rivière Congo, Brazzaville',
    activities: ['Marche', 'Détente', 'Photographie'],
    features: ['Photographie de couchers de soleil sur le Congo'],
  },
  {
    id: 19,
    name: 'Golf Club de Brazzaville',
    position: [-4.2634, 15.2772],
    type: 'culture',
    category: 'Loisirs',
    rating: 2,
    description: 'Terrain de golf moderne et sophistiqué.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    location: 'Brazzaville',
    features: ['Vue imprenable sur le fleuve Congo, chutes et forêts'],
  },

  // SITES CÔTIERS
  {
    id: 20,
    name: 'Plages de Pointe-Noire',
    position: [-4.7781, 11.8636],
    type: 'cote',
    category: 'Côte',
    rating: 4,
    description: 'Plages sauvages de Pointe-Noire offrant une côte vierge et sauvage. Ville portuaire dynamique.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    location: 'Pointe-Noire (côte atlantique)',
    activities: ['Baignade', 'Plage', 'Promenade côtière'],
    features: ['Charme côtier authentique', 'Atmosphère océanique'],
  },

  // AUTRES
  {
    id: 23,
    name: 'Fleuve Congo en Croisière',
    position: [-4.2634, 15.2772],
    type: 'fluvial',
    category: 'Fluvial',
    rating: 4,
    description: 'Remontée du majestueux fleuve Congo en bateau rapide. Découverte de nombreux endroits insolites. Frontière naturelle entre Congo-Brazza et Congo-Kinshasa.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    location: 'Brazzaville',
    activities: ['Navigation', 'Observation paysagère', 'Photographie'],
    features: ['Observation des deux capitales Brazzaville et Kinshasa face à face'],
  },
  {
    id: 26,
    name: 'La Mosquée de Brazzaville',
    position: [-4.2634, 15.2772],
    type: 'religieux',
    category: 'Religieux',
    rating: 2,
    description: 'Site distinct dédié à la pratique du culte musulman.',
    image: 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=800',
    location: 'Brazzaville',
    features: ['Éléments de l\'architecture islamique', 'Symbole de la tolérance religieuse'],
  },
  {
    id: 27,
    name: 'Cathédrale du Congo',
    position: [-4.2634, 15.2772],
    type: 'religieux',
    category: 'Religieux',
    rating: 2,
    description: 'Site religieux majeur du Congo.',
    image: 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=800',
    location: 'Brazzaville',
  },
  {
    id: 30,
    name: 'Zone Riveraine du Fleuve Congo',
    position: [-4.2634, 15.2772],
    type: 'fluvial',
    category: 'Fluvial',
    rating: 4,
    description: 'Promenades le long du fleuve Congo, observation de la vie locale, couchers de soleil spectaculaires.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    location: 'Brazzaville',
    activities: ['Promenade', 'Photographie', 'Observation'],
    features: ['Authentique', 'Paisible', 'Culturelle'],
  },
]

export const getSiteTypeColor = (type: string): string => {
  switch (type) {
    case 'nature':
      return '#2D5016' // forest-green
    case 'culture':
      return '#8B2635' // cultural-red
    case 'histoire':
      return '#D4AF37' // golden-yellow
    case 'religieux':
      return '#1E3A5F' // congo-blue
    case 'cote':
      return '#1E3A5F' // congo-blue
    case 'fluvial':
      return '#1E3A5F' // congo-blue
    default:
      return '#2D5016'
  }
}

export const getCategoryLabel = (category: string): string => {
  const labels: Record<string, string> = {
    'Écotourisme': '🌿',
    'Nature': '🌳',
    'Histoire': '🏛️',
    'Culture': '🎭',
    'Religieux': '🕌',
    'Côte': '🏖️',
    'Fluvial': '🌊',
    'Loisirs': '⛳',
  }
  return labels[category] || '📍'
}









