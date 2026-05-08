'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function ScrollReveal() {
  const pathname = usePathname()

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('on')
          }
        })
      },
      { threshold: 0, rootMargin: '0px 0px 300px 0px' }
    )

    const observe = () => {
      document.querySelectorAll('.rv').forEach((el) => obs.observe(el))
    }

    // Observe immediately
    observe()

    // Also observe after a short delay to catch RSC-hydrated elements
    const t1 = setTimeout(observe, 100)
    const t2 = setTimeout(observe, 400)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      obs.disconnect()
    }
  }, [pathname])

  return null
}
