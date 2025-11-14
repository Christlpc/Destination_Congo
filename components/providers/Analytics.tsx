'use client'

import { useEffect } from 'react'
import Script from 'next/script'

export function Analytics() {
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN

  if (!plausibleDomain) {
    return null
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        data-domain={plausibleDomain}
        src="https://plausible.io/js/script.js"
      />
    </>
  )
}

