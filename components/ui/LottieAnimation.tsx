'use client'

import Lottie from 'lottie-react'
import { useEffect, useRef } from 'react'

interface LottieAnimationProps {
  animationData: any
  className?: string
  loop?: boolean
  autoplay?: boolean
}

export default function LottieAnimation({
  animationData,
  className = '',
  loop = true,
  autoplay = true,
}: LottieAnimationProps) {
  const lottieRef = useRef<any>(null)

  useEffect(() => {
    if (lottieRef.current && autoplay) {
      lottieRef.current.play()
    }
  }, [autoplay])

  return (
    <Lottie
      lottieRef={lottieRef}
      animationData={animationData}
      loop={loop}
      autoplay={autoplay}
      className={className}
    />
  )
}

