'use client'
import { useState, useEffect, useRef } from 'react'

const PHRASES = [
  'I Am In The Pursuit Of Greatness.',
  'Build First. Market Always.',
  'The Work Speaks Louder Than The Title.',
  'Every Friday. Decentralized Opinions.',
  'To Know Is To Be Free.',
]

export default function RotatingWhisper() {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      timeoutRef.current = setTimeout(() => {
        setIndex(i => (i + 1) % PHRASES.length)
        setVisible(true)
      }, 500)
    }, 3500)
    return () => {
      clearInterval(interval)
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  return (
    <section className="whisper">
      <div className="whisper-line whisper-line-top" />
      <p style={{
        transition: 'opacity .5s ease, transform .5s ease',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(10px)',
      }}>
        {PHRASES[index]}
      </p>
      <div className="whisper-line whisper-line-bottom" />
    </section>
  )
}
