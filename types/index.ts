export interface Destination {
  id: number
  name: string
  location: string
  image: string
  description: string
  climate?: string
  bestTime?: string
  activities?: string[]
}

export interface Activity {
  id: number
  title: string
  description: string
  image: string
  duration?: string
  groupSize?: string
  category: string
}

export interface Partner {
  id: number
  name: string
  category: string
  logo: string
  description?: string
}

export interface Testimonial {
  id: number
  name: string
  location: string
  rating: number
  text: string
  image: string
}

export interface BlogPost {
  id: number
  title: string
  excerpt: string
  image: string
  date: string
  category: string
  content?: string
}








