import Link from 'next/link'

const experience = [
  {
    role: 'Founder & GTM Lead',
    company: 'Ri-Mark',
    period: '2022 – 2026',
    desc: 'Founded and grew a Web3 marketing agency to ~$200K revenue over two years. Built GTM systems for Web3 founders, grew client X accounts (30K→120K in 90 days, 50K→150K+), and ran community and content operations. No paid acquisition.',
  },
  {
    role: 'Chief Marketing Officer',
    company: 'Nirvana Academy',
    period: '2023 – Present',
    desc: 'CMO at one of the most active Web3 education platforms. Leading brand, growth, community, and content. Started selling out events through direct outreach; now running the full marketing operation.',
  },
  {
    role: 'Founder',
    company: 'Myndzprint',
    period: '2026 – Present',
    desc: 'Building an AI minds platform that lets you have conversations with any thinker: historical figures, domain experts, or yourself. Doing the product, the GTM, and the community simultaneously.',
  },
  {
    role: 'Founder',
    company: 'Raxus',
    period: '2024 – Present',
    desc: 'Building a real estate product for the Nigerian market. Early stage. The problem is clear; the product is in motion.',
  },
  {
    role: 'Product Marketing Lead',
    company: 'Decane Wallet',
    period: '2025 – Present',
    desc: 'Full GTM architecture for a non-custodial Web3 wallet. Brand strategy, pre-launch sprint, trader outreach playbook, and launch execution. Not the founder, but I ship like one.',
  },
  {
    role: 'Content Creator',
    company: 'Dubai / UAE',
    period: '2023 – 2024',
    desc: 'Built and monetized a content presence in the Dubai creator economy. Developed organic growth playbooks that carried back into Web3 work.',
  },
  {
    role: 'Writer & Analyst',
    company: 'Cryptonary',
    period: '2021 – 2022',
    desc: 'Covered DeFi, NFTs, and blockchain infrastructure. Built foundational understanding of the crypto ecosystem and how to communicate complex ideas simply.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section style={{
        padding: '100px 44px 52px',
        background: 'linear-gradient(160deg,#0d0a06,#141008 40%,#0a0806)',
        position: 'relative', overflow: 'hidden', borderBottom: '1px solid rgba(244,240,234,.06)',
      }}>
        <div className="grain" />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 20% 60%,rgba(200,168,130,.06),transparent 55%)' }} />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--g)', marginBottom: 20 }}>Chapter 05 / The Person</div>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(44px,7vw,96px)', fontWeight: 900, lineHeight: .88,
            letterSpacing: '-.04em', color: 'var(--fg)', marginBottom: 28,
          }}>
            Amona<br /><em style={{ color: 'var(--g)', fontStyle: 'italic' }}>Ayoola.</em>
          </h1>
          <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.68, color: 'rgba(244,240,234,.5)', maxWidth: 560 }}>
            CMO at Nirvana Academy. Builder and product marketer. I run marketing, build products, and write about what I learn doing both.
          </p>
        </div>
      </section>

      {/* BIO + STATS */}
      <section style={{
        background: 'linear-gradient(150deg,#0f0d09,#1a1610 45%,#0a0806)',
        padding: '60px 44px', position: 'relative', overflow: 'hidden',
      }}>
        <div className="grain" />
        <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center', position: 'relative', zIndex: 2 }}>
          {/* Left: photo */}
          <div style={{ position: 'relative', maxWidth: 440 }}>
            <div style={{ position: 'absolute', inset: -1, border: '1px solid var(--g)', opacity: .2, transform: 'translate(8px,8px)', pointerEvents: 'none' }} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/about-photo.jpg" alt="Amona Ayoola" style={{ width: '100%', display: 'block', objectFit: 'cover', aspectRatio: '3/4' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(10,8,6,.65) 0%,transparent 45%)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: 24, left: 24 }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: 'var(--fg)', letterSpacing: '-.02em' }}>Amona Ayoola</div>
              <div style={{ fontSize: 11, color: 'var(--g)', letterSpacing: '.1em', textTransform: 'uppercase', marginTop: 4 }}>CMO, Nirvana Academy · Builder · Writer</div>
            </div>
          </div>

          {/* Right: bio + stats */}
          <div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(26px,3.5vw,48px)', fontWeight: 700,
              letterSpacing: '-.03em', lineHeight: 1.02, marginBottom: 26, color: 'var(--fg)',
            }}>
              CMO. Founder.<br /><em style={{ fontStyle: 'italic', color: 'var(--g)' }}>Builder.</em>
            </h2>
            <p style={{ fontSize: 15, fontWeight: 300, lineHeight: 1.8, color: 'rgba(244,240,234,.48)', marginBottom: 14 }}>
              I&apos;m Amona Ayoola. CMO at Nirvana Academy, founder, and writer. Six years inside Web3: running marketing at scale, building products from scratch, and writing about what actually happens behind the scenes.
            </p>
            <p style={{ fontSize: 15, fontWeight: 300, lineHeight: 1.8, color: 'rgba(244,240,234,.48)', marginBottom: 14 }}>
              Currently building <strong style={{ color: 'var(--fg)', fontWeight: 500 }}>Myndzprint</strong> (AI minds platform) and <strong style={{ color: 'var(--fg)', fontWeight: 500 }}>Raxus</strong> (real estate, Nigeria). Leading GTM for <strong style={{ color: 'var(--fg)', fontWeight: 500 }}>Decane Wallet</strong>. I write about the decisions and the failures. Not the highlight reel.
            </p>
            <div style={{ marginTop: 26 }}>
              {/* Testimonial row */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 16px', border: '1px solid rgba(244,240,234,.07)', background: 'rgba(255,255,255,.02)', marginBottom: 24 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/testimonial-photo.jpg" alt="" style={{ width: 68, height: 68, objectFit: 'cover', objectPosition: 'center 20%', borderRadius: '50%', border: '1px solid rgba(200,168,130,.3)', flexShrink: 0 }} />
                <p style={{ fontSize: 13, fontWeight: 300, color: 'rgba(244,240,234,.38)', fontStyle: 'italic', lineHeight: 1.5 }}>
                  &ldquo;Amona doesn&apos;t just talk strategy. He executes. <strong style={{ color: 'var(--g)', fontStyle: 'normal', fontWeight: 500 }}>Results speak.</strong>&rdquo;
                </p>
              </div>
            </div>
            <div style={{ marginTop: 8 }}>
              <Link href="/connect" className="btn-primary">Work Together</Link>
            </div>
          </div>

          {/* Right: stats */}
          <div>
            <div style={{ marginBottom: 24 }}>
              {[
                { label: 'Revenue at Ri-Mark', val: '~$200K' },
                { label: 'X Growth (90 days)', val: '30K → 120K' },
                { label: 'Events sold out', val: '2 (zero ad spend)' },
                { label: 'Prospects personally outreached', val: '1,000+' },
                { label: 'Years in Web3', val: '6' },
              ].map((s, i) => (
                <div key={s.label} style={{
                  padding: '13px 0', borderBottom: '1px solid rgba(244,240,234,.07)',
                  borderTop: i === 0 ? '1px solid rgba(244,240,234,.07)' : 'none',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                }}>
                  <div style={{ fontSize: 12, color: 'rgba(244,240,234,.28)' }}>{s.label}</div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 15, fontWeight: 700, color: 'var(--fg)' }}>{s.val}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHISPER */}
      <section className="whisper">
        <div className="whisper-line whisper-line-top" />
        <p>Most people separate building from marketing. I never learned how to do that.</p>
        <div className="whisper-line whisper-line-bottom" />
      </section>

      {/* EXPERIENCE */}
      <section style={{
        background: 'linear-gradient(150deg,#0f0d09,#1a1610 45%,#0a0806)',
        padding: '52px 44px 80px', position: 'relative', overflow: 'hidden',
      }}>
        <div className="grain" />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-tag">
            <div className="section-tag-line" />
            <div className="section-tag-text">Chapter 05.5 / Experience</div>
          </div>
          {/* Desktop: full grid */}
          <div className="exp-grid-full" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
            {experience.map((e, i) => (
              <div key={e.company + i} style={{
                padding: '32px 28px',
                border: '1px solid rgba(244,240,234,.07)',
                background: 'rgba(14,10,7,.6)',
                position: 'relative',
              }}>
                <div style={{ width: '100%', height: 1, background: 'linear-gradient(to right,var(--g),transparent)', position: 'absolute', top: 0, left: 0, opacity: .4 }} />
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: 'var(--fg)', marginBottom: 4 }}>{e.company}</div>
                <div style={{ fontSize: 10, color: 'var(--g)', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: 6 }}>{e.role}</div>
                <div style={{ fontSize: 10, color: 'rgba(244,240,234,.28)', letterSpacing: '.04em', marginBottom: 16 }}>{e.period}</div>
                <div style={{ fontSize: 13, fontWeight: 300, lineHeight: 1.75, color: 'rgba(244,240,234,.44)' }}>{e.desc}</div>
              </div>
            ))}
          </div>

          {/* Mobile: condensed list with Read More */}
          <div className="exp-grid-mobile" style={{ display: 'none' }}>
            {experience.map((e, i) => (
              <div key={e.company + i} style={{
                padding: '18px 0',
                borderBottom: '1px solid rgba(244,240,234,.07)',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12,
              }}>
                <div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 700, color: 'var(--fg)', marginBottom: 2 }}>{e.company}</div>
                  <div style={{ fontSize: 10, color: 'var(--g)', letterSpacing: '.08em', textTransform: 'uppercase' }}>{e.role}</div>
                  <div style={{ fontSize: 10, color: 'rgba(244,240,234,.28)', marginTop: 2 }}>{e.period}</div>
                </div>
              </div>
            ))}
            <div style={{ marginTop: 24 }}>
              <Link href="/about/experience" style={{ fontSize: 11, fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--g)', textDecoration: 'none' }}>
                Full Experience →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
