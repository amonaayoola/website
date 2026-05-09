'use client'
import { useState, useEffect, useCallback } from 'react'

const TESTIMONIALS = [
  {
    quote: 'Testimonial coming soon.',
    name: 'Coming Soon',
    handle: '',
    title: 'Real reviews on the way',
    avatar: '',
  },
  {
    quote: 'Testimonial coming soon.',
    name: 'Coming Soon',
    handle: '',
    title: 'Real reviews on the way',
    avatar: '',
  },
  {
    quote: 'Testimonial coming soon.',
    name: 'Coming Soon',
    handle: '',
    title: 'Real reviews on the way',
    avatar: '',
  },
]

// Each card occupies one of three slots: 'prev' | 'active' | 'next'
// On slide: prev fades out, active slides left to prev, next slides left to active, a new next appears from right

type Slot = 'prev' | 'active' | 'next'

const SLOT_STYLES: Record<Slot, React.CSSProperties> = {
  prev:   { transform: 'translateX(-60%) translateY(40%) scale(0.82)', opacity: 0,   pointerEvents: 'none' },
  active: { transform: 'translateX(0) translateY(0) scale(1)',          opacity: 1                          },
  next:   { transform: 'translateX(110%) scale(.92)',                   opacity: .22, pointerEvents: 'none' },
}

export default function TestimonialsCarousel({ inline }: { inline?: boolean }) {
  const n = TESTIMONIALS.length
  const [active, setActive] = useState(0)
  const [sliding, setSliding] = useState(false)

  const slide = useCallback((dir: 'next' | 'prev') => {
    if (sliding) return
    setSliding(true)
    setTimeout(() => {
      setActive(i => dir === 'next' ? (i + 1) % n : (i - 1 + n) % n)
      setSliding(false)
    }, 480)
  }, [sliding, n])

  useEffect(() => {
    const t = setInterval(() => slide('next'), 4500)
    return () => clearInterval(t)
  }, [slide])

  const prevIdx  = (active - 1 + n) % n
  const nextIdx  = (active + 1) % n

  function slotOf(i: number): Slot {
    if (i === active)   return 'active'
    if (i === prevIdx)  return 'prev'
    if (i === nextIdx)  return 'next'
    return 'next'
  }

  const inner = (
    <>
      {/* Card stage */}
      <div style={{ position: 'relative', height: 180, overflow: 'hidden', display: 'flex', justifyContent: 'center' }}>
        <div style={{ position: 'relative', width: 'min(560px, 86vw)' }}>
          {TESTIMONIALS.map((t, i) => {
            const slot = slotOf(i)
            return (
              <div key={i} style={{
                position: 'absolute',
                top: 0, left: 0, right: 0,
                transform: SLOT_STYLES[slot].transform,
                opacity: SLOT_STYLES[slot].opacity,
                pointerEvents: SLOT_STYLES[slot].pointerEvents as 'none' | undefined,
                transition: 'transform 0.48s cubic-bezier(.4,0,.2,1), opacity 0.48s ease',
              }}>
                <QuoteBlock t={t} active={slot === 'active'} />
              </div>
            )
          })}
        </div>
      </div>

      {/* Controls */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: 20, marginTop: 12 }}>
        <button onClick={() => slide('prev')} style={{
          width: 38, height: 38, borderRadius: '50%',
          border: '1px solid rgba(200,168,130,.3)',
          background: 'transparent', color: 'var(--g)',
          cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 16,
        }}>←</button>

        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          {TESTIMONIALS.map((_, i) => (
            <div key={i} style={{
              width: i === active ? 20 : 7, height: 7,
              borderRadius: 4,
              background: i === active ? 'var(--g)' : 'rgba(200,168,130,.25)',
              transition: 'width .3s, background .3s',
            }} />
          ))}
        </div>

        <button onClick={() => slide('next')} style={{
          width: 38, height: 38, borderRadius: '50%',
          border: '1px solid rgba(200,168,130,.3)',
          background: 'transparent', color: 'var(--g)',
          cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 16,
        }}>→</button>
      </div>
    </>
  )

  if (inline) return <div>{inner}</div>

  return (
    <section style={{
      background: 'linear-gradient(120deg,#0d0b08,#181410 50%,#0c0a07)',
      padding: '32px 44px 36px', position: 'relative', overflow: 'hidden',
    }}>
      <div className="grain" />
      <div style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ marginBottom: 24 }}>
          <div className="section-tag">
            <div className="section-tag-line" />
            <div className="section-tag-text">Chapter 03 / Testimonials</div>
          </div>
        </div>
        {inner}
      </div>
    </section>
  )
}

function QuoteBlock({ t, active }: { t: typeof TESTIMONIALS[0], active?: boolean }) {
  return (
    <div style={{
      background: active ? 'rgba(200,168,130,.04)' : 'transparent',
      border: active ? '1px solid rgba(200,168,130,.12)' : '1px solid transparent',
      padding: active ? 24 : 14,
      position: 'relative',
    }}>
      <div style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: 32, lineHeight: 1, color: 'var(--g)', opacity: .15,
        position: 'absolute', top: 6, left: active ? 12 : 6,
        pointerEvents: 'none', userSelect: 'none',
      }}>&ldquo;</div>

      <p style={{
        fontSize: active ? 13 : 11, fontWeight: 300,
        lineHeight: 1.76, color: active ? 'rgba(244,240,234,.68)' : 'rgba(244,240,234,.36)',
        fontStyle: 'italic', marginBottom: 10,
        position: 'relative', zIndex: 1, paddingTop: 8,
      }}>{t.quote}</p>

      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        {t.avatar ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={t.avatar} alt={t.name} style={{ width: 32, height: 32, borderRadius: '50%', objectFit: 'cover', border: '1px solid rgba(200,168,130,.2)', flexShrink: 0 }} />
        ) : (
          <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'rgba(200,168,130,.12)', border: '1px solid rgba(200,168,130,.2)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, color: 'var(--g)', fontWeight: 700 }}>
            {t.name.charAt(0)}
          </div>
        )}
        <div>
          <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--fg)', marginBottom: 2 }}>{t.name}</div>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
            <span style={{ fontSize: 11, color: 'rgba(244,240,234,.34)' }}>{t.title}</span>
            {t.handle && (
              <a href={`https://x.com/${t.handle.replace('@', '')}`} target="_blank" rel="noopener noreferrer" style={{ fontSize: 11, color: 'var(--g)', opacity: .7, textDecoration: 'none' }}>{t.handle}</a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
