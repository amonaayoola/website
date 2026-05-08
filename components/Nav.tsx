'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/connect', label: 'Connect' },
  { href: 'https://blog.amonaayoola.com', label: 'Blog', external: true },
]

export default function Nav() {
  const pathname = usePathname()
  return (
    <nav style={{
      position: 'fixed', top: 16, left: 0, right: 0, padding: '0 44px',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      zIndex: 300,
    }}>
      <Link href="/" style={{
        fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 15,
        color: 'var(--fg)', flex: 1,
      }}>
        AMONA AYOOLA
      </Link>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 22,
        border: '1px solid rgba(200,168,130,.12)', borderRadius: 100, padding: '10px 20px',
      }}>
        {links.map((l, i) => (
          <span key={l.href} style={{ display: 'contents' }}>
            {i > 0 && <div style={{ width: 1, height: 12, background: 'rgba(244,240,234,.1)' }} />}
            {l.external ? (
              <a href={l.href} target="_blank" rel="noopener" style={{
                fontSize: 10.5, letterSpacing: '.13em', textTransform: 'uppercase',
                color: 'rgba(244,240,234,.36)', transition: 'color .25s',
              }}>{l.label}</a>
            ) : (
              <Link href={l.href} style={{
                fontSize: 10.5, letterSpacing: '.13em', textTransform: 'uppercase',
                color: pathname === l.href ? 'var(--g)' : 'rgba(244,240,234,.36)',
                transition: 'color .25s', position: 'relative',
              }}>{l.label}</Link>
            )}
          </span>
        ))}
      </div>
    </nav>
  )
}
