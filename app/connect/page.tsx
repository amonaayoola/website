export default function ConnectPage() {
  return (
    <>
      <section style={{
        background: 'linear-gradient(160deg,#0d0a06,#181410 40%,#0a0806)',
        minHeight: '100vh', display: 'flex', flexDirection: 'column',
        justifyContent: 'center', alignItems: 'center',
        padding: '120px 44px', textAlign: 'center', position: 'relative', overflow: 'hidden',
      }}>
        <div className="grain" />
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%,-50%)', width: 600, height: 280, borderRadius: '50%',
          background: 'radial-gradient(ellipse,rgba(200,168,130,.06),transparent 70%)',
          animation: 'pulse 5s ease-in-out infinite', pointerEvents: 'none',
        }} />
        <div style={{ position: 'relative', zIndex: 2 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/connect-photo.jpg" alt="Amona Ayoola" style={{
            width: 82, height: 82, borderRadius: '50%', objectFit: 'cover', objectPosition: 'center 15%',
            border: '2px solid rgba(200,168,130,.4)', margin: '0 auto 26px', display: 'block',
          }} />
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(38px,6vw,86px)', fontWeight: 900,
            letterSpacing: '-.04em', lineHeight: .92, color: 'var(--fg)', marginBottom: 20,
          }}>
            Let&apos;s build<br /><em style={{ color: 'var(--g)', fontStyle: 'italic' }}>something.</em>
          </h1>
          <p style={{
            fontSize: 15, fontWeight: 300, color: 'rgba(244,240,234,.42)',
            marginBottom: 44, lineHeight: 1.65, maxWidth: 460, margin: '0 auto 44px',
          }}>
            Web3 founder who needs traction. Product team planning a launch. A firm that needs a marketer who actually understands crypto. I&apos;m available.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 28, marginBottom: 40, flexWrap: 'wrap' }}>
            {[
              { label: 'Twitter / X', href: 'https://x.com/noahthedivine' },
              { label: 'LinkedIn', href: 'https://linkedin.com/in/amonaayoola' },
              { label: 'Email', href: 'mailto:amonaayoola@gmail.com' },
            ].map(l => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener" style={{
                fontSize: 13, color: 'rgba(244,240,234,.34)',
                display: 'flex', alignItems: 'center', gap: 7, transition: 'color .2s',
              }}>
                <div style={{ width: 4, height: 4, background: 'var(--g)', borderRadius: '50%' }} />
                {l.label}
              </a>
            ))}
          </div>
          <a href="mailto:amonaayoola@gmail.com" className="btn-outline">
            Send a Message
          </a>
        </div>
      </section>
    </>
  )
}
