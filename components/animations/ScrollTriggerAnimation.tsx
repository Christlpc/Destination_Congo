'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface ScrollTriggerAnimationProps {
  children: React.ReactNode
  className?: string
  animation?: 'fade' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale' | 'parallax'
  delay?: number
}

export default function ScrollTriggerAnimation({
  children,
  className = '',
  animation = 'fade',
  delay = 0,
}: ScrollTriggerAnimationProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const element = ref.current

    let animConfig: gsap.TweenVars = {
      opacity: 0,
      duration: 1,
      delay,
      ease: 'power3.out',
    }

    switch (animation) {
      case 'fade':
        animConfig.opacity = 0
        break
      case 'slideUp':
        animConfig.y = 50
        animConfig.opacity = 0
        break
      case 'slideLeft':
        animConfig.x = -50
        animConfig.opacity = 0
        break
      case 'slideRight':
        animConfig.x = 50
        animConfig.opacity = 0
        break
      case 'scale':
        animConfig.scale = 0.8
        animConfig.opacity = 0
        break
      case 'parallax':
        animConfig.y = 100
        animConfig.opacity = 0
        break
    }

    gsap.fromTo(
      element,
      animConfig,
      {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [animation, delay])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}

