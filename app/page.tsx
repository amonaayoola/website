import Link from 'next/link'
import Stars from '@/components/Stars'

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section style={{
        minHeight: '100vh', height: '100vh',
        display: 'grid', gridTemplateColumns: '42% 1fr',
        background: 'linear-gradient(160deg,#1a1108,#241608 25%,#1c1209 50%,#120d06 75%,#0e0a05)',
        overflow: 'hidden', position: 'relative',
      }} className="hero-section">
        <div className="grain" />

        {/* Hero texture overlays */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
          backgroundImage: 'repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(200,168,130,.012) 2px,rgba(200,168,130,.012) 4px),repeating-linear-gradient(90deg,transparent,transparent 3px,rgba(200,168,130,.008) 3px,rgba(200,168,130,.008) 6px)',
          backgroundSize: '6px 4px',
        }} />
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
          background: 'radial-gradient(ellipse at 20% 80%,rgba(200,168,130,.08) 0%,transparent 50%),radial-gradient(ellipse at 80% 20%,rgba(180,140,100,.06) 0%,transparent 40%)',
        }} />

        {/* Pulsing glow */}
        <div style={{
          position: 'absolute', top: '30%', left: '35%',
          transform: 'translate(-50%,-50%)', width: 800, height: 900,
          borderRadius: '50%',
          background: 'radial-gradient(ellipse at 50% 30%,rgba(200,168,130,.22) 0%,rgba(200,168,130,.08) 40%,transparent 70%)',
          animation: 'pulse 4s ease-in-out infinite', pointerEvents: 'none', zIndex: 2,
        }} />

        {/* Ghost text */}
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%,-50%)',
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(70px,14vw,200px)', fontWeight: 900,
          color: 'transparent', WebkitTextStroke: '1px rgba(200,168,130,.04)',
          whiteSpace: 'nowrap', userSelect: 'none', zIndex: 1, letterSpacing: '-.04em',
        }}>AMONA</div>

        {/* Stars */}
        <Stars />

        {/* Left: photo */}
        <div className="hero-left" style={{ position: 'relative', zIndex: 5, overflow: 'hidden' }}>
          {/* Photo placeholder — replace src with your actual photo */}
          <div style={{
            width: '100%', height: '100%',
            background: 'linear-gradient(160deg,#1e1508 0%,#120d06 60%,#0a0806 100%)',
            display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-start',
            padding: '0 0 40px 36px',
          }}>
            {/* Uncomment when you add your photo:
            <img src="/photo.jpg" alt="Amona Ayoola" style={{
              position: 'absolute', inset: 0, width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: 'center top',
              filter: 'contrast(1.04) brightness(.97)',
            }} /> */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to right,transparent 55%,rgba(10,8,6,.7) 100%),linear-gradient(to top,rgba(10,8,6,.3) 0%,transparent 30%)',
              pointerEvents: 'none',
            }} />
          </div>
        </div>

        {/* Right: text */}
        <div className="hero-right" style={{
          position: 'relative', zIndex: 5,
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          padding: '100px 60px 80px 48px',
        }}>
          <div style={{
            fontSize: 11, fontWeight: 500, letterSpacing: '.18em', textTransform: 'uppercase',
            color: 'var(--g)', marginBottom: 24, animation: 'fu .6s .1s both',
          }}>
            Web3 Marketer · GTM Strategist
          </div>
          <div style={{
            fontFamily: "'Playfair Display', serif", fontStyle: 'italic',
            fontSize: 'clamp(14px,1.8vw,22px)', color: 'rgba(244,240,234,.52)',
            lineHeight: 1.5, marginBottom: 16, animation: 'fu .7s .28s both',
          }}>
            Most marketers talk about growth.
          </div>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(42px,6vw,88px)', fontWeight: 900,
            lineHeight: .88, letterSpacing: '-.04em', color: 'var(--fg)',
            marginBottom: 32, animation: 'fu .85s .44s both',
          }}>
            I build it<br /><em style={{ color: 'var(--g)', fontStyle: 'normal' }}>in public.</em>
          </h1>
          <p style={{
            fontSize: 15, fontWeight: 300, lineHeight: 1.68, color: 'rgba(244,240,234,.5)',
            marginBottom: 32, maxWidth: 380, animation: 'fu .7s .58s both',
          }}>
            Grew a client&apos;s X account from 30K to 120K in 90 days. Organic only. Ran the same playbook: 50K to 150K+. Grossed $200K at Ri-Mark. Sold out two Web3 events.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', animation: 'fu .7s .68s both' }}>
            <Link href="/work" className="btn-primary">See the Work</Link>
            <Link href="/connect" className="btn-ghost">Get in Touch</Link>
          </div>
        </div>

        {/* Scroll hint */}
        <div id="sh" style={{
          position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
          opacity: .4, zIndex: 6,
        }}>
          <span style={{ fontSize: 10, letterSpacing: '.2em', textTransform: 'uppercase' }}>Scroll</span>
          <div style={{ width: 1, height: 34, background: 'linear-gradient(to bottom,var(--g),transparent)' }} />
        </div>
      </section>

      {/* STATS */}
      <section style={{
        background: 'linear-gradient(135deg,#12100c,#1e160a 40%,#0a0806)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div className="grain" />
        <div className="stats-grid" style={{
          display: 'grid', gridTemplateColumns: 'repeat(3,1fr)',
          padding: '0 44px', borderTop: '1px solid rgba(244,240,234,.07)',
          position: 'relative', zIndex: 2,
        }}>
          {[
            { value: '~$200K', sub: 'Grossed at Ri-Mark over two years. No paid acquisition.' },
            { value: '90 days', sub: 'Organic growth. Compounded impressions. No paid spend.' },
            { value: '~1,000+', sub: 'Pre-launch waitlist signups. Minimal spend.' },
          ].map((s, i) => (
            <div key={i} className="stat-cell" style={{
              padding: '52px 0',
              paddingLeft: i > 0 ? 38 : 0,
              borderRight: i < 2 ? '1px solid rgba(244,240,234,.08)' : 'none',
            }}>
              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(34px,4.5vw,60px)', fontWeight: 700,
                letterSpacing: '-.03em', lineHeight: 1, marginBottom: 10,
                color: 'var(--fg)',
              }}><span style={{ color: 'var(--g)' }}>{s.value}</span></div>
              <div style={{ fontSize: 12, color: 'rgba(244,240,234,.38)', lineHeight: 1.55, fontWeight: 300 }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WHISPER */}
      <section className="whisper">
        <div className="whisper-line whisper-line-top" />
        <p>I Am In The Pursuit Of Greatness.</p>
        <div className="whisper-line whisper-line-bottom" />
      </section>

      {/* SERVICES */}
      <section style={{
        background: 'linear-gradient(120deg,#0d0b08,#181410 50%,#0c0a07)',
        padding: '100px 44px', position: 'relative', overflow: 'hidden',
      }} className="services-section">
        <div className="grain" />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-tag">
            <div className="section-tag-line" />
            <div className="section-tag-text">Chapter 02 / What I Do</div>
          </div>
          {[
            { n: '01', title: 'Go-To-Market Strategy', acc: 'From first principles.', desc: 'Pre-launch, launch, and post-launch playbooks built for crypto and DeFi products. Customer journey mapping, waitlist building, and community-driven growth, organic-first, always.' },
            { n: '02', title: 'Web3 Growth', acc: 'Zero budget.', desc: "I've built audiences, communities, and waitlists without burning through a budget. One-on-one outreach, daily content, low-spend marketing. Organic credibility is the rarest asset in Web3." },
            { n: '03', title: 'Community Building', acc: 'Members become marketers.', desc: 'I build communities where members become advocates and advocates become your best marketers. Sold out two paid Web3 events through DMs, calls, and one-on-one outreach alone.' },
            { n: '04', title: 'One-on-One Sales', acc: 'Zero dollar. Real closes.', desc: "I've personally DMed over 1,000 prospects and closed paid event registrations one conversation at a time. Cold inbox to paid ticket. That's the funnel." },
          ].map((w) => (
            <div key={w.n} className="service-row" style={{
              display: 'grid', gridTemplateColumns: '50px 1fr', gap: 30,
              padding: '42px 0', borderTop: '1px solid rgba(244,240,234,.08)', alignItems: 'start',
            }}>
              <div style={{ fontSize: 11, color: 'var(--g)', opacity: .5, letterSpacing: '.08em', paddingTop: 5 }}>{w.n}</div>
              <div>
                <div>
                  <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(22px,3vw,40px)', fontWeight: 700, letterSpacing: '-.025em', lineHeight: 1, color: 'var(--fg)' }}>{w.title}</span>
                  <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--g)', opacity: .8, marginLeft: 14 }}>{w.acc}</span>
                </div>
                <p style={{ fontSize: 15, fontWeight: 300, lineHeight: 1.76, color: 'rgba(244,240,234,.44)', maxWidth: 580, marginTop: 8 }}>{w.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHISPER 2 */}
      <section className="whisper">
        <div className="whisper-line whisper-line-top" />
        <p>The best GTM strategy isn&apos;t the most creative one. It&apos;s the one that finds people who are already angry and gives them something to believe in.</p>
        <div className="whisper-line whisper-line-bottom" />
      </section>

      {/* CTA */}
      <section style={{
        background: 'linear-gradient(160deg,#0d0a06,#181410 40%,#0a0806)',
        minHeight: '50vh', display: 'flex', flexDirection: 'column',
        justifyContent: 'center', alignItems: 'center',
        padding: '100px 44px', textAlign: 'center', position: 'relative', overflow: 'hidden',
      }}>
        <div className="grain" />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(32px,5vw,64px)', fontWeight: 900,
            letterSpacing: '-.04em', lineHeight: .92, color: 'var(--fg)', marginBottom: 20,
          }}>
            Ready to build<br /><em style={{ color: 'var(--g)' }}>something real?</em>
          </h2>
          <p style={{ fontSize: 15, fontWeight: 300, color: 'rgba(244,240,234,.42)', marginBottom: 44, lineHeight: 1.65, maxWidth: 480, margin: '0 auto 44px' }}>
            Web3 founder who needs traction. Product team planning a launch. A firm that needs a marketer who actually understands crypto.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/connect" className="btn-outline">Let&apos;s Talk</Link>
            <Link href="/work" className="btn-ghost">See the Work</Link>
          </div>
        </div>
      </section>
    </>
  )
}
