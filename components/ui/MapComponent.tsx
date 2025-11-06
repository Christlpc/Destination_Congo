'use client'

import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import Link from 'next/link'
import { MapPin, Star, Calendar, Navigation, ArrowRight } from 'lucide-react'
import { touristSites, getSiteTypeColor, getCategoryLabel } from '@/data/touristSites'

// Fix for default marker icons in Next.js
if (typeof window !== 'undefined') {
  delete (L.Icon.Default.prototype as any)._getIconUrl
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
  })
}

const defaultCenter: [number, number] = [-1.0, 15.0] // Centre du Congo

const filterTypeMap: Record<string, string[]> = {
  all: ['nature', 'culture', 'histoire', 'religieux', 'cote', 'fluvial'],
  ecotourisme: ['nature'],
  culture: ['culture'],
  aventure: ['nature', 'cote'],
  fluvial: ['fluvial'],
}

interface MapComponentProps {
  activeFilter: string
}

export default function MapComponent({ activeFilter }: MapComponentProps) {
  const allowedTypes = filterTypeMap[activeFilter] || filterTypeMap.all
  const filteredSites = touristSites.filter(site => allowedTypes.includes(site.type))

  return (
    <MapContainer
      center={defaultCenter}
      zoom={6}
      style={{ height: '700px', width: '100%' }}
      scrollWheelZoom={true}
      className="z-0"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {filteredSites.map((site) => {
        const color = getSiteTypeColor(site.type)
        const categoryIcon = getCategoryLabel(site.category)
        
        return (
          <div key={site.id}>
            <Circle
              center={site.position}
              radius={30000}
              pathOptions={{
                color: color,
                fillColor: color,
                fillOpacity: 0.15,
                weight: 2,
              }}
            />
            <Marker position={site.position}>
              <Popup className="custom-popup" maxWidth={400}>
                <div className="p-0 min-w-[350px]">
                  {/* Image */}
                  <div className="relative w-full h-48 overflow-hidden">
                    <img
                      src={site.image}
                      alt={site.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    
                    {/* Badge Category */}
                    <div className="absolute top-3 right-3">
                      <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
                        <span className="text-lg">{categoryIcon}</span>
                        <span className="text-xs font-bold text-forest-green">{site.category}</span>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="absolute bottom-3 left-3 flex items-center space-x-1">
                      {[...Array(site.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-golden-yellow text-golden-yellow" />
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    {/* Title & Location */}
                    <div className="mb-3">
                      <h3 className="font-display text-xl font-bold text-forest-green mb-2 flex items-start">
                        <MapPin className="w-5 h-5 mr-2 text-golden-yellow flex-shrink-0 mt-0.5" />
                        <span>{site.name}</span>
                      </h3>
                      <p className="text-sm text-gray-600 flex items-center">
                        <Navigation className="w-3 h-3 mr-1" />
                        {site.location}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-700 mb-4 leading-relaxed line-clamp-3">
                      {site.description}
                    </p>

                    {/* Activities */}
                    {site.activities && site.activities.length > 0 && (
                      <div className="mb-4">
                        <div className="text-xs font-semibold text-gray-500 mb-2 uppercase">Activités</div>
                        <div className="flex flex-wrap gap-2">
                          {site.activities.slice(0, 3).map((activity, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-forest-green/10 text-forest-green text-xs rounded-lg"
                            >
                              {activity}
                            </span>
                          ))}
                          {site.activities.length > 3 && (
                            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-lg">
                              +{site.activities.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Info Grid */}
                    <div className="grid grid-cols-2 gap-3 mb-4 text-xs">
                      {site.bestTime && (
                        <div className="flex items-start space-x-2">
                          <Calendar className="w-4 h-4 text-golden-yellow flex-shrink-0 mt-0.5" />
                          <div>
                            <div className="text-gray-500 mb-0.5">Meilleure période</div>
                            <div className="font-semibold text-gray-700">{site.bestTime}</div>
                          </div>
                        </div>
                      )}
                      {site.gps && (
                        <div className="flex items-start space-x-2">
                          <Navigation className="w-4 h-4 text-congo-blue flex-shrink-0 mt-0.5" />
                          <div>
                            <div className="text-gray-500 mb-0.5">GPS</div>
                            <div className="font-semibold text-gray-700">{site.gps}</div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Features */}
                    {site.features && site.features.length > 0 && (
                      <div className="mb-4 pt-3 border-t border-gray-200">
                        <div className="text-xs font-semibold text-gray-500 mb-2 uppercase">Caractéristiques</div>
                        <ul className="space-y-1">
                          {site.features.slice(0, 2).map((feature, index) => (
                            <li key={index} className="text-xs text-gray-600 flex items-start">
                              <span className="text-golden-yellow mr-2">•</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* CTA */}
                    <Link
                      href={`/destinations/${site.id}`}
                      className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200 group"
                    >
                      <span className="text-sm font-semibold text-forest-green group-hover:text-forest-green-dark transition-colors">
                        Découvrir en détail
                      </span>
                      <ArrowRight className="w-4 h-4 text-forest-green group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </Popup>
            </Marker>
          </div>
        )
      })}
    </MapContainer>
  )
}

