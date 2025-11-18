import Image from 'next/image'

interface FlagIconProps {
  country: 'fr' | 'en'
  className?: string
}

export default function FlagIcon({ country, className = 'w-5 h-5' }: FlagIconProps) {
  const flagImages = {
    fr: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAyMCAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjYuNjY2NjciIGhlaWdodD0iMTUiIGZpbGw9IiMwMDU1QzQiLz4KPHJlY3QgeD0iNi42NjY2NyIgd2lkdGg9IjYuNjY2NjciIGhlaWdodD0iMTUiIGZpbGw9IiNGRkZGRkYiLz4KPHJlY3QgeD0iMTMuMzMzMyIgd2lkdGg9IjYuNjY2NjciIGhlaWdodD0iMTUiIGZpbGw9IiNFRTAwMDAiLz4KPC9zdmc+',
    en: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAyMCAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjE1IiBmaWxsPSIjMDEyMTY5Ii8+CjxwYXRoIGQ9Ik0wIDBIMjBWMTVIMFYwWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTAgMEg4VjZIMFYwWiIgZmlsbD0iIzAxMjE2OSIvPgo8cGF0aCBkPSJNMTIgMEgyMFY2SDEyVjBaIiBmaWxsPSIjMDEyMTY5Ii8+CjxwYXRoIGQ9Ik0wIDlIMjBWMTVIMFY5WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTAgOUg4VjE1SDBWOVoiIGZpbGw9IiMwMTIxNjkiLz4KPHBhdGggZD0iTTEyIDlIMjBWMTVIMTJWOVoiIGZpbGw9IiMwMTIxNjkiLz4KPHBhdGggZD0iTTAgMEgyMFYzSDBWMFoiIGZpbGw9IiNGRkZGRkYiLz4KPHBhdGggZD0iTTAgMTJIMjBWMTVIMFYxMloiIGZpbGw9IiNGRkZGRkYiLz4KPHBhdGggZD0iTTAgMEgzVjE1SDBWMFoiIGZpbGw9IiNGRkZGRkYiLz4KPHBhdGggZD0iTTE3IDBIMjBWMTVIMTdWMFoiIGZpbGw9IiNGRkZGRkYiLz4KPC9zdmc+'
  }

  return (
    <div className={`relative ${className} flex-shrink-0`}>
      <Image
        src={flagImages[country]}
        alt={`${country === 'fr' ? 'Drapeau français' : 'British flag'}`}
        width={20}
        height={15}
        className="rounded-sm object-cover"
        unoptimized
      />
    </div>
  )
}

